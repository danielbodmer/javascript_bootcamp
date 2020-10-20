function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop + 50}px`;
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    const currentTop = extractPosition(avatar.style.top);
    avatar.style.top = `${currentTop - 50}px`;
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    const currentLeft = extractPosition(avatar.style.left);
    avatar.style.transform = 'scale(1, 1)';
    avatar.style.left = `${currentLeft + 50}px`;
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    avatar.style.transform = 'scale(-1, 1)';
    const currentLeft = extractPosition(avatar.style.left);
    avatar.style.left = `${currentLeft - 50}px`;
  }
  if (isTouching(coin, avatar)) moveCoin();
});

const extractPosition = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2));
};

const getRandomPoint = (dim) => Math.floor(Math.random() * dim);
const moveCoin = () => {
  coin.style.top = `${getRandomPoint(window.innerHeight)}px`;
  coin.style.left = `${getRandomPoint(window.innerWidth)}px`;
};

moveCoin();
