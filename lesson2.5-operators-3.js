'use strict';

const num = 2 ** 4; // 16
const reallyBigNum = 2 ** 4 ** 5; // Infinity
BigInt(2) ** BigInt(3) ** BigInt(4); // 2417851639229258349412352n
const reallyBigNum2 = 2 ** (4 ** 5); // Infinity
const reallyBigNum3 = (2 ** 4) ** 5; // Infinity
-(2 ** 2); // SyntaxError

let a = 1;
let b = 0;
console.log(a &&= b); // 0

let c = 0;
let d = 1;
console.log(c &&= d); // 0

let e = 1;
let f = 2;
console.log(e &&= f); // 2

// let a = 0;
// let b = 1;
// console.log(a ||= b); // 1

// let c = 1;
// let d = 0;
// console.log(c ||= d); // 1

// let e = 1;
// let f = 2;
// console.log(e ||= f); // 1

// let a = null;
// let b = 1;
// console.log(a ??= b); // 1

