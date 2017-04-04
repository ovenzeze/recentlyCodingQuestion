// 赛码网输入输出实例
var count = 0;
var score1 = [];
var result = {};
var sortedResult = [];
var final = [];
var sum;
var line;
var inputNum = 0;
while (line = read_line()) {
    inputNum++;
    if (inputNum == 1) {
        count = Number(line);
    }
    if (inputNum < count + 1) {
        score1.push(line.split(" "));
    }

    if (inputNum == count + 1) {
        score1.forEach(function(value, index, array) {
            sum = 0;
            value.forEach(function(value, index, array) {
                sum += Number(value);
            });
            avg = sum / 5;
            result[index] = 10 * Math.min.apply(Math, value) + 3 * avg + index;
        });
        var maxCount = result[0];
        for (var key in result) {
            sortedResult.push(result[key]);
        }
        sortedResult.sort(function(a, b) {
            return b - a;
        });
        for (var i = 0; i < sortedResult.length; i++) {
            for (var key in result) {
                if (result[key] == sortedResult[i]) {
                    final.push(key);
                }
            }
        }
        print(final.join(" "));
    }
}
