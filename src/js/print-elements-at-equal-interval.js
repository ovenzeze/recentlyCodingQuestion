// 实现依次输出5=》0,1,2,3,4
//使用立即执行匿名函数
const printElement1 = () => {
  for(var i = 0; i < 5;i++) {
    (
      (e) => {
        setTimeout( () => console.log(new Date(),e),1000);
      }
    )(i);
  }
  console.log(new Date(),i);
}
// printElement1();
// 额外使用一个函数，将setTimeout放在一个新的作用域下并传递参数
const printElement2 = () => {
  let output = (value) => {
    setTimeout( () => console.log(value),1000);
  }
  for(var i = 0; i < 5; i++) {
    output(i);
  }
}
// printElement2();

// 实现每隔一段时间打印一个数值
// 使用SetTimeout
const printElement3 = () => {
  for( var i = 0; i < 5; i++) {
    ( (e) => {
      setTimeout(() => console.log(e),e*1000);
    })(i);
  }
}
// printElement3();
// 使用setInterval
const printElement4 = () => {
  let i = 0;
  let timer = setInterval( () => {
    if(i > 4) {
      window.clearInterval(timer);
    }
    console.log(i);
    i++;
  },1000);
}
// printElement4();
// 使用promise
const tasks = [];
const output = (i) => new Promise(
    (resolve) => {
      setTimeout( () => {
        console.log(new Date(),i);
        resolve();
      },i*1000);
    }
  );
  for(let j = 0; j < 5; j++) {
    tasks.push(output(j));
  }
  Promise.all(tasks).then(
    () => {
      setTimeout(
        () => {
          console.log(new Date(),i);
        },1000);
    });
// 模拟一个Sleep函数
const printElement5 = () => {
  const sleep = (time) => {
    let startTime = new Date().getTime();
    while(true) {
      if(new Date().getTime() - startTime > time) {
        break;
      }
    }
  };
  for( var i = 0; i < 5; i++) {
    console.log(i);
    sleep(1000);
  }
};
// printElement5();
