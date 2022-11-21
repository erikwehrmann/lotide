const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  for (var key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
    return false
    }
  }
  for (var key in object2) {
    if (Array.isArray(object2[key]) && Array.isArray(object1[key])) {
      if (!eqArrays(object2[key], object1[key])) {
        return false;
      }
    } else if (object2[key] !== object1[key]) {
    return false
    }
  }
  return true;
};

module.exports = eqObjects;