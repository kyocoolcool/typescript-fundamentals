// boolean
var flag = true;
console.log(flag);
// num
var no = 123;
console.log(no);
// string
var str = 'this is ts';
console.log(str);
// array
var arr = ['1', '2', '3']; //es5用法
console.log(arr);
// 1.
var arr1 = [11, 22];
console.log(arr1);
// 2
var arr2 = [111, 222, 333];
console.log(arr2);
//3
var arr4 = [123, 'ggg'];
// tuple
var arr3 = [123, 'good'];
console.log(arr3);
// enum
var flag2;
(function (flag2) {
    flag2[flag2["success"] = 1] = "success";
    flag2[flag2["error"] = 2] = "error";
})(flag2 || (flag2 = {}));
;
var s = flag2.error;
s;
console.log(s);
// any
var t = 666;
console.log(t);
console.log('888');
// any用法
var box = document.getElementById('box');
box.style.color = 'blue';
// undefined & null
var a;
a = 123;
console.log(a);
//方法返回值 void
function f() {
    console.log('God');
}
f();
function x() {
    console.log('God2');
    return 321;
}
console.log(x());
// never
var b;
b = undefined;
var c;
c = null;
var d;
d = (function () {
    throw new Error('error');
})();
