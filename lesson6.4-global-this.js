'use strict';

// let globalObj;
// if (typeof self !== 'undefined') { globalObj = self; }
// if (typeof window !== 'undefined') { globalObj = window; }
// if (typeof global !== 'undefined') { globalObj = global; }

// if (globalObj) {
//   if (typeof globalObj.scrollX === 'number') {
//     console.log('scrollX', globalObj.scrollX);
//   }
// }

if (typeof globalThis.scrollX === 'number') {
  console.log('scrollX', globalThis.scrollX);
}
