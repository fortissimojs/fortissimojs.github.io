var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
            var _this = _super.call(this, "Current environment does not support " + message) || this;
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
        var fill = char.repeat(Math.max(0, amount - string.length));
        return reverse ? fill + string : string + fill;
    },
    center: function (string, amount, char, preferLeft) {
        if (amount === void 0) { amount = 10; }
        if (char === void 0) { char = " "; }
        if (preferLeft === void 0) { preferLeft = false; }
        var halfAmount = Math.max(0, amount - string.length) / 2;
        var fillFloor = char.repeat(Math.floor(halfAmount));
        var fillCeil = char.repeat(Math.floor(halfAmount));
        return preferLeft
            ? fillCeil + string + fillFloor
            : fillFloor + string + fillCeil;
    },
    isJSON: function (string) {
        try {
            JSON.parse(string);
        }
        catch (_a) {
            return false;
        }
        return true;
    },
    isURL: function (string) {
        return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(string);
    },
    isEmail: function (string) {
        return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(string);
    },
    capitalize: function (string, onlyFirst, lowerElse) {
        if (onlyFirst === void 0) { onlyFirst = false; }
        if (lowerElse === void 0) { lowerElse = false; }
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
    format: function (string) {
        var replace = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            replace[_i - 1] = arguments[_i];
        }
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
    truncate: function (string, length, char, includeChar) {
        if (length === void 0) { length = 3; }
        if (char === void 0) { char = "..."; }
        if (includeChar === void 0) { includeChar = false; }
        if (string.length <= length) {
            return string;
        }
        return string.slice(0, length - (includeChar ? char.length : 0)) + char;
    },
    replace: function (string, old, char, onlyFirst) {
        if (onlyFirst === void 0) { onlyFirst = false; }
        if (!string || typeof string !== "string") {
            return string;
        }
        if (onlyFirst) {
            return string.replace(old, char);
        }
        return string.split(old).join(char);
    },
    hash: function (string) {
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
    redact: function (string, amount, char) {
        if (amount === void 0) { amount = 3; }
        if (char === void 0) { char = "*"; }
        if (string.length <= length) {
            return string;
        }
        if (amount <= 0) {
            return char.repeat(string.length);
        }
        return (string.slice(0, amount) + char.repeat(Math.max(0, string.length - amount)));
    },
    splitAt: function (string, number) {
        if (!string) {
            return [];
        }
        return string.match(new RegExp(".{1," + number + "}", "g"));
    },
    /* Number */
    randomFloat: function (min, max) {
        max = Math.max(min, max);
        min = Math.min(min, max);
        return Math.random() * (max - min) + min;
    },
    randomInt: function (min, max) {
        return Math.round(F.randomFloat(min, max));
    },
    randomChoice: function (array) {
        if (!array) {
            return;
        }
        return array[F.randomInt(0, array.length - 1)];
    },
    round: function (number, decimals) {
        if (decimals === void 0) { decimals = 0; }
        decimals = Math.pow(10, Math.floor(decimals));
        return Math.round(number * decimals) / decimals;
    },
    floor: function (number, decimals) {
        if (decimals === void 0) { decimals = 0; }
        decimals = Math.pow(10, Math.floor(decimals));
        return Math.floor(number * decimals) / decimals;
    },
    ceil: function (number, decimals) {
        if (decimals === void 0) { decimals = 0; }
        decimals = Math.pow(10, Math.floor(decimals));
        return Math.ceil(number * decimals) / decimals;
    },
    border: function (number, min, max) {
        return Math.max(min, Math.min(max, number));
    },
    wrap: function (number, min, max) {
        return F.mod(number - min, max - min) + min;
    },
    hcf: function (a, b) {
        for (var i = Math.floor(a / 2); i > 1; i--) {
            if (!(a % i || b % i)) {
                return i;
            }
        }
        return 1;
    },
    lcm: function (a, b) {
        for (var i = 1; i < b; i++) {
            if (!((a * i) % b)) {
                return a * i;
            }
        }
        return a * b;
    },
    ordinal: function (number) {
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
    bool2bin: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var string = "";
        for (var i in values) {
            string += values[i] ? 1 : 0;
        }
        return string;
    },
    mod: function (a, b) {
        return a - b * Math.floor(a / b);
    },
    mean: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
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
    addCommas: function (number, ignoreDecimal, interval) {
        if (ignoreDecimal === void 0) { ignoreDecimal = false; }
        if (interval === void 0) { interval = 3; }
        var string = number.toString().split(".")[0];
        length = interval - (string.length % interval);
        var array = F.splitAt("~".repeat(length > interval - 1 ? 0 : Math.abs(length)) + string, interval);
        array[0] = F.replace(array[0], "~", "");
        var decimals = number.toString().split(".")[1];
        return (array.join(",") +
            (decimals
                ? "." +
                    (ignoreDecimal ? decimals : F.splitAt(decimals, interval).join(","))
                : ""));
    },
    snap: function (number, array) {
        throw new F.DormantError();
    },
    pythag: function (a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    },
    apythag: function (a, c) {
        return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    },
    /* Date / Time */
    sleep: function (time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    },
    parseTime: function (milliseconds, method, join) {
        if (method === void 0) { method = function (item) {
            return (Math.floor(item.amount).toString() +
                " " +
                (Math.floor(item.amount) === 1 ? item.singular : item.plural));
        }; }
        if (join === void 0) { join = ", "; }
        var units = [
            {
                amount: 1000,
                prefix: "s",
                singular: "second",
                plural: "seconds"
            },
            {
                amount: 60,
                prefix: "m",
                singular: "minute",
                plural: "minutes"
            },
            {
                amount: 60,
                prefix: "h",
                singular: "hour",
                plural: "hours"
            },
            {
                amount: 24,
                prefix: "d",
                singular: "day",
                plural: "days"
            },
            {
                amount: 7,
                prefix: "w",
                singular: "week",
                plural: "weeks"
            },
            {
                amount: 4.34524,
                prefix: "M",
                singular: "month",
                plural: "months"
            },
            {
                amount: 12,
                prefix: "Y",
                singular: "year",
                plural: "years"
            },
            {
                amount: 10,
                prefix: "D",
                singular: "decade",
                plural: "decades"
            },
            {
                amount: 10,
                prefix: "C",
                singular: "century",
                plural: "centuries"
            },
        ];
        var time = [
            {
                amount: milliseconds,
                prefix: "ms",
                singular: "millisecond",
                plural: "millisecond"
            },
        ];
        for (var i in units) {
            if (time[0].amount >= units[i].amount) {
                if (time[0].amount % units[i].amount) {
                    time = __spreadArrays([
                        __assign(__assign({}, units[i]), { amount: Math.floor(time[0].amount / units[i].amount) }),
                        __assign(__assign({}, time[0]), { amount: time[0].amount % units[i].amount })
                    ], time.slice(1));
                }
                else {
                    time = __spreadArrays([
                        __assign(__assign({}, units[i]), { amount: Math.floor(time[0].amount / units[i].amount) })
                    ], time.slice(1));
                }
            }
            else {
                break;
            }
        }
        return time.map(method).join(join);
    },
    getWeek: function (date) {
        if (date === void 0) { date = new Date(); }
        date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
        return Math.ceil(((date.getTime() - Date.UTC(date.getUTCFullYear(), 0, 1)) / 86400000 +
            1) /
            7);
    },
    /* Array */
    removeItem: function (array, item, isIndex, onlyFirst) {
        if (isIndex === void 0) { isIndex = false; }
        if (onlyFirst === void 0) { onlyFirst = false; }
        throw new F.DormantError();
    },
    shuffle: function (array) {
        throw new F.DormantError();
    },
    /* Object */
    stringify: function (object, keySeperator, valueSeperator, indent) {
        throw new F.DormantError();
    },
    sort: function (object, method) {
        throw new F.DormantError();
    },
    deepCopy: function (object) {
        throw new F.DormantError();
    },
    decircleJSON: function (object) {
        throw new F.DormantError();
    },
    /* Color */
    toHex: function (number) {
        throw new F.DormantError();
    },
    hex2rgb: function (hex) {
        throw new F.DormantError();
    },
    hex2hsv: function (hex) {
        throw new F.DormantError();
    },
    rgb2hex: function () {
        var rgba = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rgba[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    rgb2hsv: function () {
        var rgba = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rgba[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    hsv2hex: function () {
        var hsva = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hsva[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    hsv2rgb: function () {
        var hsva = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            hsva[_i] = arguments[_i];
        }
        throw new F.DormantError();
    },
    randomHex: function () {
        throw new F.DormantError();
    },
    /* Game */
    collide: {
        polygon: function (a, b) {
            throw new F.DormantError();
        },
        rect2rect: function (a, b) {
            throw new F.DormantError();
        },
        rect2circle: function (a, b) {
            throw new F.DormantError();
        },
        circle2circle: function (a, b) {
            throw new F.DormantError();
        },
        distance: function (x1, y1, x2, y2) {
            throw new F.DormantError();
        },
        coords2angle: function (x1, y1, x2, y2) {
            throw new F.DormantError();
        },
        angle2coords: function (x, y, angle, distance) {
            throw new F.DormantError();
        },
        trace: function (x, y, angle, density, maxDistance, callback) {
            throw new F.DormantError();
        }
    },
    /* Event Listener */
    keys: {},
    mouse: {},
    setMouseOffset: function (offset) {
        throw new F.DormantError();
    },
    mouseOver: function (element, ignoreOffset) {
        if (ignoreOffset === void 0) { ignoreOffset = false; }
        throw new F.DormantError();
    },
    createListeners: function () {
        throw new F.DormantError();
    },
    parseControls: function () {
        throw new F.DormantError();
    },
    /* HTML Document */
    URL: {},
    getURL: function () {
        throw new F.DormantError();
    },
    setQuery: function (key, value) {
        throw new F.DormantError();
    },
    setCaret: function (element, position) {
        throw new F.DormantError();
    },
    getCaret: function (element) {
        throw new F.DormantError();
    },
    copy: function (text) {
        throw new F.DormantError();
    },
    download: function (image) {
        throw new F.DormantError();
    },
    /* HTML Canvas */
    fillCanvas: function (ctx, color) {
        throw new F.DormantError();
    },
    clearCanvas: function (ctx) {
        throw new F.DormantError();
    },
    fillRoundRect: function (ctx, x, y, w, h, radius) {
        if (radius === void 0) { radius = Math.min(w, h) / 2; }
        throw new F.DormantError();
    },
    strokeRoundRect: function (ctx, x, y, w, h, radius) {
        if (radius === void 0) { radius = Math.min(w, h) / 2; }
        throw new F.DormantError();
    },
    getCanvasPixel: function (canvas, x, y) {
        throw new F.DormantError();
    },
    scanCanvas: function (canvas) {
        throw new F.DormantError();
    }
};
/* Export to Node */
try {
    module.exports = F;
}
catch (_a) { }
