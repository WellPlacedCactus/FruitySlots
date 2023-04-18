(() => {
  const fruits = [
    '🍇',
    '🍉',
    '🍊',
    '🍋',
    '🍌',
    '🍍',
    '🥭',
    '🍎',
    '🍏',
    '🍐',
    '🍑',
    '🍒',
    '🍓',
    '🥝',
    '🍅'
  ];
  let spinning = true;
  let t = 0;
  const loop = () => {
    if (spinning) {
      t++;
      if (t > 5) {
        t = 0;
        document.querySelectorAll('.fruit').forEach(fruit => {
          fruit.innerHTML = fruits[Math.floor(Math.random() * fruits.length)];
        });
      }
    }
    requestAnimationFrame(loop);
  };
  addEventListener('load', () => {
    document.querySelector('.button').addEventListener('click', () => {
      spinning = false;
    });
    requestAnimationFrame(loop);
  });
})();