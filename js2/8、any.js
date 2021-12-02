"use strict";
// any的使用  不确定对方的返回值的时候，可以使用any
var dom = "string";
var dom1 = null;
// void的使用  函数没有返回值的时候 
// 在ts中规定函数必须要定义返回值类型，没有返回值的时候就用void
function sayHi() {
    return 'hello';
}
var re1 = sayHi();
function sayHi2() {
    console.log('欲穷千里目');
}
// never  不存在的值，mmp不存在的值还有返回值  常用语抛出异常和无线循环的函数返回类型
function test() {
    while (true) {
    }
}
test();
function test2() {
    throw new Error('hello');
}
test2();
