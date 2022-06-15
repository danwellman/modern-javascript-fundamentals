'use strict';

let myMap = new Map();
let myMap2 = new Map([['a', 'b'], [1, 2]]);
myMap2.set('c', 3);
console.log(myMap2.get('c')); // 3
