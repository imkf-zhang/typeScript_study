"use strict";
var City = /** @class */ (function () {
    // 构造函数：做初始化
    function City(cName, cLevel) {
        // 成员变量定义在类中(需要赋个值，要不会报语法错误，也可以是在构造函数中赋值)
        this.cname = 'p城';
        this.clevel = 2;
        this.cname1 = cName;
        this.clevel1 = cLevel;
    }
    // 成员方法：定义在类中
    City.prototype.about = function () {
        console.log("\u5144\u5F1F\uFF0C\u8DF3".concat(this.cname1, ",\u5371\u9669\u7CFB\u6570\u4E3A").concat(this.clevel1, "\u7EA7"));
    };
    return City;
}());
var c1 = new City('皮卡多', 9);
console.log(c1.cname, c1.cname1); //p城      皮卡多
c1.about(); // 兄弟，跳皮卡多,危险系数为9级
