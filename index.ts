type TimeUnit = {
  amount: number;
  prefix: string;
  singular: string;
  plural: string;
};

type rgb = {
  r: number;
  g: number;
  b: number;
  a?: number;
};

type hsv = {
  h: number;
  s: number;
  v: number;
  a?: number;
};

type coords = {
  x: number;
  y: number;
};

interface rect extends coords {
  w: number;
  h: number;
}

interface circle extends coords {
  r: number;
}

type boxSimple = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};

interface box extends boxSimple {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

module.exports = {
  /* Error */
  InputError: class extends Error {
    constructor(message: string) {
      super(message);
      this.name = "Fortissimo - InputError";
    }
  },

  EnvError: class extends Error {
    constructor(message: string) {
      super(`Current environment does not support ${message}`);
      this.name = "Fortissimo - EnvError";
    }
  },

  DormantError: class extends Error {
    constructor() {
      super(
        "This function is not implemented yet! Try use an older version, or hold tight!",
      );
      this.name = "Fortissimo - DormantError";
    }
  },

  // Check environment
  env: {
    DOM: function () {
      try {
        window;
        document;
      } catch {
        return false;
      }
      return true;
    },

    NODE: function () {
      try {
        require;
      } catch {
        return false;
      }
      return true;
    },
  },

  /* String */
  fill: function (
    string: string,
    amount = 10,
    char = " ",
    reverse = false,
  ): string {
    var fill = char.repeat(Math.max(0, amount - string.length));
    return reverse ? fill + string : string + fill;
  },

  center: function (
    string: string,
    amount: number = 10,
    char: string = " ",
    preferLeft: boolean = false,
  ): string {
    var halfAmount = Math.max(0, amount - string.length) / 2;
    var fillFloor = char.repeat(Math.floor(halfAmount));
    var fillCeil = char.repeat(Math.floor(halfAmount));
    return preferLeft
      ? fillCeil + string + fillFloor
      : fillFloor + string + fillCeil;
  },

  isJSON: function (string: string): boolean {
    try {
      JSON.parse(string);
    } catch {
      return false;
    }
    return true;
  },

  isURL: function (string: string): boolean {
    return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(
      string,
    );
  },

  isEmail: function (string: string): boolean {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
      string,
    );
  },

  capitalize: function (
    string: string,
    onlyFirst = false,
    lowerElse = false,
  ): string {
    if (!string) {
      return string;
    }
    if (onlyFirst && lowerElse) {
      return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    var array = string.split(" ");
    var output = "";
    for (var i = 0; i < array.length; i++) {
      if (!array[i]) {
        continue;
      }

      output +=
        (i ? " " : "") +
        (!onlyFirst || i === 0 ? array[i][0].toUpperCase() : array[i][0]) +
        (!lowerElse ? array[i].slice(1) : array[i].slice(1).toLowerCase());
    }
    return output;
  },

  format: function (string: string, ...replace: any): string {
    if (!replace || !string || typeof string !== "string") {
      return string;
    }
    if (typeof replace[0] === "object") {
      replace = replace[0];
    }
    for (var i in replace) {
      string = string.split("{" + i + "}").join(replace[i]);
    }
    return string;
  },

  truncate: function (
    string: string,
    length = 3,
    char = "...",
    includeChar = false,
  ): string {
    if (string.length <= length) {
      return string;
    }
    return string.slice(0, length - (includeChar ? char.length : 0)) + char;
  },

  replace: function (
    string: string,
    old: string,
    char: string,
    onlyFirst = false,
  ): string {
    if (!string || typeof string !== "string") {
      return string;
    }
    if (onlyFirst) {
      return string.replace(old, char);
    }
    return string.split(old).join(char);
  },

  hash: function (string: string): number {
    if (typeof string !== "string") {
      return 0;
    }
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      var character = string.charCodeAt(i);
      hash = (hash << 5) - hash + character;
      hash = hash & hash;
    }
    return hash;
  },

  redact: function (string: string, amount = 3, char = "*"): string {
    if (string.length <= length) {
      return string;
    }
    if (amount <= 0) {
      return char.repeat(string.length);
    }
    return (
      string.slice(0, amount) + char.repeat(Math.max(0, string.length - amount))
    );
  },

  splitAt: function (string: string, number: number): string[] {
    if (!string) {
      return [];
    }
    return string.match(new RegExp(".{1," + number + "}", "g")) || [];
  },

  /* Number */
  randomFloat: function (min: number, max: number): number {
    max = Math.max(min, max);
    min = Math.min(min, max);
    return Math.random() * (max - min) + min;
  },

  randomInt: function (min: number, max: number): number {
    return Math.round(module.exports.randomFloat(min, max));
  },

  randomChoice: function (array: any[]): any {
    if (!array) {
      return;
    }
    return array[module.exports.randomInt(0, array.length - 1)];
  },

  round: function (number: number, decimals = 0): number {
    decimals = 10 ** Math.floor(decimals);
    return Math.round(number * decimals) / decimals;
  },

  floor: function (number: number, decimals = 0): number {
    decimals = 10 ** Math.floor(decimals);
    return Math.floor(number * decimals) / decimals;
  },

  ceil: function (number: number, decimals = 0): number {
    decimals = 10 ** Math.floor(decimals);
    return Math.ceil(number * decimals) / decimals;
  },

  border: function (number: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, number));
  },

  wrap: function (number: number, min: number, max: number): number {
    return module.exports.mod(number - min, max - min) + min;
  },

  hcf: function (a: number, b: number): number {
    for (var i = Math.floor(a / 2); i > 1; i--) {
      if (!(a % i || b % i)) {
        return i;
      }
    }
    return 1;
  },

  lcm: function (a: number, b: number): number {
    for (var i = 1; i < b; i++) {
      if (!((a * i) % b)) {
        return a * i;
      }
    }
    return a * b;
  },

  ordinal: function (number: number): string {
    if (isNaN(number)) {
      return "NaNth";
    }
    number = Math.floor(number);
    switch (number.toString().slice(-1)) {
      case "1":
        return number + "st";
      case "2":
        return number + "nd";
      case "3":
        return number + "rd";
    }
    return number + "th";
  },

  bool2bin: function (...values: boolean[]): string {
    var string = "";
    for (var i in values) {
      string += values[i] ? 1 : 0;
    }
    return string;
  },

  mod: function (a: number, b: number): number {
    return a - b * Math.floor(a / b);
  },

  mean: function (...values: number[]): number {
    var sum = 0;
    var amount = 0;
    for (var i = 0; i < values.length; i++) {
      if (typeof values[i] === "number") {
        sum += values[i];
        amount++;
      }
    }

    return sum / amount;
  },

  addCommas: function (
    number: number,
    ignoreDecimal = false,
    interval = 3,
  ): string {
    var string = number.toString().split(".")[0];
    length = interval - (string.length % interval);

    var array = module.exports.splitAt(
      "~".repeat(length > interval - 1 ? 0 : Math.abs(length)) + string,
      interval,
    );
    array[0] = module.exports.replace(array[0], "~", "");
    var decimals = number.toString().split(".")[1];

    return (
      array.join(",") +
      (decimals
        ? "." +
          (ignoreDecimal
            ? decimals
            : module.exports.splitAt(decimals, interval).join(","))
        : "")
    );
  },

  snap: function (number: number, array: number[]): number {
    throw new module.exports.DormantError();
  },

  pythag: function (a: number, b: number): number {
    return Math.sqrt(a ** 2 + b ** 2);
  },

  apythag: function (a: number, c: number): number {
    return Math.sqrt(c ** 2 - a ** 2);
  },

  /* Date / Time */
  sleep: function (time: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(resolve, time);
    });
  },

  parseTime: function (
    milliseconds: number,
    join = ", ",
    method = (item: TimeUnit): string => {
      return (
        Math.floor(item.amount).toString() +
        " " +
        (Math.floor(item.amount) === 1 ? item.singular : item.plural)
      );
    },
  ): any {
    var units: TimeUnit[] = [
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
    var time: TimeUnit[] = [
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
              amount: Math.floor(time[0].amount / units[i].amount),
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
              amount: Math.floor(time[0].amount / units[i].amount),
            },
            ...time.slice(1),
          ];
        }
      } else {
        break;
      }
    }

    return time.map(method).join(join);
  },

  getWeek: function (date = new Date()): number {
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    return Math.ceil(
      ((date.getTime() - Date.UTC(date.getUTCFullYear(), 0, 1)) / 86400000 +
        1) /
        7,
    );
  },

  /* Array */
  removeItem: function (
    array: any[],
    item: any,
    isIndex = false,
    onlyFirst = false,
  ): any[] {
    if (!array || array.length <= 0) {
      return array;
    }
    if (isIndex) {
      return [...array.slice(0, item), ...array.slice(item + 1)];
    }

    var removed = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== item) {
        removed.push(array[i]);
      } else if (onlyFirst) {
        removed = [...removed, ...array.slice(i + 1)];
        break;
      }
    }
    return removed;
  },

  shuffle: function (array: any[]): any[] {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  },

  /* Object */
  stringify: function (
    object: any,
    keySeperator = ": ",
    valueSeperator = "\n",
    indent = "  ",
  ): string {
    if (!object || typeof object !== "object") {
      return "";
    }

    var output = [];
    for (var i in object) {
      var value = object[i];
      if (value) {
        if (typeof value === "object") {
          if (value.constructor === Array) {
            if (value.length > 0) {
              value =
                valueSeperator +
                indent +
                module.exports.stringify(
                  value,
                  keySeperator,
                  valueSeperator + indent,
                  indent,
                );
            } else {
              value = "[]";
            }
          } else {
            if (Object.keys(value).length > 0) {
              value =
                valueSeperator +
                indent +
                module.exports.stringify(
                  value,
                  keySeperator,
                  valueSeperator + indent,
                  indent,
                );
            } else {
              value = "{}";
            }
          }
        } else if (typeof value === "function") {
          value = `function (${module.exports
            .getParameters(value)
            .join(", ")})`;
        }
      }

      if (object.constructor === Array) {
        output.push(value);
        continue;
      }
      output.push([i] + keySeperator + value);
    }

    return output.join(valueSeperator);
  },

  sort: function (object: object, method: Function): object {
    throw new module.exports.DormantError();
  },

  deepCopy: function (object: any): object {
    if (object && typeof object === "object") {
      if (object.constructor === Array) {
        var copiedArray = new Array(object.length);
        for (var i = 0; i < object.length; i++) {
          copiedArray[i] = module.exports.deepCopy(object[i]);
        }
        return copiedArray;
      } else {
        var copiedObject: any = {};
        for (var j in object) {
          copiedObject[j] = module.exports.deepCopy(object[j]);
        }
        return copiedObject;
      }
    }
    return object;
  },

  decircleJSON: function (
    object: object,
    markReference: string | null = null,
  ): object {
    var cache: any[] = [];
    return JSON.parse(
      JSON.stringify(object, (key, value) => {
        if (value && typeof value === "object") {
          if (cache.includes(value)) {
            return markReference ? markReference : undefined;
          }
          cache.push(value);
        }
        return value;
      }),
    );
  },

  getParameters: function (func: Function): string[] {
    var string = func
      .toString()
      .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, "");
    var result = string
      .slice(string.indexOf("(") + 1, string.indexOf(")"))
      .match(/([^\s,]+)/g);
    return result === null ? [] : result;
  },

  /* Color */
  toHex: function (number: number): string {
    if (number === 0) {
      return "00";
    }
    if (number) {
      var hex = Math.floor(number).toString(16).toUpperCase();
      if (hex) {
        return hex.length === 1 ? "0" + hex : hex;
      }
    }
    throw new module.exports.InputError("`number` is not defined");
  },

  hex2rgb: function (hex: string): rgb | undefined {
    if (!/^#/.test(hex)) {
      hex = "#" + hex;
    }

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      var string = hex.substring(1);
      if (string.length === 3) {
        string =
          string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
      }
      var number = parseInt("0x" + string);
      return {
        r: (number >> 16) & 255,
        g: (number >> 8) & 255,
        b: number & 255,
        a: 255,
      };
    }

    if (/^#([A-Fa-f0-9]{4}){1,2}$/.test(hex)) {
      var string = hex.substring(1);
      if (string.length === 4) {
        string =
          string[0] +
          string[0] +
          string[1] +
          string[1] +
          string[2] +
          string[2] +
          string[3] +
          string[3];
      }
      var number = parseInt("0x" + string);
      return {
        r: (number >> 24) & 255,
        g: (number >> 16) & 255,
        b: (number >> 8) & 255,
        a: number & 255,
      };
    }

    throw new module.exports.InputError("Unknown hex format");
  },

  hex2hsv: function (hex: string): object {
    throw new module.exports.DormantError();
  },

  rgb2hex: function (rgb: rgb, ignoreOpacity = false): string {
    return (
      "#" +
      module.exports.toHex(rgb.r) +
      module.exports.toHex(rgb.g) +
      module.exports.toHex(rgb.b) +
      (ignoreOpacity
        ? ""
        : module.exports.toHex(Math.floor(rgb.a || rgb.a === 0 ? rgb.a : 255)))
    );
  },

  rgb2hsv: function (rgb: rgb, round = true): hsv {
    var r = round ? Math.floor(rgb.r) : rgb.r,
      g = round ? Math.floor(rgb.g) : rgb.g,
      b = round ? Math.floor(rgb.b) : rgb.b,
      a = rgb.a || rgb.a === 0 ? (round ? Math.floor(rgb.a) : rgb.a) : 255,
      max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      difference = max - min,
      h: number = 0,
      s = max === 0 ? 0 : difference / max,
      v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = g - b + difference * (g < b ? 6 : 0);
        break;
      case g:
        h = b - r + difference * 2;
        h /= 6 * difference;
        break;
      case b:
        h = r - g + difference * 4;
        h /= 6 * difference;
        break;
    }

    if (!round) {
      return {
        h: h * 100,
        s: s * 100,
        v: v * 100,
        a: a * (100 / 255),
      };
    }

    return {
      h: Math.round(h * 100),
      s: Math.round(s * 100),
      v: Math.round(v * 100),
      a: Math.round(a * (100 / 255)),
    };
  },

  hsv2hex: function (hsv: hsv, ignoreOpacity = false): string {
    return module.exports.rgb2hex(module.exports.hsv2rgb(hsv));
  },

  hsv2rgb: function (hsv: hsv, round = true): object {
    var h = (round ? Math.floor(hsv.h) : hsv.h) / 360,
      s = (round ? Math.floor(hsv.s) : hsv.s) / 100,
      v = (round ? Math.floor(hsv.v) : hsv.v) / 100,
      a = hsv.a || hsv.a === 0 ? (round ? Math.floor(hsv.a) : hsv.a) : 255,
      i = Math.floor(h * 6),
      f = h * 6 - i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      r: number = 0,
      g: number = 0,
      b: number = 0;

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

    r *= 255;
    g *= 255;
    b *= 255;

    if (!round) {
      return {
        r,
        g,
        b,
        a: a,
      };
    }

    return {
      r: Math.round(r),
      g: Math.round(g),
      b: Math.round(b),
      a: Math.round(a),
    };
  },

  randomHex: function (opacity = false): string {
    if (opacity) {
      return module.exports.rgb2hex({
        r: module.exports.randomInt(0, 256),
        g: module.exports.randomInt(0, 256),
        b: module.exports.randomInt(0, 256),
        a: module.exports.randomInt(0, 256),
      });
    }

    return module.exports.rgb2hex({
      r: module.exports.randomInt(0, 256),
      g: module.exports.randomInt(0, 256),
      b: module.exports.randomInt(0, 256),
    });
  },

  /* Game */

  collide: {
    polygon: function (a: null, b: null): boolean {
      throw new module.exports.DormantError();
    },

    rect2rect: function (a: rect, b: rect): boolean {
      return (
        a.x + a.w > b.x && a.x < b.x + b.w && b.y + b.h > a.y && b.y < a.y + a.h
      );
    },

    rect2circle: function (a: rect, b: circle): boolean {
      throw new module.exports.DormantError();
    },

    circle2circle: function (a: circle, b: circle): boolean {
      return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.r + b.r;
    },

    distance: function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ): number {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    },

    //? Why does this need Math.PI * 1.5 ? Switch x/y ?
    coords2angle: function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ): number {
      return Math.PI * 1.5 + Math.atan2(x2 - x1, y1 - y2);
    },

    angle2coords: function (
      x: number,
      y: number,
      angle: number,
      distance: number,
    ): coords {
      return {
        x: x + distance * Math.cos(angle),
        y: y + distance * Math.sin(angle),
      };
    },

    trace: function (
      x: number,
      y: number,
      angle: number,
      density: number,
      maxDistance: number,
      callback: Function,
    ): void {
      throw new module.exports.DormantError();
    },
  },

  /* Event Listener */
  keys: {},
  mouse: {},

  setMouseOffset: function (offset: boxSimple): void {
    if (!module.exports.env.DOM()) {
      throw module.exports.EnvError("DOM");
    }

    module.exports.mouse.offsetLeft = offset.left;
    module.exports.mouse.offsetTop = offset.top;
  },

  mouseOver: function (element: HTMLElement, ignoreOffset = false): boolean {
    if (!module.exports.env.DOM()) {
      throw module.exports.EnvError("DOM");
    }

    var rect: box = element.getBoundingClientRect();
    return (
      module.exports.mouse.x > (ignoreOffset ? 0 : rect.left) &&
      module.exports.mouse.y > (ignoreOffset ? 0 : rect.top) &&
      module.exports.mouse.x < rect.width + rect.left &&
      module.exports.mouse.y < rect.height + rect.top
    );
  },

  createListeners: function (): void {
    if (!module.exports.env.DOM()) {
      throw module.exports.EnvError("DOM");
    }

    window.onkeydown = function (event) {
      module.exports.keys[event.key] = true;
      module.exports.keys[event.code] = true;
      module.exports.keys[event.keyCode] = true;
    };
    window.onkeyup = function (event) {
      delete module.exports.keys[event.key];
      delete module.exports.keys[event.code];
      delete module.exports.keys[event.keyCode];
    };

    var mouseEvents: any[] = [
      "onclick",
      "ondblclick",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
    ];
    for (var i = 0; i < mouseEvents.length; i++) {
      window[mouseEvents[i]] = module.exports.setMouse;
    }

    module.exports.mouseButtons = ["left", "middle", "right", "four", "five"];
    window.onmousedown = function (event) {
      module.exports.mouse[module.exports.mouseButtons[event.button]] = true;
    };
    window.onmouseup = function (event) {
      module.exports.mouse[module.exports.mouseButtons[event.button]] = false;
    };

    addEventListener("touchstart", function (event) {
      module.exports.setMouse(event.touches[0]);
      module.exports.mouse.touchDown = true;
      module.exports.mouse.isFirstTouch = true;
    });
    addEventListener("touchmove", function (event) {
      module.exports.setMouse(event.touches[0]);
      module.exports.mouse.touchDown = true;
    });
    addEventListener("touchend", function (event) {
      module.exports.mouse.touchDown = false;
    });
  },

  parseControls: function (object: any): object {
    throw new module.exports.DormantError();
  },

  /* HTML Document */
  setQuery: function (key: string, value: any): void {
    throw new module.exports.DormantError();
  },

  setCaret: function (element: HTMLElement, position: number): void {
    throw new module.exports.DormantError();
  },

  getCaret: function (element: HTMLElement): number {
    throw new module.exports.DormantError();
  },

  copy: function (text: string): void {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        throw err;
      }
      document.body.removeChild(textArea);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {},
      function (err) {
        throw err;
      },
    );
  },

  download: function (image: null): void {
    throw new module.exports.DormantError();
  },

  /* HTML Canvas */
  fillCanvas: function (ctx: CanvasRenderingContext2D): void {
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  },

  clearCanvas: function (ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  },

  fillRoundRect: function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius = Math.min(w, h) / 2,
  ): void {
    if (!radius && radius !== 0) {
      radius = Math.min(w, h) / 2;
    }
    if (w < 2 * radius) {
      radius = w / 2;
    }
    if (h < 2 * radius) {
      radius = h / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.fill();
  },

  strokeRoundRect: function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius = Math.min(w, h) / 2,
  ): void {
    if (!radius && radius !== 0) {
      radius = Math.min(w, h) / 2;
    }
    if (w < 2 * radius) {
      radius = w / 2;
    }
    if (h < 2 * radius) {
      radius = h / 2;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.stroke();
  },

  getCanvasPixel: function (
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
  ): void {
    throw new module.exports.DormantError();
  },

  scanCanvas: function (canvas: HTMLCanvasElement): void {
    throw new module.exports.DormantError();
  },
};
