var F = {};

/* String */
F.fill = function (string, amount, char, reverse) {};

F.center = function (string, amount, char) {};

F.isJSON = function (string) {};

F.isURL = function (string) {};

F.capitalize = function (string, allWords, keepCase) {};

F.chars = {};

F.format = function (string, ...replace) {};

F.escapeHTML = function (string) {};

F.truncate = function (string, length, char, includeChar) {};

F.replace = function (string, old, char, global) {};

F.hash = function (string) {};

F.redact = function (string, amount, char) {};

F.splitAt = function (string, number) {};

/* Number */

F.randomFloat = function (min, max) {};

F.randomInt = function (min, max) {};

F.randomChoice = function (array) {};

F.generate = function (seed, outputLength) {};

F.round = function (number, decimals) {};

F.floor = function (number, decimals) {};

F.ceil = function (number, decimals) {};

F.range = function (min, max) {};

F.border = function (min, max) {};

F.hcf = function (a, b) {};

F.lcm = function (a, b) {};

F.ordinal = function (number) {};

F.dec2bin = function (decimal) {};

F.bool2bin = function (...booleans) {};

F.nullish = function (value) {};

F.operate = {
  amod: function () {
    x - 3 * Math.floor(x / 3);
  },
  sin: function (x) {
    return (
      Math.min(1, Math.floor(F.amod((2 * x) / Math.PI - 1, 4) / 2)) *
        (Math.floor(F.amod((2 * x) / Math.PI, 2)) *
          (Math.floor((2 * x) / Math.PI) - (2 * x) / Math.PI) ** 2 +
          Math.floor(F.amod((2 * x) / Math.PI + 1, 2)) *
            (2 - (Math.floor((-2 * x) / Math.PI) + (2 * x) / Math.PI) ** 2)) +
      Math.min(1, Math.floor(F.amod((2 * x) / Math.PI + 1, 4) / 2)) *
        (Math.floor(F.amod((-2 * x) / Math.PI, 2)) *
          (Math.floor((-2 * x) / Math.PI) + (2 * x) / Math.PI) ** 2 +
          Math.floor(F.amod((-2 * x) / Math.PI + 1, 2)) *
            (2 - (Math.floor((2 * x) / Math.PI) - (2 * x) / Math.PI) ** 2)) -
      1
    );
  },
  cos: x => F.sin(x - Math.PI / 2),
};

F.average = {};

F.addCommas = function (number, amount) {};

F.snap = function (number, array, callback) {};

/* Date / Time */

F.sleep = function (time) {};

F.twelveHour = function (hour) {};

F.parseRelativeTime = function (milliseconds, date) {};

F.parseMilliseconds = function (amount, unit, date) {};

F.getWeek = function (date) {};

/* Array */

F.merge = function (a, b) {};

F.removeItem = function (array, item) {};

F.shuffle = function (array) {};

/* Object */

F.output = function (object) {};

F.sort = function (object, callback) {};

/* Game */

F.collide = {};

F.coords2angle = function (x1, y1, x2, y2) {};

F.angle2coords = function (x1, y1, angle) {};

F.trace = function (x1, y1, x2, y2, density) {};

/* HTML Canvas */

F.fillCanvas = function (ctx, color) {};

F.fillRoundRect = function (ctx, x, y, w, h, radius) {};

F.strokeRoundRect = function (ctx, x, y, w, h, radius) {};

F.getCanvasPixel = function (canvas, x, y) {};

F.scanCanvas = function (canvas) {};

/* Event listeners */

F.keyDown = function (number) {};

F.getKeyCodes = function (object) {};

F.buttonDown = function (number) {};

F.getMousePos = function (event, offsetX, offsetY) {};

F.mouseOnCanvas = function (canvas) {};

F.touch = {};

/* Colour */

F.parseColor = function (color) {};

F.toHex = function (number) {};

F.hex2rgb = function (hex) {};

F.hex2hsv = function (hex) {};

F.rgb2hex = function (rgb) {};

F.rgb2hsv = function (rgb) {};

F.hsv2hex = function (hsv) {};

F.hsv2rgb = function (hsv) {};

F.randomHex = function () {};

F.cssColors = {};

/* HTML Element / Document */

F.url = {};

F.getUrl = function () {};

F.setCaret = function (element, position) {};

F.getCaret = function (element) {};

F.copy = function (text) {};

F.download = function (image) {};

F.Sound = class {};

F.frequency = {};
