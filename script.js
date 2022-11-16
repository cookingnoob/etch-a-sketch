let canva = document.querySelector('.canva')
let btnSixteen = document.querySelector('#sixteen');
let btnSixtyfour = document.querySelector('#sixtyfour');
let btnHundred = document.querySelector('#hundred');
let resetBtn = document.querySelector('#reset')
let container;

function createGrid(rows, cols){ 
    for (i = 0; i < (rows * cols); i++){
        container = document.createElement('div');
        container.classList.add('gridSquares');
        document.getElementById('main').appendChild(container);
        canva.style.setProperty('--grid-rows', rows);
        canva.style.setProperty('--grid-cols', cols);
        changeToBlack(container)
        resetGrid(container)
    }
}


function changeToBlack(container){ 
container.addEventListener('mouseover', ()=> {
    container.style.backgroundColor = 'black';
});
}

function resetGrid (container){ 
    resetBtn.addEventListener('click', ()=> {
        container.style.backgroundColor = 'white';
    })
}

btnSixteen.addEventListener('click', ()=> {
    createGrid(16, 16)
    });

btnSixtyfour.addEventListener('click', ()=> {
    createGrid(64, 64)
    });

btnHundred.addEventListener('click', ()=> {
    createGrid(100,100)
    });