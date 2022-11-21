const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("return 2 for the length of the result for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for index 0 of the result for['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs' for index 1 of the result for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
  it("returns ['Lighthouse', 'Labs'] as the result of ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(result), ["Lighthouse", "Labs"]);
  });
});