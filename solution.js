const strReverse = (str) => {
  if (str.length === 1) return str[0];

  return strReverse(str.slice(1)) + str[0];
};

console.log(strReverse("hello world"));
