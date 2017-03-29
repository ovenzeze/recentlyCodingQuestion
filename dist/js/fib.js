'use strict';

// 计算斐波那契数列
//1： 使用递归
function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
// console.log(fib(10));
// method 2：use iteration(avoid too many calculated sum keep in call stack)
function fib2(n) {
  var fib3 = 2,
      fib1 = 1,
      fib2 = 1,
      fibArr = [];
  if (n <= 1) {
    return;
  }
  for (var i = 0; i < n; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    fibArr.push(fib3);
  }
  return fibArr;
}
// console.log(fib2(20));
// method 3:use Memoization to cache calculated value
var memoizer = function memoizer(fun, cache) {
  cache = cache || {};
  var shell = function shell(arg) {
    if (!(arg in cache)) {
      cache[arg] = fun(shell, arg);
    }
    return cache[arg];
  };
  return shell;
};
var fib3 = memoizer(function (fib, n) {
  return fib(n - 1) + fib(n - 2);
}, {
  '0': 0,
  '1': 1
});
console.log(fib3(10));