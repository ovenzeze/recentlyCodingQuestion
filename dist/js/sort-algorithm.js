"use strict";

// 快速排序1 会返回一个新数组
var quickSort = function quickSort(arr) {
  if (arr.length < 1) {
    return arr;
  }
  //  通过使用splice使数组长度不断减小　　
  //  let pivotIndex = Math.floor(arr.length / 2);
  //  let pivot = arr.splice(pivotIndex,1)[0];　　
  var pivot = arr[0];
  console.log(pivot);
  var left = [];
  var right = [];
  arr.forEach(function (value, index, array) {
    if (index == 0) {
      return;
    }
    value < pivot ? left.push(value) : right.push(value);
  });
  return quickSort(left).concat(pivot, quickSort(right));
};
// console.log(quickSort([1,3,1,5,8,3,4,5,6,0,8,9]));
// 快速排序2 就地排序，不会改变原数组
var quickSort2 = function quickSort2(arr, left, right) {
  var i = void 0,
      j = void 0,
      pivot = void 0;
  if (left >= right) {
    return;
  }
  i = left;
  j = right;
  pivot = arr[left];
  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j--;
    }
    arr[i] = arr[j];
    while (i < j && arr[i] <= pivot) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = pivot;
  quickSort2(arr, left, i - 1);
  quickSort2(arr, i + 1, right);
  return arr;
};
// console.log(quickSort2([1,3,1,5,8,3,4,5,6,0,8,9],0,11));
// 冒泡排序
var bubbleSort = function bubbleSort(arr) {
  var len = arr.length,
      flag = true,
      temp = void 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (flag) {
      return arr;
    }
  }
  return arr;
};
console.log(bubbleSort([1, 3, 1, 5, 8, 3, 4, 5, 6, 0, 8, 9]));