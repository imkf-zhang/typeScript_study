"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.alert = function () {
        console.log('Vehicle alert');
    };
    Vehicle.prototype.lightOn = function () {
        console.log('车灯开');
    };
    Vehicle.prototype.lightOff = function () {
        console.log('车灯关');
    };
    return Vehicle;
}());
var kf = {
    sayHi: function () {
    },
    sayNo: function () {
    },
    alert: function () {
    }
};
// 接口继承类
// 常见的面向对象的语言中，接口是不能继承类的，但是在ts中是可以的
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
// why?
// 一个类可以当做类来用，也可以当做一个类型来用
// demo： Point 可以当做类来用，也可以当做类型来用
// 当做类来用
var p = new Point(1, 2);
// 当做类型来用
function printPoint(p) {
    console.log(p);
}
printPoint(new Point(1, 2));
function printPoint1(p) {
    console.log(p);
}
printPoint1(new Point(1, 2));
