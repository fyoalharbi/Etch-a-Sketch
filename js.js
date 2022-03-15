let color = 'black';
function addingDivs(size){
    let board = document.querySelector('.board');
    let div = board.querySelectorAll('div');
    div.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for(let i = 0 ; i < size * size ; i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", Colordiv);
        div.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", div);
    }

}
addingDivs(16);
function Colordiv() {
    this.style.backgroundColor = color;
}
function changeColor(choice){
    color = choice;
}
function changeSize(input){
    if(input >= 2 && input <= 100){
        addingDivs(input);
    }
    else{
        return 0;
    }
}
