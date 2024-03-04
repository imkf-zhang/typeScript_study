"use strict";
// 当没有明确指定类型的时候，ts会依照类型推论的规则，推断出一个类型
// let p1 =  'p1';
// p1 = 5  //Property 'sayName' does not exist on type 'number'.
var p2;
p2 = 'p2';
p2 = 2;
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var p3;
// p3.sayName()
