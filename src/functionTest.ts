// 一、函數定義
// es5用法
// 函數式聲明
function f1() {
    return '123';
}
// 匿名函數
let x=function () {
    return '321';
}

// TypeScript
function f2():number {
    return 123;
}
let f3=function ():number {
    return 666;
}
alert(f3());

function getInfo(name:string,age:number):string {
    return `${name} ---- ${age}`
}

alert(getInfo('chris', 31));

var fx=function getInfo(name:string,age:number):string {
    return `${name} ---- ${age}`
}

alert(fx('Mine', 20));

// 二、可選參數(注意可選參數必須配置到最後面)
function getInfo2(name:string,age?:number):string {
    if(age){
    return `${name} ---- ${age}`
    }
    else {
        return `${name} ---- 年齡保密`
    }
}
alert(getInfo2('Nick'));
alert(getInfo2('Mary',18));

// 三、默認參數
function getInfo3(name:string,age:number=20):string {
    if(age){
        return `${name} ---- ${age}`
    }
    else {
        return `${name} ---- 年齡保密`
    }
}
alert(getInfo3('Wang'));
alert(getInfo3('Lee',40));

// 四、剩餘參數
function sum(a:number,b:number,c:number,d:number):number {
    return a + b + c + d;
}

alert(sum(1, 2, 3, 4));

let sum3:number=0;
// 三點運算符，接受新參數傳過來的值
function sum2(...result:number[]):number {
    let sum4:number=0;
    result.forEach((x) => sum4+=x);
    return sum4;
}
function f4(num:number):number{
    return sum3+=num;
}

alert(sum2(1, 2, 3, 4, 5));

//另外定義參數操作
function sum5(a:number,b:number,...result:number[]):number {
    let sum4:number=a+b;
    result.forEach((x) => sum4+=x);
    return sum4;
}
alert(sum5(1, 2, 3, 4, 5,6,7));

// 函數重載
// ts為了兼容es5與es6，所以與java有區別
function getInfo5(name:string):string;
function getInfo5(age:number):string;
function getInfo5(str:any):any{
if(typeof str==='string')
    return '我叫' + str;
else
    return '我年齡' + str;
}

alert(getInfo5('王五'));
alert(getInfo5(30));

function getInfo6(name:string,age:number):string;
function getInfo6(name:string):string;
function getInfo6(name:string,age?:number):string{
    if(age)
    return '我叫' + name+ '我年齡' + age;
    else
        return '我叫' + name;
}
alert(getInfo6('老李',20))

// 箭頭函數
setTimeout(
    function (){
        alert('run')}
    , 1000);

setTimeout(
    () => {
        alert('run')}
    , 1000);