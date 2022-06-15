'use strict';

console.log(window.sessionStorage.setItem('testItem', JSON.stringify({ testData: 'test' })));
console.log(window.sessionStorage.key(0))
console.log(window.sessionStorage.removeItem('testItem'));
