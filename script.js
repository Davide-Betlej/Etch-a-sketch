// Functions TODO: Generate grid, set default grid value, set grid size, changing the color on hover, clearing the grid on button click

const gridContainer = document.querySelector ('#grid-container');
const sizeButton = document.querySelector ('#sizeButton');

sizeButton.addEventListener('click', changeSize);


function defaultGrid () {
    generateGrid(16);
    setGridSize(16);
}

function generateGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = 'gridElement';
        gridElement.addEventListener('mouseover', colorHover);
        gridContainer.appendChild(gridElement);
    }
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

function clearGrid () {
    const gridTransformToArray = Array.from(gridContainer.childNodes)
    gridTransformToArray.forEach(element => {
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
        setGridSize(mySize);
    }
}

function colorHover(myDiv) {
    myDiv.target.style.backgroundColor = `black`;
}