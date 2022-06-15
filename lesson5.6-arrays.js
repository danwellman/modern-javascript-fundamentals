'use strict';

let array = ['one', 'two', 'three'];

console.log(array.length); // 3

array.push('four');
array.unshift('zero');
console.log(array);

array.pop();
array.shift();
console.log(array);

array.splice(0, 3, 'a', 'b', 'C');
array.reverse();
array.sort();
console.log(array);

console.log([3, 10000, 20].sort(function (a, b) {
    return a - b;
}));

console.log(['b', 'C', 'a'].sort(function (a, b) {
    let lowercaseA = a.toLowerCase(),
        lowercaseB = b.toLowerCase();

    if (lowercaseA < lowercaseB) {
        return -1;
    } else if (lowercaseA === lowercaseB) {
        return 0;
    } else {
        return 1;
    }
}));

console.log(array.join('|'));
console.log(array.indexOf('b'));
console.log(array.slice(1, 2));
