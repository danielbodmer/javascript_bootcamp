// a better way to handle nested callbacks!
// promise - an object representing the eventual completion or failure of an asynchronous operation
// a promise always has two params - usually called resolve and reject
/*
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  rand <= 0.5 ? resolve() : reject();
})
  // every promise has a .then() method than will run if promise is resolved
  .then(() => console.log('Promise Resolved!!!'))
  // .catch() is run if promise is rejected
  .catch(() => console.log('Promise Rejected!!'));
*/

// return promises from functions
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) resolve();
      else reject();
    }, 5000);
  });
};

makeDogPromise()
  .then(() => console.log('Promise Resolved!'))
  .catch(() => console.log('Promise Rejected!'));

console.log('I happen while the promise is pending');
console.log('I also happen while the promise is pending');
setTimeout(() => {
  console.log('I happen on a timer while the promise is pending!');
}, 3000);

// resolving/rejecting with values
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'bilbox' },
          { id: 5, username: 'esmerelda' },
        ],
        '/about': 'this is the about page',
      };
      const data = pages[url];
      if (data) resolve({ status: 200, data });
      else reject({ status: 404 });
    }, 3000);
  });
};
fakeRequest('/users')
  .then((res) => {
    console.log(res.status);
    console.log(res.data);
  })
  .catch((res) => console.log(res.status));

// promise chaining
