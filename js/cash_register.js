
let calc = calculatorModule();
let valueStr = "";
let displayNum = 0;
let valueNum = 0;
let addCheck = false;


let numButtons = document.getElementsByClassName('numButton');
for(i=0;i<numButtons.length;i++){
    numButtons[i].addEventListener('click', storeValue)
}
 

function storeValue(){
    valueStr += this.innerHTML; 
    display.innerHTML = valueStr;
    valueNum = Number.parseFloat(display.innerHTML);
    displayNum = Number.parseFloat(display.innerHTML);
};

addButton.addEventListener('click', addFunction);
function addFunction(){
    valueStr = "";
    display.innerHTML = '+';
    calc.add(valueNum);
    valueNum = calc.getTotal();
    calc.load(valueNum);
    console.log(valueNum);
    displayNum = 0;
    if(addCheck === false){
        addCheck = true;
    }
    console.log(addCheck);
    }

equals.addEventListener('click', totalGet)
function totalGet() {
    if(addCheck === true){
        calc.add(valueNum);
        addCheck = false;
    }
    display.innerHTML = calc.getTotal();
    valueNum = 0;
    console.log(calc.getTotal());
    console.log(addCheck);
}