'use strict';

let testString = 'this is a test string';
console.log(testString.length);

let strArr = testString.split(' ');
console.log(strArr);

console.log(testString.indexOf('is'));
console.log(testString.lastIndexOf('is'));

console.log(testString.toUpperCase());

console.log(testString.substring(8, 9));

console.log(testString.slice(-6));

console.log('       test      '.trim());
