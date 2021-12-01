"use strict";
// 枚举（enum）：用一种标识来代表数值，方便程序员理解
// 创建性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknow"] = 3] = "Unknow";
})(Gender || (Gender = {}));
console.log(Gender.Boy); // 1 
console.log(Gender.Girl); // 2
console.log(Gender.Unknow); // 3
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["Unknow"] = 2] = "Unknow";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Boy); // 0
console.log(Gender2.Girl); // 1
console.log(Gender2.Unknow); // 2
// 使用枚举
var usrSex = Gender.Boy;
console.log(usrSex); //1
