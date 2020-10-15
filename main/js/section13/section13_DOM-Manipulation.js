'use strict';
// DOM - Document Object Model - webpage objects that can be interacted with in javascript
const myImg = document.createElement('img');
myImg.src =
  'https://images.unsplash.com/photo-1602696221981-75511960e2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80';

myImg.style.objectFit = 'fill';
document.body.append(myImg);
