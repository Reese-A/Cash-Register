
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
    calc.add(displayNum);
    valueNum = calc.getTotal();
    calc.load(valueNum);
    console.log(valueNum);
    if(addCheck === false){
        addCheck = true;
    }else{
        addCheck = false;
    }
    }

equals.addEventListener('click', totalGet)
function totalGet() {
    if(addCheck === true){
        calc.add(displayNum);
        addCheck = false;
    }
    display.innerHTML = calc.getTotal();
    console.log(calc.getTotal());
}