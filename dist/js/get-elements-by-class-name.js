"use strict";

var _getElementsByClassName = function _getElementsByClassName(node, className) {
  var matchedList = [],
      count = void 0,
      flag = void 0;
  var regStart = "(^|[ \n\r\t\f])";
  var regEnd = "([ \n\r\f\t]|$)";
  var reg = new RegExp("" + regStart + className + regEnd);
  node = document.getElementsByTagName(node)[0];
  var elements = node.getElementsByTagName("*");

  for (var item in elements) {
    if (typeof elements[item] == "number") {
      break;
    }
    if (elements[item].getAttribute("class")) {
      flag = reg.test(elements[item].getAttribute("class").toString());
      if (flag) {
        matchedList.push(elements[item]);
      }
    }
  }
  console.log(matchedList);
};
var body = document.getElementsByTagName('body');
_getElementsByClassName("div", "inner2");