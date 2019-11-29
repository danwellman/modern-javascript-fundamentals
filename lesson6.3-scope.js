(function () {
    'use strict';

    let myVar = 'test';

    function local() {
        var localVar = 'local';
        console.log(myVar, localVar);
    }
    local();
    //console.log(localVar);

    for (var prop in { prop1: 'prop' }) {
        console.log(prop);
    }

    console.log(prop);
})();
