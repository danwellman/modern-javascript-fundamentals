(function () {
    'use strict';

    let array = ['x', 'y', 'z'];

    array.forEach(function (currentItem) {
        console.log(currentItem);
    });

    array.some(function (currentItem) {
        console.log('iterating...');
        return currentItem === 'y';
    });

    array.every(function (currentItem) {
        console.log('also iterating...');
        return currentItem !== 'x';
    });

    let arr = [1, 2, 3, 4, 5];
    let sum = arr.reduce(function (previous, current) {
        return previous + current;
    }, 0);
    console.log(sum);

    let refs = {
        a: 'alpha',
        b: 'beta',
        g: 'gamma'
    };
    let arr2 = ['a', 'b', 'g'];
    let result = arr2.map(function (currentItem) {
        return refs[currentItem];
    });
    console.log(result);
})();

