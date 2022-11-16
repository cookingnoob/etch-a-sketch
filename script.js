let canva = document.querySelector('.canva')
let btnSixteen = document.querySelector('#sixteen');
let btnSixtyfour = document.querySelector('#sixtyfour');
let btnHundred = document.querySelector('#hundred');


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

btnSixteen.addEventListener('click', ()=> {
    gridSixteen(16, 16)
    console.log('hola')
    });
btnSixtyfour.addEventListener('click', ()=> {
    gridSixteen(64, 64)
    console.log('hola2')
    });
btnHundred.addEventListener('click', ()=> {
    gridSixteen(100,100)
    console.log('hola3')
    });