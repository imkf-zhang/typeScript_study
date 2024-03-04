"use strict";
function bugGun(gunName, count) {
    console.log("\u6709\u773C\u5149~\u3010".concat(gunName, "\u3011\u662F\n    \u6751\u91CC\u6700\u597D\u7684\u5F3A\uFF0C\u9001\u4F60[").concat(count, "]\u628A\uFF0C\u54B1\u4EECP\u57CE\u6765\u76F8\u89C1"));
}
bugGun('Ak');
// 不传的话默认是undefined
//有眼光~【Ak】是
// 村里最好的强，送你[undefined]把，咱们P城来相见
function bugGun1(gunName, count) {
    console.log("\u6709\u773C\u5149~\u3010".concat(gunName, "\u3011\u662F\n    \u6751\u91CC\u6700\u597D\u7684\u5F3A\uFF0C\u9001\u4F60[").concat(count ? count : 1, "]\u628A\uFF0C\u54B1\u4EECP\u57CE\u6765\u76F8\u89C1"));
}
bugGun1('m24');
// 有眼光~【m24】是
// 村里最好的强，送你[1]把，咱们P城来相见
function bugGun2(gunName, count) {
    if (gunName === void 0) { gunName = "awm"; }
    if (count === void 0) { count = 5; }
    console.log("\u6709\u773C\u5149~\u3010".concat(gunName, "\u3011\u662F\n    \u6751\u91CC\u6700\u597D\u7684\u5F3A\uFF0C\u9001\u4F60[").concat(count ? count : 1, "]\u628A\uFF0C\u54B1\u4EECP\u57CE\u6765\u76F8\u89C1"));
}
// 两个参数都不传
bugGun2();
//有眼光~【awm】是
//村里最好的强，送你[5]把，咱们P城来相见
// 前传后不传
bugGun2('ak');
//有眼光~【ak】是
//村里最好的强，送你[5]把，咱们P城来相见
// 前不传后传
bugGun2(undefined, 99);
//有眼光~【awm】是
//村里最好的强，送你[5]把，咱们P城来相见
