/**1.泛型函數:可以支持不特定的數據類型，要求傳入的參數和返回的參數一致*/
function getData(value) {
    return value;
}
console.log(getData('good'));
console.log(getData(123));
/**2.泛型類:需要同時支持返回number和string類型*/
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(107);
m.add(22);
m.add(100);
m.add(7);
m.add(88);
m.add(99);
alert(m.min());
function getDate(value) {
    return value;
}
var myGetData = getData;
console.log(myGetData('龍舞'));
var setDate = function (value1) {
    return value1;
};
console.log(setDate(123));
console.log(setDate('張三'));
