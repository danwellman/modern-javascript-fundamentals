'use strict';

let heading = document.getElementById('mainHeading');
console.log(heading.id);
heading.id = 'newHeading!'
heading.className = 'class1 class2';
heading.classList.add('class3');
heading.classList.remove('class1');
console.log(heading.classList.contains('class2'));
console.log(heading.tagName);
//heading.innerHTML = '<span>New content!</span>';
//heading.outerHTML = '<h2>New heading!</h2>';
heading.textContent = 'More new content!';
heading.setAttribute('contenteditable', true);
heading.removeAttribute('contenteditable');
