"use strict";

// 闭包
// 作用：提供一种在函数外部访问函数内部的变量和属性的方法，并且可以让这些变量和属性始终保持在内存中；


// 用法1：用闭包模拟私有方法和变量
// Note：
// 在Counter计数器中，只能通过暴露的showValue方法访问privateCounter变量，
// increment和decrement方法改    变privateCounter的值；
var Counter = function () {
  var privateCounter = 0;
  var changeBy = function changeBy(val) {
    privateCounter += val;
  };
  return {
    increment: function increment() {
      return changeBy(1);
    },
    decrement: function decrement() {
      return changeBy(-1);
    },
    showValue: function showValue() {
      return privateCounter;
    }
  };
}();
// console.log(Counter.showValue()`);
// Counter.increment();
// Counter.increment();
// console.log(Counter.showValue());
// Counter.decrement();
// console.log(Counter.showValue());

// 错误用法2：在循环中引用闭包
for (var i = 0; i < 5; i++) {
  //一个错误的做法，在setTimeout中的回调函数执行时，for循环已经结束
  // setTimeout(() => console.log(i),1000);

  // 使用立即执行函数将每次循环到的i值传入一个匿名函数，
  // 就保证了在setTimeout回调函数执行时，能够取到正确的i值
  (function (e) {
    setTimeout(function () {
      return console.log(e);
    }, 1000);
  })(i);

  // 另一种写法：原理一样

  // setTimeout( ((e) => {
  //   return () => {
  //     console.log(e);
  //   }
  // })(i),1000);
  // 这里要注意this的指向和作用域链的关系，this始终指向调用它的对象，但是作用域链
  // 是和this不一样的东西
}