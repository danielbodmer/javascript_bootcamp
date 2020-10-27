// async functions - syntantic sugar for promises!
// 2 pieces --> async and await
/*
async function name() {
  return val
}
function now returns a promise
throw new Error to reject promise
*/
async function greet() {
  return 'Hello!';
}
greet().then((val) => console.log(val));

async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('incorrect value passed');
  } else {
    return x + y;
  }
}

add('hello', 5)
  .then((val) => console.log(val))
  .catch((err) => console.log('Promise rejected with: ', err));
add(10, 16).then((val) => console.log(val));

// the await keyword - when inside an async function, pauses execution and waits for the function to be resolved
/*
function getPlanets() {
  return axios.get('https://swapi.dev/api/planets');
}
getPlanets().then(({ data }) => console.log(data.results));
*/
async function getPlanets(url) {
  const res = await axios.get(url);
  console.log(res.data);
}
getPlanets('https://swapi.dev/api/planets/');

// error handling in async functions - add .catch() or add try/catch block to async function
getPlanets('https://swapi.dev/api/planetsssss/').catch((err) =>
  console.log(err)
);
async function getPlanetsTryCatch(url) {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}
getPlanetsTryCatch('https://swapi.dev/api/planes');

// multiple awaits
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

const btn = document.querySelector('button');
async function animateRight(el) {
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  await moveX(el, 100, 1000);
  moveX(el, 100, 1000);
}
animateRight(btn).catch((err) => console.log('all done!', err));

// parallel vs sequential requests

// refactoring with Promise.all
