const container = document.getElementById('container');

// Set the number of squares per side (16x16)
const gridSize = 16;
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
  // Create a new div for each square
  const square = document.createElement('div');
  
  // Add the 'square' class to the div
  square.classList.add('square');
  
  // Append the square div to the container
  container.appendChild(square);
}
