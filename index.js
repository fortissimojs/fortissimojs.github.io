"use strict";
module.exports = {
    /* Error */
    InputError: class extends Error {
        constructor(message) {
            super(message);
            this.name = "Fortissimo - InputError";
        }
    },
    EnvError: class extends Error {
        constructor(message) {
            super(`Current environment does not support ${message}`);
            this.name = "Fortissimo - EnvError";
        }
    },
    DormantError: class extends Error {
        constructor() {
            super("This function is not implemented yet! Try use an older version, or hold tight!");
            this.name = "Fortissimo - DormantError";
        }
    },
    ListenerError: class extends Error {
        constructor() {
            super("Listeners have not been created yet. Use `F.createListeners()`");
            this.name = "Fortissimo - ListenerError";
        }
    },
    deprecateWarned: {},
    deprecateWarning: function (oldName, newName) {
        if (module.exports.deprecateWarned[oldName]) {
            return;
        }
        module.exports.deprecateWarned[oldName] = true;
        console.warn(`Fortissimo - The function \`${oldName}\` is deprecated! Use \`${newName}\` instead!`);
    },
    // Check environment
    env: {
        DOM: function () {
            try {
                window;
                document;
            }
            catch {
                return false;
            }
            return true;
        },
        NODE: function () {
            try {
                process;
            }
            catch {
                return false;
            }
            return true;
        },
    },
    /* String */
    fill: function (string, amount = 10, char = " ", reverse = false) {
        var fill = char.repeat(Math.max(0, amount - string.length));
        return reverse ? fill + string : string + fill;
    },
    center: function (string, amount = 10, char = " ", preferLeft = false) {
        var halfAmount = Math.max(0, amount - string.length) / 2;
        var fillFloor = char.repeat(Math.floor(halfAmount));
        var fillCeil = char.repeat(Math.ceil(halfAmount));
        return preferLeft
            ? fillCeil + string + fillFloor
            : fillFloor + string + fillCeil;
    },
    isJSON: function (string) {
        try {
            JSON.parse(string);
        }
        catch {
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
    capitalize: function (string, onlyFirst = false, lowerElse = false) {
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
    format: function (string, ...replace) {
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
    truncate: function (string, length = 3, char = "...", includeChar = false) {
        if (string.length <= length) {
            return string;
        }
        return string.slice(0, length - (includeChar ? char.length : 0)) + char;
    },
    replace: function (string, old, char, onlyFirst = false) {
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
            hash = (hash << 5) - hash + string.charCodeAt(i);
            hash &= hash;
        }
        return hash;
    },
    redact: function (string, amount = 3, char = "*") {
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
        return string.match(new RegExp(".{1," + number + "}", "g")) || [];
    },
    /* Number */
    randomFloat: function (min, max) {
        if (min === max) {
            return min;
        }
        if (min > max) {
            throw new module.exports.InputError("Minimum greater than maximum");
        }
        return Math.random() * (max - min) + min;
    },
    randomInt: function (min, max, floor = true) {
        return Math[floor ? "floor" : "round"](module.exports.randomFloat(min, max));
    },
    randomChoice: function (array) {
        if (!array) {
            return;
        }
        return array[module.exports.randomInt(0, array.length - 1)];
    },
    round: function (number, decimals = 0) {
        decimals = 10 ** Math.floor(decimals);
        return Math.round(number * decimals) / decimals;
    },
    floor: function (number, decimals = 0) {
        decimals = 10 ** Math.floor(decimals);
        return Math.floor(number * decimals) / decimals;
    },
    ceil: function (number, decimals = 0) {
        decimals = 10 ** Math.floor(decimals);
        return Math.ceil(number * decimals) / decimals;
    },
    clamp: function (number, min, max) {
        return Math.max(min, Math.min(max, number));
    },
    border: function (number, min, max) {
        module.exports.deprecateWarning("border", "clamp");
        return module.exports.clamp(number, min, max);
    },
    wrap: function (number, min, max) {
        return module.exports.mod(number - min, max - min) + min;
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
    bool2bin: function (...values) {
        var string = "";
        for (var i in values) {
            string += values[i] ? 1 : 0;
        }
        return string;
    },
    mod: function (a, b) {
        return a - b * Math.floor(a / b);
    },
    mean: function (...values) {
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
    addCommas: function (number, ignoreDecimal = false, interval = 3) {
        var string = number.toString().split(".")[0];
        length = interval - (string.length % interval);
        var array = module.exports.splitAt("~".repeat(length > interval - 1 ? 0 : Math.abs(length)) + string, interval);
        array[0] = module.exports.replace(array[0], "~", "");
        var decimals = number.toString().split(".")[1];
        return (array.join(",") +
            (decimals
                ? "." +
                    (ignoreDecimal
                        ? decimals
                        : module.exports.splitAt(decimals, interval).join(","))
                : ""));
    },
    snap: function (number, array) {
        throw new module.exports.DormantError();
    },
    pythag: function (a, b) {
        return Math.sqrt(a ** 2 + b ** 2);
    },
    apythag: function (a, c) {
        return Math.sqrt(c ** 2 - a ** 2);
    },
    /* Date / Time */
    sleep: function (time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    },
    parseTime: function (milliseconds, join = ", ", method = (item) => {
        return (Math.floor(item.amount).toString() +
            " " +
            (Math.floor(item.amount) === 1 ? item.singular : item.plural));
    }) {
        var units = [
            {
                amount: 1000,
                prefix: "s",
                singular: "second",
                plural: "seconds",
                size: 1,
            },
            {
                amount: 60,
                prefix: "m",
                singular: "minute",
                plural: "minutes",
                size: 2,
            },
            {
                amount: 60,
                prefix: "h",
                singular: "hour",
                plural: "hours",
                size: 3,
            },
            {
                amount: 24,
                prefix: "d",
                singular: "day",
                plural: "days",
                size: 4,
            },
            {
                amount: 7,
                prefix: "w",
                singular: "week",
                plural: "weeks",
                size: 5,
            },
            {
                amount: 4.34524,
                prefix: "M",
                singular: "month",
                plural: "months",
                size: 6,
            },
            {
                amount: 12,
                prefix: "Y",
                singular: "year",
                plural: "years",
                size: 7,
            },
            {
                amount: 10,
                prefix: "D",
                singular: "decade",
                plural: "decades",
                size: 8,
            },
            {
                amount: 10,
                prefix: "C",
                singular: "century",
                plural: "centuries",
                size: 9,
            },
        ];
        var time = [
            {
                amount: milliseconds,
                prefix: "ms",
                singular: "millisecond",
                plural: "millisecond",
                size: 0,
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
                }
                else {
                    time = [
                        {
                            ...units[i],
                            amount: Math.floor(time[0].amount / units[i].amount),
                        },
                        ...time.slice(1),
                    ];
                }
            }
            else {
                break;
            }
        }
        return time
            .map(method)
            .filter(i => i !== undefined)
            .join(join);
    },
    getWeek: function (date = new Date()) {
        date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
        return Math.ceil(((date.getTime() - Date.UTC(date.getUTCFullYear(), 0, 1)) / 86400000 +
            1) /
            7);
    },
    /* Array */
    removeItem: function (array, item, isIndex = false, onlyFirst = false) {
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
            }
            else if (onlyFirst) {
                removed = [...removed, ...array.slice(i + 1)];
                break;
            }
        }
        return removed;
    },
    shuffle: function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    },
    /* Object */
    stringify: function (object, keySeperator = ": ", valueSeperator = "\n", indent = "  ") {
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
                                    module.exports.stringify(value, keySeperator, valueSeperator + indent, indent);
                        }
                        else {
                            value = "[]";
                        }
                    }
                    else {
                        if (Object.keys(value).length > 0) {
                            value =
                                valueSeperator +
                                    indent +
                                    module.exports.stringify(value, keySeperator, valueSeperator + indent, indent);
                        }
                        else {
                            value = "{}";
                        }
                    }
                }
                else if (typeof value === "function") {
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
    sort: function (object, method) {
        throw new module.exports.DormantError();
    },
    deepCopy: function (object) {
        if (object && typeof object === "object") {
            if (object.constructor === Array) {
                var copiedArray = new Array(object.length);
                for (var i = 0; i < object.length; i++) {
                    copiedArray[i] = module.exports.deepCopy(object[i]);
                }
                return copiedArray;
            }
            else {
                var copiedObject = {};
                for (var j in object) {
                    copiedObject[j] = module.exports.deepCopy(object[j]);
                }
                return copiedObject;
            }
        }
        return object;
    },
    decircleJSON: function (object, markReference = null) {
        var cache = [];
        return JSON.parse(JSON.stringify(object, (key, value) => {
            if (value && typeof value === "object") {
                if (cache.includes(value)) {
                    return markReference ? markReference : undefined;
                }
                cache.push(value);
            }
            return value;
        }));
    },
    getParameters: function (func) {
        var string = func
            .toString()
            .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, "");
        var result = string
            .slice(string.indexOf("(") + 1, string.indexOf(")"))
            .match(/([^\s,]+)/g);
        return result === null ? [] : result;
    },
    /* Color */
    toHex: function (number) {
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
    hex2rgb: function (hex) {
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
    hex2hsv: function (hex) {
        return module.exports.rgb2hsv(module.exports.hex2rgb(hex));
    },
    rgb2hex: function (rgb, ignoreOpacity = false) {
        return ("#" +
            module.exports.toHex(rgb.r) +
            module.exports.toHex(rgb.g) +
            module.exports.toHex(rgb.b) +
            (ignoreOpacity
                ? ""
                : module.exports.toHex(Math.floor(rgb.a || rgb.a === 0 ? rgb.a : 255))));
    },
    rgb2hsv: function (rgb, round = true) {
        var r = round ? Math.floor(rgb.r) : rgb.r, g = round ? Math.floor(rgb.g) : rgb.g, b = round ? Math.floor(rgb.b) : rgb.b, a = rgb.a || rgb.a === 0 ? (round ? Math.floor(rgb.a) : rgb.a) : 255, max = Math.max(r, g, b), min = Math.min(r, g, b), difference = max - min, h = 0, s = max === 0 ? 0 : difference / max, v = max / 255;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = g - b + difference * (g < b ? 6 : 0);
                h /= 6 * difference;
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
        h *= 360;
        s *= 100;
        v *= 100;
        a /= 2.55;
        if (!round) {
            return {
                h,
                s,
                v,
                a,
            };
        }
        return {
            h: Math.round(h),
            s: Math.round(s),
            v: Math.round(v),
            a: Math.round(a),
        };
    },
    hsv2hex: function (hsv, ignoreOpacity = false) {
        return module.exports.rgb2hex(module.exports.hsv2rgb(hsv), ignoreOpacity);
    },
    hsv2rgb: function (hsv, round = true) {
        var h = (round ? Math.floor(hsv.h) : hsv.h) / 360, s = (round ? Math.floor(hsv.s) : hsv.s) / 100, v = (round ? Math.floor(hsv.v) : hsv.v) / 100, a = hsv.a || hsv.a === 0 ? (round ? Math.floor(hsv.a) : hsv.a) : 100, i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), r = 0, g = 0, b = 0;
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
        a *= 2.55;
        if (!round) {
            return {
                r,
                g,
                b,
                a,
            };
        }
        return {
            r: Math.round(r),
            g: Math.round(g),
            b: Math.round(b),
            a: Math.round(a),
        };
    },
    randomHex: function (ignoreOpacity = false, randomOpacity = false) {
        return module.exports.rgb2hex({
            r: module.exports.randomInt(0, 255),
            g: module.exports.randomInt(0, 255),
            b: module.exports.randomInt(0, 255),
            a: randomOpacity ? module.exports.randomInt(0, 255) : 255,
        }, ignoreOpacity);
    },
    /* Game */
    collide: {
        polygon: function (a, b) {
            throw new module.exports.DormantError();
        },
        rect2rect: function (a, b) {
            return (a.x + a.w > b.x && a.x < b.x + b.w && b.y + b.h > a.y && b.y < a.y + a.h);
        },
        circle2rect: function (a, b) {
            var distX = Math.abs(a.x - b.x - b.w / 2);
            var distY = Math.abs(a.y - b.y - b.h / 2);
            if (distX > b.w / 2 + a.r || distY > b.h / 2 + a.r) {
                return false;
            }
            if (distX <= b.w / 2 || distY <= b.h / 2) {
                return true;
            }
            var dx = distX - b.w / 2;
            var dy = distY - b.h / 2;
            return dx * dx + dy * dy <= a.r * a.r;
        },
        rect2circle: function (a, b) {
            return module.exports.collide.circle2rect(b, a);
        },
        circle2circle: function (a, b) {
            return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.r + b.r;
        },
        distance: function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        },
    },
    //? Why does this need Math.PI * 1.5 ? Switch x/y ?
    coords2angle: function (x1, y1, x2, y2) {
        return Math.PI * 1.5 + Math.atan2(x2 - x1, y1 - y2);
    },
    angle2coords: function (x, y, angle, distance) {
        return {
            x: x + distance * Math.cos(angle),
            y: y + distance * Math.sin(angle),
        };
    },
    trace: function (x, y, angle, density, maxDistance, callback) {
        throw new module.exports.DormantError();
    },
    /* Event Listener */
    keys_: null,
    get keys() {
        if (!module.exports.env.DOM()) {
            throw new module.exports.EnvError("DOM");
        }
        if (!module.exports.keys_) {
            throw new module.exports.ListenerError();
        }
        return module.exports.keys_;
    },
    mouse_: null,
    get mouse() {
        if (!module.exports.env.DOM()) {
            throw new module.exports.EnvError("DOM");
        }
        if (!module.exports.mouse_) {
            throw new module.exports.ListenerError();
        }
        return module.exports.mouse_;
    },
    setMouse: function (event) {
        module.exports.mouse_.x =
            event.clientX - (module.exports.mouse_.offsetLeft || 0);
        module.exports.mouse_.y =
            event.clientY - (module.exports.mouse_.offsetTop || 0);
    },
    setMouseOffset: function (offset) {
        if (!module.exports.env.DOM()) {
            throw new module.exports.EnvError("DOM");
        }
        if (!module.exports.mouse_) {
            throw new module.exports.ListenerError();
        }
        module.exports.mouse_.offsetLeft = offset.left;
        module.exports.mouse_.offsetTop = offset.top;
    },
    mouseOver: function (element, ignoreOffset = false) {
        if (!module.exports.env.DOM()) {
            throw new module.exports.EnvError("DOM");
        }
        if (!module.exports.mouse_) {
            throw new module.exports.ListenerError();
        }
        var rect = element.getBoundingClientRect();
        return (module.exports.mouse_.x > (ignoreOffset ? 0 : rect.left) &&
            module.exports.mouse_.y > (ignoreOffset ? 0 : rect.top) &&
            module.exports.mouse_.x < rect.width + rect.left &&
            module.exports.mouse_.y < rect.height + rect.top);
    },
    createListeners: function () {
        if (!module.exports.env.DOM()) {
            throw new module.exports.EnvError("DOM");
        }
        module.exports.keys_ = {};
        module.exports.mouse_ = { r: 1, w: 1, h: 1 };
        window.onkeydown = function (event) {
            module.exports.keys_[event.key] = true;
            module.exports.keys_[event.code] = true;
            module.exports.keys_[event.keyCode] = true;
            // Case-insensitive
            if ("abcdefghijklmnopqrstuvwxyz".includes(event.key.toLowerCase())) {
                module.exports.keys_[event.key.toLowerCase() + "_"] = true;
            }
        };
        window.onkeyup = function (event) {
            delete module.exports.keys_[event.key];
            delete module.exports.keys_[event.code];
            delete module.exports.keys_[event.keyCode];
            delete module.exports.keys_[event.key.toLowerCase() + "_"];
        };
        var mouseEvents = [
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
            module.exports.mouse_[module.exports.mouseButtons[event.button]] = true;
        };
        window.onmouseup = function (event) {
            module.exports.mouse_[module.exports.mouseButtons[event.button]] = false;
        };
        addEventListener("touchstart", function (event) {
            module.exports.setMouse(event.touches[0]);
            module.exports.mouse_.touchDown = true;
            module.exports.mouse_.isFirstTouch = true;
        });
        addEventListener("touchmove", function (event) {
            module.exports.setMouse(event.touches[0]);
            module.exports.mouse_.touchDown = true;
        });
        addEventListener("touchend", function (event) {
            module.exports.mouse_.touchDown = false;
        });
    },
    parseControls: function (object) {
        throw new module.exports.DormantError();
    },
    /* HTML Document */
    setQuery: function (key, value) {
        throw new module.exports.DormantError();
    },
    setCaret: function (element, position) {
        throw new module.exports.DormantError();
    },
    getCaret: function (element) {
        throw new module.exports.DormantError();
    },
    copy: function (text) {
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
            }
            catch (err) {
                throw err;
            }
            document.body.removeChild(textArea);
            return;
        }
        navigator.clipboard.writeText(text).then(function () { }, function (err) {
            throw err;
        });
    },
    download: function (image) {
        throw new module.exports.DormantError();
    },
    /* HTML Canvas */
    fillCanvas: function (ctx) {
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    clearCanvas: function (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    fillRoundRect: function (ctx, x, y, w, h, radius = Math.min(w, h) / 2) {
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
    strokeRoundRect: function (ctx, x, y, w, h, radius = Math.min(w, h) / 2) {
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
    getCanvasPixel: function (canvas, x, y) {
        throw new module.exports.DormantError();
    },
    scanCanvas: function (canvas) {
        throw new module.exports.DormantError();
    },
};
