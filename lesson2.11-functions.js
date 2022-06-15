'use strict';

function function1(msg, msg2) {
    console.log(msg);
}
function1('new message!');
function1('different message!');

function logArgs() {
    console.log(arguments);

    return 'some value';
}
logArgs('these', 'are', 'arguments'); // some value

let f = function f() {
};
f();

function log() {
    var testVariable = undefined;
    console.log(testVariable);
    testVariable = 'test';
}
log();
