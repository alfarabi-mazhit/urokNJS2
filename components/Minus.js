const minus = (arr) => {
  let s = 0;
  arr.forEach((element) => {
    s -= element;
  });
  return s;
};
const MaxMinMinus = (a, b) => {
  return a > b ? a - b : b - a;
};
module.exports = { minus, MaxMinMinus };
