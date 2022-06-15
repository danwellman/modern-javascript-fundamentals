'use strict';

let x = 'test',
    y = 42;

let obj = {
    x,
    y,
    method() {
        return 'method!';
    },
    [x + y]: 'computed!'
};
console.log(obj);

let composedObj = Object.assign({}, obj, { someOtherProp: 'woohoo' });
console.log(composedObj);
