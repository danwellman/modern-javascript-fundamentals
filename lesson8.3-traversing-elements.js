(function () {
    'use strict';

    let ul = document.getElementsByTagName('ul')[0];
    console.log(ul.children.length);
    console.log(ul.firstElementChild);
    console.log(ul.lastElementChild);
    console.log(ul.parentNode);
    console.log(ul.firstElementChild.nextElementSibling);
    console.log(ul.lastElementChild.previousElementSibling);
})();
