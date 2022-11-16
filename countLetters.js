const countLetters = function(str) {
  const lowercaseStr = str.toLowerCase().split(" ").join("");
  const result = {};
  for (letter of lowercaseStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter] ++;
    }
  }
  return result;
}

console.log(countLetters('LightHouse in the hosue'));