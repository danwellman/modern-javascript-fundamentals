'use strict';

let newDiv = document.createElement('div');
let referenceElement = document.getElementById('mainHeading');
//document.body.insertBefore(newDiv, referenceElement);

//document.body.removeChild(newDiv);
//if (document.body.contains(newDiv)) {
//    document.body.removeChild(newDiv);
//}
document.body.replaceChild(newDiv, referenceElement);
