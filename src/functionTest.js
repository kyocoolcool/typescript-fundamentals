// 一、函數定義
// es5用法
// 函數式聲明
function f1() {
    return '123';
}
// 匿名函數
var x = function () {
    return '321';
};
// TypeScript
function f2() {
    return 123;
}
var f3 = function () {
    return 666;
};
alert(f3());
function getInfo(name, age) {
    return name + " ---- " + age;
}
alert(getInfo('chris', 31));
var fx = function getInfo(name, age) {
    return name + " ---- " + age;
};
alert(fx('Mine', 20));
// 二、可選參數(注意可選參數必須配置到最後面)
function getInfo2(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F61\u4FDD\u5BC6";
    }
}
alert(getInfo2('Nick'));
alert(getInfo2('Mary', 18));
// 三、默認參數
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + " ---- \u5E74\u9F61\u4FDD\u5BC6";
    }
}
alert(getInfo3('Wang'));
alert(getInfo3('Lee', 40));
// 四、剩餘參數
function sum(a, b, c, d) {
    return a + b + c + d;
}
alert(sum(1, 2, 3, 4));
var sum3 = 0;
// 三點運算符，接受新參數傳過來的值
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum4 = 0;
    result.forEach(function (x) { return sum4 += x; });
    return sum4;
}
function f4(num) {
    return sum3 += num;
}
alert(sum2(1, 2, 3, 4, 5));
//另外定義參數操作
function sum5(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum4 = a + b;
    result.forEach(function (x) { return sum4 += x; });
    return sum4;
}
alert(sum5(1, 2, 3, 4, 5, 6, 7));
function getInfo5(str) {
    if (typeof str === 'string')
        return '我叫' + str;
    else
        return '我年齡' + str;
}
alert(getInfo5('王五'));
alert(getInfo5(30));
function getInfo6(name, age) {
    if (age)
        return '我叫' + name + '我年齡' + age;
    else
        return '我叫' + name;
}
alert(getInfo6('老李', 20));
// 箭頭函數
setTimeout(function () {
    alert('run');
}, 1000);
setTimeout(function () {
    alert('run');
}, 1000);
