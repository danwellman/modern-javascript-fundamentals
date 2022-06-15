'use strict';

const x = null;
const y = x || 10; // y = 10

// const count = 0;
// const num = count || 10; // num = 10

const count = 0;
const num = count ?? 10; // num = 0

// let obj;
// obj.test // TypeError
// obj?.test; // undefined

let obj = { a: { a1: {} }};
obj?.a?.a1?.test; // undefined