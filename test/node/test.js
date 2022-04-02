const F = require("../../");

for (var i = 0; i < 1e5; i++) {
  var hex = F.randomHex(true);

  console.log(hex);
  F.hex2rgb(hex);
}
