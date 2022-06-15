'use strict';

navigator.geolocation.getCurrentPosition(
    location => console.log(location),
    err => console.log(err),
    {
        timeout: 0
    }
);
