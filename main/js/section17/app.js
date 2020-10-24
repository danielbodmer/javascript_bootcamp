// Intro to AJAX - Asynchornous JavaScript & XML/JSON
// XMLHttpRequest (XHR) - old way
// Fetch - newer
// Axios - popular library to simply the process

// JSON & XML - data formats to transfer data
// every key in JSON must be a string in double-quotes - cannot store functions like javascript but objects and arrays are OK

// XMLHttpRequest - The Basics
// original way of sending requests through JS - does not support promises!
const myReq = new XMLHttpRequest();

myReq.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data.joke);
};

myReq.onerror = function (err) {
  console.log('Error!', err);
};

myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send(); // calls above functions (onload/onerror) on success or failuer

const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function () {
  // this.responseText won't work in arrow function, use variableName.responseText instead
  const data = JSON.parse(this.responseText);
  console.log('request successful', data.results);
});

firstRequest.addEventListener('error', (err) => {
  console.log('request failed', err);
});

firstRequest.open('GET', 'https://swapi.dev/people/1/');
//firstRequest.setRequestHeader('Accept', 'application/json');
firstRequest.send();
