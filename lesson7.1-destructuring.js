'use strict';

let [,y] = ['a', 'b'];
console.log(y);

let { a, b } = { a: 'val1', b: 'val2' };
console.log(a, b);

function returnMultipleArrays() {
    return [
        ['a', 'b', 'c'],
        [1, 2, 3]
    ];
}
let [arr1, arr2] = returnMultipleArrays();
console.log(arr1, arr2);

let { firstName, lastName, employment: { status } } = {
    firstName: 'Dan', lastName: 'Wellman', employment: { status: 'coding' }
};
console.log(firstName, lastName, status);
