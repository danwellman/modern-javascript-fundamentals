'use strict';

function sum(x, y, z) {
  return x + y + z;
}

sum(1, 2, 3); // 6
const nums = [1, 2, 3];

sum(...nums); // 6

const array1 = [1, 2];
const array2 = [3, 4];
// const combined = [...array1, ...array2]; // [1, 2, 3, 4]

const obj1 = { a: 'a', b: 'b' };
const obj2 = { c: 'c' };
const combined = { ...obj1, ...obj2 } // { a: 'a', b: 'b', c: 'c' }
