(function () {
    'use strict';

    function logSomething(something = 'default value!', somethingElse = something + 'with concatenation') {
        console.log(something, somethingElse);
    }

    logSomething();
    logSomething('non-default baby!', undefined);
    logSomething(undefined, 'yeah!');

    function joinStuff(...stuffs) {
        console.log(stuffs.join(' '));
    }
    joinStuff('rest', 'params', 'rule');
})();
