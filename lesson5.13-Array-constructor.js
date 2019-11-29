(function () {
    'use strict';

    let obj = {};
    let arr = [];

    console.log(Array.isArray(obj));
    console.log(Array.isArray(arr));

    let newArray = Array.from('string');
    console.log(newArray);

    function logArgs() {
        let args = Array.from(arguments);
        console.log(args);
    }

    logArgs('a', 'b', 'c');

    let mapObj = {
        1: 'one',
        2: 'two',
        3: 'three'
    };
    let numArr = [1, 2, 3];
    let mappedArray = Array.from(numArr, function (item) {
        return this[item];
    }, mapObj);

    console.log(mappedArray);
})();
