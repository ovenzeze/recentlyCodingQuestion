// 计算斐波那契数列
//1： 使用递归
function fib(n){
    if(n==1||n==2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
// console.log(fib(10));
// method 2：use iteration(avoid too many calculated sum keep in call stack)
function fib2(n){
  let fib3 = 2,
      fib1 = 1,
      fib2 = 1,
      fibArr = [];
  if(n <= 1) {
    return;
  }
  for (let i = 0; i < n; i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    fibArr.push(fib3);
  }
  return fibArr;
}
// console.log(fib2(20));
// method 3:use Memoization to cache calculated value
let memoizer = (fun, cache) => {
 cache = cache || {};
 let shell = function(arg) {
   if( ! (arg in cache)) {
     cache[arg] = fun(shell, arg);
   }
   return cache[arg];
 } ;
 return shell;
};
let fib3 = memoizer( (fib, n) => {
    return fib(n - 1) + fib(n - 2);
}, {
    '0': 0,
    '1': 1
});
console.log(fib3(10));
