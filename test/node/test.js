const F = require("../../");

console.log(
  F.parseTime(
    1650940347323,
    undefined,
    (method = item => {
      if (item.size < 2) {
        return;
      }
      return (
        Math.floor(item.amount).toString() +
        " " +
        (Math.floor(item.amount) === 1 ? item.singular : item.plural)
      );
    }),
  ),
);
