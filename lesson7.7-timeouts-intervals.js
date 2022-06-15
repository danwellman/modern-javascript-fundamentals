'use strict';

// setTimeout(() => console.log('timeout'), 1000);
// const timeoutId = setTimeout(() => console.log('timeout'), 1000);
// if (timeoutId > 0) {
//   clearTimeout(timeoutId);
// }

let max = 5;
let count = 0;
const int = setInterval(() => {
  if (count >= max) {
    clearInterval(int);
    return;
  }
  count += 1;
  console.log(`interval iteration ${count}`);
}, 1000);
