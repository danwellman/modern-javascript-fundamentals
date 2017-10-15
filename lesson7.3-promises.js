(function () {
    'use strict';

    //let myPromise = new Promise((resolve, reject) => {
    //    (Math.random() < .5) ? resolve('success') : reject('failure');
    //});

    //myPromise.then(
    //    msg => {
    //        console.log('The promise was resolved!', msg);
    //        return true;
    //    },
    //    err => {
    //        console.log('The promise was rejected!', err);
    //        return false;
    //    }
    //).then(
    //    msg => console.log('second then success', msg),
    //    err => console.log('second then error', err)
    //);

    function getNumberFact() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();

            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.responseText);
                } else {
                    reject(this.statusText);
                }
            };

            request.open('GET', 'http://numbersapi.com/42', true);
            request.send();
        });
    }

    getNumberFact().then(
        msg => console.log(msg),
        err => console.log(err)
    );
})();
