(function () {
    'use strict';

    //let myPromise = new Promise(function (resolve, reject) => {
    //    (Math.random() < .5) ? resolve('success') : reject('failure');
    //});

    //myPromise.then(function (msg) {
    //    console.log(msg, 'The promise was resolved!');
    //    return true;
    //}, function (err) {
    //    console.log(err, 'The promise was rejected!');
    //    return false;
    //}).then(function (val) {
    //    console.log(val);
    //}, function (err) {
    //    console.log(err);
    //);

    function getNumberFact(url) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();

            request.onload = function () {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.statusText);
                }
            };

            request.open('GET', url, true);
            request.send();
        });
    }

    getNumberFact('http://numbersapi.com/random').then(
        response => console.log(response),
        error => console.log(error)
    );
})();
