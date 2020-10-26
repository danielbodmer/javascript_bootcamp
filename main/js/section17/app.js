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
  console.log('request successful', data);
});

firstRequest.addEventListener('error', (err) => {
  console.log('request failed', err);
});

firstRequest.open('get', 'https://swapi.dev/api/planets/', true);
firstRequest.setRequestHeader('Accept', 'application/json');
firstRequest.send();

// chaining XMLHttpRequest
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data.results[0]);

  const filmURl = data.results[0].films[0];
  const filmRequest = new XMLHttpRequest();

  filmRequest.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      const filmData = JSON.parse(this.responseText);
      console.log(filmData);
      console.log(filmData.title);
    }
  });

  filmRequest.addEventListener('error', () => {
    console.log('error getting film data');
  });

  filmRequest.open('get', filmURl);
  filmRequest.send();
});

firstReq.addEventListener('error', function (e) {
  console.log('error getting data', e);
});

firstReq.open('get', 'https://swapi.dev/api/planets/');
firstReq.send();
console.log('request sent to swapi for planet data');

// a better way! Fetch! - supports promises
/*
fetch(url, {headers object}) returns promise
--> resolved returns a response object
--> response object contains a readable stream in the body prop of the object
--> use the .json() method to read stream to completion to get the full set of data
--> .json() method returns a promise
--> fetch promise only rejects on network failure - 404 still returns a response
*/
fetch('https://swapi.dev/api/planets/')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`); // triggers catch on initial promise
    } else {
      response.json().then((data) => {
        console.log('fetch API');
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log('something went wrong with fetch', err);
  });

// chaining fetch requests
