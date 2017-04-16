"use strict";

// 输出数组中出现次数第N多的所有元素
// Note:
// 1:找出数组中各元素出现的次数并以元素：次数的形式存储在一个对象中；
// 2：将对象中的次数存储到一个新数组，排序此数组，找出第N大的元素；
// 3：遍历此对象，将次数为第N大的key值存储到一个结果数组中；
var printSpecificTimesElement = function printSpecificTimesElement(arr, n) {
  var arrObj = {},
      tempArr = [],
      resultArr = [],
      count = 0,
      nTimesValue = void 0;
  if (!Array.isArray(arr)) {
    return arr + " is not a Array";
  }
  arr.forEach(function (value, index, array) {
    if (arr.indexOf(value) == index) {
      arrObj[value] = 1;
    } else {
      arrObj[value]++;
    }
  });
  for (var key in arrObj) {
    tempArr.push(arrObj[key]);
  }
  tempArr.sort(function (a, b) {
    return b - a;
  }); //将数组从大到小排序
  //console.log(tempArr);
  tempArr.forEach(function (value, index, array) {
    if (tempArr.indexOf(value) == index) {
      count++;
    }
    if (count == n) {
      nTimesValue = value;
      return;
    }
  });
  for (var _key in arrObj) {
    if (arrObj[_key] == nTimesValue) {
      resultArr.push(_key);
    }
  }
  return "\u51FA\u73B0\u6B21\u6570\u7B2C" + n + "\u591A\u7684\u6B21\u6570\u662F\uFF1A" + nTimesValue + ",\u5143\u7D20\u662F\uFF1A" + resultArr;
};
console.log(printSpecificTimesElement([2, 3, 3, 3, 6, 6, 3, 4, 4, 4, 4, 2, 5, 5, 7, 7, 7, 8, 9], 2));