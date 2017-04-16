"use strict";

// 操作cookie、localStorage和sessionStorage的方法

// 设置cookie
var setCookie = function setCookie(key, value, expiresTime) {
  var date = new date();
  date.setTime(date.getTime() + expiresTime * 24 * 3600 * 1000);
  document.cookie(key + "=" + value + ";expires=" + date.toGMTString() + ";");
};
// 删除cookie
var deleteCookie = function deleteCookie(key) {
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie(key + "=expire;expires=" + date.setGMTString());
};
// 读取指定的cookie
var findCookie = function findCookie(key) {
  var arrCookie = document.cookie.split(";");
  arrCookie.forEach(function (value, index, array) {
    var arrSigleCookie = value.split("=");
    if (arrSigleCookie[0] == key) {
      return arrSigleCookie[1];
    }
  });
};
// 设置localStorage和sessionStorage
通过setItem和getItem接口或者直接使用定义属性的方法设置;
localStorage.setItem("id", "12345");
localStorage.getItem("id");
localStorage.pageCount = 1;