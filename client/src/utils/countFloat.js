import floatParser from './float-counter';
const doTotal = (obj) => {
  let chips = Object.keys(obj);
  let result = 0;
  chips
    .filter((chip) => chip !== 'bonus')
    .forEach((chip) => (result += floatParser(chip) * obj[chip]));
  return result;
};

export default doTotal;
