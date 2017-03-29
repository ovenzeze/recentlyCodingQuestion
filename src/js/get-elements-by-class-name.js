let _getElementsByClassName = (node,className) => {
  let matchedList = [],
      count,
      flag;
  let regStart = "(^|[ \n\r\t\f])";
  let regEnd = "([ \n\r\f\t]|$)";
  let reg = new RegExp(`${regStart}${className}${regEnd}`);
  node = document.getElementsByTagName(node)[0];
  let elements = node.getElementsByTagName("*");

  for(let item in elements){
    if(typeof elements[item] == "number"){
      break;
    }
    if(elements[item].getAttribute("class")){
    flag = reg.test(elements[item].getAttribute("class").toString());
    if(flag) {
      matchedList.push(elements[item]);
    }
  }
  }
  console.log(matchedList);
}
let body = document.getElementsByTagName('body');
_getElementsByClassName("div","inner2");
