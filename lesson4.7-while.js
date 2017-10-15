(function () {
    'use strict';

    let limit = 0;

    while (limit < 5) {
        if (limit === 3) {
            break;
        }
        console.log(limit += 1);
    }

    let condition = true;

    do {
        console.log('executed once');
        condition = false;
    } while (condition);
})();

