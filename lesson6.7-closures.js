'use strict';

function Order() {
    let total = 0;

    return function addProduct(price) {
        let salesTax = price * 0.17;
        let fee = price * 0.05;

        total += price + salesTax + fee;

        return total;
    }
}

let myOrder = new Order();

console.log(myOrder(100));
console.log(myOrder(150));
