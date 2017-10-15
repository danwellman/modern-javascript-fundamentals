(function () {
    'use strict';

    let obj = {};
    //console.log(obj.hasOwnProperty('key'));
    //console.log(obj);

    let Example = function () { }
    Example.prototype = new Array();
    let instance = new Example();
    console.log(instance.hasOwnProperty('something'));
})();
