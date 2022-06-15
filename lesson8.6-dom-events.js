'use strict';

//let heading = document.getElementById('mainHeading');
//heading.addEventListener('click', event => console.log('heading was clicked', event));

let list = document.getElementsByTagName('ul')[0];
list.addEventListener('click', event => {
    console.log(event);
    event.stopPropagation();
});

function handleClick(event) {
    console.log('click happened');
}
document.addEventListener('click', handleClick);
document.removeEventListener('click', handleClick);

let anchor = document.createElement('a');
anchor.textContent = 'link';
anchor.setAttribute('href', 'http://google.com');
document.body.appendChild(anchor);

anchor.addEventListener('click', event => event.preventDefault());
