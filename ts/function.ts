function noreturn(): void {
    console.log("no return function");
}

function returnNumber(): number {
    return 2;
}

function returnStringArray(): string[] {
    return ["string ne", "string 2"]
}

function returnAny(): any {
    return "any thing"
}


function returnString(name: string = "Andy", age: number = 69): string {
    return `my name is ${name}, I am ${age}`;
}

// special
function totalLength(x: (string | any[]), y: (string[] | string)): number {
    return x.length + y.length;
}

console.log(totalLength('abc', ["123"]));
console.log(totalLength(['abc', 1, "def"], ["123", "efs"]));
console.log(totalLength(['abc', 1, "def"], "123"));

//Rest params
function showStudentInfor(name: string, ...course: string[]): string {
    console.log(course);
    return name + "study" + course.join(", ");
}

console.log(showStudentInfor("John", "es6", "React", "Php"));

// arrow function
let f1 = (i: number): number => {
    return i * i;
}
let f2 = (i: number) => i * i


