'use strict';

let fn = param1 => {
    return param1 * param1;
};
let fn2 = (param1, param2) => param1 + param1;
let fn3 = () => ({ prop1: 'test' });

console.log(fn(3));
