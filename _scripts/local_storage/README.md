# Scripts locales (producción)

## Backfill DataStore metadata en DynamoDB

Este script inyecta metadatos requeridos por Amplify DataStore/Sync en ítems existentes:

- `_version`: `1` (Number)
- `_lastChangedAt`: timestamp en ms (Number)
- `_deleted`: por defecto **no se toca**; opcionalmente se puede setear a `false` si falta

### Requisitos

- Node.js 18+ (recomendado 20+)
- Credenciales AWS vía `AWS_PROFILE` (según tu flujo)

### Instalación

Desde la raíz del repo:

```bash
cd _scripts/local_storage
npm install
```

### Descubrimiento de tablas

Por defecto, el script lee el schema en:

- `amplify/backend/api/tsbeoraculoapi/schema.graphql`

y extrae **todos** los `type X @model` para seleccionar tablas cuyo nombre contenga el nombre del modelo.

Si tus tablas no siguen ese patrón (o quieres ser explícito), usa `--tables`.

### Verificación de Streams (triggers)

Antes de hacer cambios, el script:
- llama `DescribeTable` para ver si DynamoDB Streams está habilitado
- si hay Stream ARN, consulta Lambda `ListEventSourceMappings` para detectar consumers

Si quieres que falle si detecta consumers activos, agrega `--require-no-stream-consumers`.

### Dry-run (recomendado primero)

```bash
AWS_PROFILE=prod AWS_REGION=us-east-1 \
npm run backfill:datastore -- --dry-run --verbose
```

### Ejecutar (apply)

Ejecuta con baja concurrencia primero, y sube si todo va bien:

```bash
AWS_PROFILE=prod AWS_REGION=us-east-1 \
npm run backfill:datastore -- --apply --concurrency 5 --page-size 100
```

### Parámetros útiles

- `--tables "Feature-xxx-prod,UnitOfMeasure-xxx-prod"`: objetivo explícito
- `--schema "./amplify/backend/api/tsbeoraculoapi/schema.graphql"`: ruta al schema si no corres desde `/_scripts/local_storage`
- `--models "Feature,UnitOfMeasure"`: limita a un subconjunto de modelos
- `--env-suffix "-prod"`: filtra tablas por sufijo
- `--timestamp-ms 1713081600000`: fija `_lastChangedAt`
- `--limit-pages 3`: pruebas rápidas
- `--set-deleted-false`: setea `_deleted=false` solo si falta (idempotente)

### Notas operativas

- El update es **idempotente** (usa `if_not_exists`), así que re-ejecutar es seguro.
- Aun así, si tus tablas tienen Streams habilitados y consumers, los updates pueden disparar procesamiento downstream. En ese caso coordina una ventana o pausa los consumers.

