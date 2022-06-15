'use strict';

var mySet = new Set(['a', 'b', 'c']),
    setItems = mySet.values();

// (async function() {
//   for await(let value of setItems) {
//     console.log('value:', value);
//   }
// })();
let count = 0;
let asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      next() {
        if (count++ < mySet.size) {
          return Promise.resolve({
            value: setItems.next(),
            done: false,
          });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
  for await(let value of asyncIterable) {
    console.log(value);
  }
})();
