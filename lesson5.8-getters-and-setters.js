(function () {
    'use strict';

    let myObj = {
        otherProp: 'other',

        get prop() {
            console.log('accessing prop');
            return this.otherProp;
        },

        set prop(val) {
            console.log(`setting otherProp to ${val}`);
            this.otherProp = val;
        }
    }

    console.log(myObj.prop);
    myObj.prop = 'new!';
    console.log(myObj);
})();

