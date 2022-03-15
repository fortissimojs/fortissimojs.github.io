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
    amount: number = 10,
    char: string = " ",
    reverse: boolean = false,
  ): string {
    throw new F.DormantError();
  },

  center: function (
    string: string,
    amount: number = 10,
    char: string = " ",
    reverse: boolean = false,
  ): string {
    throw new F.DormantError();
  },

  isJSON: function (string: string): boolean {
    throw new F.DormantError();
  },

  isURL: function (string: string): boolean {
    throw new F.DormantError();
  },

  isEmail: function (string: string): boolean {
    throw new F.DormantError();
  },

  capitalize: function (
    string: string,
    onlyFirst: boolean = false,
    keepCase: boolean = false,
  ): string {
    throw new F.DormantError();
  },

  format: function (string: string, ...replace: any): string {
    throw new F.DormantError();
  },

  escapeHTML: function (string: string): boolean {
    throw new F.DormantError();
  },

  truncate: function (string: string): string {
    throw new F.DormantError();
  },

  replace: function (
    string: string,
    old: string,
    char: string,
    onlyFirst: boolean = false,
  ): string {
    throw new F.DormantError();
  },

  hash: function (string: string): number {
    throw new F.DormantError();
  },

  redact: function (
    string: string,
    amount: number = 3,
    char: string = "*",
  ): string {
    console.log(amount);
    throw new F.DormantError();
  },

  splitAt: function (string: string, number: number = 3): string[] {
    throw new F.DormantError();
  },

  /* Number */
  randomFloat: function (min: number = NaN, max: number = NaN): number {
    throw new F.DormantError();
  },

  randomInt: function (min: number = NaN, max: number = NaN): number {
    throw new F.DormantError();
  },

  randomChoice: function (array: any[]): any {
    throw new F.DormantError();
  },

  round: function (number: number = NaN, decimals: number = 0): number {
    throw new F.DormantError();
  },

  floor: function (number: number = NaN, decimals: number = 0): number {
    throw new F.DormantError();
  },

  ceil: function (number: number = NaN, decimals: number = 0): number {
    throw new F.DormantError();
  },

  border: function (
    number: number = NaN,
    min: number = NaN,
    max: number = NaN,
  ): number {
    throw new F.DormantError();
  },

  wrap: function (
    number: number = NaN,
    min: number = NaN,
    max: number = NaN,
  ): number {
    throw new F.DormantError();
  },

  hcf: function (a: number, b: number): number {
    throw new F.DormantError();
  },

  lcm: function (a: number, b: number): number {
    throw new F.DormantError();
  },

  ordinal: function (number: number): string {
    throw new F.DormantError();
  },

  bool2bin: function (...values: boolean[]): number {
    throw new F.DormantError();
  },

  mod: function (a: number, b: number): number {
    throw new F.DormantError();
  },

  mean: function (...values: number[]): number {
    throw new F.DormantError();
  },

  addCommas: function (number: number, ignoreDecimal: boolean = false): string {
    throw new F.DormantError();
  },

  snap: function (number: number, array: number[]): number {
    throw new F.DormantError();
  },

  pythag: function (a: number, b: number): number {
    throw new F.DormantError();
  },

  apythag: function (a: number, c: number): number {
    throw new F.DormantError();
  },

  /* Date / Time */
  sleep: function (time: number): void {
    throw new F.DormantError();
  },

  parseTime: function (milliseconds: number, method: Function): string {
    throw new F.DormantError();
  },

  getWeek: function (date: Date): number {
    throw new F.DormantError();
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
