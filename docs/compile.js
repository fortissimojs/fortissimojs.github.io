const fs = require("fs");

const docs = require("./DOCS.js");
const noDocs = true;
fs.writeFileSync(__dirname + "/DOCS.json", JSON.stringify(docs, null, 2));
var output = [];

if (noDocs) {
  output.push("\r\n## Docs coming soon...");
} else {
  for (var i in docs) {
    var item = docs[i];

    var article = [`## ${item.name ? "F." + item.name : "Unknown"}\n`];
    item.future ? article.push(`### **NOT CURRENTLY IMPLEMENTED**\n`) : 0;

    item.tags
      ? article.push(
          `Tags: ` +
            (typeof item.tags === "object" ? item.tags : [item.tags])
              .map(i => {
                return `_${i[0].toUpperCase() + i.slice(1).toLowerCase()}_`;
              })
              .join(", ") +
            "\n",
        )
      : 0;

    item.not
      ? article.push(
          `**Not**: _${item.not.join ? item.not.join("_, _") : item.not}_\n`,
        )
      : 0;

    item.similar
      ? article.push(
          `**Similar:**: ` +
            (typeof item.similar === "object" ? item.similar : [item.similar])
              .map(i => {
                return `[F.${i}](#f${i.toLowerCase()})`;
              })
              .join(", ") +
            "\n",
        )
      : 0;

    article.push((item.desc || "Unknown") + "\n");

    article.push(
      `**Returns**: ${item.return ? "`" + item.return + "`" : "Unknown"}\n`,
    );

    if (item.usage) {
      article.push("### Usage\n");
      item.usage.forEach(i => article.push(i));
      article.push("");
    }

    if (item.args) {
      article.push("### Arguments\n");
      article.push("| Name | Type | Description | Default |");
      article.push("| ---- | ---- | ----------- | ------- |");
      var verbose = [];
      item.args.forEach(i => {
        if (i.verbose) {
          verbose.push({ name: i.name, content: i.default.join("\n") });
        }

        return article.push(
          `| _${i.name}_ | \`${i.type}\` | ${i.desc} | ${
            i.verbose ? "_See Below_" : displayValue(i.default)
          } |`,
        );
      });

      verbose.forEach(i =>
        article.push(
          `\n#### Argument _${i.name}_ Default Value\n\n` +
            "```js\n" +
            i.content +
            "\n```",
        ),
      );
      article.push("");
    }

    if (item.example) {
      article.push("### Example\n");
      article.push("```js");
      item.example.forEach(i => article.push(i));
      article.push("```");
    }

    output.push(article.join("\n"));
  }
}

fs.writeFileSync(
  __dirname + "/../README.md",
  fs.readFileSync(__dirname + "/main.md").toString() +
    "\n" +
    output.join("\n\n---\n\n"),
);

function displayValue(value, verbose) {
  if (value === null || value === undefined) {
    return "`null`";
  }

  if (value.constructor === Number || value.constructor === Boolean) {
    return "`" + value + "`";
  } else if (value.constructor === String) {
    if (value === "") {
      return '`""` (Empty String)';
    } else if (value === " ") {
      return '`" "` (Space)';
    } else if (value === "NaN") {
      return "`NaN`";
    } else if (value.startsWith("new ")) {
      return "`" + value + "`";
    } else {
      return '`"' + value + '"`';
    }
  } else if (typeof value === "object") {
    var string = JSON.stringify(value);
    if (string === "[]") {
      return "`[]` (Empty Array)";
    } else if (string === "{}") {
      return "`{}` (Empty Object)";
    } else {
      return `\`${string}\``;
    }
  }

  return "__Unknown__";
}
