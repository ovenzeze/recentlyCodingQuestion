// 先使用组合继承创建一个对象
// let Parent = (name) => {
//   this.name = "I am Parent";
// };
function Parent(name) {
 this.name = "I am Parent";
 };
Parent.prototype.type = "type is parent";
function Child (name,age) {
  Parent.call(this,name);
  this.age = age;
};
Child.prototype = new Parent();
Child.prototype.constructor = Child;
let test1 = new Child("zhangsan",23);
Object.defineProperty(test1,"tel",{
  value: 12324,
  enumable: false
});
// 遍历一个对象的属性
// 1：遍历对象可枚举的所有自身的属性
// 使用Object.key()+for..of[用于遍历所有可遍历（有Symbol.iterator属性）的collection的数值]
// 或for..in+hasOwnProperty[for..in会遍历所有可枚举的属性,包括Prototype]
let traverse1 = (obj) => {
  for(let prop of Object.keys(obj)) {
    console.log(prop);
  }
}
// console.log(traverse1(test1));
let traverse2 = (obj) => {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
}
console.log(traverse2(test1));
console.log("***********************");
// 2：遍历对象所有的（包括可枚举和不可枚举的）自身的属性
// 使用Object.getOwnPropertyNames()使用for..of遍历
let traverse3 = (obj) => {
  for(let prop of Object.getOwnPropertyNames(obj)) {
    console.log(prop);
  }
};
console.log(traverse3(test1));
console.log("***********************");
// 3：遍历对象可枚举的自身和继承的属性
// 使用for..in循环遍历
let getEnumPropertyNames = (obj) => {
    var props = [];
    for (prop in obj) {
        props.push(prop);
    }
    return props;
};
console.log(getEnumPropertyNames(test1));
console.log("***********************");
// 4：遍历对象所有的自身和继承的属性
var getAllPropertyNames = (obj) => {
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
