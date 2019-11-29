(function () {
    'use strict';

    let myObject = {
        randomProperty: 'random!'
    };
    console.log(myObject.constructor);
    console.log(myObject.hasOwnProperty('constructor'));
    console.log(myObject.hasOwnProperty('randomProperty'));

    console.log(myObject.propertyIsEnumerable('constructor'));
    console.log(myObject.propertyIsEnumerable('randomProperty'));

    console.log(myObject.toString());
    console.log(Object.prototype.toString.call([]));
})();

