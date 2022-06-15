'use strict';

let pattern = /@/;
console.log(pattern.test('me@domain.com'));

let letterPattern = /^[A-Za-z0-9]+$/;
console.log(letterPattern.test('oo0ps'));

let numberFormat = /^\d{3}\*\d{6}\*\d{3}$/;
console.log(numberFormat.test('123*123456*123'));
