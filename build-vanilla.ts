const fs = require("fs");

fs.writeFileSync(
  __dirname + "/index.vanilla.js",
  fs
    .readFileSync(__dirname + "/index.js")
    .toString()
    .replace("module.exports", "const F")
    .split("module.exports")
    .join("F"),
);
