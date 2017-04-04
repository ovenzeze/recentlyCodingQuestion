// 输出数组中出现次数第N多的所有元素
// Note:
  // 1:找出数组中各元素出现的次数并以元素：次数的形式存储在一个对象中；
  // 2：将对象中的次数存储到一个新数组，排序此数组，找出第N大的元素；
  // 3：遍历此对象，将次数为第N大的key值存储到一个结果数组中；
  const printSpecificTimesElement = (arr,n) => {
    let arrObj = {},
        tempArr = [],
        resultArr = [],
        count = 0,
        nTimesValue;
        if(!Array.isArray(arr)) {
          return `${arr} is not a Array`;
        }
        arr.forEach( (value,index,array) => {
          if(arr.indexOf(value) == index) {
            arrObj[value] = 1;
          }else {
            arrObj[value]++;
          }
        });
        for(let key in arrObj) {
          tempArr.push(arrObj[key]);
        }
        tempArr.sort( (a,b) => b-a);//将数组从大到小排序
        //console.log(tempArr);
        tempArr.forEach( (value,index,array) => {
          if(tempArr.indexOf(value) == index) {
            count++;
          }
          if(count == n) {
            nTimesValue = value;
            return;
          }
        });
        for(let key in arrObj) {
          if(arrObj[key] == nTimesValue) {
            resultArr.push(key);
          }
        }
        return `出现次数第${n}多的次数是：${nTimesValue},元素是：${resultArr}`;
  };
  console.log(printSpecificTimesElement([2,3,3,3,6,6,3,4,4,4,4,2,5,5,7,7,7,8,9],2));
