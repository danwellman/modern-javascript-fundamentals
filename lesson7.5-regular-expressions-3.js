'use strict';

let js = /(?<=java)script/i;
console.log(js.test('JavaScript')); // true

let notJs = /(?<!java)script/i;
console.log(notJs.test('Script')); // true

// let isEmoji = /^\p{Emoji}+$/u;
// console.log(isEmoji.test('😍')); // true
// console.log(isEmoji.test('a')); // false

let isUppercase = /^\p{Uppercase}+$/u;
let isLowercase = /^\p{Lowercase}+$/u;
let isAlphabetic = /^\p{Alphabetic}+$/u;

console.log(isUppercase.test('A')); // true
console.log(isUppercase.test('a')); // false
console.log(isLowercase.test('A')); // false
console.log(isLowercase.test('a')); // true
console.log(isAlphabetic.test('a')); // true
console.log(isAlphabetic.test('1')); // false

let isEmoji = /^\P{Emoji}+$/u;
console.log(isEmoji.test('😍')); // false