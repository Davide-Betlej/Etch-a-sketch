// Functions TODO: Generate grid, set default grid value, set grid size, changing the color on hover, clearing the grid on button click

const gridContainer = document.querySelector ('#grid-container');
const sizeButton = document.querySelector ('#sizeButton');
sizeButton.addEventListener('click', changeSize);

function defaultGrid () {
    generateGrid(16);
}

function generateGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = 'gridElement';
        gridContainer.appendChild(gridElement);
    }
}

function clearGrid () {
    const gridArray = Array.from(gridContainer.childNodes)
    gridArray.forEach(element => {
        gridContainer.removeChild(element);
    });
}

function changeSize () {
    const mySize = prompt('Enter a size from 1 to 100:')
    if (mySize < 1 || mySize > 100) {
        alert('You didn\'t enter a valid number, try again!')
        changeSize();
    } else {
        clearGrid();
        generateGrid(mySize);
    }
}