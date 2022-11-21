const letterPositions = function(str) {
  const lowercaseStr = str.toLowerCase().split(" ").join("");
  const result = {};
  for (let letter = 0; letter < lowercaseStr.length; letter++) {
    if (!result[lowercaseStr.charAt(letter)]) {
      result[lowercaseStr.charAt(letter)] = [];
      result[lowercaseStr.charAt(letter)].push(letter);
    } else {
      result[lowercaseStr.charAt(letter)].push(letter);
    }
  }
  return result;
}

module.exports = letterPositions;