/**1.定義方法*/
function print() {
    console.log("print something");
}
print();
/**2.方法傳參數*/
function print2(table) {
    console.log(table + "print something");
}
print2('ha hey ');
/**3.方法傳參數 對json進行約束*/
function print3(table) {
    console.log(table.label + "print something");
}
// print3('ha hey '); //錯誤寫法
// print3({name:'張三'}); //錯誤寫法
print3({ label: '張三' }); //正確寫法
function print4(name) {
    //參數必須包含 firstName,lastName
    console.log(name.firstName + name.lastName);
}
print4({ firstName: 'Chris', lastName: 'Chen' }); //若把不相關參數帶入此寫法會報錯，所以採用下面方法
var obj = {
    age: 20, firstName: 'Jack', lastName: 'Wu'
};
print4(obj);
function print5(name) {
    //參數必須包含 firstName,lastName
    console.log(name.firstName + name.lastName);
}
print5({ firstName: 'Nick', lastName: 'Chen' }); //若把不相關參數帶入此寫法會報錯，所以採用下面方法
var obj2 = {
    firstName: 'Julia',
    lastName: 'NANA'
};
print5(obj2);
