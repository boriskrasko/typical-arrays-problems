
exports.min = function min (array) {
  if (array === undefined || array.length === 0) return 0;
  let minimalNumber = Math.min.apply(Math, array);
  return minimalNumber;
};

exports.max = function max (array) {
  if (array === undefined || array.length === 0) return 0;
  let maximalNumber = Math.max.apply(Math, array);
  return maximalNumber;
};

exports.avg = function avg (array) {
   if (array === undefined || array.length === 0) return 0;
   let countNumbersFromArray = array.length
   let sumNumsFromArray = array.reduce((previous, current) => current += previous);
   let avgNumsFromArray = sumNumsFromArray / countNumbersFromArray;
   return avgNumsFromArray;
};