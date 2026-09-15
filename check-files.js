const fs = require("fs");

const requiredFiles = ["index.html", "style.css", "script.js"];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`FAIL: ${file} does not exist`);
    process.exit(1);
  }
}

console.log("PASS: all required files exist");
