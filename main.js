let container = document.querySelector('.grid-container');
let cells = document.querySelectorAll('.cell');
let slider = document.getElementById('slider');
let gridSize = document.getElementById('grid-size');
let value = slider.value;

gridSize.innerHTML = slider.value;

for (let i = 0; i < (30 * 30); i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');

    container.appendChild(cell);
}

cells = document.querySelectorAll('.cell');

cells.forEach(e => {
    e.addEventListener('mouseenter', function(){
        e.setAttribute('style', 'background: red;');
    });
});

slider.oninput = function(){
    gridSize.innerHTML = slider.value;
    value = slider.value;
    container.style.setProperty('grid-template-columns', `repeat(${value}, auto)`);

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }
   

    for (let i = 0; i < (value * value); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');

        container.appendChild(cell);
    }

    cells = document.querySelectorAll('.cell');

    cells.forEach(e => {
        e.addEventListener('mouseenter', function(){
            e.setAttribute('style', 'background: red;'); 
        });
    });
}





