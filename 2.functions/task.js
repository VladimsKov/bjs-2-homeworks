"use strict";
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    i++;
  }
  
  avg = +((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let sum;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  
  return (Math.abs(max - min));
}
