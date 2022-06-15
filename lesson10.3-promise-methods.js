'use strict';

let myPromise = new Promise(function (resolve, reject) {
   (Math.random() < .5) ? resolve('success') : reject('failure');
});

myPromise.then(
  (msg) => console.log(msg, 'The promise was resolved!'),
  (err) => console.log(err, 'The promise was rejected!')
).finally(() => console.log('Finally!'));

let promise1 = new Promise(
  (resolve) => setTimeout(() => resolve('promise1 complete'), 500)
);
let promise2 = new Promise(
  (resolve) => setTimeout(() => resolve('promise1 complete'), 1000)
);
let promise3 = new Promise(
  (resolve) => setTimeout(() => resolve('promise1 complete'), 1500)
);

Promise.all([promise1, promise2, promise3]).then(
  (allValues) => console.log('all values:', allValues)
);

Promise.any([promise1, promise2, promise3]).then(
  (firstResolved) => console.log('first value:', firstResolved)
);
