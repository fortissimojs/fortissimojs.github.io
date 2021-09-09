var F = {};

/* String */
F.fill = function () {};

F.center = function () {};

F.isJSON = function () {};

F.isURL = function () {};

F.capitalize = function () {};

F.chars = {};

F.format = function () {};

F.escapeHTML = function () {};

F.truncate = function () {};

F.replace = function () {};

F.hash = function () {};

F.redact = function () {};

F.splitAt = function () {};

/* Number */

F.randomFloat = function () {};

F.randomInt = function () {};

F.randomChoice = function () {};

F.generate = function () {};

F.round = function () {};

F.range = function () {};

F.border = function () {};

F.hcf = function () {};

F.lcm = function () {};

F.ordinal = function () {};

F.dec2bin = function () {};

F.bool2bin = function () {};

F.nullish = function () {};

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

F.addCommas = function () {};

F.snap = function () {};

/* Date / Time */

F.sleep = function () {};

F.twelveHour = function () {};

F.parseRelativeTime = function () {};

F.parseMilliseconds = function () {};

F.getWeek = function () {};

/* Array */

F.merge = function () {};

F.removeItem = function () {};

F.shuffle = function () {};

/* Object */

F.output = function () {};

F.sort = function () {};

/* Game */

F.collide = {};

F.coords2angle = function () {};

F.angle2coords = function () {};

F.trace = function () {};

/* HTML Canvas */

F.fillCanvas = function () {};

F.fillRoundRect = function () {};

F.strokeRoundRect = function () {};

F.getCanvasPixel = function () {};

F.scanCanvas = function () {};

/* Event listeners */

F.keyDown = function () {};

F.getKeyCodes = function () {};

F.buttonDown = function () {};

F.getMousePos = function () {};

F.mouseOnCanvas = function () {};

F.touch = {};

/* Colour */

F.parseColor = function () {};

F.toHex = function () {};

F.hex2rgb = function () {};

F.hex2hsv = function () {};

F.rgb2hex = function () {};

F.rgb2hsv = function () {};

F.hsv2hex = function () {};

F.hsv2rgb = function () {};

F.randomHex = function () {};

F.cssColors = {};

/* HTML Element / Document */

F.url = {};

F.getUrl = function () {};

F.setCaret = function () {};

F.getCaret = function () {};

F.copy = function () {};

F.download = function () {};

F.Sound = class { };

F.frequency = {};