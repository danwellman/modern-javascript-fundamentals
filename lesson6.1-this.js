(function () {
    'use strict';

    console.log(this);

    let obj = {
        method: function () {
            console.log(this);
        }
    };

    obj.method();

    function Person(name) {
        this.name = name;
    }

    let bob = new Person('bob');
})();

console.log(this);

