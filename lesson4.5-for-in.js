'use strict';

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log('key is:', prop, 'value is:', obj[prop]);
    }
}
