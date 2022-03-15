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
  sleep: function (time: number) {
    throw new F.DormantError();
  },

  parseTime: function (milliseconds: number, format: Function): string {
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

  /* Object */
  /* Color */
  /* Game */
  /* Event Listener */
  /* HTML Document */
  /* HTML Canvas */
  /* Characters */
};
