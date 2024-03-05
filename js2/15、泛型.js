"use strict";
// 有些场景，我们直接将类型定义好是不妥当的，因为类型可能依赖于业务传入的类型，而业务传入的类型又是动态的，传入什么，谁知道呢
// 这个例子虽然不会报错，但是我们很难说这个类型规范的准确
function createArray(length, value) {
    var result = [];
    for (var index = 0; index < length; index++) {
        result[index] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 泛型的作用就体现出来了
function createArrayOther(length, value) {
    var result = [];
    for (var index = 0; index < length; index++) {
        result[index] = value;
    }
    return result;
}
createArrayOther(3, 'x'); // ['x', 'x', 'x']
createArrayOther(3, 'x'); // ['x', 'x', 'x']
function createArrayOther1(length, value) {
    var result = [];
    for (var index = 0; index < length; index++) {
        result[index] = value;
    }
    return result;
}
createArrayOther1(3, 'x'); // ['x', 'x', 'x']
createArrayOther1(3, 'x'); // ['x', 'x', 'x']
// 问题又来了，有多个类型参数，用泛型怎么来表达呢
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function printLength(arg) {
    console.log(arg.length);
    return arg;
}
// printLength(7)
// 多个参数类型之间也可以相互约束
function copy(target, source) {
    for (var key in source) {
        // (<T>source)[key]
        target[key] = source[key];
    }
    return target;
}
