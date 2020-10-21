// a better way to handle nested callbacks!
// promise - an object representing the eventual completion or failure of an asynchronous operation
// a promise always has two params - usually called resolve and reject
const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  rand <= 0.5 ? resolve() : reject();
})
  // every promise has a .then() method than will run if promise is resolved
  .then(() => console.log('Promise Resolved!!!'))
  // .catch() is run if promise is rejected
  .catch(() => console.log('Promise Rejected!!'));

// return promises from functions
