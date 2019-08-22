// boolean
let flag: boolean = true;
console.log(flag);

// num
let no: number = 123
console.log(no);

// string
let str: string = 'this is ts';
console.log(str);

// array
let arr = ['1', '2', '3'];   //es5用法
console.log(arr);
// 1.
let arr1: number[] = [11, 22];
console.log(arr1);
// 2
let arr2: Array<number> = [111, 222, 333]
console.log(arr2);
//3
let arr4:any[]=[123,'ggg']

// tuple
let arr3: [number, string] = [123, 'good'];
console.log(arr3);

// enum
enum flag2 {success = 1, error = 2};
let s: flag2 = flag2.error;
s
console.log(s);

// any
let t: any = 666;
console.log(t);
console.log('888');

// any用法
let box:any = document.getElementById('box');
box.style.color = 'blue';

// undefined & null
let a:number|undefined|null
a=123;
console.log(a);

//方法返回值 void

function f():void {
    console.log('God');
}

f();

function x():number {
    console.log('God2');
    return 321
}

console.log(x());

// never
let b: undefined ;
b=undefined;
let c:null;
c=null;

let d:never;
d=(()=>{
    throw new Error('error');
})();