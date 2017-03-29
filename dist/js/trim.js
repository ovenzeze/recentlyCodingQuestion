"use strict";

//去掉字符串空格
//默认去掉字符串首尾空格，当传入参数options为true时，去掉字符串中所有空格
var myTrim = function myTrim(str, options) {
  if (typeof str != "string") {
    return str + " is not a String";
  }
  var reg1 = new RegExp(" +", "g");
  var reg2 = new RegExp("^( +)|( +)$", "g");
  options ? reg = reg1 : reg = reg2;
  return str.replace(reg, "");
};
console.log(myTrim("  df  gghh"));
console.log(myTrim("  df  gghh", true));