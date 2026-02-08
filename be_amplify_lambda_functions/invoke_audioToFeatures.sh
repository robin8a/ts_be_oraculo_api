#!/usr/bin/env bash
# Invoke the deployed audioToFeatures Lambda with event.json from this directory.
# Set event.json body (templateId, geminiApiKey, treeIds) before running.
# Default profile: 879381245127_AdministratorAccess. Overrides: FUNCTION_NAME, AWS_REGION, AWS_PROFILE.

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
EVENT_FILE="$SCRIPT_DIR/event.json"
RESPONSE_FILE="$SCRIPT_DIR/response.json"

FUNCTION_NAME="${FUNCTION_NAME:-audioToFeatures-dev}"
AWS_REGION="${AWS_REGION:-us-east-1}"
AWS_PROFILE="${AWS_PROFILE:-879381245127_AdministratorAccess}"
PROFILE_ARGS=(--profile "$AWS_PROFILE")

# Base64-encode payload so the Lambda Invoke request body is valid (avoids InvalidRequestContentException / invalid UTF-8)
PAYLOAD_B64=$(base64 < "$EVENT_FILE" | tr -d '\n')

aws lambda invoke \
  --function-name "$FUNCTION_NAME" \
  --payload "$PAYLOAD_B64" \
  "${PROFILE_ARGS[@]}" \
  --region "$AWS_REGION" \
  "$RESPONSE_FILE"

echo "--- Lambda response (response.json) ---"
if command -v jq &>/dev/null; then
  jq . "$RESPONSE_FILE"
else
  cat "$RESPONSE_FILE"
fi
