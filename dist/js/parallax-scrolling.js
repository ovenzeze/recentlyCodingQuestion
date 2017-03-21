'use strict';

var twiceBox = document.getElementById('twiceHook');
var threeTimesBox = document.getElementById('threeTimesHook');
var twiceBoxHeight = twiceBox.offsetTop;
var threeTimesBoxHeight = threeTimesBox.offsetTop;
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
if (document.addEventListener) {
  document.addEventListener('scroll', parallaxScrolling);
} else {
  document.attachEvent('onscroll', parallaxScrolling);
}