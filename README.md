# Fortissimo <img src="image/icon-alt.png" width="30">

Collection of helpful functions for JavaScript

# Installation

## HTML

Add this code before your main JavaScript file

```html
<script src="https://fortissimojs.github.io/index.min.js"></script>
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

| Name      | Type      | Description                                 | Default                    |
| --------- | --------- | ------------------------------------------- | -------------------------- |
| `string`  | `String`  | Input string                                | Empty String               |
| `amount`  | `Integer` | Amount of characters to fill with character | `10`                       |
| `char`    | `String`  | Character to fill space with                | `" "` Whitespace character |
| `reverse` | `Boolean` | Reverse string alignment                    | `false`                    |

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

F.isURL("http://www.google.net"); // true

F.isURL("https://"); // false

F.isURL("file:///C:/Documents"); // false

F.isURL("https://youtube.com/watch?v=a81Nn_pj8Kl"); // true

F.isURL("https://localhost:8080"); // false
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
F.truncate("foo", 5); // "foo"

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

```

---

F.replace("foo bar test", "o", "\_"); // "f\_\_ bar test"

F.replace("foo bar test", "t", "*"); // "foo bar *es\*"

F.replace("foo bar test", "t", "*", true); // "foo bar *est"

## F.hash()

Converts a string to its hash value.

**Returns**: `Integer`

### Arguments

| Name     | Type     | Description  | Default      |
| -------- | -------- | ------------ | ------------ |
| `string` | `String` | Input string | Empty String |

### Example

```js
F.hash("this is a test"); // -1879005787

F.hash("this is a tost"); // -1878996177

F.hash("Blah blah blah 123"); // 1764773123
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

F.redact("username123", 40, "#"); // "username123"
```

---

## F.splitAt()

Splits a string every `n` characters; Splits into groups of `n`.

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

---

## F.randomFloat()

Returns a random float between two numbers.

**Returns**: `Float`

### Arguments

| Name  | Type    | Description   | Default |
| ----- | ------- | ------------- | ------- |
| `min` | `Float` | Minimum value | `0`     |
| `max` | `Float` | Maximum value | `1`     |

### Example

```js
F.randomFloat(); // 0.6284287530575728

F.randomFloat(100, 200); // 116.58609216903817
```

---

## F.randomInt()

Returns a random integer between two numbers.

**Returns**: `Integer`

### Arguments

| Name  | Type      | Description   | Default |
| ----- | --------- | ------------- | ------- |
| `min` | `Integer` | Minimum value | `0`     |
| `max` | `Integer` | Maximum value | `1`     |

### Example

```js
F.randomFloat(); // 1

F.randomFloat(100, 200); // 117
```

---

## F.randomChoice()

Randomly picks an item of an array or character of string.

**Returns**: Item of `Array`, `String`

### Arguments

| Name    | Type              | Description                             | Default |
| ------- | ----------------- | --------------------------------------- | ------- |
| `array` | `Array`, `String` | Array or String of items to choose from | []      |

### Example

```js
F.randomChoice("abcdef"); // "e"

F.randomChoice([true, false]); // true

F.randomChoice(["red", "yellow", "green", "blue", "purple"]); // "yellow"
```

---

## F.round()

Rounds a number to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name       | Type      | Description              | Default |
| ---------- | --------- | ------------------------ | ------- |
| `number`   | `Float`   | Input number             | `NaN`   |
| `decimals` | `Integer` | Amount of decimal points | `0`     |

### Example

```js
F.round(6.53819); // 7

F.round(6.53819, 1); // 6.5

F.round(6.53819, 2); // 6.54

F.round(6.53819, 3); // 6.538
```

---

## F.floor()

Floors a number to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name       | Type      | Description              | Default |
| ---------- | --------- | ------------------------ | ------- |
| `number`   | `Float`   | Input number             | `NaN`   |
| `decimals` | `Integer` | Amount of decimal points | `0`     |

### Example

```js
F.floor(6.53819); // 6

F.floor(6.53819, 1); // 6.5

F.floor(6.53819, 2); // 6.53

F.floor(6.53819, 3); // 6.538
```

---

## F.ceil()

Ceilings a number to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name       | Type      | Description              | Default |
| ---------- | --------- | ------------------------ | ------- |
| `number`   | `Float`   | Input number             | `NaN`   |
| `decimals` | `Integer` | Amount of decimal points | `0`     |

### Example

```js
F.ceil(6.53819); // 7

F.ceil(6.53819, 1); // 6.6

F.ceil(6.53819, 2); // 6.54

F.ceil(6.53819, 3); // 6.539
```

---

## F.range()

Returns an array filled with numbers from minimum to maximum. Does not include maximum.

**Returns**: `Array` of `Number`

### Arguments

| Name   | Type     | Description    | Default |
| ------ | -------- | -------------- | ------- |
| `min`  | `Number` | Minimum value  | `0`     |
| `max`  | `Number` | Maximum value  | `10`    |
| `step` | `Number` | Increase value | `1`     |

### Example

```js
F.range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (i in F.range(2, 6)) {
  i; // 2, 3, 4, 5
}

F.range(2, 6, 0.5); // [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]
```

---

## F.border()

Applies min, max functions to a number in a more simple way.

**Returns**: `Float`

### Arguments

| Name     | Type     | Description   | Default |
| -------- | -------- | ------------- | ------- |
| `number` | `Number` | Input number  | `NaN`   |
| `min`    | `Number` | Minimum value | `0`     |
| `max`    | `Number` | Maximum value | `1`     |

### Example

```js
F.border(5, 0, 10); // 5

F.border(12, 0, 10); // 10

F.border(-3, 0, 10); // 0
```

---

## F.wrap()

Applies modulo (modulus) function to a number in a more simple way.

**Returns**: `Float`

### Arguments

| Name     | Type     | Description   | Default |
| -------- | -------- | ------------- | ------- |
| `number` | `Number` | Input number  | `NaN`   |
| `min`    | `Number` | Minimum value | `0`     |
| `max`    | `Number` | Maximum value | `1`     |

### Example

```js
F.wrap(5, 0, 10); // 5

F.wrap(12, 0, 10); // 2

F.wrap(-3, 0, 10); // 7
```

---

## F.hcf()

**Not**: _gcf_

Gets the highest common factor of two numbers.

**Returns**: `Integer`

### Arguments

| Name | Type      | Description   | Default |
| ---- | --------- | ------------- | ------- |
| `a`  | `Integer` | First Number  | `NaN`   |
| `b`  | `Integer` | Second Number | `NaN`   |

### Example

```js
F.hfc(20, 24); // 4

F.hfc(1029, 238); // 7
```

---

## F.lcm()

Gets the lowest common multiple of two numbers.

**Returns**: `Integer`

### Arguments

| Name | Type      | Description   | Default |
| ---- | --------- | ------------- | ------- |
| `a`  | `Integer` | First Number  | `NaN`   |
| `b`  | `Integer` | Second Number | `NaN`   |

### Example

```js
F.lcm(124, 8); // 248

F.lcm(1029, 238); // 34986
```

---

## F.ordinal()

**Not**: _ordinate_

Adds ordinal notation to number (1*st*, 2*nd*, ...)

**Returns**: `String`

### Arguments

| Name     | Type      | Description  | Default |
| -------- | --------- | ------------ | ------- |
| `number` | `Integer` | Input number | NaN     |

### Example

```js
F.ordinal(1); // 1st

F.ordinal(2); // 2st

F.ordinal(23); // 23rd

F.ordinal(40); // 40th
```

---

## F.bool2bin()

**Not**: _bool_bin_

Converts all arguments to truthy value in binary.

**Returns**: `String`

### Arguments

| Name        | Type                           | Description           | Default   |
| ----------- | ------------------------------ | --------------------- | --------- |
| `...values` | `Arguments`, `Array`, `Object` | Any values to convert | undefined |

### Example

```js
F.bool2bin(true, false, true); // "101"

F.bool2bin(0, "a", "", [], 123); // "01011"
```

---

## F.addCommas()

Inserts commas into numbers every third digit.

**Returns**: `String`

### Arguments

| Name             | Type      | Description                       | Default |
| ---------------- | --------- | --------------------------------- | ------- |
| `number`         | `Number`  | Input number                      | `NaN`   |
| `ignoreDecimals` | `Boolean` | Add commas to post-decimal digits | `true`  |

### Example

```js
F.addCommas(10931); // 10,931

F.addCommas(1931); // 1,931

F.addCommas(1931.10293); // 1,931.102,93

F.addCommas(1931.10293, true); // 1,931.10293
```

---

## F.snap()

> **NOT CURRENTLY IMPLEMENTED**

Sets a number to the closest one in an array or object.

**Returns**: `Number`, item of `Array`

### Arguments

| Name       | Type       | Description                                                                    | Default           |
| ---------- | ---------- | ------------------------------------------------------------------------------ | ----------------- |
| `number`   | `Number`   | Input number                                                                   | `NaN`             |
| `array`    | `Array`    | Array of items to select from                                                  | Empty Array       |
| `callback` | `Function` | How to select closest number. `a` is the input number, `b` is an item of array | `(a, b) => a > b` |

### Example

```js
F.snap(5, [0, 2, 4, 6, 8, 10]); // 4

F.snap(5, [
  [2, "a"],
  [4, "b"],
  [7, "c"],
]); // undefined

F.snap(
  [5, null],
  [
    [2, "a"],
    [4, "b"],
    [7, "c"],
  ],
  (a, b) => a[1] > b[1],
); // [4, "b"]
```

---

## F.sleep()

Async function to wait in seconds.

**Returns**: `Promise`

### Arguments

| Name   | Type     | Description             | Default |
| ------ | -------- | ----------------------- | ------- |
| `time` | `Number` | Time to wait in seconds | `0`     |

### Example

```js
async function () {
  await F.sleep(1) // Waits 1 second before continuing
}
```

---

## F.twelveHour()

**Not**: _12Hour_

Converts 24 hour number to 12 hour.

**Returns**: ``

### Arguments

| Name   | Type      | Description  | Default |
| ------ | --------- | ------------ | ------- |
| `hour` | `Integer` | Input number | `NaN`   |

### Example

```js
F.twelveHour(11); // 11

F.twelveHour(12); // 12

F.twelveHour(13); // 1
```

---

## F.parseRelativeTime()

Converts milliseconds into time value with unit (Eg. `10 minutes`).

**Returns**: `Array` of `Number` and `String`

### Arguments

| Name     | Type       | Description                  | Default     |
| -------- | ---------- | ---------------------------- | ----------- |
| `number` | `Integer`  | Input number in milliseconds | `NaN`       |
| `format` | `Function` | Format of time               | Shown Below |

```js
array => {
  var output = [];
  for (var i = 0; i < Math.min(3, array.length); i++) {
    var amount = Math.floor(array[i].amount);
    output.push(
      amount.toString() +
        " " +
        (amount === 1 ? array[i].singular : array[i].plural),
    );
  }
  return output.join(", ");
};
```

### Example

```js
F.parseRelativeTime(200); // "200 milliseconds"

F.parseRelativeTime(3600123); // "1 hour, 123 milliseconds"

F.parseRelativeTime(70000); // "1 minute, 10 seconds"

F.parseRelativeTime(10280230911); // "3 months"
```

---

## F.getWeek()

Get week of the year from Date.

**Returns**: `Integer`

### Arguments

| Name   | Type   | Description           | Default      |
| ------ | ------ | --------------------- | ------------ |
| `date` | `Date` | Date object reference | `new Date()` |

### Example

```js
// Assuming it is week 13 today

F.getWeek(); // 13

F.getWeek(new Date()); // 13

// 2 Weeks in the future
F.getWeek(new Date(Date.now() + 1.21e9)); // 15
```

---

## F.removeItem()

> **NOT CURRENTLY IMPLEMENTED**

Remove item from array.

**Returns**: `Array`

### Arguments

| Name    | Type            | Description    | Default     |
| ------- | --------------- | -------------- | ----------- |
| `array` | `Array`         | Input array    | Empty Array |
| `item`  | Item of `Array` | Item to remove | `undefined` |

### Example

```js
var arr = [1, 2, 3, 4, 5];

F.removeItem(arr, 3); // [1, 2, 4, 5]

F.removeItem(arr, 5); // [1, 2, 3, 4]
```

---

## F.shuffle()

> **NOT CURRENTLY IMPLEMENTED**

Shuffles an array or string randomly.

**Returns**: `Array` or `String`

### Arguments

| Name    | Type                | Description | Default     |
| ------- | ------------------- | ----------- | ----------- |
| `array` | `Array` or `String` | Input array | Empty Array |

### Example

```js
var arr = [1, 2, 3, 4, 5];

F.shuffle(arr); // [3, 5, 1, 2, 4]

F.shuffle("abcdef"); // "daebcf"
```

---

## F.output()

> **NOT CURRENTLY IMPLEMENTED**

Output a simple object or array neatly without converting to JSON.

**Returns**: `String`

### Arguments

| Name       | Type                | Description                                   | Default             |
| ---------- | ------------------- | --------------------------------------------- | ------------------- |
| `object`   | `Object` or `Array` | Input object                                  | Empty Array         |
| `itemSep`  | `String`            | Seperator between items                       | Linebreak Character |
| `valueSep` | `String`            | Seperator between key and value (for objects) | `": "`              |

### Example

```js
F.output({a: 1, b: 3, c: "foo"}, " --- ", " = "); // 'a = 1 --- b = 3 --- c = "foo"'

F.output([1, 3, "foo"], ", "); // '1, 3, "foo"'
```

---

## F.sort()

> **NOT CURRENTLY IMPLEMENTED**

Sort an object by keys like an array.

**Returns**: `Object`

### Arguments

| Name       | Type       | Description          | Default           |
| ---------- | ---------- | -------------------- | ----------------- |
| `object`   | `Object`   | Input object         | Empty Object      |
| `callback` | `Function` | Custom sort function | `(a, b) => a - b` |

### Example

```js
F.sort({b: 1, a: 4, d: 0.1}); // {a: 4, b: 1, d: 0.1}

F.sort({b: 1, a: 4, d: 0.1}, (a, b) => b - a); // {d: 0.1, b: 1, a: 4}
```

---

## F.collide.rect2rect()

> **NOT CURRENTLY IMPLEMENTED**

Check collision between 2 rectangles.

**Returns**: `Boolean`

### Arguments

| Name | Type                  | Description                                  | Default      |
| ---- | --------------------- | -------------------------------------------- | ------------ |
| `a`  | `Object [x, y, w, h]` | First rectangle (x, y are top right corner)  | Empty Object |
| `b`  | `Object [x, y, w, h]` | Second rectangle (x, y are top right corner) | Empty Object |

### Example

```js
F.collide.rect2rect(
  {
    x: 1,
    y: 1,
    w: 3,
    h: 1,
  },
  {
    x: 2,
    y: 1.5,
    w: 0.5,
    h: 5,
  },
); // true

F.collide.rect2rect(
  {
    x: 1,
    y: 1,
    w: 3,
    h: 1,
  },
  {
    x: 2,
    y: 2.5,
    w: 0.5,
    h: 5,
  },
); // false
```

---

## F.collide.rect2circle()

> **NOT CURRENTLY IMPLEMENTED**

Check collision between rectangle and circle.

**Returns**: `Boolean`

### Arguments

| Name | Type                  | Description                           | Default      |
| ---- | --------------------- | ------------------------------------- | ------------ |
| `a`  | `Object [x, y, w, h]` | Rectangle (x, y are top right corner) | Empty Object |
| `b`  | `Object [x, y, r]`    | Circle (x, y are center)              | Empty Object |

### Example

```js
F.collide.rect2circle(
  {
    x: 1,
    y: 1,
    w: 3,
    h: 1,
  },
  {
    x: 2,
    y: 1.5,
    r: 2,
  },
); // true

F.collide.rect2circle(
  {
    x: 1,
    y: 1,
    w: 3,
    h: 1,
  },
  {
    x: 2,
    y: 2.5,
    r: 0.1,
  },
); // false
```

---

## F.collide.circle2circle()

> **NOT CURRENTLY IMPLEMENTED**

Check collision between 2 circles.

**Returns**: `Boolean`

### Arguments

| Name | Type               | Description                     | Default      |
| ---- | ------------------ | ------------------------------- | ------------ |
| `a`  | `Object [x, y, r]` | First Circle (x, y are center)  | Empty Object |
| `b`  | `Object [x, y, r]` | Second Circle (x, y are center) | Empty Object |

### Example

```js
F.collide.circle2circle(
  {
    x: 1,
    y: 1,
    r: 3,
  },
  {
    x: 2,
    y: 1.5,
    r: 2,
  },
); // true

F.collide.circle2circle(
  {
    x: 1,
    y: 1,
    r: 0.5,
  },
  {
    x: 2,
    y: 2.5,
    r: 0.1,
  },
); // false
```

---

## F.collide.polygons()

> **NOT CURRENTLY IMPLEMENTED**

---

## F.coords2angle()

> **NOT CURRENTLY IMPLEMENTED**

Converts coordinates to angle.

**Returns**: `Float`

### Arguments

| Name | Type     | Description               | Default |
| ---- | -------- | ------------------------- | ------- |
| `x1` | `Number` | First point X coordinate  | `NaN`   |
| `y1` | `Number` | First point Y coordinate  | `NaN`   |
| `x1` | `Number` | Second point X coordinate | `NaN`   |
| `y1` | `Number` | Second point Y coordinate | `NaN`   |

### Example

```js
F.coords2angle(1, 1, 2, 2); // [UNKNOWN]

F.coords2angle(1.9, 1.05, 2.1, 3.81); // [UNKNOWN]
```

---

## F.distance()

> **NOT CURRENTLY IMPLEMENTED**

Get pythagorean distance between two points.

**Returns**: `Float`

### Arguments

| Name | Type     | Description               | Default |
| ---- | -------- | ------------------------- | ------- |
| `x1` | `Number` | First point X coordinate  | `NaN`   |
| `y1` | `Number` | First point Y coordinate  | `NaN`   |
| `x1` | `Number` | Second point X coordinate | `NaN`   |
| `y1` | `Number` | Second point Y coordinate | `NaN`   |

### Example

```js
F.distance(1, 1, 2, 2); // [UNKNOWN]

F.distance(1.9, 1.05, 2.1, 3.81); // [UNKNOWN]
```

---

## F.angle2coords()

> **NOT CURRENTLY IMPLEMENTED**

Converts coordinates, angle, and distance into new coordinates.

**Returns**: `Array` of 2 `Floats`

### Arguments

| Name       | Type     | Description                      | Default |
| ---------- | -------- | -------------------------------- | ------- |
| `x1`       | `Number` | X coordinate                     | `NaN`   |
| `y1`       | `Number` | Y coordinate                     | `NaN`   |
| `angle`    | `Number` | Angle of new coordinate          | `NaN`   |
| `distance` | `Number` | Distance between two coordinates | `NaN`   |

### Example

```js

```

---

## F.trace()

> **NOT CURRENTLY IMPLEMENTED**

---

## F.fillCanvas()

> **NOT CURRENTLY IMPLEMENTED**

Fill entire HTML Canvas with a color.

**Returns**: `undefined`

### Arguments

| Name    | Type                       | Description                 | Default               |
| ------- | -------------------------- | --------------------------- | --------------------- |
| `ctx`   | `CanvasRenderingContext2D` | Context to render on        | `undefined`           |
| `color` | `String`                   | HTML compliant color string | Current context color |

### Example

```js
ctx.fillStyle = "#0F0";
F.fillCanvas(ctx); // Fills lime

F.fillCanvas(ctx, "#F00"); // Fills red

F.fillCanvas(ctx); // Fills lime
```

---

## F.fillRoundRect()

> NOT CURRENTLY IMPLEMENTED

Fills a rounded rectangle on HTML Canvas. Same as ctx.fillRect, with extra argument for corner radius.

**Returns**: `undefined`

### Arguments

| Name  | Type                       | Description          | Default     |
| ----- | -------------------------- | -------------------- | ----------- |
| `ctx` | `CanvasRenderingContext2D` | Context to render on | `undefined` |
| `x`   | `Number`                   | X coordinate (Right) | `NaN`       |
| `y`   | `Number`                   | Y coordinate (Top)   | `NaN`       |
| `w`   | `Number`                   | Width                | `NaN`       |
| `h`   | `Number`                   | Height               | `NaN`       |
| `r`   | `Number`                   | Corner Radius        | `NaN`       |

### Example

```js
ctx.fillRect(100, 100, 50, 80);

ctx.fillRoundRect(100, 100, 50, 80, 20);
```

---

## F.strokeRoundRect()

> NOT CURRENTLY IMPLEMENTED

Strokes a rounded rectangle on HTML Canvas. Same as ctx.strokeRoundRect, with extra argument for corner radius.

**Returns**: `undefined`

### Arguments

| Name  | Type                       | Description          | Default     |
| ----- | -------------------------- | -------------------- | ----------- |
| `ctx` | `CanvasRenderingContext2D` | Context to render on | `undefined` |
| `x`   | `Number`                   | X coordinate (Right) | `NaN`       |
| `y`   | `Number`                   | Y coordinate (Top)   | `NaN`       |
| `w`   | `Number`                   | Width                | `NaN`       |
| `h`   | `Number`                   | Height               | `NaN`       |
| `r`   | `Number`                   | Corner Radius        | `NaN`       |

### Example

```js
ctx.strokeRect(100, 100, 50, 80);

ctx.strokeRoundRect(100, 100, 50, 80, 20);
```

---

## F.getCanvasPixel()

> NOT CURRENTLY IMPLEMENTED

Get pixel color of point in HTML Canvas as hex code.

**Returns**: `String`

### Arguments

| Name     | Type                | Description           | Default     |
| -------- | ------------------- | --------------------- | ----------- |
| `canvas` | `HTMLCanvasElement` | Canvas to get pixel   | `undefined` |
| `x`      | `Number`            | X coordinate of pixel | `NaN`       |
| `y`      | `Number`            | Y coordinate of pixel | `NaN`       |

### Example

```js
F.fillCanvas(ctx, "#FF0");
F.getCanvasPixel(canvas, 10, 40); // "#FF0"
```

---

## F.scanCanvas()

> NOT CURRENTLY IMPLEMENTED

Get all pixels of canvas.

**Returns**: 2D `Array` of `Strings`

### Arguments

| Name     | Type                | Description | Default     |
| -------- | ------------------- | ----------- | ----------- |
| `canvas` | `HTMLCanvasElement` | Canvas      | `undefined` |

### Example

```js
F.fillCanvas(ctx, "#FF0");
F.scanCanvas(canvas); // [["#FF0", "#FF0", "#FF0"...], ["#FF0", "#FF0", "#FF0"...]...]
```

### Created by [darcy](https://github.com/darccyy) (`/dɐːsi/`)
