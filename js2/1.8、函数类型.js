"use strict";
// 函数是javascript的一等公民
// 定义函数的两种常用方式：函数声明（Function Declaration）和函数表达式（Function Expression）
function sayHi1() {
    console.log('hello, world');
}
var kate2 = function sayHi2() {
    console.log('hello, world');
};
// 函数有输入和输出 所以函数在ts函数进行类型约束的时候就要考虑到它的输入和输出
// 函数声明比较好处理   需要注意: 输入多余的或者少于参数，都是不被允许的
function sayHi3(x, y) {
    return x + y;
}
sayHi3(1, 5);
// sayHi3(2,5,7) //Expected 2 arguments, but got 3.
// sayHi3(5) // An argument for 'y' was not provided.
// 函数表达式就比较复杂了
var kate3 = function (x, y) {
    return x + y;
};
var sayhi6 = function (x, y) { return x + y; };
// 可选参数
// 既然参数多了或者少了在ts中是不被允许，但是就是有一些情况确实参数是不确定的可能会多，有可能会少
// 使用 ?: 来表达可选参数
function sayhi7(x, y) {
    if (y) {
        console.log(x + y);
    }
    else {
        console.log(x);
    }
}
sayhi7(1); // 并不会报错
sayhi7(2, 5);
// function sayhi8( y?: number, x: number): void {
//   if(y) {
//     console.log(x + y)
//   } else {
//     console.log(x)
//   }
// }  //  A required parameter cannot follow an optional parameter.
// sayhi8(1) 
// sayhi8(2,5);
// 参数默认值
// 允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
function buildNameOther(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3, 4);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
