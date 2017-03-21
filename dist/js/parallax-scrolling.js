'use strict';

//Note
// 使用scroll事件触发滚动，IE下用attachEvent绑定事件监听，用"onscroll",其他浏览器用addEventListener，用"scroll"；
// 使用document.body.scrollTop(chrome)document.documentElement.scrollTop(其他浏览器),来获取滚动高度;
// 使用绝对定位，设置Top值来控制元素的位置;
var twiceBox = document.getElementById('twiceHook');
var threeTimesBox = document.getElementById('threeTimesHook');
var twiceBoxHeight = twiceBox.offsetTop;
var threeTimesBoxHeight = threeTimesBox.offsetTop;

if (document.addEventListener) {
  document.addEventListener('scroll', parallaxScrolling);
} else {
  document.attachEvent('onscroll', parallaxScrolling);
}
// scroll function
var parallaxScrolling = function parallaxScrolling() {
  var scrollElement = void 0;
  if (!scrollElement) {
    if (document.body.scrollTop) {
      scrollElement = document.body;
    } else {
      scrollElement = document.documentElement;
    }
  }
  twiceBox.style.top = twiceBoxHeight + 2 * scrollElement.scrollTop + "px";
  threeTimesBox.style.top = threeTimesBoxHeight + 3 * scrollElement.scrollTop + "px";
  if (twiceBox.offsetTop > 1000) {
    twiceBox.style.top = twiceBoxHeight + "px";
    window.scrollTo(0, 0);;
  }
};
// scroll function end