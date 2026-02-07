# audioToFeatures Lambda test

Before running: edit `event.json` and replace `YOUR_TEMPLATE_ID`, `YOUR_GEMINI_API_KEY`, and optionally set `treeIds` to specific tree IDs.

**Run from project root:**
```bash
./be_amplify_lambda_functions/invoke_audioToFeatures.sh
```

**Or from this folder:**
```bash
cd be_amplify_lambda_functions && ./invoke_audioToFeatures.sh
```

Override function name, region, or profile via env: `FUNCTION_NAME`, `AWS_REGION`, `AWS_PROFILE` (e.g. `AWS_PROFILE=879381245127_AdministratorAccess ./invoke_audioToFeatures.sh`).
