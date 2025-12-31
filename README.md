# TerraSacha BackEnd Oráculo API

## SSO Login

```sh
aws sso login --profile ts_terrasacha_admin_access
aws sso login --profile 879381245127_AdministratorAccess
```

## Amplify

```sh
~/.aws/credentials


amplify init --profile ts_terrasacha_admin_access
amplify init --profile 879381245127_AdministratorAccess

# Check current function URL configuration
aws lambda get-function-url-config \
    --function-name kobotoolboxProxy-dev \
    --profile 879381245127_AdministratorAccess

# Option 1: Using inline JSON (may have shell escaping issues)
aws lambda update-function-url-config \
    --function-name kobotoolboxProxy-dev \
    --cors '{"AllowOrigins":["*"],"AllowMethods":["POST","OPTIONS"],"AllowHeaders":["Content-Type","Authorization","X-Requested-With"],"MaxAge":86400}' \
    --profile 879381245127_AdministratorAccess

# Option 2: Using a JSON file (recommended if Option 1 fails)
# This fixes the malformed AllowHeaders and adds missing OPTIONS method
aws lambda update-function-url-config \
    --function-name kobotoolboxProxy-dev \
    --cors file://cors-config.json \
    --profile 879381245127_AdministratorAccess

# Option 2b: If Option 2 fails, try with lowercase headers
aws lambda update-function-url-config \
    --function-name kobotoolboxProxy-dev \
    --cors file://cors-config-lowercase.json \
    --profile 879381245127_AdministratorAccess

# Option 3: Without OPTIONS in AllowMethods (AWS handles OPTIONS automatically when CORS is configured)
# This fixes the "length less than or equal to 6" validation error
aws lambda update-function-url-config \
    --function-name kobotoolboxProxy-dev \
    --cors file://cors-config-no-options.json \
    --profile 879381245127_AdministratorAccess
```
