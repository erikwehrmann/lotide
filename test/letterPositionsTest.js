const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPosition", () => {
  it("returns index 1 for the letter 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
});
