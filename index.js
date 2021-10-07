const F = {
  chars: {
    vowels: "aeiou".split(""),
    consonants: "bcdfghjklmnpqrstvwxyz".split(""),
    letters: "abcdefghijklmnopqrstuvwxyz".split(""),
    digits: "0123456789".split(""),
    base64:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".split(
        "",
      ),
    base64URI:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+".split(
        "",
      ),
    keyboardAll:
      "`~1!2@3#4$5%6^7&8*9(0)-_=+qQwWeErRtTyYuUiIoOpP[{]}\\|aAsSdDfFgGhHjJkKlL;:'\"zZxXcCvVbBnNmM,<.>/?".split(
        "",
      ),
    keyboardNatural:
      "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./".split(
        "",
      ),
    keyboardShift:
      '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?'.split(
        "",
      ),
    cursive:
      "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩".split(
        "",
      ),
    regional:
      "🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿".split(
        "",
      ),
    emoji: "0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣".split(""),
    html: {
      34: "quot",
      38: "amp",
      39: "apos",
      60: "lt",
      62: "gt",
      160: "nbsp",
      161: "iexcl",
      162: "cent",
      163: "pound",
      164: "curren",
      165: "yen",
      166: "brvbar",
      167: "sect",
      168: "uml",
      169: "copy",
      170: "ordf",
      171: "laquo",
      172: "not",
      173: "shy",
      174: "reg",
      175: "macr",
      176: "deg",
      177: "plusmn",
      178: "sup2",
      179: "sup3",
      180: "acute",
      181: "micro",
      182: "para",
      183: "middot",
      184: "cedil",
      185: "sup1",
      186: "ordm",
      187: "raquo",
      188: "frac14",
      189: "frac12",
      190: "frac34",
      191: "iquest",
      192: "Agrave",
      193: "Aacute",
      194: "Acirc",
      195: "Atilde",
      196: "Auml",
      197: "Aring",
      198: "AElig",
      199: "Ccedil",
      200: "Egrave",
      201: "Eacute",
      202: "Ecirc",
      203: "Euml",
      204: "Igrave",
      205: "Iacute",
      206: "Icirc",
      207: "Iuml",
      208: "ETH",
      209: "Ntilde",
      210: "Ograve",
      211: "Oacute",
      212: "Ocirc",
      213: "Otilde",
      214: "Ouml",
      215: "times",
      216: "Oslash",
      217: "Ugrave",
      218: "Uacute",
      219: "Ucirc",
      220: "Uuml",
      221: "Yacute",
      222: "THORN",
      223: "szlig",
      224: "agrave",
      225: "aacute",
      226: "acirc",
      227: "atilde",
      228: "auml",
      229: "aring",
      230: "aelig",
      231: "ccedil",
      232: "egrave",
      233: "eacute",
      234: "ecirc",
      235: "euml",
      236: "igrave",
      237: "iacute",
      238: "icirc",
      239: "iuml",
      240: "eth",
      241: "ntilde",
      242: "ograve",
      243: "oacute",
      244: "ocirc",
      245: "otilde",
      246: "ouml",
      247: "divide",
      248: "oslash",
      249: "ugrave",
      250: "uacute",
      251: "ucirc",
      252: "uuml",
      253: "yacute",
      254: "thorn",
      255: "yuml",
      402: "fnof",
      913: "Alpha",
      914: "Beta",
      915: "Gamma",
      916: "Delta",
      917: "Epsilon",
      918: "Zeta",
      919: "Eta",
      920: "Theta",
      921: "Iota",
      922: "Kappa",
      923: "Lambda",
      924: "Mu",
      925: "Nu",
      926: "Xi",
      927: "Omicron",
      928: "Pi",
      929: "Rho",
      931: "Sigma",
      932: "Tau",
      933: "Upsilon",
      934: "Phi",
      935: "Chi",
      936: "Psi",
      937: "Omega",
      945: "alpha",
      946: "beta",
      947: "gamma",
      948: "delta",
      949: "epsilon",
      950: "zeta",
      951: "eta",
      952: "theta",
      953: "iota",
      954: "kappa",
      955: "lambda",
      956: "mu",
      957: "nu",
      958: "xi",
      959: "omicron",
      960: "pi",
      961: "rho",
      962: "sigmaf",
      963: "sigma",
      964: "tau",
      965: "upsilon",
      966: "phi",
      967: "chi",
      968: "psi",
      969: "omega",
      977: "thetasym",
      978: "upsih",
      982: "piv",
      8226: "bull",
      8230: "hellip",
      8242: "prime",
      8243: "Prime",
      8254: "oline",
      8260: "frasl",
      8472: "weierp",
      8465: "image",
      8476: "real",
      8482: "trade",
      8501: "alefsym",
      8592: "larr",
      8593: "uarr",
      8594: "rarr",
      8595: "darr",
      8596: "harr",
      8629: "crarr",
      8656: "lArr",
      8657: "uArr",
      8658: "rArr",
      8659: "dArr",
      8660: "hArr",
      8704: "forall",
      8706: "part",
      8707: "exist",
      8709: "empty",
      8711: "nabla",
      8712: "isin",
      8713: "notin",
      8715: "ni",
      8719: "prod",
      8721: "sum",
      8722: "minus",
      8727: "lowast",
      8730: "radic",
      8733: "prop",
      8734: "infin",
      8736: "ang",
      8743: "and",
      8744: "or",
      8745: "cap",
      8746: "cup",
      8747: "int",
      8756: "there4",
      8764: "sim",
      8773: "cong",
      8776: "asymp",
      8800: "ne",
      8801: "equiv",
      8804: "le",
      8805: "ge",
      8834: "sub",
      8835: "sup",
      8836: "nsub",
      8838: "sube",
      8839: "supe",
      8853: "oplus",
      8855: "otimes",
      8869: "perp",
      8901: "sdot",
      8968: "lceil",
      8969: "rceil",
      8970: "lfloor",
      8971: "rfloor",
      9001: "lang",
      9002: "rang",
      9674: "loz",
      9824: "spades",
      9827: "clubs",
      9829: "hearts",
      9830: "diams",
      338: "OElig",
      339: "oelig",
      352: "Scaron",
      353: "scaron",
      376: "Yuml",
      710: "circ",
      732: "tilde",
      8194: "ensp",
      8195: "emsp",
      8201: "thinsp",
      8204: "zwnj",
      8205: "zwj",
      8206: "lrm",
      8207: "rlm",
      8211: "ndash",
      8212: "mdash",
      8216: "lsquo",
      8217: "rsquo",
      8218: "sbquo",
      8220: "ldquo",
      8221: "rdquo",
      8222: "bdquo",
      8224: "dagger",
      8225: "Dagger",
      8240: "permil",
      8249: "lsaquo",
      8250: "rsaquo",
      8364: "euro",
    },
  },
};

/* Other */
F.InputError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "F.InputError";
  }
};

/* String */
F.fill = function (string, amount, char, reverse) {
  string = string || "";
  char = (char || " ").repeat(
    Math.max(0, (amount || 10) - string.length),
  );
  return reverse ? char + string : string + char;
};

F.center = function (string, amount, char, left) {
  string = string || "";
  amount = Math.max(0, (amount || 10) - string.length) / 2;
  charFloor = (char || " ").repeat(Math.floor(amount));
  charCeil = (char || " ").repeat(Math.ceil(amount));
  return left
    ? charCeil + string + charFloor
    : charFloor + string + charCeil;
};

F.isJSON = function (string) {
  try {
    JSON.parse(string);
  } catch {
    return false;
  }
  return true;
};

F.isURL = function (string) {
  return !!new RegExp(
    "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    "i",
  ).test(string);
};

F.capitalize = function (string, onlyFirst, keepCase) {
  if (!string) {
    return string;
  }
  if (onlyFirst && !keepCase) {
    if (string.constructor === Array) {
      string = string.join(" ");
    }
    return (
      string[0].toUpperCase() +
      string.slice(1).toLowerCase()
    );
  }
  if (string.constructor === String) {
    string = string.split(" ");
  }
  var output = "";
  for (var i in string) {
    if (!string[i]) {
      output += " " + string[i];
      continue;
    }
    output +=
      " " +
      (!onlyFirst || i == 0
        ? string[i].toString()[0].toUpperCase()
        : string[i].toString()[0]) +
      (keepCase
        ? string[i].toString().slice(1)
        : string[i].toString().slice(1).toLowerCase());
  }
  return output.slice(1);
};

F.format = function (string, ...replace) {
  if (!replace) {
    return string;
  }
  if (typeof replace[0] === "object") {
    replace = replace[0];
  }
  for (var i in replace) {
    string = string.split("{" + i + "}").join(replace[i]);
  }
  return string;
};

F.escapeHTML = function (string) {
  return string.replace(
    /[\u00A0-\u2666<>\&]/g,
    function (c) {
      return (
        "&" +
        (F.chars.html[c.charCodeAt(0)] ||
          "#" + c.charCodeAt(0)) +
        ";"
      );
    },
  );
};

F.truncate = function (string, length, char, includeChar) {
  if (string.length <= length) {
    return string;
  }
  char = char ? char.toString() : "";
  return (
    string.slice(
      0,
      length - (includeChar ? char.length : 0),
    ) + char
  );
};

F.replace = function (string, old, char, onlyFirst) {
  if (!string) {
    return string;
  }
  string = string.toString();
  if (onlyFirst) {
    return string.replace(old, char);
  }
  return string.split(old).join(char);
};

F.hash = function (string) {
  if (typeof string !== "string") {
    return 0;
  }
  var hash = 0;
  for (j = 0; j < string.length; j++) {
    var character = string.charCodeAt(j);
    hash = (hash << 5) - hash + character;
    hash = hash & hash;
  }
  return hash;
};

F.redact = function (string, amount, char) {
  if (string.length <= length) {
    return string;
  }
  amount = amount || 3;
  char = char ? char.toString() : "*";
  if (amount <= 0) {
    return char.repeat(string.length);
  }
  return (
    string.slice(0, amount) +
    char.repeat(Math.max(0, string.length - amount))
  );
};

F.splitAt = function (string, number) {
  if (!string) {
    return string;
  }
  string = string.toString();
  number = number || 3;
  return string.match(
    new RegExp(".{1," + number + "}", "g"),
  );
};

/* Number */

F.randomFloat = function (min, max) {
  if (isNaN(max + min)) {
    return NaN;
  }
  max = Math.max(min, max);
  min = Math.min(min, max);
  // min--;
  return Math.random() * (max - min) + min;
};

F.randomInt = function (min, max) {
  if (isNaN(max + min)) {
    return NaN;
  }
  return Math.round(F.randomFloat(min, max));
};

F.randomChoice = function (array) {
  if (!array) {
    return;
  }
  return array[F.randomInt(0, array.length - 1)];
};

F.round = function (number, decimals) {
  if (isNaN(parseFloat(number))) {
    return NaN;
  }
  decimals = 10 ** Math.floor(decimals || 0);
  return Math.round(number * decimals) / decimals;
};

F.floor = function (number, decimals) {
  if (isNaN(parseFloat(number))) {
    return NaN;
  }
  decimals = 10 ** Math.floor(decimals || 0);
  return Math.floor(number * decimals) / decimals;
};

F.ceil = function (number, decimals) {
  if (isNaN(parseFloat(number))) {
    return NaN;
  }
  decimals = 10 ** Math.floor(decimals || 0);
  return Math.ceil(number * decimals) / decimals;
};

F.range = function (min, max, step) {
  max = Math.max(min, max) || 10;
  min = Math.min(min, max) || 0;
  step = step || 1;

  var array = [];
  if (step < 0) {
    for (var i = max - 1; i >= min; i += step) {
      array.push(i);
    }
    return array;
  }
  for (var i = min; i < max; i += step) {
    array.push(i);
  }
  return array;
};

F.border = function (number, min, max) {
  return Math.max(min, Math.min(max, number));
};

F.wrap = function (number, min, max) {
  return F.operate.amod(number + min, max) - min;
};

F.hcf = function (a, b) {
  for (var i = Math.floor(a / 2); i > 1; i--) {
    if (!(a % i || b % i)) {
      return i;
    }
  }
  return 1;
};

F.lcm = function (a, b) {
  for (var i = 1; i < b; i++) {
    if (!((a * i) % b)) {
      return a * i;
    }
  }
  return a * b;
};

F.ordinal = function (number) {
  if (isNaN(number)) {
    return NaN;
  }
  var ordinal = "th";
  switch (number.toString().slice(-1)) {
    case "1":
      ordinal = "st";
      break;
    case "2":
      ordinal = "nd";
      break;
    case "3":
      ordinal = "rd";
      break;
  }
  return number + ordinal;
};

F.bool2bin = function (...values) {
  var string = "";
  for (i in values) {
    string += values[i] ? 1 : 0;
  }
  return string;
};

F.operate = {
  amod: function (a, b) {
    return a - b * Math.floor(a / b);
  },
  sin: function (x) {
    return (
      Math.min(
        1,
        Math.floor(F.amod((2 * x) / Math.PI - 1, 4) / 2),
      ) *
        (Math.floor(F.amod((2 * x) / Math.PI, 2)) *
          (Math.floor((2 * x) / Math.PI) -
            (2 * x) / Math.PI) **
            2 +
          Math.floor(F.amod((2 * x) / Math.PI + 1, 2)) *
            (2 -
              (Math.floor((-2 * x) / Math.PI) +
                (2 * x) / Math.PI) **
                2)) +
      Math.min(
        1,
        Math.floor(F.amod((2 * x) / Math.PI + 1, 4) / 2),
      ) *
        (Math.floor(F.amod((-2 * x) / Math.PI, 2)) *
          (Math.floor((-2 * x) / Math.PI) +
            (2 * x) / Math.PI) **
            2 +
          Math.floor(F.amod((-2 * x) / Math.PI + 1, 2)) *
            (2 -
              (Math.floor((2 * x) / Math.PI) -
                (2 * x) / Math.PI) **
                2)) -
      1
    );
  },
  cos: x => F.sin(x - Math.PI / 2),
};

F.average = {};

F.addCommas = function (number, ignoreDecimals) {
  if (isNaN(parseFloat(number))) {
    return NaN;
  }
  var string = number.toString().split(".")[0];
  length = 3 - (string.length % 3);
  string = F.splitAt(
    "~".repeat(length > 2 ? 0 : Math.abs(length)) + string,
  );
  string[0] = F.replace(string[0], "~", "");
  var decimals = number.toString().split(".")[1];
  if (!ignoreDecimals) {
    decimals = F.splitAt(decimals);
  }
  return string + (decimals ? "." + decimals : "");
};

F.snap = function (number, array, callback) {};

/* Date / Time */

F.sleep = function (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time * 1000);
  });
};

F.twelveHour = function (hour) {
  if (isNaN(parseInt(hour))) {
    return NaN;
  }
  if (hour > 12) {
    hour -= 12;
  }
  return hour;
};

F.parseRelativeTime = function (milliseconds, format) {
  var units = [
    {
      amount: 1000,
      prefix: "s",
      singular: "second",
      plural: "seconds",
    },
    {
      amount: 60,
      prefix: "m",
      singular: "minute",
      plural: "minutes",
    },
    {
      amount: 60,
      prefix: "h",
      singular: "hour",
      plural: "hours",
    },
    {
      amount: 24,
      prefix: "d",
      singular: "day",
      plural: "days",
    },
    {
      amount: 7,
      prefix: "w",
      singular: "week",
      plural: "weeks",
    },
    {
      amount: 4.34524,
      prefix: "M",
      singular: "month",
      plural: "months",
    },
    {
      amount: 12,
      prefix: "Y",
      singular: "year",
      plural: "years",
    },
    {
      amount: 10,
      prefix: "D",
      singular: "decade",
      plural: "decades",
    },
    {
      amount: 10,
      prefix: "C",
      singular: "century",
      plural: "centuries",
    },
  ];
  var time = [
    {
      amount: milliseconds,
      prefix: "ms",
      singular: "millisecond",
      plural: "millisecond",
    },
  ];

  for (var i in units) {
    if (time[0].amount >= units[i].amount) {
      if (time[0].amount % units[i].amount) {
        time = [
          {
            ...units[i],
            amount: Math.floor(
              time[0].amount / units[i].amount,
            ),
          },
          {
            ...time[0],
            amount: time[0].amount % units[i].amount,
          },
          ...time.slice(1),
        ];
      } else {
        time = [
          {
            ...units[i],
            amount: Math.floor(
              time[0].amount / units[i].amount,
            ),
          },
          ...time.slice(1),
        ];
      }
    } else {
      break;
    }
  }

  if (typeof format !== "function") {
    format = array => {
      var output = [];
      for (var i = 0; i < Math.min(3, array.length); i++) {
        var amount = Math.floor(array[i].amount);
        output.push(
          amount.toString() +
            " " +
            (amount === 1
              ? array[i].singular
              : array[i].plural),
        );
      }
      return output.join(", ");
    };
  }

  return format(time);
};

F.getWeek = function (date) {
  if (!date || date.constructor != Date) {
    date = new Date();
  }
  date = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ),
  );
  date.setUTCDate(
    date.getUTCDate() + 4 - (date.getUTCDay() || 7),
  );
  return Math.ceil(
    ((date -
      new Date(Date.UTC(date.getUTCFullYear(), 0, 1))) /
      86400000 +
      1) /
      7,
  );
};

/* Array */

F.removeItem = function (array, item, isIndex, onlyFirst) {
  if (!array) {
    return;
  }
  var isString = false;
  if (typeof array === "string") {
    isString = true;
    array = array.split("");
  }
  if (isIndex) {
    var output = [
      ...array.slice(0, item),
      ...array.slice(item + 1),
    ];
    if (isString) {
      return output.join("");
    }
    return output;
  }
  var output = [];
  var done = false;
  for (var i in array) {
    if (array[i] == item && (!onlyFirst || !done)) {
      done = true;
      continue;
    }
    output.push(array[i]);
  }
  if (isString) {
    return output.join("");
  }
  return output;
};

F.shuffle = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
};

/* Object */

F.output = function (object) {};

F.sort = function (object, callback) {};

/* Game */

F.collide = {};

F.collide.rect2rect = function (a, b) {
  return (
    a.x + a.w > b.x &&
    a.x < b.x + b.w &&
    b.y + b.h > a.y &&
    b.y < a.y + a.h
  );
};

F.collide.rect2circle = function (a, b) {};

F.collide.circle2circle = function (a, b) {
  return (
    Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) <
    a.r + b.r
  );
};

F.collide.polygons = function (a, b) {};

F.coords2angle = function (x1, y1, x2, y2) {};

F.distance = function (x1, y1, x2, y2) {};

F.angle2coords = function (x1, y1, angle, distance) {};

F.trace = function (x1, y1, x2, y2, density) {};

/* HTML Canvas */

F.fillCanvas = function (ctx, color) {
  var old = ctx.fillStyle;
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = old;
};

F.fillRoundRect = function (ctx, x, y, w, h, radius) {};

F.strokeRoundRect = function (ctx, x, y, w, h, radius) {};

F.getCanvasPixel = function (canvas, x, y) {};

F.scanCanvas = function (canvas) {};

/* Event listeners */

if (
  () => {
    try {
      document;
      window;
    } catch {
      return false;
    }
    return true;
  }
) {
  F.getKeyCodes = function (object) {};

  F.keys = {};
  window.onkeydown = function (event) {
    F.keys[event.key] = true;
    F.keys[event.code] = true;
    F.keys[event.keyCode] = true;
  };
  window.onkeyup = function (event) {
    F.keys[event.key] = false;
    F.keys[event.code] = false;
    F.keys[event.keyCode] = false;
  };

  F.mouse = {};

  F.setMouse = function (event) {
    var {offsetLeft, offsetTop} = F.mouse;
    F.mouse = {
      x: event.clientX - offsetLeft,
      y: event.clientY - offsetTop,
      r: 1,
      w: 1,
      h: 1,
      offsetLeft,
      offsetTop,
      touchDown: false,
      isFirstTouch: false,
    };
    for (var i in F.mouseButtons) {
      F.mouse[F.mouseButtons[i]] = false;
    }
  };

  F.setMouseOffset = function (offset) {
    F.mouse.offsetLeft = offset.left || 0;
    F.mouse.offsetTop = offset.top || 0;
  };

  var mouseEvents = [
    "onclick",
    "ondblclick",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
  ];
  for (var i in mouseEvents) {
    window[mouseEvents[i]] = F.setMouse;
  }

  F.mouseButtons = [
    "left",
    "middle",
    "right",
    "four",
    "five",
  ];
  window.onmousedown = function (event) {
    F.mouse[F.mouseButtons[event.button]] = true;
  };

  F.mouseOnCanvas = function (canvas, ignoreOffset) {
    var rect = canvas.getBoundingClientRect();
    if (ignoreOffset) {
      rect = {left: 0, top: 0};
    }
    return (
      F.mouse.x > rect.left &&
      F.mouse.y > rect.top &&
      F.mouse.x < canvas.width + rect.left &&
      F.mouse.y < canvas.height + rect.top
    );
  };

  addEventListener("touchstart", function (event) {
    F.setMouse(event.touches[0]);
    F.mouse.touchDown = true;
    F.mouse.isFirstTouch = true;
  });
  addEventListener("touchmove", function (event) {
    F.setMouse(event.touches[0]);
    F.mouse.touchDown = true;
  });
  addEventListener("touchend", function (event) {
    F.mouse.touchDown = false;
  });
}

/* Colour */

F.parseColor = function (color) {};

F.toHex = function (number) {};

F.hex2rgb = function (hex) {
  var c;
  if (!/^#/.test(hex)) {
    hex = "#" + hex;
  }
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return {
      r: (c >> 16) & 255,
      g: (c >> 8) & 255,
      b: c & 255,
    };
  }
  if (/^#([A-Fa-f0-9]{4}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return {
      r: (c >> 24) & 255,
      g: (c >> 16) & 255,
      b: (c >> 8) & 255,
      a: c & 255,
    };
  }
};

F.hex2hsv = function (hex) {
  return F.rgb2hsv(F.hex2rgb(hex));
};

F.toHex = function (c) {
  if (c || c == 0) {
    let hex = c.toString(16);
    if (hex) {
      return hex.length == 1
        ? "0" + hex.toUpperCase()
        : hex.toUpperCase();
    }
  }
  return "FF";
};

F.rgb2hex = function (r, g, b, a) {
  if (arguments.length === 1) {
    if (r instanceof Object) {
      (g = r.g), (b = r.b), (a = r.a), (r = r.r);
    } else if (r instanceof Array) {
      (g = h[1]), (b = h[2]), (a = h[3]), (r = r[0]);
    } else {
      throw new F.InputError("Unknown RGB format");
    }
  }
  if (r == undefined || g == undefined || b == undefined) {
    throw new F.InputError("Unknown RGB format");
  }

  if (a == undefined) {
    return "#" + F.toHex(r) + F.toHex(g) + F.toHex(b);
  }
  return (
    "#" + F.toHex(r) + F.toHex(g) + F.toHex(b) + F.toHex(a)
  );
};

F.rgb2hsv = function (r, g, b, a) {
  if (arguments.length === 1) {
    if (r instanceof Object) {
      (g = r.g), (b = r.b), (a = r.a), (r = r.r);
    } else if (r instanceof Array) {
      (g = h[1]), (b = h[2]), (a = h[3]), (r = r[0]);
    } else {
      throw new F.InputError("Unknown RGB format");
    }
  }
  if (r == undefined || g == undefined || b == undefined) {
    throw new F.InputError("Unknown RGB format");
  }

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min,
    h,
    s = max === 0 ? 0 : d / max,
    v = max / 255;
  switch (max) {
    case min:
      h = 0;
      break;
    case r:
      h = g - b + d * (g < b ? 6 : 0);
      h /= 6 * d;
      break;
    case g:
      h = b - r + d * 2;
      h /= 6 * d;
      break;
    case b:
      h = r - g + d * 4;
      h /= 6 * d;
      break;
  }
  return {
    h: Math.round(h * 100),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
  };
};

F.hsv2hex = function (hsv) {
  return F.rgb2hex(F.hsv2rgb(hsv));
};

F.hsv2rgb = function (h, s, v) {
  if (arguments.length === 1) {
    if (h instanceof Object) {
      (s = h.s), (v = h.v), (h = h.h);
    } else if (h instanceof Array) {
      (s = h[1]), (v = h[2]), (h = h[0]);
    } else {
      throw new F.InputError("Unknown HSV format");
    }
  }
  if (h == undefined || s == undefined || v == undefined) {
    throw new F.InputError("Unknown HSV format");
  }

  var r, g, b, i, f, p, q, t;
  h /= 100;
  s /= 100;
  v /= 100;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

F.randomHex = function () {};

F.cssColors = {};

/* HTML Element / Document */

F.url = {};

F.getUrl = function () {};

F.setCaret = function (element, position) {};

F.getCaret = function (element) {};

F.copy = function (text) {};

F.download = function (image) {};

F.frequency = {};
