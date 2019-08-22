/**1.TS定義類*/
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
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    // run():void {
    //     alert(this.name);
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person('查理');
console.log(person.getName());
// person.run();
/**2.TS繼承*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.say = function () {
        return this.name + ': hello';
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        /**初始化父類的構造函數*/
        return _super.call(this, name) || this;
    }
    Dog.prototype.say = function () {
        return this.name + ': cool';
    };
    Dog.prototype.work = function () {
        return console.log(this.name + " :\u5728\u5DE5\u4F5C");
    };
    return Dog;
}(Animal));
var dog = new Dog("puppy");
dog.work();
console.log(dog.say());
/**3.類中的修飾符:在定義屬性時，提供三種修飾符
 public
 protected
 private:只能在內部使用
 如果屬性不加修飾符，預設就是public
 * */
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setName = function (name) {
        this.name = name;
    };
    Car.prototype["do"] = function () {
        alert(this.name + ": smart choice");
    };
    return Car;
}());
var car = new Car();
car.setName('王爺');
car["do"]();
/**4.靜態方法*/
var Car2 = /** @class */ (function () {
    function Car2(name) {
        this.name = name;
    }
    Car2.prototype.run = function () {
        alert(this.name + ":\u6B63\u5728\u8DD1\u8DF3\u78B0");
    };
    Car2.run2 = function () {
        alert("\u6211\u662F\u975C\u614B\u65B9\u6CD5");
    };
    return Car2;
}());
Car2.run2();
/**5.多型*/
var Sport = /** @class */ (function () {
    function Sport(name) {
        this.name = name;
    }
    Sport.prototype["do"] = function () {
        console.log(this.name + "\u505A\u4E9B\u904B\u52D5");
    };
    return Sport;
}());
var BasketBall = /** @class */ (function (_super) {
    __extends(BasketBall, _super);
    function BasketBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasketBall.prototype["do"] = function () {
        console.log(this.name + "\u6253\u7C43\u7403");
    };
    return BasketBall;
}(Sport));
var FootBall = /** @class */ (function (_super) {
    __extends(FootBall, _super);
    function FootBall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FootBall.prototype["do"] = function () {
        console.log(this.name + "\u8E22\u8DB3\u7403");
    };
    return FootBall;
}(Sport));
var footBall = new FootBall('小強');
footBall["do"]();
/**5.抽象方法*/
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.job = function () {
        console.log(this.name + "\u6211\u662F\u500B\u5B78\u751F");
    };
    return Student;
}(People));
var student = new Student('伯虎');
student.job();
