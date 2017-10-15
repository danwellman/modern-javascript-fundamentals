(function () {
    'use strict';

    let now = new Date();
    let partyTime = new Date(946684799000);
    console.log(partyTime);
    let dob = new Date('september 9 1978');
    console.log(dob);
    let notADate = new Date('oops');
    console.log(notADate);
    let specialDate = new Date(2002, 2, 9);
    console.log(specialDate);
    console.log(specialDate.getDate());
    console.log(specialDate.getMonth());
    console.log(specialDate.getFullYear());
    console.log(specialDate.getUTCDate());
    console.log(specialDate.getUTCMonth());
    console.log(specialDate.getUTCFullYear());
    console.log(specialDate.getDay());
    console.log(specialDate.getUTCDay());

    console.log(specialDate.toString());
    console.log(specialDate.toUTCString());
    console.log(specialDate.toDateString());
    console.log(specialDate.toTimeString());
    console.log(specialDate.toISOString());
    console.log(specialDate.toLocaleString());
})();

