var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var F = {
    /* Error */
    InputError: /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(message) {
            var _this = _super.call(this, message) || this;
            _this.name = "F.InputError";
            return _this;
        }
        return class_1;
    }(Error)),
    EnvError: /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2(message) {
            var _this = _super.call(this, "Current environment does not support ".concat(message)) || this;
            _this.name = "F.EnvError";
            return _this;
        }
        return class_2;
    }(Error)),
    DormantError: /** @class */ (function (_super) {
        __extends(DormantError, _super);
        function DormantError() {
            var _this = _super.call(this, "This function is not implemented yet! Try use an older version, or hold tight!") || this;
            _this.name = "F.DormantError";
            return _this;
        }
        return DormantError;
    }(Error)),
    /* String */
    fill: function (string, amount, char, reverse) {
        if (amount === void 0) { amount = 10; }
        if (char === void 0) { char = " "; }
        if (reverse === void 0) { reverse = false; }
        throw new F.DormantError();
    },
    center: function (string, amount, char, reverse) {
        if (amount === void 0) { amount = 10; }
        if (char === void 0) { char = " "; }
        if (reverse === void 0) { reverse = false; }
        throw new F.DormantError();
    },
    isJSON: function (string) {
        throw new F.DormantError();
    },
    isURL: function (string) {
        throw new F.DormantError();
    },
    isEmail: function (string) {
        throw new F.DormantError();
    },
    capitalize: function (string, onlyFirst, keepCase) {
        if (onlyFirst === void 0) { onlyFirst = false; }
        if (keepCase === void 0) { keepCase = false; }
        throw new F.DormantError();
    },
    format: function (string) {
        var replace = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            replace[_i - 1] = arguments[_i];
        }
        throw new F.DormantError();
    },
    escapeHTML: function (string) {
        throw new F.DormantError();
    },
    truncate: function (string) {
        throw new F.DormantError();
    },
    replace: function (string, old, char, onlyFirst) {
        if (onlyFirst === void 0) { onlyFirst = false; }
        throw new F.DormantError();
    },
    hash: function (string) {
        throw new F.DormantError();
    },
    redact: function (string, amount, char) {
        if (amount === void 0) { amount = 3; }
        if (char === void 0) { char = "*"; }
        console.log(amount);
        throw new F.DormantError();
    },
    splitAt: function (string, number) {
        if (number === void 0) { number = 3; }
        throw new F.DormantError();
    },
    /* Number */
    randomFloat: function (min, max) {
        if (min === void 0) { min = NaN; }
        if (max === void 0) { max = NaN; }
        throw new F.DormantError();
    },
    randomInt: function (min, max) {
        if (min === void 0) { min = NaN; }
        if (max === void 0) { max = NaN; }
        throw new F.DormantError();
    },
    randomChoice: function (array) {
        throw new F.DormantError();
    },
    round: function (number, decimals) {
        if (number === void 0) { number = NaN; }
        if (decimals === void 0) { decimals = 0; }
        throw new F.DormantError();
    },
    floor: function (number, decimals) {
        if (number === void 0) { number = NaN; }
        if (decimals === void 0) { decimals = 0; }
        throw new F.DormantError();
    },
    ceil: function (number, decimals) {
        if (number === void 0) { number = NaN; }
        if (decimals === void 0) { decimals = 0; }
        throw new F.DormantError();
    },
    border: function (number, min, max) {
        if (number === void 0) { number = NaN; }
        if (min === void 0) { min = NaN; }
        if (max === void 0) { max = NaN; }
        throw new F.DormantError();
    },
    wrap: function (number, min, max) {
        if (number === void 0) { number = NaN; }
        if (min === void 0) { min = NaN; }
        if (max === void 0) { max = NaN; }
        throw new F.DormantError();
    },
    hcf: function (a, b) {
        throw new F.DormantError();
    },
    lcm: function (a, b) {
        throw new F.DormantError();
    },
    ordinal: function (number) {
        throw new F.DormantError();
    },
    bool2bin: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    mod: function (a, b) {
        throw new F.DormantError();
    },
    mean: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    addCommas: function (number, ignoreDecimal) {
        if (ignoreDecimal === void 0) { ignoreDecimal = false; }
        throw new F.DormantError();
    },
    snap: function (number, array) {
        throw new F.DormantError();
    },
    pythag: function (a, b) {
        throw new F.DormantError();
    },
    apythag: function (a, c) {
        throw new F.DormantError();
    },
    /* Date / Time */
    sleep: function (time) {
        throw new F.DormantError();
    },
    parseTime: function (milliseconds, format) {
        throw new F.DormantError();
    },
    getWeek: function (date) {
        throw new F.DormantError();
    },
    /* Array */
    removeItem: function (array, item, isIndex, onlyFirst) {
        if (isIndex === void 0) { isIndex = false; }
        if (onlyFirst === void 0) { onlyFirst = false; }
        throw new F.DormantError();
    }
};
