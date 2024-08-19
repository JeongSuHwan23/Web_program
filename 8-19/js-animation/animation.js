const bar = document.querySelector('.bar');
let width = 100;
let intervalId;

function render() {
  intervalId = setInterval(animation, 1000/60);
}

function animation() {
  bar.style.width = `${width}px`;
  width += 10;
  if (width == 1000) clearInterval(intervalId);
}

function onClick() {
  render();
}