'use strict';

console.log('       test      '.trimStart()); // test      
console.log('       test      '.trimEnd()); //        test
console.log('test'.padStart(7)); //    test
console.log('test'.padStart(7, '$')); // $$$test
console.log('I like apples'.replace('apples', 'bananas')); // I like bananas
console.log('I like apples apples'.replace('apples', 'bananas')); // I like bananas apples
console.log('I like apples apples'.replaceAll('apples', 'bananas')); // I like bananas bananas
