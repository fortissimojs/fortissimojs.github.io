type TimeUnit = {
  amount: number;
  prefix: string;
  singular: string;
  plural: string;
};

const F = {
  /* Error */
  InputError: class extends Error {
    constructor(message: string) {
      super(message);
      this.name = "F.InputError";
    }
  },

  EnvError: class extends Error {
    constructor(message: string) {
      super(`Current environment does not support ${message}`);
      this.name = "F.EnvError";
    }
  },

  DormantError: class extends Error {
    constructor() {
      super(
        "This function is not implemented yet! Try use an older version, or hold tight!",
      );
      this.name = "F.DormantError";
    }
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

  format: function (string, ...replace: any): string {
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
    return string.match(new RegExp(".{1," + number + "}", "g"));
  },

  /* Number */
  randomFloat: function (min: number, max: number): number {
    max = Math.max(min, max);
    min = Math.min(min, max);
    return Math.random() * (max - min) + min;
  },

  randomInt: function (min: number, max: number): number {
    return Math.round(F.randomFloat(min, max));
  },

  randomChoice: function (array: any[]): any {
    if (!array) {
      return;
    }
    return array[F.randomInt(0, array.length - 1)];
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
    return F.mod(number - min, max - min) + min;
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

    var array = F.splitAt(
      "~".repeat(length > interval - 1 ? 0 : Math.abs(length)) + string,
      interval,
    );
    array[0] = F.replace(array[0], "~", "");
    var decimals = number.toString().split(".")[1];

    return (
      array.join(",") +
      (decimals
        ? "." +
          (ignoreDecimal ? decimals : F.splitAt(decimals, interval).join(","))
        : "")
    );
  },

  snap: function (number: number, array: number[]): number {
    throw new F.DormantError();
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
    method = (item: TimeUnit): string => {
      return (
        Math.floor(item.amount).toString() +
        " " +
        (Math.floor(item.amount) === 1 ? item.singular : item.plural)
      );
    },
    join = ", ",
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
    throw new F.DormantError();
  },

  shuffle: function (array: any[]): any[] {
    throw new F.DormantError();
  },

  /* Object */
  stringify: function (
    object: object,
    keySeperator: string,
    valueSeperator: string,
    indent: string,
  ): string {
    throw new F.DormantError();
  },

  sort: function (object: object, method: Function): object {
    throw new F.DormantError();
  },

  deepCopy: function (object: object): object {
    throw new F.DormantError();
  },

  decircleJSON: function (object: object): object {
    throw new F.DormantError();
  },

  /* Color */
  toHex: function (number): string {
    throw new F.DormantError();
  },

  hex2rgb: function (hex: string): object {
    throw new F.DormantError();
  },

  hex2hsv: function (hex: string): object {
    throw new F.DormantError();
  },

  rgb2hex: function (...rgba: number[]): number {
    throw new F.DormantError();
  },

  rgb2hsv: function (...rgba: number[]): object {
    throw new F.DormantError();
  },

  hsv2hex: function (...hsva: number[]): number {
    throw new F.DormantError();
  },

  hsv2rgb: function (...hsva: number[]): object {
    throw new F.DormantError();
  },

  randomHex: function (): string {
    throw new F.DormantError();
  },

  /* Game */

  collide: {
    polygon: function (a, b): boolean {
      throw new F.DormantError();
    },

    rect2rect: function (a: object, b: object): boolean {
      throw new F.DormantError();
    },

    rect2circle: function (a: object, b: object): boolean {
      throw new F.DormantError();
    },

    circle2circle: function (a: object, b: object): boolean {
      throw new F.DormantError();
    },

    distance: function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ): number {
      throw new F.DormantError();
    },

    coords2angle: function (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
    ): number {
      throw new F.DormantError();
    },

    angle2coords: function (
      x: number,
      y: number,
      angle: number,
      distance: number,
    ): object {
      throw new F.DormantError();
    },

    trace: function (
      x: number,
      y: number,
      angle: number,
      density: number,
      maxDistance: number,
      callback: Function,
    ): boolean {
      throw new F.DormantError();
    },
  },

  /* Event Listener */
  keys: {},
  mouse: {},

  setMouseOffset: function (offset: object): void {
    throw new F.DormantError();
  },

  mouseOver: function (element: HTMLElement, ignoreOffset = false): boolean {
    throw new F.DormantError();
  },

  createListeners: function (): void {
    throw new F.DormantError();
  },

  parseControls: function (): object {
    throw new F.DormantError();
  },

  /* HTML Document */
  URL: {},

  getURL: function (): object {
    throw new F.DormantError();
  },

  setQuery: function (key: string, value: any): void {
    throw new F.DormantError();
  },

  setCaret: function (element: HTMLElement, position: number): void {
    throw new F.DormantError();
  },

  getCaret: function (element: HTMLElement): number {
    throw new F.DormantError();
  },

  copy: function (text): void {
    throw new F.DormantError();
  },

  download: function (image): void {
    throw new F.DormantError();
  },

  /* HTML Canvas */
  fillCanvas: function (ctx: CanvasRenderingContext2D, color: string): void {
    throw new F.DormantError();
  },

  clearCanvas: function (ctx: CanvasRenderingContext2D): void {
    throw new F.DormantError();
  },

  fillRoundRect: function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius = Math.min(w, h) / 2,
  ): void {
    throw new F.DormantError();
  },

  strokeRoundRect: function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius = Math.min(w, h) / 2,
  ): void {
    throw new F.DormantError();
  },

  getCanvasPixel: function (
    canvas: HTMLCanvasElement,
    x: number,
    y: number,
  ): void {
    throw new F.DormantError();
  },

  scanCanvas: function (canvas: HTMLCanvasElement): void {
    throw new F.DormantError();
  },
};

/* Export to Node */
try {
  module.exports = F;
} catch {}
