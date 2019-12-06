enum TaskState { Created = 100, Active, InActive, Process, Finish }

interface TaskInterface {
    id: number,
    name: string,
    state?: TaskState
}

class TaskService {
    tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]) {
        this.tasks = tasks;
    }

    getItems() {
        return this.tasks;
    }
}

let tasks: TaskInterface[] = [
    {
        id: 1, name: "typeScript"
    }, {
        id: 2, name: "Reactjs", state: TaskState.Process
    }
]

let taskServiceObj = new TaskService(tasks);

console.log(taskServiceObj.getItems());


// abstract

abstract class Laptop {
    public keyboard(): void {
        console.log("laptop keyboard");
    }
    public abstract mainboard(): void;
}

class LaptopDell extends Laptop {
    public keyboard(): void {
        console.log("laptop dell keyboard");
    }
    public mainboard(): void {
        console.log("laptop dell mainboard");
    }
}

let laptopObj: LaptopDell = new LaptopDell();

laptopObj.keyboard();
laptopObj.mainboard();


//Interface
interface People {
    name: string,
    eat(): void,
    sleep(): void
}
interface Bird {
    fly(): void
}

class Machine {
    calculate(x: number, y: number): number {
        return (x + y);
    }
}

class Superman extends Machine implements People, Bird {
    name: string;
    constructor(name: string) {
        super()
        this.name = name;
    }

    eat(): void {
        console.log("superman eat");
    }

    sleep(): void {
        console.log("superman sleep");
    }

    fly(): void {
        console.log("superman fly");
    }
}

let john: Superman = new Superman("john");
john.sleep();
john.fly();
console.log(john.calculate(5, 9));

