const fs = require("fs");
const path = require("path");

const folders = [
  "backend",
  "docs",
  "knowledge",
  "prompts",
  "tests",
  "scripts"
];

const backendFiles = [
  "Main.gs",
  "Router.gs",
  "Config.gs",
  "Auth.gs",
  "Response.gs",
  "Logger.gs",
  "Drive.gs",
  "Docs.gs",
  "Sheets.gs",
  "Gmail.gs",
  "Calendar.gs",
  "Forms.gs",
  "Permissions.gs",
  "Validation.gs",
  "Helpers.gs",
  "Constants.gs",
  "Test.gs",
  "appsscript.json"
];

const rootFiles = {
  "README.md": "# TK Pro Enterprise OS\n",
  "CHANGELOG.md": "# Changelog\n",
  ".gitignore": `node_modules/
.env
`,
  "LICENSE": "",
  "package.json": JSON.stringify({
    name: "tk-pro-enterprise-os",
    version: "0.1.0",
    private: true
  }, null, 2)
};

console.log("Creating folders...");

folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
});

console.log("Creating backend files...");

backendFiles.forEach(file => {
  const filePath = path.join("backend", file);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log("✓", filePath);
  }
});

console.log("Creating root files...");

Object.entries(rootFiles).forEach(([file, content]) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content);
    console.log("✓", file);
  }
});

console.log("\nBootstrap Complete!");