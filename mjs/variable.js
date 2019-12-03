// array
let arrNumber = [1, 2, 3];
let arrNumber2 = [4, 5, 6];
let arrString = ['a', 'b', 'c'];
let arrString2 = ['d', 'e', 'f'];
//tuple
let x = ["hello", 2];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 500] = "created";
    STATUS[STATUS["proccess"] = 501] = "proccess";
    STATUS[STATUS["finish"] = 502] = "finish";
})(STATUS || (STATUS = {}));
;
let todoStatus = STATUS.created;
console.log(todoStatus); // 0, if 500, proccess = 501
//void: for function return nothing
function showInfo() {
    console.log("hello void");
}
showInfo();
//assertions
let y = "hello typescript";
// convert y to string
let total = y.length;
let total1 = y.length;
let objectTwo = {
    name: "TypeScript",
    time: "10h",
};
let objectThree = {
    name: "ES6",
    time: "5h",
    free: true
};
let course = ["es6", 'es7', 'typeScript'];
