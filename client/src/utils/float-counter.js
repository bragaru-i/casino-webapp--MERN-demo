const chipValue = (str) => {
  if (str === 'c2half') return 2.5;
  if (str === 'bonus') return 'bonus';
  return str.slice(1);
};
export default chipValue;
