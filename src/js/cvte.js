//实现每隔两秒输出数组中的一个元素
// method 1:类似C语言，通过使空载CPU实现，在时间小于2000ms内不跳出循环
let sleep = (n) => {
  let startTime = new Date().getTime();
  while (true) {
    if(new Date().getTime() - startTime > n){
      break;
    }
  }
}
let printArrElement = (arr) => {
  let len = arr.length;
  for(let i = 0;i < len;i++) {
    sleep(2000);
    console.log(arr[i]);
  }
};
// printArrElement([1,2,3,4,5,6,7,8]);
// method 2：使用setInterval计数器实现，需要注意的是不要把计数的部分放在外面，会导致计数器运行时只能得到循环结束的值
let printArrElement2 = (arr) => {
  let len = arr.length;
  let i = 0;
  let timer = setInterval(() => {
    console.log(arr[i]);
    if(i > len-2) {
      window.clearInterval(timer);
    }
    i++;
  },1000);
}
// printArrElement2([1,2,3,4,5,6,7,8]);

// quesition 2:实现将一个URL中对应的字段替换成对象中此字段对应的值
// 使用正则表达式来匹配并替换，注意的是：字符串的replace方法替换后是返回一个新字符串，原字符串并不会改变；使用new RegExp生成正则表达式不需要写正则的标识（开头和结尾的反斜杠）
let parseUrl = (url,params) => {
  let result = url;
  for(let key in params) {
    let reg = new RegExp(`:${key}`);
    result = result.replace(reg,`${params[key]}`);
  }
  return result;
};
// test data
let url = "www.baidu.com/:cid/:name/:class";
let obj = {
  cid: "123",
  name: "chanzen",
  class: "1403"
};
// console.log(parseUrl(url,obj));
