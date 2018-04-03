
let calc = calculatorModule();
let valueStr = "";
let valueNum = Number.parseFloat(display.innerHTML);


let numButtons = document.getElementsByClassName('numButton');
for(i=0;i<numButtons.length;i++){
    numButtons[i].addEventListener('click', storeValue)
}


function storeValue(){
    valueStr += this.innerHTML;
    display.innerHTML = valueStr;
};

equals.addEventListener('click', totalGet)
function totalGet(){
    display.innerHTML = calc.getTotal();
    console.log(calc.getTotal());
}

addButton.addEventListener('click', addFunction);
function addFunction(){
    calc.load(valueNum);
    valueStr = "";
    display.innerHTML = 0;
}