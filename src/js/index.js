//统计一个字符串中出现次数最多的字母
/*思路：将字符串转换成数组，遍历数组将字母和字母出现的次数存储到
一个对象中，再遍历对象输出次数最多的字母和次数*/
let mostTimesChar = (str) => {
        if (typeof str != "string") {
            console.log(`${str} is not a String`);
        }
        let strArr = str.split('');
        let tempObj = {};
        strArr.forEach((value, index, array) => {
            if (strArr.indexOf(value) == index) {
                tempObj[value] = 1;
            } else {
                tempObj[value]++;
            }
        });
        console.log(`origin String is: ${str}`)
        console.log(tempObj);
        let maxTimes = 1;
        let maxChar = [];
        for (let key in tempObj) {
            if (tempObj[key] > maxTimes) {
                maxTimes = tempObj[key];
            }
        };
        for (let key in tempObj) {
            if (tempObj[key] == maxTimes) {
                maxChar.push(key);
            }
        };
        maxChar.forEach((value) => {
            console.log(`most times char is ${value},times is ${maxTimes}`);
        });

    }
    // mostTimesChar("abbcddffjddddljjnvdkljdasjsvedd");
    // mostTimesChar("我爱北京天安门，天安门非常宏伟");

    // 数组去重 去掉数组中重复出现的值，方法有使用临时数组，对象，indexOf，Map，Set等

    let testArr = [1,2,3,4,5,6,7,8,32,1,4,5,7,32];
    let testArr2 = [{"asd":"sddfff","wer":"ffgghh"},1,2,3,4,2,3,7,5,8,78,{"asd":"sddfff","wer":"ffgghh"},"abc","abc","acd"];
    // method 1: use temp array
    let arrUnique1 = (arr) => {
      let tempArr = [];
      arr.forEach( (value,index,array) => {
        if (tempArr.indexOf(value) == -1) {
          tempArr.push(value);
        }
      });
      return tempArr;
    }
    // console.log(arrUnique1([1,2,3,4,5,23,1,2,6]));

    // method 2 : use object
    let arrUnique2 = (arr) => {
      let tempObj = {},
          resultArr = [];
      arr.forEach( (value,index,array) => {
        if (!tempObj[value]) {
          tempObj[value] = true;
          resultArr.push(value);
        }
      });
      return resultArr;
    }
    // console.log(arrUnique2(testArr2));

    // method 3:use Map (if the value is Object,method 1&2 can not resolve this question,but Map can )
    let arrUnique3 = (arr) => {
      let resultArr,tempMap;
      resultArr = [];
      tempMap = new Map();
      arr.forEach((value,index,array) => {
        if(!tempMap.get(value)) {
          tempMap.set(value,true);
          resultArr.push(value);
        }
      });
      return resultArr;
    }
    // console.log(arrUnique3(testArr2));

    // method 4:use Set
    let arrUnique4 = (arr) => Array.from(new Set(arr));
    console.log(arrUnique4(testArr2));
