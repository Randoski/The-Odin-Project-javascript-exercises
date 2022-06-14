const ftoc = function(f) {
  let roundC = (f - 32) * 5 / 9;
  return Math.round(roundC * 10) / 10;
};

const ctof = function(c) {
  let roundF = (c * 9 / 5) + 32;
  return Math.round(roundF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
