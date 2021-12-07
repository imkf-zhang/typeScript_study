"use strict";
// DataHelper类   -   负责localStorage操作
var DataHelper = /** @class */ (function () {
    // 构造函数，为对象添加各种属性 
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // 将读取的json数组字符串，转成数组对象
    DataHelper.prototype.readData = function () {
        // 读取 本地数据(根据dataKey读取)
        var strData = localStorage.getItem(this.dataKey);
        // 将读取的json字符串转换为数组对象
        var arrData = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    };
    // 保存数据
    DataHelper.prototype.savaData = function (arrData) {
        // 将数组转成json字符串
        var str = JSON.stringify(arrData);
        // 将字符串保存到本地localStorage
        localStorage.setItem(this.dataKey, str);
    };
    // 新增数据
    DataHelper.prototype.addData = function (conStr) {
        // 1、读取本地现有数据
        var arr = this.readData();
        // 2、创建一个评论对象，并设置评论内容属性
        var obj = {
            content: conStr
        };
        // 3、自动生成主键值（id值） 
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        obj[this.primaryKey] = newId;
        arr.push(obj);
        this.savaData(arr);
        return newId;
    };
    // 删除数据
    DataHelper.prototype.removeDataById = function (id) {
        var _this = this;
        // 读取本地数组
        var arr = this.readData();
        // 查找要删除评论对象的下标，并保存到本地
        var index = arr.findIndex(function (ele) {
            return ele[_this.primaryKey] == id;
        });
        if (index > -1) {
            arr.splice(index, 1);
            this.savaData(arr);
            return true;
        }
        return false;
    };
    return DataHelper;
}());
