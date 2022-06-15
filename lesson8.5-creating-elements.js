'use strict';

let newElement = document.createElement('div');
newElement.textContent = 'new element!';

let comment = document.createComment('new comment!');

let df = document.createDocumentFragment();
df.appendChild(newElement);
let target = document.getElementById('target');
target.appendChild(df);
