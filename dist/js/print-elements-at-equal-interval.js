"use strict";

// 实现依次输出5=》0,1,2,3,4
//使用立即执行匿名函数
var printElement1 = function printElement1() {
  for (var i = 0; i < 5; i++) {
    (function (e) {
      setTimeout(function () {
        return console.log(new Date(), e);
      }, 1000);
    })(i);
  }
  console.log(new Date(), i);
};
// printElement1();
// 额外使用一个函数，将setTimeout放在一个新的作用域下并传递参数
var printElement2 = function printElement2() {
  var output = function output(value) {
    setTimeout(function () {
      return console.log(value);
    }, 1000);
  };
  for (var i = 0; i < 5; i++) {
    output(i);
  }
};
// printElement2();

// 实现每隔一段时间打印一个数值
// 使用SetTimeout
var printElement3 = function printElement3() {
  for (var i = 0; i < 5; i++) {
    (function (e) {
      setTimeout(function () {
        return console.log(e);
      }, e * 1000);
    })(i);
  }
};
// printElement3();
// 使用setInterval
var printElement4 = function printElement4() {
  var i = 0;
  var timer = setInterval(function () {
    if (i > 4) {
      window.clearInterval(timer);
    }
    console.log(i);
    i++;
  }, 1000);
};
// printElement4();
// 使用promise
var tasks = [];
var output = function output(i) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(new Date(), i);
      resolve();
    }, i * 1000);
  });
};
for (var j = 0; j < 5; j++) {
  tasks.push(output(j));
}
Promise.all(tasks).then(function () {
  setTimeout(function () {
    console.log(new Date(), i);
  }, 1000);
});
// 模拟一个Sleep函数
var printElement5 = function printElement5() {
  var sleep = function sleep(time) {
    var startTime = new Date().getTime();
    while (true) {
      if (new Date().getTime() - startTime > time) {
        break;
      }
    }
  };
  for (var i = 0; i < 5; i++) {
    console.log(i);
    sleep(1000);
  }
};
// printElement5();