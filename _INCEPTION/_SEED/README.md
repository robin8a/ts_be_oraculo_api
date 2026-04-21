# _INCEPTION/_SEED

This folder contains seed assets and scripts used to bootstrap data into the Amplify/AppSync API.

## Seed `SatelliteTopology`

- **Script**: `_INCEPTION/_SEED/seedSatelliteTopology.js`
- **Input file**: `_INCEPTION/_SEED/satellite_seed.json`
- **Target model**: `SatelliteTopology` (AppSync GraphQL, API key auth)

### What it creates

The script loads a **parent → child** hierarchy:

- **Parent nodes**: satellites
- **Child nodes**: bands (one node per band, attached to its satellite)

### Field mapping

For each satellite:

- **id**: satellite key (e.g. `LC08`)
- **type**: `SATELITE`
- **name**: `satellite.name` (e.g. `LANDSAT_8`)
- **description**: `satellite.display_name` (e.g. `Landsat 8`)

For each band:

- **id**: `${satelliteId}#${bandId}` (e.g. `LC08#B4`)
- **type**: `BANDS`
- **name**: `band.id` (e.g. `B4`)
- **description**: `band.tooltip_title` (e.g. `B4 - Red`)
- **parent link**: `satelliteTopologySatelliteTopologiesId = <satelliteId>`

### Idempotency (safe re-runs)

The script is **idempotent**:

- It checks `getSatelliteTopology(id)` before creating.
- Existing nodes are **skipped**.
- Re-running the script will not duplicate items.

### How it authenticates

By default it reads:

- AppSync endpoint + API key from `src/amplifyconfiguration.json`

You can override via environment variables:

- `AWS_APPSYNC_GRAPHQL_ENDPOINT`
- `AWS_APPSYNC_API_KEY`

### Run

Using npm scripts (recommended):

```bash
npm run seed:satellite-topology:dry
npm run seed:satellite-topology
```

Or directly with node:

```bash
node _INCEPTION/_SEED/seedSatelliteTopology.js --dry-run
node _INCEPTION/_SEED/seedSatelliteTopology.js
```

### Options

- **`--dry-run`**: prints what would be created (no writes)
- **`--seed <path>`**: override seed file path (defaults to `./satellite_seed.json`)
- **`--config <path>`**: override Amplify config path (defaults to `../../src/amplifyconfiguration.json`)
- **`--help` / `-h`**: show usage

