// 封装一个简单的Ajax
// options是一个对象，里面可以包括的参数为：
// type: post或者get，可以有一个默认值
// data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
// onsuccess: 成功时的调用函数
// onfail: 失败时的调用函数
// Note 事件 onreadystatechange readyState = 4 表示请求已完成，收到数据；
//      1 表示连接以打开 还未发送数据
//      2 表示数据已发送 还未收到响应
//      3 响应头已收到，响应体还未收到
//      status为返回的状态码 200 表示OK 其他情况是失败 301 永久重定向 302 临时重定向
//      304 使用缓存
// let myAjax = (url, options) => {
//     let ajax = null,
//         param,
//         data,
//         type;
//     // 创建XML对象
//     if (window.XMLHttpRequest) {
//         ajax = new XMLHttpRequest();
//     } else {
//         ajax = new activeXObject('Microsoft.XMLHTTP');
//     }
//     // 处理要发送的数据
//     param = '';
//     data = options.data ? options.data : -1;
//     if (typeof data === "object") {
//         for (let key in data) {
//             param += `${key}=${data[key]}&`;
//         }
//         param = param.replace(/&$/, '');
//     } else {
//         param = `${data}timestamp${new Date().getTime()}`;
//     }
//     // 处理数据完成
//     // 发送请求
//     type = options.type ? options.type.toUpperCase() : "GET";
//     if (type == "GET") {
//         ajax.open("GET", `${url}?${param}`, true);
//         ajax.send();
//     } else {
//         ajax.open("POST", url, true);
//         ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         ajax.send(param);
//     }
//     // 请求发送完成
//     // 处理结果 onReadyStateChange事件
//     ajax.onreadystatechange = () => {
//         if (ajax.readyState === 4) {
//           if(ajax.status === 200) {
//             options.onsuccess(ajax.responseText,ajax);
//           } else {
//             if (options.onfail) {
//                 options.onfail(ajax);
//             }
//         }
//     }
//   };
//   // 结果处理完成
//   return ajax;
// }
// 函数结束
let options1 = {
  type: "GET",
  onsuccess: (result,obj) => {
    console.log("GET");
    let showResult = (result) => {
      for(let key in result) {
        if(typeof result[key] != "object") {
          console.log(`${key}:${result[key]}`);
        }else {
          console.log('---分割线----');
          showResult(result[key]);
        }
      }
    }
    showResult(JSON.parse(result));
  },
  onfail: (ajax) => {
    console.log(`some mistakes happened in connect to ${ajax.responseURL}`);
  }
};
let options2 = {
  type: "POST",
  data: {
    "account":"xinzhuoyue",
    "password":"12345678"
  },
  onsuccess: (result,obj) => {
    let showResult = (result) => {
      console.log("POST");
      for(let key in result) {
        if(typeof result[key] != "object") {
          console.log(`${key}:${result[key]}`);
        }else {
          console.log('---分割线----');
          showResult(result[key]);
        }
      }
    }
    showResult(JSON.parse(result));
  },
  onfail: (ajax) => {
    console.log(`some mistakes happened in connect to ${ajax.responseURL}`);
  }
};

// myAjax('http://123.206.204.163:2333/exam/studentManage/',options1);
// myAjax('http://123.206.204.163:2333/exam/login/',options2);
let myAjax = (url,options) => {
  let ajax,
      data,
      param = "",
      type;
  // create XML object
  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }else {
    ajax = new activeXObject("Microsoft.XMLHTTP");
  }
  // parse data
  data = options.data ? options.data : -1;
  if(typeof data == "object") {
    for(let key in data) {
      param += `${key}=${data[key]}&`;
    }
  }else {
    param = `${data}?timeStamp=${new Date().getTime()}`;
  }
  param = param.replace(/&$/,"");
  console.log(param);
  //send request
  type = options.type ? options.type.toUpperCase() : "GET";
  if(type == "GET") {
    ajax.open("GET",`${url}?${param}`,true);
    ajax.send();
  }else {
    ajax.open("POST",url,true);
    // ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send(param);
  }
  //solve result
  ajax.onreadystatechange = ()  => {
    if(ajax.readyState === 4) {
      if(ajax.status === 200) {
        options.onsuccess(ajax.responseText,ajax);
      }else {
        if(options.onfail) {
          options.onfail(ajax);
        }
      }
    }
  };
  return ajax;
}
myAjax('http://123.206.204.163:2333/exam/login/',options2);
