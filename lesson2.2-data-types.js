'use strict';

let number = 1;
let oct = 0o77; // 63
let hx = 0x0011; // 17
let bin = 0b1100; // 12

let str = 'hello';
let quotes = '"Hello", said the man';
let escaped = '"oh no you didn\'t" she said';
let joined = 'wait, ' + 'what?';
let multiline = `this
string
has
linebreaks`;
let multiline2 = 'this\nstring\nhas\nlinebreaks';

let yes = true;

let mySymbol = Symbol('my symbol');

let sym1 = Symbol('x');
let sym2 = Symbol('x');
console.log(sym1 === sym2);

let array = [5, 'something', true];
let array2 = new Array();

array[0]; // 5

var obj = {
    num: 5,
    str: 'woohoo'
};

obj.num; // 5
obj['str']; // woohoo