/**1.最簡單類*/
function Person() {
    this.name = '張三';
    this.age = 20;
}
 var person = new Person();
alert(person.name);

/**2.構造函數和原型鏈內增加方法*/
function Person2() {
    this.name = '張三';
    this.age = 20;
    this.run=function () {
        alert(this.name + '在運動');
    }
}
/**3.原型鏈上的屬性會被多個實例共享，構造屬性則不會*/
Person2.prototype.sex = '男';
Person2.prototype.work=function () {
    alert(this.name + '在工作');
}
// 靜態方法
Person2.getInfo=function () {
    alert('我是靜態方法');
}
const person2 = new Person2();
person2.work();
Person2.getInfo();

/**4.ES5 的繼承*/
function Person3() {
    this.name = '張三';
    this.age = 20;
    this.run=function () {
        alert(this.name + '在運動');
    }
}
Person3.prototype.sex = '男';
Person3.prototype.work=function () {
    alert(this.name + '在工作');
}

//Kid繼承Person2 原型鍊+對象冒充的組合繼承模式
function Kid() {
    Person2.call(this); //對象冒充繼承
}

let kid = new Kid();
// kid.run();//對象冒充可以繼承構造函數內的屬性及方法
// kid.work();//但沒有辦法繼承原型鍊上的屬性及方法

Kid.prototype=new Person2(); //原型鏈實現繼承
let kid1 = new Kid();
kid1.run();
kid1.work();


/**5.原型鏈實現繼承的問題:無法給父類傳參數*/

function Person4(name,age) {
    this.name = name;
    this.age = age;
    this.run=function () {
        alert(this.name + '在運動');
    }
}
function Kid2(name,age){

}

// Kid2.prototype = new Person4();
// let kid2 = new Kid2("Jack","20");
// kid2.run();

/**6.對象冒充+原型鏈繼承*/
function Person6(name,age) {
    this.name = name;
    this.age = age;
    this.run=function () {
        alert(this.name + '在運動');
    }
}
Person6.prototype.work=function () {
    alert(this.name + '在工作');
}

function Kid3(name,age) {
    Person6.call(this, name, localStorage);
}

// Kid3.prototype= new Person6();
// let kid4 = new Kid3("王五",6);
// kid4.run();
// kid4.work();

/**6.對象冒充+原型鏈繼承 另一種寫法*/
function Person7(name,age) {
    this.name = name;
    this.age = age;
    this.run=function () {
        alert(this.name + '在運動');
    }
}
Person7.prototype.work=function () {
    alert(this.name + '在工作');
}

function Kid4(name,age) {
    Person6.call(this, name, localStorage);
}

Kid4.prototype= Person7.prototype
let kid5 = new Kid4("天才",8);
kid5.run();
kid5.work();