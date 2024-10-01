const container = document.getElementById('container');
const button = document.getElementById('button');

createGrid(16);

button.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of squares per side (maximum 100):');
    clearGrid();
    createGrid(gridSize);
});

function createGrid(gridSize) {
    const squareSize = 720 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}