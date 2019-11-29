(function () {
    'use strict';

    let urlPattern = /^http(s?)/;
    console.log(urlPattern.test('https://google.com'));

    let camelCased = 'camelCasedString';
    console.log(camelCased.replace(/(?:[A-Z])/g, '_$1'));

    let script = /java(?!script)/i;
    console.log(script.test('Java'));
})();
