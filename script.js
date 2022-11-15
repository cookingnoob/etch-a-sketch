
function createGrid(){ 
let container = document.createElement('div');
container.classList.add('gridSquares');
document.getElementById('main').appendChild(container)
changeToBlack(container)
}

//cambia de color con el hover

function changeToBlack(container){ 
container.addEventListener('mouseover', ()=> {
    container.style.backgroundColor = 'black';
});
}


function gridSixteen (x){
    for (i = 0; i < x; i++){
        createGrid()
    }
}
gridSixteen(16)