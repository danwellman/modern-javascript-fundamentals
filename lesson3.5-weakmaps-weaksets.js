(function () {
    'use strict';

    let myWeakSet = new WeakSet();

    let someObj = {};
    myWeakSet.add(someObj);
    console.log(myWeakSet.has(someObj));

    myWeakSet.delete(someObj);
    console.log(myWeakSet.has(someObj));

    let myWeakMap = new WeakMap();
})();

