(function () {
    'use strict';

    function* square(x) {
        let y = (yield x * x) * x;
        console.log('generator resuming', y);
    }

    let squareIterator = square(5);
    console.log(squareIterator.next());
    console.log(squareIterator.next(10));
})();
