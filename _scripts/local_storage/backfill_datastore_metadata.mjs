import { DynamoDBClient, DescribeTableCommand, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda";
import { readFile } from "node:fs/promises";
import path from "node:path";

function parseArgs(argv) {
  const args = {
    region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION,
    profile: process.env.AWS_PROFILE,
    schemaPath: path.resolve(process.cwd(), "../../amplify/backend/api/tsbeoraculoapi/schema.graphql"),
    models: null,
    tables: null,
    tablePrefix: null,
    envSuffix: null,
    dryRun: true,
    concurrency: 10,
    pageSize: 100,
    limitPages: null,
    timestampMs: Date.now(),
    setDeletedFalse: false,
    requireNoStreamsConsumers: false,
    verbose: false,
  };

  const raw = argv.slice(2);
  for (let i = 0; i < raw.length; i++) {
    const a = raw[i];
    const next = raw[i + 1];
    if (a === "--region" && next) {
      args.region = next;
      i++;
    } else if (a === "--schema" && next) {
      args.schemaPath = next;
      i++;
    } else if (a === "--models" && next) {
      args.models = next.split(",").map((s) => s.trim()).filter(Boolean);
      i++;
    } else if (a === "--all-models") {
      args.models = null;
    } else if (a === "--tables" && next) {
      args.tables = next.split(",").map((s) => s.trim()).filter(Boolean);
      i++;
    } else if (a === "--table-prefix" && next) {
      args.tablePrefix = next;
      i++;
    } else if (a === "--env-suffix" && next) {
      args.envSuffix = next;
      i++;
    } else if (a === "--dry-run") {
      args.dryRun = true;
    } else if (a === "--apply") {
      args.dryRun = false;
    } else if (a === "--concurrency" && next) {
      args.concurrency = Number(next);
      i++;
    } else if (a === "--page-size" && next) {
      args.pageSize = Number(next);
      i++;
    } else if (a === "--limit-pages" && next) {
      args.limitPages = Number(next);
      i++;
    } else if (a === "--timestamp-ms" && next) {
      args.timestampMs = Number(next);
      i++;
    } else if (a === "--set-deleted-false") {
      args.setDeletedFalse = true;
    } else if (a === "--require-no-stream-consumers") {
      args.requireNoStreamsConsumers = true;
    } else if (a === "--verbose") {
      args.verbose = true;
    } else if (a === "--help" || a === "-h") {
      printHelpAndExit(0);
    } else {
      console.error(`Arg desconocido: ${a}`);
      printHelpAndExit(2);
    }
  }

  if (!args.region) {
    console.error("Falta región. Define AWS_REGION o usa --region.");
    process.exit(2);
  }
  if (!Number.isFinite(args.concurrency) || args.concurrency <= 0) args.concurrency = 10;
  if (!Number.isFinite(args.pageSize) || args.pageSize <= 0) args.pageSize = 100;
  if (!Number.isFinite(args.timestampMs) || args.timestampMs <= 0) args.timestampMs = Date.now();
  if (args.limitPages != null && (!Number.isFinite(args.limitPages) || args.limitPages <= 0)) args.limitPages = null;

  return args;
}

function printHelpAndExit(code) {
  console.log(`
Backfill de metadatos DataStore (_version, _lastChangedAt, _deleted) en DynamoDB.

Uso:
  node backfill_datastore_metadata.mjs [--dry-run|--apply] [opciones]

Selección de tablas (elige 1):
  --tables "Feature-xxx-dev,UnitOfMeasure-xxx-dev"
  --all-models                                 (default: usa schema.graphql)
  --schema "./amplify/.../schema.graphql"       (ruta al schema para --all-models)
  --models "Feature,UnitOfMeasure"              (descubre por substring; override a --all-models)
  --table-prefix "Feature-"                     (opcional, para filtrar)

Opciones:
  --region us-east-1
  --env-suffix "-prod"                          (opcional, filtro extra por sufijo)
  --timestamp-ms 1713081600000                  (default: Date.now())
  --page-size 100                               (default: 100)
  --concurrency 10                              (default: 10)
  --limit-pages 5                               (para pruebas)
  --set-deleted-false                           (si _deleted existe, lo setea a false)
  --require-no-stream-consumers                 (falla si detecta consumers de stream)
  --verbose

Seguridad:
  --dry-run (default) no escribe. Usa --apply para ejecutar updates.
`);
  process.exit(code);
}

function extractModelNamesFromSchema(schemaText) {
  // Captura: type Name @model o type Name @model(...)
  // Ignora comments y no intenta parsear directives complejas: solo busca el patrón.
  const re = /^\s*type\s+([A-Za-z_][A-Za-z0-9_]*)\s+@model\b/mg;
  const out = new Set();
  let m;
  while ((m = re.exec(schemaText)) !== null) {
    out.add(m[1]);
  }
  return [...out].sort();
}

async function listAllTables(ddb) {
  const names = [];
  let ExclusiveStartTableName = undefined;
  do {
    const out = await ddb.send(new ListTablesCommand({ ExclusiveStartTableName, Limit: 100 }));
    if (out.TableNames?.length) names.push(...out.TableNames);
    ExclusiveStartTableName = out.LastEvaluatedTableName;
  } while (ExclusiveStartTableName);
  return names;
}

function pickCandidateTables(allTableNames, { models, tablePrefix, envSuffix }) {
  const modelMatches = (name) => models.some((m) => name.includes(m));
  return allTableNames
    .filter((t) => (tablePrefix ? t.startsWith(tablePrefix) : true))
    .filter((t) => modelMatches(t))
    .filter((t) => (envSuffix ? t.endsWith(envSuffix) : true))
    .sort();
}

function createLimiter(concurrency) {
  let active = 0;
  const queue = [];

  const runNext = () => {
    if (active >= concurrency) return;
    const item = queue.shift();
    if (!item) return;
    active++;
    Promise.resolve()
      .then(item.fn)
      .then(item.resolve, item.reject)
      .finally(() => {
        active--;
        runNext();
      });
  };

  return (fn) =>
    new Promise((resolve, reject) => {
      queue.push({ fn, resolve, reject });
      runNext();
    });
}

async function describeAndValidateTable(ddb, tableName) {
  const out = await ddb.send(new DescribeTableCommand({ TableName: tableName }));
  const table = out.Table;
  if (!table) throw new Error(`DescribeTable sin Table para ${tableName}`);

  const keys = table.KeySchema || [];
  const hashKey = keys.find((k) => k.KeyType === "HASH")?.AttributeName;
  const rangeKey = keys.find((k) => k.KeyType === "RANGE")?.AttributeName;
  if (hashKey !== "id" || rangeKey) {
    throw new Error(
      `Tabla ${tableName} no coincide con esperado (hashKey=id, sin sortKey). Encontrado: hash=${hashKey}, range=${rangeKey || "NONE"}`
    );
  }

  return {
    tableName,
    streamEnabled: !!table.StreamSpecification?.StreamEnabled,
    streamArn: table.LatestStreamArn,
    billingMode: table.BillingModeSummary?.BillingMode,
  };
}

async function checkStreamConsumers(lambda, streamArn) {
  if (!streamArn) return { hasConsumers: false, mappings: [] };
  const out = await lambda.send(new ListEventSourceMappingsCommand({ EventSourceArn: streamArn, MaxItems: 50 }));
  const mappings = out.EventSourceMappings || [];
  const active = mappings.filter((m) => m.State && m.State !== "Disabled");
  return { hasConsumers: active.length > 0, mappings };
}

function needsBackfill(item) {
  const hasVersion = Object.prototype.hasOwnProperty.call(item, "_version");
  const hasLca = Object.prototype.hasOwnProperty.call(item, "_lastChangedAt");
  return !hasVersion || !hasLca;
}

async function main() {
  const args = parseArgs(process.argv);

  if (!args.profile) {
    console.warn("Aviso: AWS_PROFILE no está definido. Si usas credenciales locales, define AWS_PROFILE=...");
  }
  if (args.dryRun) {
    console.log("Modo: DRY-RUN (no se escribirán cambios). Usa --apply para ejecutar.");
  } else {
    console.log("Modo: APPLY (se escribirán cambios).");
  }

  const ddb = new DynamoDBClient({ region: args.region });
  const doc = DynamoDBDocumentClient.from(ddb, {
    marshallOptions: { removeUndefinedValues: true, convertClassInstanceToMap: true },
  });
  const lambda = new LambdaClient({ region: args.region });

  let modelNames = args.models;
  if (!modelNames) {
    // Default: usa schemaPath (equivalente a --all-models)
    const schemaPathAbs = path.isAbsolute(args.schemaPath) ? args.schemaPath : path.resolve(process.cwd(), args.schemaPath);
    const schemaText = await readFile(schemaPathAbs, "utf8");
    modelNames = extractModelNamesFromSchema(schemaText);
    if (!modelNames.length) {
      console.error(`No se encontraron types @model en schema: ${schemaPathAbs}`);
      process.exit(2);
    }
    console.log(`Modelos @model detectados en schema (${modelNames.length}): ${modelNames.join(", ")}`);
  } else {
    console.log(`Modelos seleccionados (${modelNames.length}): ${modelNames.join(", ")}`);
  }

  let tables = args.tables;
  if (!tables) {
    const allNames = await listAllTables(ddb);
    tables = pickCandidateTables(allNames, {
      models: modelNames,
      tablePrefix: args.tablePrefix,
      envSuffix: args.envSuffix,
    });
  }

  if (!tables?.length) {
    console.error("No se encontraron tablas candidatas. Usa --tables explícito o ajusta --models/--table-prefix/--env-suffix.");
    process.exit(2);
  }

  console.log("Tablas objetivo:");
  for (const t of tables) console.log(`- ${t}`);

  // 1) Describe/validate y 2) streams/consumers
  const tableInfos = [];
  for (const t of tables) {
    const info = await describeAndValidateTable(ddb, t);
    let consumers = { hasConsumers: false, mappings: [] };
    if (info.streamEnabled && info.streamArn) {
      consumers = await checkStreamConsumers(lambda, info.streamArn);
    }

    tableInfos.push({ ...info, streamConsumers: consumers });

    if (info.streamEnabled) {
      console.log(`Streams: ${t} -> ENABLED`);
      if (consumers.hasConsumers) {
        console.log(`  Consumers detectados (EventSourceMappings): ${consumers.mappings.length}`);
        for (const m of consumers.mappings) {
          console.log(`  - UUID=${m.UUID} State=${m.State} FunctionArn=${m.FunctionArn}`);
        }
      } else {
        console.log("  Consumers: no detectados via Lambda EventSourceMappings");
      }
    } else {
      console.log(`Streams: ${t} -> disabled`);
    }
  }

  if (args.requireNoStreamsConsumers) {
    const violating = tableInfos.filter((ti) => ti.streamEnabled && ti.streamConsumers.hasConsumers);
    if (violating.length) {
      console.error("Abortando: se detectaron consumers activos de DynamoDB Streams y se pidió --require-no-stream-consumers.");
      process.exit(3);
    }
  }

  const limit = createLimiter(args.concurrency);
  const startedAt = Date.now();

  for (const ti of tableInfos) {
    const tableName = ti.tableName;
    const stats = {
      scanned: 0,
      wouldUpdate: 0,
      updated: 0,
      skipped: 0,
      errors: 0,
      pages: 0,
    };

    console.log(`\n=== Procesando tabla: ${tableName} ===`);
    let ExclusiveStartKey = undefined;
    while (true) {
      stats.pages++;
      if (args.limitPages != null && stats.pages > args.limitPages) {
        console.log(`LimitPages alcanzado (${args.limitPages}). Deteniendo tabla ${tableName}.`);
        break;
      }

      const scanOut = await doc.send(
        new ScanCommand({
          TableName: tableName,
          Limit: args.pageSize,
          ExclusiveStartKey,
          ProjectionExpression: "id, #v, #lca, #del",
          ExpressionAttributeNames: { "#v": "_version", "#lca": "_lastChangedAt", "#del": "_deleted" },
        })
      );

      const items = scanOut.Items || [];
      stats.scanned += items.length;

      const ops = items.map((item) =>
        limit(async () => {
          try {
            if (!needsBackfill(item)) {
              stats.skipped++;
              return;
            }

            stats.wouldUpdate++;
            if (args.dryRun) return;

            const names = { "#v": "_version", "#lca": "_lastChangedAt" };
            const values = { ":one": 1, ":ts": args.timestampMs };

            let updateExpr = "SET #v = if_not_exists(#v, :one), #lca = if_not_exists(#lca, :ts)";
            let condExpr = "attribute_not_exists(#v) OR attribute_not_exists(#lca)";

            if (args.setDeletedFalse) {
              names["#del"] = "_deleted";
              values[":false"] = false;
              updateExpr += ", #del = if_not_exists(#del, :false)";
              condExpr = `(${condExpr}) OR attribute_not_exists(#del)`;
            }

            await doc.send(
              new UpdateCommand({
                TableName: tableName,
                Key: { id: item.id },
                UpdateExpression: updateExpr,
                ConditionExpression: condExpr,
                ExpressionAttributeNames: names,
                ExpressionAttributeValues: values,
              })
            );
            stats.updated++;
          } catch (err) {
            // ConditionalCheckFailedException => ya estaba backfilleado (o carrera), lo contamos como skipped.
            const name = err?.name || err?.Code || err?.code;
            if (name === "ConditionalCheckFailedException") {
              stats.skipped++;
              return;
            }
            stats.errors++;
            if (args.verbose) {
              console.error(`Error item id=${item?.id} en tabla ${tableName}:`, err);
            }
          }
        })
      );

      await Promise.all(ops);

      ExclusiveStartKey = scanOut.LastEvaluatedKey;
      console.log(
        `página=${stats.pages} scanned=${stats.scanned} wouldUpdate=${stats.wouldUpdate} updated=${stats.updated} skipped=${stats.skipped} errors=${stats.errors}` +
          (ExclusiveStartKey ? ` lastKey=${JSON.stringify(ExclusiveStartKey)}` : " done")
      );

      if (!ExclusiveStartKey) break;
    }

    console.log(
      `Resumen tabla ${tableName}: scanned=${stats.scanned} wouldUpdate=${stats.wouldUpdate} updated=${stats.updated} skipped=${stats.skipped} errors=${stats.errors}`
    );
  }

  const elapsedMs = Date.now() - startedAt;
  console.log(`\nListo. elapsedMs=${elapsedMs}`);
}

main().catch((err) => {
  console.error("Fallo fatal:", err);
  process.exit(1);
});

