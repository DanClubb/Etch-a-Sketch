let container = document.querySelector('.grid-container');
let cells = document.querySelectorAll('.cell');
let slider = document.getElementById('slider');
let gridSize = document.getElementById('grid-size');
let value = slider.value;
let clearButton = document.getElementById('clear');
let colourSelection = document.getElementById('colour-selection');
let colourButton = document.getElementById('colour-mode');
let rainbowButton = document.getElementById('rainbow');

let test = 500 / 30;

function createGrid(){
    container.innerHTML = '';
    container.style.setProperty('grid-template-columns', `repeat(${value}, ${test}px)`);

    for (let i = 0; i < (value * value); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', penColour);
    
        container.appendChild(cell);
    };
};

function randomColour(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

function activateButton(){
    colourButton.classList.toggle('active-button');
    rainbowButton.classList.toggle('active-button');
};

function penColour(e){
    if (colourButton.classList.contains("active-button")){
        e.target.setAttribute('style', `background: ${colourSelection.value};`); 

    }
    else if (rainbow.classList.contains("active-button")){     
        e.target.setAttribute('style', `background: ${randomColour()}`);

    }
};

function clearCells(){
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.removeAttribute("style")
    });
};

slider.onchange = () => {
    gridSize.innerHTML = slider.value;
    value = slider.value;  
    gridSize.innerHTML = `${slider.value} X ${slider.value}`; 
    createGrid();
};

slider.onmousemove = () => {
    gridSize.innerHTML = `${slider.value} X ${slider.value}`;
};

window.onload = createGrid();

