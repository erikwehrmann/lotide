const middle = function (input) {
  const output = [];
  const middleIndex = [Math.floor(input.length / 2)];
  if (input.length % 2 === 0) {
    middleIndex.unshift(middleIndex[0] - 1);
  }
  for (let i = 0; i < middleIndex.length; i++) {
    output.push(input[middleIndex[i]]);
  }
  return output;
};

module.exports = middle;