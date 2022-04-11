function compareArrays(arr1, arr2) {
  let result;
  
  function isEqual(item1) {
    return item1 === arr2[arr1.indexOf(item1)];
  }
  
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every(isEqual);
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  
  resultArr = arr.filter(item => item > 0)
  .filter(item => item % 3 === 0)
  .map(item => item * 10);
  
  return resultArr; // array
}
