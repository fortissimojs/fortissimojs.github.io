"use strict";
const F = {
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
                require;
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
        var fillCeil = char.repeat(Math.floor(halfAmount));
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
            var character = string.charCodeAt(i);
            hash = (hash << 5) - hash + character;
            hash = hash & hash;
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
        var array = F.splitAt("~".repeat(length > interval - 1 ? 0 : Math.abs(length)) + string, interval);
        array[0] = F.replace(array[0], "~", "");
        var decimals = number.toString().split(".")[1];
        return (array.join(",") +
            (decimals
                ? "." +
                    (ignoreDecimal
                        ? decimals
                        : F.splitAt(decimals, interval).join(","))
                : ""));
    },
    snap: function (number, array) {
        throw new F.DormantError();
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
        return time.map(method).join(join);
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
                                    F.stringify(value, keySeperator, valueSeperator + indent, indent);
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
                                    F.stringify(value, keySeperator, valueSeperator + indent, indent);
                        }
                        else {
                            value = "{}";
                        }
                    }
                }
                else if (typeof value === "function") {
                    value = `function (${F
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
        throw new F.DormantError();
    },
    deepCopy: function (object) {
        if (object && typeof object === "object") {
            if (object.constructor === Array) {
                var copiedArray = new Array(object.length);
                for (var i = 0; i < object.length; i++) {
                    copiedArray[i] = F.deepCopy(object[i]);
                }
                return copiedArray;
            }
            else {
                var copiedObject = {};
                for (var j in object) {
                    copiedObject[j] = F.deepCopy(object[j]);
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
        return "FF";
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
        throw new F.InputError("Unknown hex format");
    },
    hex2hsv: function (hex) {
        throw new F.DormantError();
    },
    rgb2hex: function (rgb, ignoreOpacity = false) {
        return ("#" +
            F.toHex(rgb.r) +
            F.toHex(rgb.g) +
            F.toHex(rgb.b) +
            (ignoreOpacity
                ? ""
                : F.toHex(Math.floor(rgb.a || rgb.a === 0 ? rgb.a : 255))));
    },
    rgb2hsv: function (rgb, round = true) {
        var r = round ? Math.floor(rgb.r) : rgb.r, g = round ? Math.floor(rgb.g) : rgb.g, b = round ? Math.floor(rgb.b) : rgb.b, a = rgb.a || rgb.a === 0 ? (round ? Math.floor(rgb.a) : rgb.a) : 255, max = Math.max(r, g, b), min = Math.min(r, g, b), difference = max - min, h = 0, s = max === 0 ? 0 : difference / max, v = max / 255;
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
    hsv2hex: function (hsv, ignoreOpacity = false) {
        console.log(F.hsv2rgb(hsv));
        throw new F.DormantError();
    },
    hsv2rgb: function (hsv, round = true) {
        var h = round ? Math.floor(hsv.h) : hsv.h, s = round ? Math.floor(hsv.s) : hsv.s, v = round ? Math.floor(hsv.v) : hsv.v, a = hsv.a || hsv.a === 0 ? (round ? Math.floor(hsv.a) : hsv.a) : 255, i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), r = 0, g = 0, b = 0;
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
        if (!round) {
            return {
                r: r * 255,
                g: g * 255,
                b: b * 255,
                a: a * (255 / 100),
            };
        }
        return {
            r: Math.floor(r * 255),
            g: Math.floor(g * 255),
            b: Math.floor(b * 255),
            a: Math.floor(a * (255 / 100)),
        };
    },
    randomHex: function () {
        return F.rgb2hex(F.randomInt(0, 256), F.randomInt(0, 256), F.randomInt(0, 256));
    },
    /* Game */
    collide: {
        polygon: function (a, b) {
            throw new F.DormantError();
        },
        rect2rect: function (a, b) {
            return (a.x + a.w > b.x && a.x < b.x + b.w && b.y + b.h > a.y && b.y < a.y + a.h);
        },
        rect2circle: function (a, b) {
            throw new F.DormantError();
        },
        circle2circle: function (a, b) {
            return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.r + b.r;
        },
        distance: function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
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
            throw new F.DormantError();
        },
    },
    /* Event Listener */
    keys: {},
    mouse: {},
    setMouseOffset: function (offset) {
        if (!F.env.DOM()) {
            throw F.EnvError("DOM");
        }
        F.mouse.offsetLeft = offset.left;
        F.mouse.offsetTop = offset.top;
    },
    mouseOver: function (element, ignoreOffset = false) {
        if (!F.env.DOM()) {
            throw F.EnvError("DOM");
        }
        var rect = element.getBoundingClientRect();
        return (F.mouse.x > (ignoreOffset ? 0 : rect.left) &&
            F.mouse.y > (ignoreOffset ? 0 : rect.top) &&
            F.mouse.x < rect.width + rect.left &&
            F.mouse.y < rect.height + rect.top);
    },
    createListeners: function () {
        if (!F.env.DOM()) {
            throw F.EnvError("DOM");
        }
        window.onkeydown = function (event) {
            F.keys[event.key] = true;
            F.keys[event.code] = true;
            F.keys[event.keyCode] = true;
        };
        window.onkeyup = function (event) {
            delete F.keys[event.key];
            delete F.keys[event.code];
            delete F.keys[event.keyCode];
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
            window[mouseEvents[i]] = F.setMouse;
        }
        F.mouseButtons = ["left", "middle", "right", "four", "five"];
        window.onmousedown = function (event) {
            F.mouse[F.mouseButtons[event.button]] = true;
        };
        window.onmouseup = function (event) {
            F.mouse[F.mouseButtons[event.button]] = false;
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
    },
    parseControls: function (object) {
        throw new F.DormantError();
    },
    /* HTML Document */
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
        throw new F.DormantError();
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
        throw new F.DormantError();
    },
    scanCanvas: function (canvas) {
        throw new F.DormantError();
    },
};
