'use strict';

console.log(Number.isNaN(5 * 'oops'));

let floatString = 'hey1.5oops';
let intString = '3hey';
console.log(typeof Number.parseFloat(floatString));
console.log(typeof Number.parseInt(intString));

let num = 5.4567;
console.log(num.toFixed(2));
console.log(num.toExponential());
console.log(num.toLocaleString());
console.log(num.toPrecision(2));
console.log(num.toString());

