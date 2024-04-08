"use strict";
// 1、ts实现了let，所以还是尽可能的使用let代替var---官网建议
// 2、字符串也可以使用 模版字符串
var six = 6;
var str = "six:".concat(six);
// 3、Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
var prettySure = 4;
// prettySure.toFixed(); 
// Property 'toFixed' does not exist on type 'Object'. 
// 4、声明一个void类型的变量没有什么意义，你只能给它赋予 undefined
var abc = undefined;
// let abcde:void = null //  Type 'null' is not assignable to type 'void'.
// 5、undefined和null两者有各自的类型叫做： undefined 和 null
var f = undefined;
var jh = null;
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// let mn: number;
// mn = undefined
// let mnu: number = null
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 这能避免 很多常见的问题
// 如果某处你想传入一个string或null或undefined 可以使用联合类型： string | null | undefined
// 6、
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
var ko;
// let ppp: number = ko
