"use strict";
function add1(x, y) {
    var restOfNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNum[_i - 2] = arguments[_i];
    }
    var resNum = x + y;
    for (var _a = 0, restOfNum_1 = restOfNum; _a < restOfNum_1.length; _a++) {
        var ele = restOfNum_1[_a];
        resNum += ele;
    }
    console.log(resNum);
}
add1(1, 2); // 3
add1(1, 2, 6, 8, 9); // 26
