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
  console.log(arr);
}



flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
