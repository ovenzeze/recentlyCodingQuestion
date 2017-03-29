// **********************构造函数继承
function SuperType() {
  this.name = "superType";
  this.sayName = function() {
    console.log(name);
  };
}
function SubType() {
  SuperType.call(this);
}
var test = new SubType();
console.log(test.name);
// ********************原型链继承
function SuperType1() {
  this.name = "superType1";
  this.type = "sub";
  this.sayName = function() {
    console.log(this.name);
  }
}
function SubType1() {
  this.name = "subType1";
}
SubType1.prototype = new SuperType1();
let test2 = new SubType1();
console.log(test.name);
// *********************组合继承（构造原型模式）
function SuperType2() {
  this.name = "superType";
}
//在SuperType2原型上定义共用方法
SuperType2.prototype.sayMyName = function () {
  console.log("SuperType2原型上的方法");
}
function SubType2(name,age) {
  // 通过call继承SuperType2的属性和方法
  SuperType2.call(this);
  this.name = name;
  this.age = age;
}
SubType2.prototype = new SuperType2();
SubType2.prototype.constructor = SubType2;
//在SubType2原型上定义共用的方法
SubType2.prototype.sayName = function () {
  console.log("SubType2原型上的方法");
}
var child1 = new SubType2("zhangzhen",22);
var child2 = new SubType2("chanzen",21);
console.log(child1.name);
console.log(child1.sayName);
console.log(child1.sayMyName);
console.log(child2.name);
console.log(child2.sayName);
console.log(child2.sayMyName);
// ES6继承
// 使用Class Extennd  Super 关键字实现继承
class Parent {
  constructor(){
  this.name = "I am Parent";
  this.type = "parent";
  }
}
class Child extends Parent {
  constructor() {
    super();//相当于constructor
  }
}
let test1 = new Child();
// 子类必须在constructor内调用Super方法，否则新建实例时会报错
// 以为子类没有自己的this对象而是继承父类的this对象然后对其进行加工
