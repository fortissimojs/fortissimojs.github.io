const F = require("../../");

console.log(F.hsv2hex({ h: 100, s: 100, v: 100 }));
console.log(F.hsv2hex({ h: 100, s: 100, v: 100 }, true));
console.log(F.hsv2hex({ h: 100, s: 100, v: 100, a: 100 }));
console.log(F.hsv2hex({ h: 100, s: 100, v: 100, a: 100 }, true));
