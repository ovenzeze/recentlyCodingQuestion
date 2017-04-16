"use strict";

// 先使用组合继承创建一个对象
// let Parent = (name) => {
//   this.name = "I am Parent";
// };
function Parent(name) {
  this.name = "I am Parent";
};
Parent.prototype.type = "type is parent";
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
};
Child.prototype = new Parent();
Child.prototype.constructor = Child;
var test1 = new Child("zhangsan", 23);
Object.defineProperty(test1, "tel", {
  value: 12324,
  enumable: false
});
// 遍历一个对象的属性
// 1：遍历对象可枚举的所有自身的属性
// 使用Object.key()+for..of[用于遍历所有可遍历（有Symbol.iterator属性）的collection的数值]
// 或for..in+hasOwnProperty[for..in会遍历所有可枚举的属性,包括Prototype]
var traverse1 = function traverse1(obj) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _prop = _step.value;

      console.log(_prop);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};
// console.log(traverse1(test1));
var traverse2 = function traverse2(obj) {
  for (var _prop2 in obj) {
    if (obj.hasOwnProperty(_prop2)) {
      console.log(_prop2);
    }
  }
};
console.log(traverse2(test1));
console.log("***********************");
// 2：遍历对象所有的（包括可枚举和不可枚举的）自身的属性
// 使用Object.getOwnPropertyNames()使用for..of遍历
var traverse3 = function traverse3(obj) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.getOwnPropertyNames(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _prop3 = _step2.value;

      console.log(_prop3);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};
console.log(traverse3(test1));
console.log("***********************");
// 3：遍历对象可枚举的自身和继承的属性
// 使用for..in循环遍历
var getEnumPropertyNames = function getEnumPropertyNames(obj) {
  var props = [];
  for (prop in obj) {
    props.push(prop);
  }
  return props;
};
console.log(getEnumPropertyNames(test1));
console.log("***********************");
// 4：遍历对象所有的自身和继承的属性
var getAllPropertyNames = function getAllPropertyNames(obj) {
  var props = [];
  //do..while循环 do语句内容至少执行一次，当while判断语句为true，反复执行
  do {
    // props = props.concat(Object.getOwnPropertyNames(obj));
    props.push(Object.getOwnPropertyNames(obj));
  } while (obj = Object.getPrototypeOf(obj));
  return props;
};
console.log(getAllPropertyNames(test1));
console.log("***********************");