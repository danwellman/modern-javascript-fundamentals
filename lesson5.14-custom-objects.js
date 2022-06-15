'use strict';

let Person = function (name) {
    this.name = name;
};

Person.prototype = {
    greet() {
        return `Hi, my name is ${this.name}!`;
    }
};

let fred = new Person('Fred');
console.log(fred.greet());

let bob = Object.create(Person.prototype, {
    name: { writable: true, value: 'Bob' }
});
Object.defineProperty(bob, 'job', {
    value: 'Developer',
    writable: true,
    configurable: true,
    enumerable: true
});
Object.defineProperties(bob, {
    heightInCm: {
        value: 183
    },
    weightInKg: {
        value: 75
    }
});
console.log(bob.greet());
console.log(bob);
