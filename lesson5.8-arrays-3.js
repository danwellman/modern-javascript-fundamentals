'use strict';

const fruits = ['Apples', 'Oranges', 'Bananas'];
console.log(fruits.includes('Apples')); // true
console.log(fruits.includes('Apples', 1)); // false

const multiArray = [
  'Apples',
  'Oranges', [
    'Raspberries',
    'Blueberries'
  ]
];

console.log(multiArray.flat()); // ['Apples', 'Oranges', 'Raspberries', 'Blueberries']

const multiArray2 = ['Apples', ['Oranges', ['Lemons', 'Limes']]];
console.log(multiArray2.flat()); // ['Apples', 'Oranges', 'Lemons', 'Limes']
console.log(multiArray2.flat(2)); // ['Apples', 'Oranges', 'Lemons', 'Limes']