const countOnly = function(allItems, itemsToCount) {
  const countedItems = {};
  for (let item of allItems) {
    if (itemsToCount[item]){
      if (!countedItems[item]) {
        countedItems[item] = 1;
      } else if (countedItems[item]) {
        countedItems[item] ++;
      }
    }
  }
  return countedItems;
}

module.exports = countOnly;