const flatten = function(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === true) {
      for (let j = 0; j < input[i].length; j++) {
        arr.push(input[i][j]);
      }
    } else {
      arr.push(input[i]);
    }
  }
  return arr;
}

module.exports = flatten;
