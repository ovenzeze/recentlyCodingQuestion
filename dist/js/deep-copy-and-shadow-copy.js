'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// 深拷贝和浅拷贝
// 浅拷贝：只复制一层对象的属性
// 深拷贝：递归复制对象所有的属性
// 对于基本类型的值：深拷贝和浅拷贝是一样的，对于Object等复杂类型的值才会有差别
// 对于基本类型，如字符串，布尔值，数字，浅复制是对值的复制，对于对象来说，浅复制是对对象地址的复制，并没有开辟新的栈，也就是复制的结果是两个对象指向同一个地址，修改其中一个对象的属性，则另一个对象的属性也会改变，而深复制则是开辟新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。


// 浅拷贝
// 只会复制对象的一层属性，如果对象的某个属性是引用类型就只会复制地址，那个拷贝的对象和原来的对象指向相同的属性
var shadowCopy = function shadowCopy(src) {
  var dst = {};
  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      dst[key] = src[key];
    }
  }
  return dst;
};

// 深拷贝
// 会递归复制对象所有的属性和方法直至是基本类型的值
// 1：使用ES5新增的create
var newObj1 = Object.create(oldObj);
// 2：使用JSON.parse(JSON.stringify())
// Note： 无法复制函数，会丢失原型链，原型指向Object，但是一般情况都够用了
var newObj = JSON.parse(JSON.stringify(oldObj));
// 3：使用递归
var deepCopy = function deepCopy(origin, traget) {
  var target = target || {};
  for (var key in origin) {
    if (_typeof(origin[key]) === "object") {
      // 还要区分一下对象和数组
      if (origin[key].constructor === Array) {
        target[key] = [];
      } else {
        target[key] = {};
      }
      deepCopy(origin[key], target[key]);
    } else {
      target[key] = origin[key];
    }
  }
  return target;
};
// test
var china = {
  nation: '中国',
  birthplaces: ['北京', '上海', '广州'],
  skincolr: 'yellow',
  friends: ['sk', 'ls']
};
var result = void 0;
console.dir(china);
console.dir(deepCopy(china, result));