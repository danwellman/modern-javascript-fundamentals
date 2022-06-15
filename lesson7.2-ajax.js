'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://numbersapi.com/42', true);
xhr.send();

xhr.onload = function () {
    console.log(xhr.responseText);
};
