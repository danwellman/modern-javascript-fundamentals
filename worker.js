onmessage = event => {
    console.log(event.data);

    postMessage('Message received!');
}