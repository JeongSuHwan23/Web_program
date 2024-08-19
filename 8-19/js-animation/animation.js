const box = document.getElementById('box');
let position = 0;
let direction = 1;
let colorToggle = true;
function animate() {
  position += 2 * direction;
  if (position >= 300 || position <= 0) {
    direction *= -1; // 방향 전환
    colorToggle = !colorToggle; // 색상 전환
  }
  box.style.left = position + 'px';
  box.style.backgroundColor = colorToggle ? 'red' : 'blue';
  requestAnimationFrame(animate);
}
animate(); 