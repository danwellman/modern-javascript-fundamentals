'use strict';

if (1 + 1 === 3) {
    console.log('the condition is true');
}

if (true === false) {
    console.log('this will not be logged');
} else {
    console.log('this will be logged');
}

let color = 'red';
if (color === 'blue') {
    console.log('blue');
} else if (color === 'green') {
    console.log('green');
} else {
    console.log(color);
}

if (1) {
    console.log('truthy!');
}

let arr = [];
if (arr.length) {
    console.log('arrays has length');
}

(false) ? console.log('log for truthy') : console.log('log for falsey');
