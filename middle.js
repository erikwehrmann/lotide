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

assertArraysEqual(middle([1, 2, 3]), [2])