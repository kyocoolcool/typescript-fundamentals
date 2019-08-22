/**1.TS定義類*/

class Person {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // run():void {
    //     alert(this.name);

    setName(name: string): void {
        this.name = name;

    }

    getName(): string {
        return this.name;
    }
}

let person = new Person('查理');
console.log(person.getName());

// person.run();

/**2.TS繼承*/

class Animal {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    say(): string {
        return this.name + ': hello'
    }
}

class Dog extends Animal {
    constructor(name: string) {
        /**初始化父類的構造函數*/
        super(name);
    }

    say(): string {
        return this.name + ': cool'
    }

    work(): void {
        return console.log(`${this.name} :在工作`);
    }
}

let dog = new Dog("puppy");
dog.work();
console.log(dog.say());

/**3.類中的修飾符:在定義屬性時，提供三種修飾符
 public
 protected
 private:只能在內部使用
 如果屬性不加修飾符，預設就是public
 * */
class Car {
    name: string;

    setName(name: string): void {
        this.name = name;
    }

    do() {
        alert(`${this.name}: smart choice`);
    }
}

let car = new Car();
car.setName('王爺')
car.do();

/**4.靜態方法*/
class Car2 {
    name: string;

    constructor(name) {
        this.name = name;
    }

    run(): void {
        alert(`${this.name}:正在跑跳碰`)
    }

    static run2(): void {
        alert(`我是靜態方法`)
    }
}

Car2.run2();

/**5.多型*/

class Sport {
    name: string;

    constructor(name) {
        this.name = name;
    }

    do() {
        console.log(`${this.name}做些運動`)
    }
}

class BasketBall extends Sport {
    do() {
        console.log(`${this.name}打籃球`);
    }
}

class FootBall extends Sport {
    do() {
        console.log(`${this.name}踢足球`);
    }
}

let footBall = new FootBall('小強');
footBall.do()

/**5.抽象方法*/
abstract class People {
    name: string;
    constructor(name) {
        this.name = name;
    }

    abstract job();
}

class Student extends People{
    job() {
        console.log(`${this.name}我是個學生`)
    }

}

let student = new Student('伯虎');
student.job();