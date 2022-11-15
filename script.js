let canva = document.querySelector('.canva')

function createGrid(){ 
let container = document.createElement('div');
container.classList.add('gridSquares');
document.getElementById('main').appendChild(container)
changeToBlack(container)
}


function changeToBlack(container){ 
container.addEventListener('mouseover', ()=> {
    container.style.backgroundColor = 'black';
});
}


function gridSixteen (rows, cols){
    canva.style.setProperty('--grid-rows', rows);
    canva.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
        createGrid()
    }
    console.log(rows, cols)
}
gridSixteen(16, 16)