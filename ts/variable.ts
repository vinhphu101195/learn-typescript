// array
let arrNumber: Array<number> = [1, 2, 3];
let arrNumber2: number[] = [4, 5, 6];
let arrString: Array<string> = ['a', 'b', 'c'];
let arrString2: string[] = ['d', 'e', 'f'];

//tuple
let x: [string, number] = ["hello", 2];

//enum
enum STATUS { created = 500, proccess, finish };
let todoStatus: STATUS = STATUS.created;
console.log(todoStatus); // 0, if 500, proccess = 501

//void: for function return nothing
function showInfo(): void {
    console.log("hello void");
}
showInfo();

//assertions
let y: any = "hello typescript";
// convert y to string
let total = (<string>y).length;
let total1 = (y as string).length;

//Interface object
interface courseDetail {
    name: string,
    time: string,
    // ?: is option
    free?: boolean;
}

let objectTwo: courseDetail = {
    name: "TypeScript",
    time: "10h",
}
let objectThree: courseDetail = {
    name: "ES6",
    time: "5h",
    free: true
}

//Interface array
interface courseList {
    [index:number]:string;
}

let course:courseList = ["es6", 'es7','typeScript'];