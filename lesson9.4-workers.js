(function () {
    'use strict';

    let worker = new Worker('worker.js');
    worker.postMessage('Hello from the main script');
    worker.onmessage = event => console.log(event.data);

    setTimeout(() => worker.terminate(), 200);
})();
