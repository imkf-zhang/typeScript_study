"use strict";
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
var p5;
p5 = 88;
p5 = 'kate';
p5.length;
// p5 = 'kate';
// p5 = 88;
// p5.length;  // 报错
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
// function(p6: number | string) {
//   return p6.length;
// }
