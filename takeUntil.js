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

const takeUntil = (array, callback) => {
  const results =[];
  for (let item of array) {
    if (!callback(item)) {
    results.push(item);
    }
    if (callback(item)){
      return results;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);