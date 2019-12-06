//Generic
// input type of variable to T
function showInfo<T>(x: T): T {
    return x;
}
showInfo<string>("hello");

class Example {
    static printArray<T>(params: T[]): void {
        console.log(params);
    }
}

Example.printArray<number>([1, 2, 3, 44, 56]);


class Product<A,B,C>{
    id:A;
    name: B;
    price:C;

    constructor(id:A,name:B,price:C){
        this.id= id;
        this.name =name;
        this.price =price;
    }

    showProduct(){
        console.log(` ${this.id} - ${this.name} - ${this.price}`);       
    }
}

let product1 = new Product<string,string,number>("ID1","Product 1", 10);
let product2 = new Product<number,string,boolean>(19959,"Product 2", true);
product1.showProduct();