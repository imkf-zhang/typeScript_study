"use strict";
function bugGun(gunName, count) {
    console.log("\u6709\u773C\u5149~\u3010" + gunName + "\u3011\u662F\n    \u6751\u91CC\u6700\u597D\u7684\u5F3A\uFF0C\u9001\u4F60[" + count + "]\u628A\uFF0C\u54B1\u4EECP\u57CE\u6765\u76F8\u89C1");
}
bugGun('Ak');
// 不传的话默认是undefined
//有眼光~【Ak】是
// 村里最好的强，送你[undefined]把，咱们P城来相见
function bugGun1(gunName, count) {
    console.log("\u6709\u773C\u5149~\u3010" + gunName + "\u3011\u662F\n    \u6751\u91CC\u6700\u597D\u7684\u5F3A\uFF0C\u9001\u4F60[" + (count ? count : 1) + "]\u628A\uFF0C\u54B1\u4EECP\u57CE\u6765\u76F8\u89C1");
}
bugGun1('m24');
// 有眼光~【m24】是
// 村里最好的强，送你[1]把，咱们P城来相见
