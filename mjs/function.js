function noreturn() {
    console.log("no return function");
}
function returnNumber() {
    return 2;
}
function returnStringArray() {
    return ["string ne", "string 2"];
}
function returnAny() {
    return "any thing";
}
function returnString(name = "Andy", age = 69) {
    return `my name is ${name}, I am ${age}`;
}
// special
function totalLength(x, y) {
    return x.length + y.length;
}
console.log(totalLength('abc', ["123"]));
console.log(totalLength(['abc', 1, "def"], ["123", "efs"]));
console.log(totalLength(['abc', 1, "def"], "123"));
//Rest params
function showStudentInfor(name, ...course) {
    console.log(course);
    return name + "study" + course.join(", ");
}
console.log(showStudentInfor("John", "es6", "React", "Php"));
// arrow function
let f1 = (i) => {
    return i * i;
};
let f2 = (i) => i * i;
