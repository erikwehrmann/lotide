const eqArrays = function(a, b,) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b) === true) {
    console.log(`✅✅✅ Assertion Passed: ${a} = ${b}`);
  } else if (eqArrays(a, b) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} = ${b}`);
  }
}


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

assertArraysEqual(letterPositions('hello').e, [1]);