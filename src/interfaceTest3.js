var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**可索引接口:數組約束*/
var arr = [123, 456];
var arr1 = ['123', '456'];
var arr2 = ['aaa', 'bbb'];
console.log(arr2[0]);
var arr3 = { name: 'person', title: 'manager' };
console.log(arr3.name);
console.log(arr3.title);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        return this.name + "\u5403\u7CE7\u98DF";
    };
    Dog.prototype.say = function () {
        return this.name + "\u6C6A\u55DA";
    };
    return Dog;
}());
var dog = new Dog("小黑");
console.log(dog.eat());
console.log(dog.say());
var Monkey = /** @class */ (function () {
    function Monkey(name) {
        this.name = name;
    }
    Monkey.prototype.eat = function (food) {
        return this.name + "\u5403" + food;
    };
    Monkey.prototype.say = function () {
        return this.name + "\u543C\u543C\u543C";
    };
    return Monkey;
}());
var monkey = new Monkey('小猴');
console.log(monkey.eat('香蕉'));
var Programer = /** @class */ (function () {
    function Programer() {
        this.name = name;
    }
    Programer.prototype.code = function (code) {
        console.log("" + this.name + code);
    };
    return Programer;
}());
var smallKid = /** @class */ (function (_super) {
    __extends(smallKid, _super);
    function smallKid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(name) {
    //     super(name);
    // }
    smallKid.prototype.setName = function (name) {
        this.name = name;
    };
    smallKid.prototype.eat = function () {
        console.log(this.name + '喜歡吃小饅頭');
    };
    smallKid.prototype.work = function () {
        console.log(this.name + '快快長大');
    };
    return smallKid;
}(Programer));
var smallKid1 = new smallKid();
smallKid1.setName('小二');
smallKid1.eat();
smallKid1.work();
smallKid1.code('寫代碼');
