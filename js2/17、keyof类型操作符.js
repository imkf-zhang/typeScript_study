"use strict";
//  ts中有很多的工具类型： Partial部分、Required必填项、Pick选择、Record 记录
// js中Object.keys方法
var keys = Object.keys({ id: 12, name: 'z' }); // ['id', 'name']
// keyof操作符在实践中有何用？
// function getValue(obj: Object, key: string) {
//   return obj[key]
// }
// const userkate = {
//   id: 666,
//   name: 'kate'
// }
function getValue(obj, key) {
    return obj[key];
}
var userkate = {
    id: 666,
    name: 'kate'
};
// 类型参数T，  extends 用于将类型参数的实际类型约束为对象类型的子类型
// K也使用 extends 将类型参数的实际类型约束为对象类型的所有键的联合类型的子类型
var id = getValue(userkate, 'id');
var name45 = getValue(userkate, 'name');
var Person1 = /** @class */ (function () {
    function Person1() {
        this.id = 9;
        this.name = 'zl';
    }
    return Person1;
}());
var Http;
(function (Http) {
    Http[Http["get"] = 0] = "get";
    Http[Http["post"] = 1] = "post";
})(Http || (Http = {}));
