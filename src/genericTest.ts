/**1.泛型函數:可以支持不特定的數據類型，要求傳入的參數和返回的參數一致*/
function getData<T>(value: T): T {
    return value;
}

console.log(getData('good'));
console.log(getData<number>(123));

/**2.泛型類:需要同時支持返回number和string類型*/
class MinClass<T> {
    public list: T[] = [];

    add(num: T):void {
        this.list.push(num);
    }

    min():T {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum  = this.list[i];
            }
        }
        return minNum;
    }

}

var m = new MinClass<number>();
m.add(107);
m.add(22);
m.add(100);
m.add(7);
m.add(88);
m.add(99);
alert(m.min());

/**3.泛型接口*/
interface ConfigFn<T>{
    (value1: T): T;
}
function getDate<T>(value:T):T{
    return value;
}

var myGetData: ConfigFn<string> = getData;
console.log(myGetData('龍舞'));

interface ConfigFn2{
    <T>(value1: T): T;
}

var setDate:ConfigFn2=function<T>(value1:T):T {
    return value1;
}

console.log(setDate<number>( 123));
console.log(setDate<string>( '張三'));



