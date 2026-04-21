#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");
const https = require("https");

const DEFAULT_CONFIG_PATH = path.resolve(__dirname, "../../src/amplifyconfiguration.json");
const DEFAULT_SEED_PATH = path.resolve(__dirname, "./satellite_seed.json");

const GET_SATELLITE_TOPOLOGY_QUERY = /* GraphQL */ `
  query GetSatelliteTopology($id: ID!) {
    getSatelliteTopology(id: $id) {
      id
    }
  }
`;

const CREATE_SATELLITE_TOPOLOGY_MUTATION = /* GraphQL */ `
  mutation CreateSatelliteTopology($input: CreateSatelliteTopologyInput!) {
    createSatelliteTopology(input: $input) {
      id
      type
      name
      description
      satelliteTopologySatelliteTopologiesId
    }
  }
`;

function parseArgs(argv) {
  const args = {
    dryRun: false,
    seedPath: DEFAULT_SEED_PATH,
    configPath: DEFAULT_CONFIG_PATH,
  };

  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--seed" && argv[i + 1]) args.seedPath = path.resolve(argv[i + 1]);
    else if (a === "--config" && argv[i + 1]) args.configPath = path.resolve(argv[i + 1]);
    else if (a === "--help" || a === "-h") args.help = true;
  }

  return args;
}

function loadAmplifyConfig(configPath) {
  const raw = fs.readFileSync(configPath, "utf8");
  const cfg = JSON.parse(raw);

  const endpoint = process.env.AWS_APPSYNC_GRAPHQL_ENDPOINT || cfg.aws_appsync_graphqlEndpoint;
  const apiKey = process.env.AWS_APPSYNC_API_KEY || cfg.aws_appsync_apiKey;

  if (!endpoint) {
    throw new Error(
      `Missing AppSync endpoint. Set aws_appsync_graphqlEndpoint in ${configPath} or env AWS_APPSYNC_GRAPHQL_ENDPOINT.`
    );
  }
  if (!apiKey) {
    throw new Error(`Missing AppSync api key. Set aws_appsync_apiKey in ${configPath} or env AWS_APPSYNC_API_KEY.`);
  }

  return { endpoint, apiKey };
}

async function graphqlRequest({ endpoint, apiKey }, query, variables) {
  return new Promise((resolve, reject) => {
    try {
      const url = new URL(endpoint);
      const postData = JSON.stringify({ query, variables });

      const req = https.request(
        {
          hostname: url.hostname,
          path: url.pathname,
          method: "POST",
          headers: {
            "content-type": "application/json",
            "content-length": Buffer.byteLength(postData),
            "x-api-key": apiKey,
          },
          timeout: 30000,
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            try {
              if (res.statusCode !== 200) {
                reject(new Error(`GraphQL request failed: status=${res.statusCode} body=${data.slice(0, 500)}`));
                return;
              }
              const parsed = JSON.parse(data);
              if (parsed.errors && parsed.errors.length) {
                reject(new Error(`GraphQL errors: ${JSON.stringify(parsed.errors)}`));
                return;
              }
              resolve(parsed.data);
            } catch (e) {
              reject(new Error(`Failed parsing GraphQL response: ${e.message}. Body=${data.slice(0, 500)}`));
            }
          });
        }
      );

      req.on("error", (err) => reject(err));
      req.on("timeout", () => {
        req.destroy();
        reject(new Error("GraphQL request timeout"));
      });

      req.write(postData);
      req.end();
    } catch (e) {
      reject(e);
    }
  });
}

async function existsSatelliteTopology(client, id) {
  const data = await graphqlRequest(client, GET_SATELLITE_TOPOLOGY_QUERY, { id });
  return Boolean(data && data.getSatelliteTopology);
}

async function createSatelliteTopology(client, input) {
  const data = await graphqlRequest(client, CREATE_SATELLITE_TOPOLOGY_MUTATION, { input });
  return data.createSatelliteTopology;
}

function loadSeed(seedPath) {
  const raw = fs.readFileSync(seedPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || parsed.success !== true || !parsed.satellites) {
    throw new Error(`Unexpected seed format in ${seedPath}. Expected { success: true, satellites: {...} }`);
  }
  return parsed;
}

function buildNodes(seed) {
  /** @type {{ id: string, type: string, name: string, description: string, parentId?: string }[]} */
  const satellites = [];
  /** @type {{ id: string, type: string, name: string, description: string, parentId: string }[]} */
  const bands = [];

  for (const [satelliteId, sat] of Object.entries(seed.satellites)) {
    satellites.push({
      id: satelliteId,
      type: "SATELITE",
      name: sat.name,
      description: sat.display_name,
    });

    const satBands = Array.isArray(sat.bands) ? sat.bands : [];
    for (const band of satBands) {
      const bandId = band.id;
      bands.push({
        id: `${satelliteId}#${bandId}`,
        type: "BANDS",
        name: bandId,
        description: band.tooltip_title,
        parentId: satelliteId,
      });
    }
  }

  return { satellites, bands };
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    console.log(
      `
Seed SatelliteTopology from satellite_seed.json into AppSync.

Usage:
  node _INCEPTION/_SEED/seedSatelliteTopology.js [--dry-run] [--seed <path>] [--config <path>]

Environment overrides:
  AWS_APPSYNC_GRAPHQL_ENDPOINT
  AWS_APPSYNC_API_KEY
`.trim()
    );
    process.exit(0);
  }

  const client = loadAmplifyConfig(args.configPath);
  const seed = loadSeed(args.seedPath);
  const { satellites, bands } = buildNodes(seed);

  console.log(`Loaded seed: satellites=${satellites.length} bands=${bands.length}`);
  console.log(`Target AppSync: ${client.endpoint}`);
  if (args.dryRun) console.log("Dry-run enabled: no writes will be performed.");

  let created = 0;
  let skipped = 0;
  let createdSatellites = 0;
  let skippedSatellites = 0;
  let createdBands = 0;
  let skippedBands = 0;

  async function upsert(node, kind) {
    const present = await existsSatelliteTopology(client, node.id);
    if (present) {
      skipped += 1;
      if (kind === "satellite") skippedSatellites += 1;
      else skippedBands += 1;
      return;
    }

    if (args.dryRun) {
      created += 1;
      if (kind === "satellite") createdSatellites += 1;
      else createdBands += 1;
      return;
    }

    const input = {
      id: node.id,
      type: node.type,
      name: node.name,
      description: node.description,
    };
    if (node.parentId) {
      input.satelliteTopologySatelliteTopologiesId = node.parentId;
    }

    await createSatelliteTopology(client, input);
    created += 1;
    if (kind === "satellite") createdSatellites += 1;
    else createdBands += 1;
  }

  // Parents first
  for (let i = 0; i < satellites.length; i += 1) {
    const s = satellites[i];
    if (i % 5 === 0) console.log(`Seeding satellites ${i}/${satellites.length}...`);
    await upsert(s, "satellite");
  }

  // Children second
  for (let i = 0; i < bands.length; i += 1) {
    const b = bands[i];
    if (i % 25 === 0) console.log(`Seeding bands ${i}/${bands.length}...`);
    await upsert(b, "band");
  }

  console.log(
    `Done. created=${created} skipped=${skipped} (satellites: +${createdSatellites}/~${skippedSatellites}, bands: +${createdBands}/~${skippedBands})`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

