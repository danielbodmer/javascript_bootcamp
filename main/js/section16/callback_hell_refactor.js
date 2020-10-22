const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => {
    return moveX(btn, 500, 1500);
  })
  .then(() => {
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    return moveX(btn, 700, 2000);
  })
  .catch(() => console.log("Can't move any further"));
