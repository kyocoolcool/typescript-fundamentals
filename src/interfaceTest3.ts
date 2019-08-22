/**可索引接口:數組約束*/
var arr: number[] = [123, 456];
var arr1: Array<string> = ['123', '456'];

interface UseArr {
    [index: number]: string;
}

var arr2: UseArr = ['aaa', 'bbb'];
console.log(arr2[0]);

/**可索引接口:對象約束*/
interface UseObj {
    [index: string]: string;
}

var arr3: UseObj = {name: 'person', title: 'manager'};
console.log(arr3.name);
console.log(arr3.title);

/**類類型接口:對類的約束*/
interface Animal {
    name: string

    eat(str: string): string;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(): string {
        return `${this.name}吃糧食`;
    }

    say(): string {
        return `${this.name}汪嗚`;
    }
}

let dog = new Dog("小黑");
console.log(dog.eat());
console.log(dog.say());

class Monkey implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string): string {
        return `${this.name}吃${food}`;
    }

    say(): string {
        return `${this.name}吼吼吼`;
    }
}

let monkey = new Monkey('小猴');
console.log(monkey.eat('香蕉'));

/**接口擴展:接口可以繼承接口*/

interface Person {
    eat(): void;
}

interface Kid extends Person {
    work(): void;
}

class Programer {
    name: string;

    constructor() {
        this.name = name;
    }
    code(code:string) {
        console.log(`${this.name}${code}`);
    }
}

class smallKid extends Programer implements Kid {

    // constructor(name) {
    //     super(name);
    // }
   setName(name: string): void {
       this.name = name;
   }

    eat(): void {
        console.log(this.name + '喜歡吃小饅頭');
    }

    work(): void {
        console.log(this.name + '快快長大');
    }
}

let smallKid1 = new smallKid();
smallKid1.setName('小二');
smallKid1.eat();
smallKid1.work();
smallKid1.code('寫代碼');
