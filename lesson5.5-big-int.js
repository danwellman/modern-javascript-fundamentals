'use strict';

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true..?

const veryLargeNumber = BigInt(9007199254740992);
const veryLargeNumber2 = BigInt('9007199254740992');
const veryLargeNumber3 = 9007199254740992n;
BigInt(Number.MAX_SAFE_INTEGER) + 1n === BigInt(Number.MAX_SAFE_INTEGER) + 2n; // false

BigInt(Number.MAX_SAFE_INTEGER) + 1; // TypeError
BigInt(Number.MAX_SAFE_INTEGER) + 1n; // 9007199254740992n
5n / 2n; // 2n

2n == 2; // true
2n === 2; // false

Math.sqrt(BigInt(Number.MAX_SAFE_INTEGER)); // TypeError
if (1n < 5n) { console.log('true!') } // true
