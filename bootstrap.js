const fs = require("fs");
const path = require("path");

const folders = [
  "backend",
  "worker",
  "docs",
  "knowledge",
  "prompts",
  "tests",
  "scripts"
];

const backendFiles = [
  // Core
  "Main.gs",
  "Router.gs",
  "ServiceRegistry.gs",

  // Configuration
  "Config.gs",
  "Constants.gs",

  // Security
  "Auth.gs",
  "Permissions.gs",
  "Validation.gs",

  // Infrastructure
  "Response.gs",
  "Logger.gs",
  "Helpers.gs",

  // Services
  "Drive.gs",
  "Docs.gs",
  "Sheets.gs",
  "Gmail.gs",
  "Calendar.gs",
  "Forms.gs",

  // Testing
  "Test.gs",

  // Manifest
  "appsscript.json"
];

const workerFolders = [
  "src"
];

const workerFiles = {
  "package.json": "",
  "wrangler.jsonc": "",
  ".gitignore": `.wrangler/
node_modules/
`,
  "src/index.js": ""
};

const rootFiles = {
  "README.md": "# TK Pro Enterprise OS\n",
  "CHANGELOG.md": "# Changelog\n",
  ".gitignore": `node_modules/
.env
`,
  "LICENSE": "",
  "package.json": JSON.stringify(
    {
      name: "tk-pro-enterprise-os",
      version: "0.2.0",
      private: true
    },
    null,
    2
  )
};

console.log("Creating folders...");

folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
  console.log("✓", folder);
});

console.log("Creating Worker folders...");

workerFolders.forEach(folder => {
  const folderPath = path.join("worker", folder);
  fs.mkdirSync(folderPath, { recursive: true });
  console.log("✓", folderPath);
});

console.log("Creating backend files...");

backendFiles.forEach(file => {
  const filePath = path.join("backend", file);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log("✓", filePath);
  }
});

console.log("Creating Worker files...");

Object.entries(workerFiles).forEach(([file, content]) => {
  const filePath = path.join("worker", file);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
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

console.log("\n🚀 TK Pro Enterprise OS Bootstrap Complete!");