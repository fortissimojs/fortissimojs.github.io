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

Tags: _String_

**Similar:**: [F.center](#fcenter)

Fill a string with a character to one side.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _amount_ | `Integer` | Amount of characters to fill with character | `10` |
| _char_ | `String` | Character to fill space with | `" "` (Space) |
| _reverse_ | `Boolean` | Reverse string alignment | `false` |

### Example

```js
F.fill("abc", 8, "_"); // "abc_____"

F.fill("abc", 8, "*", true); // "*****abc"

F.fill("testing", 4); // "testing"
```

---

## F.center

Tags: _String_

**Not**: _centre_

**Similar:**: [F.fill](#ffill)

Centers a string between characters.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _amount_ | `Integer` | Amount of characters to fill with character | `10` |
| _char_ | `String` | Character to fill space with | `" "` (Space) |
| _left_ | `Boolean` | Prioritize left side for odd character | `false` |

### Example

```js
F.center("abc", 8, "_"); // "__abc___"

F.center("abc", 8, "_", true); // "___abc__"

F.center("test", 10, ":"); // ":::test:::"

F.center("testing", 4, "_"); // "testing"
```

---

## F.isJSON

Tags: _String_, _Test_

**Not**: _isJson_

Tests whether a string is valid JSON.

**Returns**: `Boolean`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |

### Example

```js
F.isJSON('{"a":true, "other": [1, 2, 4]}'); // true

F.isJSON("{}"); // true

F.isJSON("[]"); // true

F.isJSON("{a: true}"); // false

F.isJSON('{"a": true}'); // true
```

---

## F.isURL

Tags: _String_, _Test_

**Not**: _isUrl_

Tests whether a string is a valid URL.

**Returns**: `Boolean`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |

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

## F.capitalize

Tags: _String_

**Not**: _capitalise_

Capitalizes first letter of all words in a string.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _allWords_ | `Boolean` | Capitalize all words, rather than just the first | `false` |
| _preserveCase_ | `Boolean` | Leave remaining letters in original case, rather than lowering them | `false` |

### Example

```js
F.capitalize("the QUICK brown fOx"); // "The quick brown fox"

F.capitalize("the QUICK brown fOx", true); // "The Quick Brown Fox"

F.capitalize("the QUICK brown fOx", null, true); // "The QUICK brown fOx"

F.capitalize("the QUICK brown fOx", true, true); // "The QUICK Brown FOx"
```

---

## F.format

Tags: _String_

Formats a string by replacing variable names with values. Similar to `` `${variable}` `` in native JS, except without `$` dollar.

**Returns**: `String`

### Usage

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

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _(...)replace_ | `(Arguments, Array, Object) <String>` | List of values to replace in string | `[]` (Empty Array) |

### Example

```js
// All return: "This is a string. Value: foo"

F.format("This is a {0}. Value: {1}", "string", "foo");

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
F.format(
  "This is a {thisName}. Value: {whatIsTheValue}",
  thisName,
  whatIsTheValue,
);

F.format("This is a {0}. Value: {1}", [
  thisName,
  whatIsTheValue,
]);
```

---

## F.escapeHTML

Tags: _String_

**Not**: _escapeHtml_

Sanitize string with HTML codes, to insert to HTML safely.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |

### Example

```js
F.escapeHTML("400 > 3"); // "400 &gt; 3"

F.escapeHTML("400 &gt; 3"); // "400 &amp;gt; 3"

F.escapeHTML("<script> hack(); </script>"); // "&lt;script&gt; hack(); &lt;/script&gt;"
```

---

## F.truncate

Tags: _String_

Cuts a string off after a certain amount of characters. Adds a string to the end, such as an `...` ellipse if it is longer than it needs to be.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _length_ | `Integer` | Maximum length for string to be (not including ending characters, unless specified below) | `20` |
| _char_ | `String` | Character / String to add to end | `"..."` |
| _includeChar_ | `Boolean` | Include ending characters in string length | `false` |

### Example

```js
F.truncate("foo", 5); // "foo"

F.truncate("foo bar", 5); // "foo b"

F.truncate("foo bar", 5, "..."); // "foo b..."

F.truncate("foo bar", 5, "", true); // "foo b"

F.truncate("foo bar", 5, "...", true); // "fo..."
```

---

## F.replace

Tags: _String_

Replaces all characters in a string with another character.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _old_ | `String` | Character to replace | `""` (Empty String) |
| _char_ | `String` | Character to replace with | `""` (Empty String) |
| _onlyFirst_ | `Boolean` | Only replace first instance, rather that replacing all | `false` |

### Example

```js
F.replace("foo bar test", "o", "_"); // "f__ bar test"

F.replace("foo bar test", "t", "*"); // "foo bar *es*"

F.replace("foo bar test", "t", "*", true); // "foo bar *est"
```

---

## F.hash

Tags: _String_, _Number_

Converts a string to its hash value.

**Returns**: `Integer`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |

### Example

```js
F.hash("this is a test"); // -1879005787

F.hash("this is a tost"); // -1878996177

F.hash("Blah blah blah 123"); // 1764773123
```

---

## F.redact

Tags: _String_

Redact the last part of a string, or all of it.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _amount_ | `Integer` | Maximum amount of visible characters | `3` |
| _char_ | `String` | Character to replace with | `"*"` |

### Example

```js
F.redact("username123"); // "use********"

F.redact("username123", 0); // "***********"

F.redact("username123", 4, "#"); // "user#######"

F.redact("username123", 40, "#"); // "username123"
```

---

## F.splitEvery

Tags: _String_, _Array_

**Not**: _splitAt_

Splits a string every `n` characters; Splits into groups of `n`.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _string_ | `String` | Input string | `""` (Empty String) |
| _number_ | `Integer` | Group size | `3` |

### Example

```js
F.splitEvery("the quick brown fox jumped", 4); // ["the ", "quic", "k br", "own ", "fox ", "jump", "ed"]
```

---

## F.randomFloat

Tags: _Number_, _Random_

**Similar:**: [F.randomInt](#frandomint), [F.randomChoice](#frandomchoice)

Returns a random float between two numbers.

**Returns**: `Float`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Minimum value | `NaN` |
| _number_ | `Number` | Maximum value | `NaN` |

### Example

```js
F.randomFloat(); // 0.6284287530575728

F.randomFloat(100, 200); // 116.58609216903817
```

---

## F.randomInt

Tags: _Number_, _Random_

**Similar:**: [F.randomFloat](#frandomfloat), [F.randomChoice](#frandomchoice)

Returns a random integer between two numbers.

**Returns**: `Integer`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Minimum value | `NaN` |
| _number_ | `Number` | Maximum value | `NaN` |

### Example

```js
F.randomFloat(); // 0.6284287530575728

F.randomFloat(100, 200); // 116.58609216903817
```

---

## F.randomChoice

Tags: _Number_, _Random_, _Array_

**Similar:**: [F.randomFloat](#frandomfloat), [F.randomInt](#frandomint)

Randomly picks an item of an array or character of string.

**Returns**: `<Any> from (Array, String)`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _array_ | `(Array, String) <Any>` | Input array | `null` |

### Example

```js
F.randomChoice("abcdef"); // "e"

F.randomChoice([true, false]); // true

F.randomChoice(["red", "yellow", "green", "blue", "purple"]); // "yellow"
```

---

## F.round

Tags: _Number_, _Round_

**Similar:**: [F.floor](#ffloor), [F.ceil](#fceil)

Rounds a number to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _decimals_ | `Integer` | Amount of decimal points | `"0"` |

### Example

```js
F.round(6.53819); // 7

F.round(6.53819, 1); // 6.5

F.round(6.53819, 2); // 6.54

F.round(6.53819, 3); // 6.538
```

---

## F.floor

Tags: _Number_, _Round_

**Similar:**: [F.round](#fround), [F.ceil](#fceil)

Rounds a number down (floor) to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _decimals_ | `Integer` | Amount of decimal points | `"0"` |

### Example

```js
F.round(6.53819); // 6

F.round(6.53819, 1); // 6.5

F.round(6.53819, 2); // 6.53

F.round(6.53819, 3); // 6.538
```

---

## F.ceil

Tags: _Number_, _Round_

**Similar:**: [F.round](#fround), [F.floor](#ffloor)

Rounds a number up (ceil / ceiling) to an amount of decimal points.

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _decimals_ | `Integer` | Amount of decimal points | `"0"` |

### Example

```js
F.round(6.53819); // 7

F.round(6.53819, 1); // 6.6

F.round(6.53819, 2); // 6.54

F.round(6.53819, 3); // 6.539
```

---

## F.range

Tags: _Number_, _Array_

Returns an array filled with numbers from minimum to maximum. Does not include maximum.

**Returns**: `Array <Number>`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _min_ | `Number` | Minimum value | `0` |
| _max_ | `Number` | Maximum value | `10` |
| _step_ | `Number` | Increase value | `1` |
| _includeMin_ | `Boolean` | Include minimum value in output | `true` |
| _includeMax_ | `Boolean` | Include maximum value in output | `false` |

### Example

```js
F.range(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

F.range(2, 6, 0.5); // [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]

// Usage like this would be very slow;
for (i in F.range(2, 6)) {
  i; // 2, 3, 4, 5
}
```

---

## F.border

Tags: _Number_

**Similar:**: [F.wrap](#fwrap)

Applies min, max functions to a number in a simpler way.

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _min_ | `Number` | Minimum value | `0` |
| _max_ | `Number` | Maximum value | `1` |

### Example

```js
F.border(5, 0, 10); // 5

F.border(12, 0, 10); // 10

F.border(-3, 0, 10); // 0
```

---

## F.wrap

Tags: _Number_

**Similar:**: [F.border](#fborder)

Applies a modulo-like function to a number. Different from native `%` operator, see [F.amod](#famod)

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _min_ | `Number` | Minimum value | `0` |
| _max_ | `Number` | Maximum value | `1` |

### Example

```js
F.wrap(3, 0, 10); // 3
3 % 10 // 3

F.wrap(13, 0, 10); // 3
13 % 10 // 3

F.wrap(-7, 0, 10); // 3
-7 % 10 // -7

F.wrap(-17, 0, 10); // 3
-17 % 7 // -7

F.wrap(3, 10, 20); // 13

F.wrap(23, 10, 20); // 13
```

---

## F.hcf

Tags: _Number_

**Not**: _gcf_

**Similar:**: [F.lcm](#flcm)

Returns the highest common factor of two numbers.

**Returns**: `Integer`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _a_ | `Integer` | First number | `NaN` |
| _b_ | `Integer` | Second number | `NaN` |

### Example

```js
F.hfc(20, 24); // 4

F.hfc(1029, 238); // 7]
```

---

## F.lcm

Tags: _Number_

**Similar:**: [F.hcf](#fhcf)

Returns the lowest common multiple of two numbers.

**Returns**: `Integer`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _a_ | `Integer` | First number | `NaN` |
| _b_ | `Integer` | Second number | `NaN` |

### Example

```js
F.lcm(124, 8); // 248

F.lcm(1029, 238); // 34986
```

---

## F.ordinal

Tags: _Number_

**Not**: _ordinate_

Adds ordinal notation to number (1*st*, 2*nd*, ...)

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Integer` | Input number | `NaN` |

### Example

```js
F.ordinal(1); // 1st

F.ordinal(2); // 2st

F.ordinal(23); // 23rd

F.ordinal(40); // 40th
```

---

## F.bool2bin

Tags: _Number_, _Convert_

**Not**: _bool_bin_

Converts all arguments to truthy value in binary.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _(...)values_ | `(Arguments, Array, Object) <Boolean>` | Any values to convert | `null` |

### Example

```js
F.bool2bin(true, false, true); // "101"

F.bool2bin(0, "a", "", [], 123); // "01011"
```

---

## F.amod

Tags: _Number_, _Operate_

Applies a modulo function to a number. Different from native `%` modulo operator when handling negative numbers. An example is [here](https://www.desmos.com/calculator/epznmvbzgf)

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _a_ | `Number` | Input number | `NaN` |
| _b_ | `Number` | Divisor | `NaN` |

### Example

```js
F.amod(3, 0, 10); // 3
3 % 10 // 3

F.amod(13, 0, 10); // 3
13 % 10 // 3

F.amod(-7, 0, 10); // 3
-7 % 10 // -7

F.amod(-17, 0, 10); // 3
-17 % 7 // -7
```

---

## F.mean

Tags: _Number_

Calculate the mean average of a list of numbers

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _(...)values_ | `(Arguments, Array) <Number>` | Input array | `NaN` |

### Example

```js
F.mean(1, 2, 3, 4, 5) // 3

F.mean(29, 23, 102, 44, 1, 1, -11) // 27

F.mean([29, 23, 102, 44, 1, 1, -11]) // 27
```

---

## F.addCommas

Tags: _Number_

Inserts commas into numbers every third digit.

**Returns**: `String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Number` | Input number | `NaN` |
| _ignoreDecimals_ | `Boolean` | Add commas to post-decimal digits (10^(-n)) | `false` |

### Example

```js
F.addCommas(10931); // 10,931

F.addCommas(1931); // 1,931

F.addCommas(1931.10293); // 1,931.102,93

F.addCommas(1931.10293, true); // 1,931.10293
```

---

## F.pythag

Tags: _Number_

Calculates the hypotenuse of a triangle simply

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _a_ | `Number` | Side length A | `NaN` |
| _b_ | `Number` | Side length B | `NaN` |

### Example

```js
F.pythag(4, 3) // 5

F.pythag(1093, 194) // 1110.08333020544
```

---

## F.apythag

Tags: _Number_

Calculates the remaining side length of a triangle simply

**Returns**: `Number`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _a_ | `Number` | Side length A | `NaN` |
| _c_ | `Number` | Hypotenuse | `NaN` |

### Example

```js
F.pythag(4, 5) // 3

F.apythag(1093, 1110.08333020544) // 194
```

---

## F.sleep

Tags: _Time_

Async function to wait in seconds.

**Returns**: `Promise`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _time_ | `Number` | Time to wait in __milliseconds__ | `0` |

### Example

```js
async function () {
  console.log("Before...")
  await F.sleep(1000)
  console.log("After...") // 1 second after
}
```

---

## F.twelveHour

Tags: _Time_

**Not**: _12Hour_

Converts 24 hour number to 12 hour.

**Returns**: `Number, String`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _hour_ | `Number` | Input hours | `NaN` |
| _addPeriod_ | `Boolean` | Add the 'AM' or 'PM' to the end | `false` |

### Example

```js
F.twelveHour(11); // 11
F.twelveHour(11, true); // "11AM"

F.twelveHour(12); // 12
F.twelveHour(12, true); // "12PM"

F.twelveHour(13); // 1
F.twelveHour(13, true); // "1PM"
```

---

## F.parseRelativeTime

Tags: _Time_

Converts milliseconds into time value with unit (Eg. `10 minutes`).

**Returns**: `String? << callback`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _number_ | `Integer` | Input number in milliseconds | `NaN` |
| _format_ | `Function` | How to format the output | _See Below_ |

#### Argument _format_ Default Value

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

## F.getWeek

Tags: _Time_

Get week of the year from Date.

**Returns**: `Integer`

### Arguments

| Name | Type | Description | Default |
| ---- | ---- | ----------- | ------- |
| _date_ | `Date` | Date object reference | `new Date()` |

### Example

```js
// Assuming it is week 13 today

F.getWeek(); // 13

F.getWeek(new Date()); // 13

// 2 Weeks in the future
F.getWeek(new Date(Date.now() + 1.21e9)); // 15
```