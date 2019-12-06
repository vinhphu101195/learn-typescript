//Generic
// input type of variable to T
function showInfo(x) {
    return x;
}
showInfo("hello");
class Example {
    static printArray(params) {
        console.log(params);
    }
}
Example.printArray([1, 2, 3, 44, 56]);
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProduct() {
        console.log(` ${this.id} - ${this.name} - ${this.price}`);
    }
}
let product1 = new Product("ID1", "Product 1", 10);
let product2 = new Product(19959, "Product 2", true);
product1.showProduct();
