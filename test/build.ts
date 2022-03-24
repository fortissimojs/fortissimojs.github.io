const fs = require("fs");

fs.writeFileSync(
  __dirname + "/../index.js",
  fs
    .readFileSync(__dirname + "/../index.node.js")
    .toString()
    .replace("module.exports", "const F")
    .split("module.exports")
    .join("F"),
);
