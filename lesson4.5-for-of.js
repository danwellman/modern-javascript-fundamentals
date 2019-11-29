(function () {
    'use strict';

    let arr = [1, 2, 3];

    for (let val of arr) {
        console.log('the value is:', val);
    }

    let mySet = new Set();
    mySet.add('x').add('y').add('z');

    for (let val of mySet) {
        console.log(val); // x y z
    }

    let myMap = new Map();
    myMap.set('key1', 'a').set('key2', 'b').set('key3', 'c');

    for (let val of myMap) {
        if (val[1] === 'b') {
            break;
        }
        console.log(val[1]); // a b c
    }
})();

