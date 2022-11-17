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

const map = function(array, callback) {
  const results =[];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual((results1), ['g', 'c', 't', 'm', 't']);

