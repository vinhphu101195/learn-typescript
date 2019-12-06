var TaskState;
(function (TaskState) {
    TaskState[TaskState["Created"] = 100] = "Created";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["InActive"] = 102] = "InActive";
    TaskState[TaskState["Process"] = 103] = "Process";
    TaskState[TaskState["Finish"] = 104] = "Finish";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItems() {
        return this.tasks;
    }
}
let tasks = [
    {
        id: 1, name: "typeScript"
    }, {
        id: 2, name: "Reactjs", state: TaskState.Process
    }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
// abstract
class Laptop {
    keyboard() {
        console.log("laptop keyboard");
    }
}
class LaptopDell extends Laptop {
    keyboard() {
        console.log("laptop dell keyboard");
    }
    mainboard() {
        console.log("laptop dell mainboard");
    }
}
let laptopObj = new LaptopDell();
laptopObj.keyboard();
laptopObj.mainboard();
class Machine {
    calculate(x, y) {
        return (x + y);
    }
}
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("superman eat");
    }
    sleep() {
        console.log("superman sleep");
    }
    fly() {
        console.log("superman fly");
    }
}
let john = new Superman("john");
john.sleep();
john.fly();
console.log(john.calculate(5, 9));
