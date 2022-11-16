let canva = document.querySelector('.canva')
let btnSixteen = document.querySelector('#sixteen');
let btnSixtyfour = document.querySelector('#sixtyfour');
let btnHundred = document.querySelector('#hundred');
let resetBtn = document.querySelector('#reset')
let container; 

function createGrid(rows, cols){ 
    for (i = 0; i < (rows * cols); i++){
        createDiv();
        canva.style.setProperty('--grid-rows', rows);
        canva.style.setProperty('--grid-cols', cols);
    }
}

btnSixteen.addEventListener('click', ()=> {
    createDiv();
    container.classList.remove('gridBlack');
    createGrid(16, 16);
    });

btnSixtyfour.addEventListener('click', ()=> {
    createGrid(64, 64)
    });

btnHundred.addEventListener('click', ()=> {
    createGrid(100,100)
    });



  function createDiv (){
    container = document.createElement('div');
    document.getElementById('main').appendChild(container);
    container.classList.add('gridSquares');
    container.classList.remove('gridBlack');
    changeToBlack(container)
    resetGrid (container)
  }




function changeToBlack(container){ 
container.addEventListener('mouseover', ()=> {
    container.classList.add('gridBlack');
});
}

function resetGrid (container){ 
    resetBtn.addEventListener('click', ()=> {
        container.classList.add('gridSquares');
        container.classList.remove('gridBlack');
    })
}