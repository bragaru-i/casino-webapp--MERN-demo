const countChips = (obj) => {
  let total = 0;
  Object.keys(obj)
    .filter((item) => item[0] == 'c' && obj[item])
    .forEach((chip) => {
      let value = parseInt(chip.slice(1));

      total += value * obj[chip];
    });

  return total;
};

module.exports = countChips;
