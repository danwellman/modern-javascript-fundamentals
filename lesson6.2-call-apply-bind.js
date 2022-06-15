'use strict';

function testFunction(arg1, arg2) {
    return arg1 + arg2;
}

let person = {
    name: 'Dan',
    job: 'Developer'
};

function introduce(inductee) {
    console.log(`Hey ${inductee}, name name is ${this.name}, and I'm a ${this.job}`);
}

introduce.call(person, 'Bob');
introduce.apply(person, ['Bob']);

//console.log(testFunction.length);

function addToCart(price, fee) {
    if (!this.total) {
        this.total = 0;
    }
    this.total += price += fee || 0;
    return `${this.name}'s cart total is £${this.total}`;
}

let dansCart = addToCart.bind(person, 1);
console.log(dansCart(50));
console.log(dansCart(100));
