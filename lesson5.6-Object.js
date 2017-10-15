(function () {
    'use strict';

    //let newObj = {};
    //Object.prototype.mySpecialProperty = 'special!';
    //console.log(newObj.mySpecialProperty);

    let myArr = [1, 2, 3];
    if (!Array.prototype.head) {
        Array.prototype.head = function () { return this[0]; }
    }
    console.log(myArr.head());

    let newObj = {
        prop1: 'property1'
    };
    //Object.prototype.test = 'testing';
    Object.keys(newObj).forEach(function (item) {
        console.log(newObj[item]);
    });
    //Object.freeze(newObj);
    //if (!Object.isFrozen(newObj)) {
    //    newObj.oops = 'oops';
    //}
    //Object.seal(newObj);
    //newObj.prop1 = 'new value!';
    //if (!Object.isSealed(newObj)) {
    //    delete newObj.prop1;
    //}
    Object.preventExtensions(newObj);
    if (Object.isExtensible(newObj)) {
        newObj.newProp = 'new';
    }

})();

