'use strict';

const largeNum = 1_000_000_000;
const largeNum2 = largeNum + 1;
console.log(largeNum + 1 === largeNum2); // true
const weirdNum = 100_0;
const myOct = 0xbad_a55;
// const oops = 1__0; // SyntaxError