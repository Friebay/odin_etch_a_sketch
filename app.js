const container = document.getElementById('container');

const gridSize = 16;
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';  // Change the color on hover
  });
  container.appendChild(square);
}
