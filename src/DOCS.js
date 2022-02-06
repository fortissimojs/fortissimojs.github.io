module.exports = [
  {
    name: "fill",
    tags: ["string"],
    similar: "center",
    desc: "Fill a string with a character to one side.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "amount",
        type: "Integer",
        desc: "Amount of characters to fill with character",
        default: 10,
      },
      {
        name: "char",
        type: "String",
        desc: "Character to fill space with",
        default: " ",
      },
      {
        name: "reverse",
        type: "Boolean",
        desc: "Reverse string alignment",
        default: false,
      },
    ],
    example: [
      'F.fill("abc", 8, "_"); // "abc_____"',
      "",
      'F.fill("abc", 8, "*", true); // "*****abc"',
      "",
      'F.fill("testing", 4); // "testing"',
    ],
  },
  {
    name: "center",
    tags: ["string"],
    not: "centre",
    similar: "fill",
    desc: "Centers a string between characters.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "amount",
        type: "Integer",
        desc: "Amount of characters to fill with character",
        default: 10,
      },
      {
        name: "char",
        type: "String",
        desc: "Character to fill space with",
        default: " ",
      },
      {
        name: "left",
        type: "Boolean",
        desc: "Prioritize left side for odd character",
        default: false,
      },
    ],
    example: [
      'F.center("abc", 8, "_"); // "__abc___"',
      "",
      'F.center("abc", 8, "_", true); // "___abc__"',
      "",
      'F.center("test", 10, ":"); // ":::test:::"',
      "",
      'F.center("testing", 4, "_"); // "testing"',
    ],
  },
  {
    name: "isJSON",
    tags: ["string", "test"],
    not: "isJson",
    desc: "Tests whether a string is valid JSON.",
    return: "Boolean",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
    ],
    example: [
      'F.isJSON(\'{"a":true, "other": [1, 2, 4]}\'); // true',
      "",
      'F.isJSON("{}"); // true',
      "",
      'F.isJSON("[]"); // true',
      "",
      'F.isJSON("{a: true}"); // false',
      "",
      "F.isJSON('{\"a\": true}'); // true",
    ],
  },
  {
    name: "isURL",
    tags: ["string", "test"],
    not: "isUrl",
    desc: "Tests whether a string is a valid URL.",
    return: "Boolean",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
    ],
    example: [
      'F.isURL("https://google.com"); // true',
      "",
      'F.isURL("http://www.google.net"); // true',
      "",
      'F.isURL("https://"); // false',
      "",
      'F.isURL("file:///C:/Documents"); // false',
      "",
      'F.isURL("https://youtube.com/watch?v=a81Nn_pj8Kl"); // true',
      "",
      'F.isURL("https://localhost:8080"); // false',
    ],
  },
  {
    name: "capitalize",
    tags: ["string"],
    not: "capitalise",
    desc: "Capitalizes first letter of all words in a string.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "allWords",
        type: "Boolean",
        desc: "Capitalize all words, rather than just the first",
        default: false,
      },
      {
        name: "preserveCase",
        type: "Boolean",
        desc: "Leave remaining letters in original case, rather than lowering them",
        default: false,
      },
    ],
    example: [
      'F.capitalize("the QUICK brown fOx"); // "The quick brown fox"',
      "",
      'F.capitalize("the QUICK brown fOx", true); // "The Quick Brown Fox"',
      "",
      'F.capitalize("the QUICK brown fOx", null, true); // "The QUICK brown fOx"',
      "",
      'F.capitalize("the QUICK brown fOx", true, true); // "The QUICK Brown FOx"',
    ],
  },
  {
    name: "format",
    tags: ["string"],
    desc: "Formats a string by replacing variable names with values. Similar to `` `${variable}` `` in native JS, except without `$` dollar.",
    return: "String",
    usage: [
      "Free arguments: `F.format(string, a, b, c)`",
      "",
      "(`0`: `a`, `1`: `b`, `2`: `c`)",
      "",
      "All arguments, other that `string` are treated as values for their indexes",
      "",
      "Array: `F.format(string, [a, b, c])`",
      "",
      "(`0`: `a`, `1`: `b`, `2`: `c`)",
      "",
      "Same as free arguments, but with extra brackets. Better for custom arguments.",
      "",
      "Object: `F.format(string, {x: a, y: b, z: c})`",
      "",
      "(`x`: `a`, `y`: `b`, `z`: `c`)",
      "",
      "Values replaced are keys / values of object. Best one to use for large strings.",
      "",
      "Direct Object: `F.format(string, {a, b, c})`",
      "",
      "(`a` (name): `a` (value), `b` (name): `b` (value), `c` (name): `c` (value))",
      "",
      "Values are value of variables, names to replace are the names of the variables (`a`, `b`, `c`)",
    ],
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "(...)replace",
        type: "(Arguments, Array, Object) <String>",
        desc: "List of values to replace in string",
        default: [],
      },
    ],
    example: [
      '// All return: "This is a string. Value: foo"',
      "",
      'F.format("This is a {0}. Value: {1}", "string", "foo");',
      "",
      'F.format("This is a {0}. Value: {1}", ["string", "foo"]);',
      "",
      'var array = ["string", "foo"];',
      'F.format("This is a {0}. Value: {1}", array);',
      "",
      'F.format("This is a {thisName}. Value: {whatIsTheValue}", {',
      '  thisName: "string",',
      '  whatIsTheValue: "foo",',
      "});",
      "",
      "var object = {",
      '  thisName: "string",',
      '  whatIsTheValue: "foo",',
      "};",
      'F.format("This is a {thisName}. Value: {whatIsTheValue}", object);',
      "",
      'var thisName = "string";',
      'var whatIsTheValue = "foo";',
      "F.format(",
      '  "This is a {thisName}. Value: {whatIsTheValue}",',
      "  thisName,",
      "  whatIsTheValue,",
      ");",
      "",
      'F.format("This is a {0}. Value: {1}", [',
      "  thisName,",
      "  whatIsTheValue,",
      "]);",
    ],
  },
  {
    name: "escapeHTML",
    tags: ["string"],
    not: "escapeHtml",
    desc: "Sanitize string with HTML codes, to insert to HTML safely.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
    ],
    example: [
      'F.escapeHTML("400 > 3"); // "400 &gt; 3"',
      "",
      'F.escapeHTML("400 &gt; 3"); // "400 &amp;gt; 3"',
      "",
      'F.escapeHTML("<script> hack(); </script>"); // "&lt;script&gt; hack(); &lt;/script&gt;"',
    ],
  },
  {
    name: "truncate",
    tags: ["string"],
    desc: "Cuts a string off after a certain amount of characters. Adds a string to the end, such as an `...` ellipse if it is longer than it needs to be.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "length",
        type: "Integer",
        desc: "Maximum length for string to be (not including ending characters, unless specified below)",
        default: 20,
      },
      {
        name: "char",
        type: "String",
        desc: "Character / String to add to end",
        default: "...",
      },
      {
        name: "includeChar",
        type: "Boolean",
        desc: "Include ending characters in string length",
        default: false,
      },
    ],
    example: [
      'F.truncate("foo", 5); // "foo"',
      "",
      'F.truncate("foo bar", 5); // "foo b"',
      "",
      'F.truncate("foo bar", 5, "..."); // "foo b..."',
      "",
      'F.truncate("foo bar", 5, "", true); // "foo b"',
      "",
      'F.truncate("foo bar", 5, "...", true); // "fo..."',
    ],
  },
  {
    name: "replace",
    tags: ["string"],
    desc: "Replaces all characters in a string with another character.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "old",
        type: "String",
        desc: "Character to replace",
        default: "",
      },
      {
        name: "char",
        type: "String",
        desc: "Character to replace with",
        default: "",
      },
      {
        name: "onlyFirst",
        type: "Boolean",
        desc: "Only replace first instance, rather that replacing all",
        default: false,
      },
    ],
    example: [
      'F.replace("foo bar test", "o", "_"); // "f__ bar test"',
      "",
      'F.replace("foo bar test", "t", "*"); // "foo bar *es*"',
      "",
      'F.replace("foo bar test", "t", "*", true); // "foo bar *est"',
    ],
  },
  {
    name: "hash",
    tags: ["string", "number"],
    desc: "Converts a string to its hash value.",
    return: "Integer",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
    ],
    example: [
      'F.hash("this is a test"); // -1879005787',
      "",
      'F.hash("this is a tost"); // -1878996177',
      "",
      'F.hash("Blah blah blah 123"); // 1764773123',
    ],
  },
  {
    name: "redact",
    tags: ["string"],
    desc: "Redact the last part of a string, or all of it.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "amount",
        type: "Integer",
        desc: "Maximum amount of visible characters",
        default: 3,
      },
      {
        name: "char",
        type: "String",
        desc: "Character to replace with",
        default: "*",
      },
    ],
    example: [
      'F.redact("username123"); // "use********"',
      "",
      'F.redact("username123", 0); // "***********"',
      "",
      'F.redact("username123", 4, "#"); // "user#######"',
      "",
      'F.redact("username123", 40, "#"); // "username123"',
    ],
  },
  {
    name: "splitEvery",
    tags: ["string", "array"],
    not: "splitAt",
    desc: "Splits a string every `n` characters; Splits into groups of `n`.",
    return: "String",
    args: [
      {
        name: "string",
        type: "String",
        desc: "Input string",
        default: "",
      },
      {
        name: "number",
        type: "Integer",
        desc: "Group size",
        default: 3,
      },
    ],
    example: [
      'F.splitEvery("the quick brown fox jumped", 4); // ["the ", "quic", "k br", "own ", "fox ", "jump", "ed"]',
    ],
  },
  {
    name: "randomFloat",
    tags: ["number", "random"],
    similar: ["randomInt", "randomChoice"],
    desc: "Returns a random float between two numbers.",
    return: "Float",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Minimum value",
        default: "NaN",
      },
      {
        name: "number",
        type: "Number",
        desc: "Maximum value",
        default: "NaN",
      },
    ],
    example: [
      "F.randomFloat(); // 0.6284287530575728",
      "",
      "F.randomFloat(100, 200); // 116.58609216903817",
    ],
  },
  {
    name: "randomInt",
    tags: ["number", "random"],
    similar: ["randomFloat", "randomChoice"],
    desc: "Returns a random integer between two numbers.",
    return: "Integer",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Minimum value",
        default: "NaN",
      },
      {
        name: "number",
        type: "Number",
        desc: "Maximum value",
        default: "NaN",
      },
    ],
    example: [
      "F.randomFloat(); // 0.6284287530575728",
      "",
      "F.randomFloat(100, 200); // 116.58609216903817",
    ],
  },
  {
    name: "randomChoice",
    tags: ["number", "random", "array"],
    similar: ["randomFloat", "randomInt"],
    desc: "Randomly picks an item of an array or character of string.",
    return: "<Any> from (Array, String)",
    args: [
      {
        name: "array",
        type: "(Array, String) <Any>",
        desc: "Input array",
        default: null,
      },
    ],
    example: [
      'F.randomChoice("abcdef"); // "e"',
      "",
      "F.randomChoice([true, false]); // true",
      "",
      'F.randomChoice(["red", "yellow", "green", "blue", "purple"]); // "yellow"',
    ],
  },
  {
    name: "round",
    similar: ["floor", "ceil"],
    tags: ["number", "round"],
    desc: "Rounds a number to an amount of decimal points.",
    return: "Number",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "decimals",
        type: "Integer",
        desc: "Amount of decimal points",
        default: "0",
      },
    ],
    example: [
      "F.round(6.53819); // 7",
      "",
      "F.round(6.53819, 1); // 6.5",
      "",
      "F.round(6.53819, 2); // 6.54",
      "",
      "F.round(6.53819, 3); // 6.538",
    ],
  },
  {
    name: "floor",
    similar: ["round", "ceil"],
    tags: ["number", "round"],
    desc: "Rounds a number down (floor) to an amount of decimal points.",
    return: "Number",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "decimals",
        type: "Integer",
        desc: "Amount of decimal points",
        default: "0",
      },
    ],
    example: [
      "F.round(6.53819); // 6",
      "",
      "F.round(6.53819, 1); // 6.5",
      "",
      "F.round(6.53819, 2); // 6.53",
      "",
      "F.round(6.53819, 3); // 6.538",
    ],
  },
  {
    name: "ceil",
    similar: ["round", "floor"],
    tags: ["number", "round"],
    desc: "Rounds a number up (ceil / ceiling) to an amount of decimal points.",
    return: "Number",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "decimals",
        type: "Integer",
        desc: "Amount of decimal points",
        default: "0",
      },
    ],
    example: [
      "F.round(6.53819); // 7",
      "",
      "F.round(6.53819, 1); // 6.6",
      "",
      "F.round(6.53819, 2); // 6.54",
      "",
      "F.round(6.53819, 3); // 6.539",
    ],
  },
  {
    name: "range",
    tags: ["number", "array"],
    desc: "Returns an array filled with numbers from minimum to maximum. Does not include maximum.",
    return: "Array <Number>",
    args: [
      {
        name: "min",
        type: "Number",
        desc: "Minimum value",
        default: 0,
      },
      {
        name: "max",
        type: "Number",
        desc: "Maximum value",
        default: 10,
      },
      {
        name: "step",
        type: "Number",
        desc: "Increase value",
        default: 1,
      },
      {
        name: "includeMin",
        type: "Boolean",
        desc: "Include minimum value in output",
        default: true,
      },
      {
        name: "includeMax",
        type: "Boolean",
        desc: "Include maximum value in output",
        default: false,
      },
    ],
    example: [
      "F.range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "",
      "F.range(2, 6, 0.5); // [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]",
      "",
      "// Usage like this would be very slow;",
      "for (i in F.range(2, 6)) {",
      "  i; // 2, 3, 4, 5",
      "}",
    ],
  },
  {
    name: "border",
    tags: ["number"],
    similar: "wrap",
    desc: "Applies min, max functions to a number in a simpler way.",
    return: "Number",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "min",
        type: "Number",
        desc: "Minimum value",
        default: 0,
      },
      {
        name: "max",
        type: "Number",
        desc: "Maximum value",
        default: 1,
      },
    ],
    example: [
      "F.border(5, 0, 10); // 5",
      "",
      "F.border(12, 0, 10); // 10",
      "",
      "F.border(-3, 0, 10); // 0",
    ],
  },
  {
    name: "wrap",
    tags: ["number"],
    similar: "border",
    desc: "Applies a modulo-like function to a number. Different from native `%` operator, see [F.amod](#famod)",
    return: "Number",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "min",
        type: "Number",
        desc: "Minimum value",
        default: 0,
      },
      {
        name: "max",
        type: "Number",
        desc: "Maximum value",
        default: 1,
      },
    ],
    example: [
      "F.wrap(3, 0, 10); // 3",
      "3 % 10 // 3",
      "",
      "F.wrap(13, 0, 10); // 3",
      "13 % 10 // 3",
      "",
      "F.wrap(-7, 0, 10); // 3",
      "-7 % 10 // -7",
      "",
      "F.wrap(-17, 0, 10); // 3",
      "-17 % 7 // -7",
      "",
      "F.wrap(3, 10, 20); // 13",
      "",
      "F.wrap(23, 10, 20); // 13",
    ],
  },
  {
    name: "hcf",
    not: "gcf",
    tags: ["number"],
    similar: "lcm",
    desc: "Returns the highest common factor of two numbers.",
    return: "Integer",
    args: [
      {
        name: "a",
        type: "Integer",
        desc: "First number",
        default: "NaN",
      },
      {
        name: "b",
        type: "Integer",
        desc: "Second number",
        default: "NaN",
      },
    ],
    example: ["F.hfc(20, 24); // 4", "", "F.hfc(1029, 238); // 7]"],
  },
  {
    name: "lcm",
    tags: ["number"],
    similar: "hcf",
    desc: "Returns the lowest common multiple of two numbers.",
    return: "Integer",
    args: [
      {
        name: "a",
        type: "Integer",
        desc: "First number",
        default: "NaN",
      },
      {
        name: "b",
        type: "Integer",
        desc: "Second number",
        default: "NaN",
      },
    ],
    example: ["F.lcm(124, 8); // 248", "", "F.lcm(1029, 238); // 34986"],
  },
  {
    name: "ordinal",
    not: "ordinate",
    tags: ["number"],
    desc: "Adds ordinal notation to number (1*st*, 2*nd*, ...)",
    return: "String",
    args: [
      {
        name: "number",
        type: "Integer",
        desc: "Input number",
        default: "NaN",
      },
    ],
    example: [
      "F.ordinal(1); // 1st",
      "",
      "F.ordinal(2); // 2st",
      "",
      "F.ordinal(23); // 23rd",
      "",
      "F.ordinal(40); // 40th",
    ],
  },
  {
    name: "bool2bin",
    not: "bool_bin",
    tags: ["number", "convert"],
    desc: "Converts all arguments to truthy value in binary.",
    return: "String",
    args: [
      {
        name: "(...)values",
        type: "(Arguments, Array, Object) <Boolean>",
        desc: "Any values to convert",
        default: null,
      },
    ],
    example: [
      'F.bool2bin(true, false, true); // "101"',
      "",
      'F.bool2bin(0, "a", "", [], 123); // "01011"',
    ],
  },
  {
    name: "amod",
    tags: ["number", "operate"],
    desc: "Applies a modulo function to a number. Different from native `%` modulo operator when handling negative numbers. An example is [here](https://www.desmos.com/calculator/epznmvbzgf)",
    return: "Number",
    args: [
      {
        name: "a",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "b",
        type: "Number",
        desc: "Divisor",
        default: "NaN",
      },
    ],
    example: [
      "F.amod(3, 0, 10); // 3",
      "3 % 10 // 3",
      "",
      "F.amod(13, 0, 10); // 3",
      "13 % 10 // 3",
      "",
      "F.amod(-7, 0, 10); // 3",
      "-7 % 10 // -7",
      "",
      "F.amod(-17, 0, 10); // 3",
      "-17 % 7 // -7",
    ],
  },
  {
    name: "mean",
    tags: ["number"],
    desc: "Calculate the mean average of a list of numbers",
    return: "Number",
    args: [
      {
        name: "(...)values",
        type: "(Arguments, Array) <Number>",
        desc: "Input array",
        default: NaN,
      },
    ],
    example: [
      "F.mean(1, 2, 3, 4, 5) // 3",
      "",
      "F.mean(29, 23, 102, 44, 1, 1, -11) // 27",
      "",
      "F.mean([29, 23, 102, 44, 1, 1, -11]) // 27",
    ],
  },
  {
    name: "addCommas",
    tags: ["number"],
    desc: "Inserts commas into numbers every third digit.",
    return: "String",
    args: [
      {
        name: "number",
        type: "Number",
        desc: "Input number",
        default: "NaN",
      },
      {
        name: "ignoreDecimals",
        type: "Boolean",
        desc: "Add commas to post-decimal digits (10^(-n))",
        default: false,
      },
    ],
    example: [
      "F.addCommas(10931); // 10,931",
      "",
      "F.addCommas(1931); // 1,931",
      "",
      "F.addCommas(1931.10293); // 1,931.102,93",
      "",
      "F.addCommas(1931.10293, true); // 1,931.10293",
    ],
  },
  {
    name: "pythag",
    tags: ["number"],
    desc: "Calculates the hypotenuse of a triangle simply",
    return: "Number",
    args: [
      {
        name: "a",
        type: "Number",
        desc: "Side length A",
        default: "NaN",
      },
      {
        name: "b",
        type: "Number",
        desc: "Side length B",
        default: "NaN",
      },
    ],
    example: [
      "F.pythag(4, 3) // 5",
      "",
      "F.pythag(1093, 194) // 1110.08333020544",
    ],
  },
  {
    name: "apythag",
    tags: ["number"],
    desc: "Calculates the remaining side length of a triangle simply",
    return: "Number",
    args: [
      {
        name: "a",
        type: "Number",
        desc: "Side length A",
        default: "NaN",
      },
      {
        name: "c",
        type: "Number",
        desc: "Hypotenuse",
        default: "NaN",
      },
    ],
    example: [
      "F.pythag(4, 5) // 3",
      "",
      "F.apythag(1093, 1110.08333020544) // 194",
    ],
  },
  {
    name: "sleep",
    tags: ["time"],
    desc: "Async function to wait in seconds.",
    return: "Promise",
    args: [
      {
        name: "time",
        type: "Number",
        desc: "Time to wait in __milliseconds__",
        default: 0,
      },
    ],
    example: [
      "async function () {",
      '  console.log("Before...")',
      "  await F.sleep(1000)",
      '  console.log("After...") // 1 second after',
      "}",
    ],
  },
  {
    name: "twelveHour",
    not: "12Hour",
    tags: ["time"],
    desc: "Converts 24 hour number to 12 hour.",
    return: "Number, String",
    args: [
      {
        name: "hour",
        type: "Number",
        desc: "Input hours",
        default: "NaN",
      },
      {
        name: "addPeriod",
        type: "Boolean",
        desc: "Add the 'AM' or 'PM' to the end",
        default: false,
      },
    ],
    example: [
      "F.twelveHour(11); // 11",
      'F.twelveHour(11, true); // "11AM"',
      "",
      "F.twelveHour(12); // 12",
      'F.twelveHour(12, true); // "12PM"',
      "",
      "F.twelveHour(13); // 1",
      'F.twelveHour(13, true); // "1PM"',
    ],
  },
  {
    name: "parseRelativeTime",
    tags: ["time"],
    desc: "Converts milliseconds into time value with unit (Eg. `10 minutes`).",
    return: "String? << callback",
    args: [
      {
        name: "number",
        type: "Integer",
        desc: "Input number in milliseconds",
        default: "NaN",
      },
      {
        name: "format",
        type: "Function",
        desc: "How to format the output",
        default: [
          "array => {",
          "  var output = [];",
          "  for (var i = 0; i < Math.min(3, array.length); i++) {",
          "    var amount = Math.floor(array[i].amount);",
          "    output.push(",
          "      amount.toString() +",
          '        " " +',
          "        (amount === 1 ? array[i].singular : array[i].plural),",
          "    );",
          "  }",
          '  return output.join(", ");',
          "};",
        ],
        verbose: true,
      },
    ],
    example: [
      'F.parseRelativeTime(200); // "200 milliseconds"',
      "",
      'F.parseRelativeTime(3600123); // "1 hour, 123 milliseconds"',
      "",
      'F.parseRelativeTime(70000); // "1 minute, 10 seconds"',
      "",
      'F.parseRelativeTime(10280230911); // "3 months"',
    ],
  },
  {
    name: "getWeek",
    tags: ["time"],
    desc: "Get week of the year from Date.",
    return: "Integer",
    args: [
      {
        name: "date",
        type: "Date",
        desc: "Date object reference",
        default: "new Date()",
      },
    ],
    example: [
      "// Assuming it is week 13 today",
      "",
      "F.getWeek(); // 13",
      "",
      "F.getWeek(new Date()); // 13",
      "",
      "// 2 Weeks in the future",
      "F.getWeek(new Date(Date.now() + 1.21e9)); // 15",
    ],
  },
];
