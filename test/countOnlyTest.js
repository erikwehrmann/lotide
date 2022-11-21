const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("return 1 for Jason", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("return undefined for Karima", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("return 2 for Fang", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("return undefined for Agouhanna", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});