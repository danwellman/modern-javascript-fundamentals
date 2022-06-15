'use strict';

const myObj = {
  x: 'x',
  y: 'y'
};

console.log(Object.values(myObj)); // ['x', 'y']

const myObj2 = {};
console.log(Object.values(myObj2)); // []

console.log(Object.entries(myObj)); // [['x', 'x'], ['y', 'y']]

const myArr = [
  ['prop1', 'value1'],
  ['prop2', 'value2'],
];
console.log(Object.fromEntries(myArr)); // { prop1: "value1", prop2: "value2" }

console.log(Object.getOwnPropertyDescriptor(myObj, 'x')); // { configurable: true, writable: true, value: 'x' }

console.log(Object.getOwnPropertyDescriptors(myObj)); // { x: { ... }, y: { ... } }