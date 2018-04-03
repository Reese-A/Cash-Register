
let calc = calculatorModule();
let valueStr = "";
let valueNum = 0;
let addCheck = false;
let subCheck = false;


let numButtons = document.getElementsByClassName('numButton');
for(i=0;i<numButtons.length;i++){
    numButtons[i].addEventListener('click', storeValue)
}
 

function storeValue(){
    valueStr += this.innerHTML; 
    display.innerHTML = valueStr;
    valueNum = Number.parseFloat(display.innerHTML);
};

addButton.addEventListener('click', addFunction);
function addFunction(){
    valueStr = "";
    display.innerHTML = '+';
    calc.add(valueNum);
    valueNum = calc.getTotal();
    // calc.load(valueNum);
    console.log(valueNum);
    if(addCheck === false){
        addCheck = true;
    }
    console.log(addCheck);
    }

subButton.addEventListener('click', subFunction);
function subFunction() {
    valueStr = "";
    display.innerHTML = '-';
    calc.subtract(valueNum);
    valueNum = calc.getTotal();
    // calc.load(valueNum);
    console.log(valueNum);
    if (subCheck === false) {
        subCheck = true;
    }
    console.log(subCheck);
}

equals.addEventListener('click', totalGet);
function totalGet() {
    if(addCheck === true){
        calc.add(valueNum);
        addCheck = false;
    }
    if(subCheck === true){
        calc.subtract(valueNum);
        subCheck = false;
    }
    display.innerHTML = calc.getTotal();
    valueNum = 0;
    console.log(calc.getTotal());
    console.log(addCheck);
    console.log(subCheck);
}

clear.addEventListener('click', clearDisplay);
function clearDisplay() {
    calc.load(0);
    numValue = 0;
    valueStr = '';
    display.innerHTML = '0.00';
    console.log(numValue);
}