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
    btnSixteen.addEventListener('click', ()=> {
        canva.style.setProperty('--grid-rows', rows);
        canva.style.setProperty('--grid-cols', cols);
     for (i = 0; i < (rows * cols); i++){
        createGrid()
        }
    });
}

gridSixteen(16, 16)


 


btnSixtyfour.addEventListener('click', ()=> console.log('hola'))
btnHundred.addEventListener('click', ()=> console.log('hola'))