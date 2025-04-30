# Replace this with your actual login
LOGIN="xrepcim00"
ZIP_NAME="${LOGIN}.zip"

# Clean up any previous archive
rm -f "$ZIP_NAME"

# Create the ZIP archive with the required structure
zip -r "$ZIP_NAME" \
    report.md \
    cypress.config.js \
    cypress/ \
    -x "*.DS_Store" "*.log" "node_modules/*" "cypress/videos/*" "cypress/screenshots/*"

echo "Archive created: $ZIP_NAME"