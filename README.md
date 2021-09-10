# Fortissimo

Collection of helpful functions for JavaScript

# Installation

## HTML

Add this code before your main JavaScript file

```html
<script src="https://fortissimojs.github.io/index.js"></script>
```

## NodeJS

Install with npm

```ps
npm install fortissimo --save
```

Import into your main JavaScript file

```js
const F = require("fortissimo");
```

# Contribution

```ps
git clone https://github.com/fortissimojs/fortissimojs.github.io
```

# Documentation

## F.fill

Fill a string with a character to one side.

**Returns**: `String`

### Arguments

| Name      | Type      | Description                                 | Default                  |
| --------- | --------- | ------------------------------------------- | ------------------------ |
| `string`  | `String`  | Input string                                | Empty String             |
| `amount`  | `Integer` | Amount of characters to fill with character | `10`                     |
| `char`    | `String`  | Character to fill space with                | " " Whitespace character |
| `reverse` | `Boolean` | Reverse string alignment                    | `false`                  |

### Example

```js
F.fill("abc", 8, "_"); // "abc_____"

F.fill("abc", 8, "*", true); // "*****abc"

F.fill("testing", 4); // "testing"
```

---

## F.center()

**Not**: _centre_

Centers a string between characters.

**Returns**: `String`

### Arguments

| Name     | Type      | Description                                 | Default                  |
| -------- | --------- | ------------------------------------------- | ------------------------ |
| `string` | `String`  | Input string                                | Empty String             |
| `amount` | `Integer` | Amount of characters to fill with character | `10`                     |
| `char`   | `String`  | Character to fill space with                | " " Whitespace character |
| `left`   | `Boolean` | Prioritize left side for odd character      | `false`                  |

### Example

```js
F.center("abc", 8, "_"); // "__abc___"

F.center("abc", 8, "_", true); // "___abc__"

F.center("test", 10, ":"); // ":::test:::"

F.center("testing", 4, "_"); // "testing"
```

---

## F.isJSON()

**Not**: _isJson_

Tests whether a string is valid JSON.

**Returns**: `Boolean`

### Arguments

| Name     | Type     | Description          | Default      |
| -------- | -------- | -------------------- | ------------ |
| `string` | `String` | Input string to test | Empty String |

### Example

```js
F.isJSON('{"a":true, "other": [1, 2, 4]}'); // true

F.isJSON("{}"); // true

F.isJSON("[]"); // true

F.isJSON("{a: true}"); // false

F.isJSON('{"a": true}'); // true
```

---

## F.isURL()

**Not**: _isUrl_

Tests whether a string is a valid URL.

**Returns**: `Boolean`

### Arguments

| Name     | Type     | Description          | Default      |
| -------- | -------- | -------------------- | ------------ |
| `string` | `String` | Input string to test | Empty String |

### Example

```js
F.isURL("https://google.com"); // true

F.isURL("https://www.google.net"); // true

F.isURL("file:///C:/Documents"); // true

F.isURL("https://youtube.com/watch?v=a81Nn_pj8Kl"); // true

F.isURL("https://localhost:8080"); // true
```

---

## F.capitalize()

**Not**: _capitalise_

Capitalizes first letter of all words in a string.

**Returns**: `String`

### Arguments

| Name       | Type      | Description                                                         | Default      |
| ---------- | --------- | ------------------------------------------------------------------- | ------------ |
| `string`   | `String`  | Input string                                                        | Empty String |
| `allWords` | `Boolean` | Capitalize all words, rather than just the first                    | `false`      |
| `keepCase` | `Boolean` | Leave remaining letters in original case, rather than lowering them | `false`      |

### Example

```js
F.capitalize("the QUICK brown fOx"); // "The quick brown fox"

F.capitalize("the QUICK brown fOx", true); // "The Quick Brown Fox"

F.capitalize("the QUICK brown fOx", null, true); // "The QUICK brown fOx"

F.capitalize("the QUICK brown fOx", true, true); // "The QUICK Brown FOx"
```

---

## F.format()

Formats a string by replacing variable names with values.
Similar to `` `${variable}` `` in native JS, except without `$` dollar.

### Ways to use

Free arguments: `F.format(string, a, b, c)`

(`0`: `a`, `1`: `b`, `2`: `c`)

All arguments, other that `string` are treated as values for their indexes

Array: `F.format(string, [a, b, c])`

(`0`: `a`, `1`: `b`, `2`: `c`)

Same as free arguments, but with extra brackets. Better for custom arguments.

Object: `F.format(string, {x: a, y: b, z: c})`

(`x`: `a`, `y`: `b`, `z`: `c`)

Values replaced are keys / values of object. Best one to use for large strings.

Direct Object: `F.format(string, {a, b, c})`

(`a` (name): `a` (value), `b` (name): `b` (value), `c` (name): `c` (value))

Values are value of variables, names to replace are the names of the variables (`a`, `b`, `c`)

**Returns**: `String`

### Arguments

| Name         | Type                           | Description                                                           | Default      |
| ------------ | ------------------------------ | --------------------------------------------------------------------- | ------------ |
| `string`     | `String`                       | Input string                                                          | Empty String |
| `...replace` | `Arguments`, `Array`, `Object` | List of values to replace in string (`String`, otherwise stringified) | Empty Array  |

### Example

```js
// All return: "This is a string. Value: foo"

F.format("This is a {0}. Value: {1}", "string", "foo");

var thisName = "string";
var whatIsTheValue = "foo";
F.format(
  "This is a {thisName}. Value: {whatIsTheValue}",
  thisName,
  whatIsTheValue,
);

F.format("This is a {0}. Value: {1}", ["string", "foo"]);

var array = ["string", "foo"];
F.format("This is a {0}. Value: {1}", array);

F.format("This is a {thisName}. Value: {whatIsTheValue}", {
  thisName: "string",
  whatIsTheValue: "foo",
});

var object = {
  thisName: "string",
  whatIsTheValue: "foo",
};
F.format("This is a {thisName}. Value: {whatIsTheValue}", object);

var thisName = "string";
var whatIsTheValue = "foo";
F.format("This is a {thisName}. Value: {whatIsTheValue}", {
  thisName,
  whatIsTheValue,
});
```

---

## F.escapeHTML()

**Not**: _escapeHTML_

Replace characters with HTML codes, to insert to HTML safely.

**Returns**: `String`

### Arguments

| Name     | Type     | Description  | Default      |
| -------- | -------- | ------------ | ------------ |
| `string` | `String` | Input string | Empty String |

### Example

```js
F.escapeHTML("400 > 3"); // "400 &gt; 3"

F.escapeHTML("400 &gt; 3"); // "400 &gt; 3"

F.escapeHTML("<script> hack(); </script>"); // "&lt;script&gt; hack(); &lt;/script&gt;"
```

---

## F.truncate()

Cuts a string off after a certain amount of characters. Adds a string to the end, such as an `...` ellipse if it is longer than it needs to be.

**Returns**: `String`

### Arguments

| Name          | Type      | Description                                                | Default      |
| ------------- | --------- | ---------------------------------------------------------- | ------------ |
| `string`      | `String`  | Input string                                               | Empty String |
| `length`      | `Integer` | Maximum length for string to be (not including end string) | `20`         |
| `char`        | `String`  | Character / String to add to end                           | Empty String |
| `includeChar` | `Boolean` | Cut length of character out if string is longer            | `false`      |

### Example

```js
F.truncate("foo bar", 5); // "foo b"

F.truncate("foo bar", 5, "..."); // "foo b..."

F.truncate("foo bar", 5, "", true); // "foo b"

F.truncate("foo bar", 5, "...", true); // "fo..."
```

---

## F.replace()

Replaces all characters in a string with another character.

**Returns**: `String`

### Arguments

| Name        | Type      | Description                                            | Default      |
| ----------- | --------- | ------------------------------------------------------ | ------------ |
| `string`    | `String`  | Input string                                           | Empty String |
| `old`       | `String`  | Character to replace                                   | Empty String |
| `char`      | `String`  | Character to replace with                              | Empty String |
| `onlyFirst` | `Boolean` | Only replace first instance, rather that replacing all | `false`      |

### Example

```js
F.replace("foo bar test", "o", "_"); // "f__ bar test"

F.replace("foo bar test", "t", "*"); // "foo bar *es*"

F.replace("foo bar test", "t", "*", true); // "foo bar *est"
```

---

## F.hash()

Converts a string to its hash value

**Returns**: `Integer`

### Arguments

| Name     | Type     | Description  | Default      |
| -------- | -------- | ------------ | ------------ |
| `string` | `String` | Input string | Empty String |

### Example

```js
F.hash("this is a test"); // [UNKNOWN]

F.hash("this is a tost"); // [UNKNOWN]
```

---

## F.redact()

Redact the last part of a string, or all of it.

**Returns**: `String`

### Arguments

| Name     | Type      | Description                  | Default      |
| -------- | --------- | ---------------------------- | ------------ |
| `string` | `String`  | Input string                 | Empty String |
| `amount` | `Integer` | Amount of visible characters | `3`          |
| `char`   | `String`  | Character to replace with    | `"*"`        |

### Example

```js
F.redact("username123"); // "use********"

F.redact("username123", 0); // "***********"

F.redact("username123", 4, "#"); // "user#######"
```

---

## F.splitAt()

Splits a string every `n` characters; Splits into groups of `n`

**Returns**: `String`

### Arguments

| Name     | Type      | Description  | Default      |
| -------- | --------- | ------------ | ------------ |
| `string` | `String`  | Input string | Empty String |
| `number` | `Integer` | Group size   | `3`          |

### Example

```js
F.splitAt("the quick brown fox jumped", 4); // ["the ", "quic", "k br", "own ", "fox ", "jump", "ed"]
```

### Created by [darcy](https://github.com/darccyy) (`/dɐːsi/`)
