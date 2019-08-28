/**進階封裝用法-物件的屬性及方法封裝*/
class Person {
    name: string;

    constructor(n?: string) {
        this.name = n;
    }


    // run():void {
    //     alert(this.name);
    // return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
    toFn(name: string, property: any): boolean {
        this.name = name;
        console.log("hhhh");
        // console.log(property["group"]);
        if (typeof property["put"] === 'function') {
            property["put"]("aaaaa");/*調用方法*/
            return this.toFn("aaa", "bbb");
        }
        else return true;
    }


}


console.log(
    new Person().toFn("王老五", {"group": 'hello', put: function (x) {
            var a = x;
            console.log(a);
            console.log(6666666666);
        }}
    )
);
