
let calc = calculatorModule();
let valueStr = "";
let valueNum = 0;
let lastOperator = '';
let ranLoad = false;
// let addCheck = false;
// let subCheck = false;
// let multiCheck = false;


let numButtons = document.getElementsByClassName('numButton');
for (i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', storeValue)
}


function storeValue() {
  valueStr += this.innerHTML;
  display.innerHTML = valueStr;
  valueNum = Number.parseFloat(display.innerHTML);
};

addButton.addEventListener('click', addFunction);
function addFunction() {
  if(ranLoad === false){
    calc.load(valueNum);
    ranload = true;
  }
  lastOperator = '+';
  valueStr = "";
  display.innerHTML = '+';
  calc.add(valueNum);
  // valueNum = calc.getTotal();
  console.log(valueNum);
  // if (addCheck === false) {
  //   addCheck = true;
  // }
  // console.log('add: ' + addCheck);
}

subButton.addEventListener('click', subFunction);
function subFunction() {
  if (ranLoad === false) {
    calc.load(valueNum);
    ranload = true;
  }
  lastOperator = '-';
  valueStr = "";
  display.innerHTML = '-';
  calc.subtract(valueNum);
  // valueNum = calc.getTotal();
  console.log(valueNum);
  // if (subCheck === false) {
  //   subCheck = true;
  //   calc.subtract(valueNum);
  // }
  // console.log('sub: ' + subCheck);
}

multiButton.addEventListener('click', multiFunction);
function multiFunction() {
  valueStr = "";
  display.innerHTML = 'x';
  calc.multiply(valueNum);
  valueNum = calc.getTotal();
  // calc.load(valueNum);
  console.log(valueNum);
  if (multiCheck === false) {
    multiCheck = true;
  }
  console.log('multi: ' + multiCheck);
}

equals.addEventListener('click', totalGet);
function totalGet() {
  // if (addCheck === true) {
  //   calc.add(valueNum);
  //   addCheck = false;
  // }
  // if (subCheck === true) {
  //   calc.subtract(valueNum);
  //   subCheck = false;
  // }
  // if (multiCheck === true) {
  //   calc.multiply(valueNum);
  //   multiCheck = false;
  // }
  display.innerHTML = calc.getTotal();
  valueNum = 0;
  console.log(calc.getTotal());
  // console.log('add: ' + addCheck);
  // console.log('sub: ' + subCheck);
  // console.log('multi: ' + multiCheck);
}

clear.addEventListener('click', clearDisplay);
function clearDisplay() {
  calc.load(0);
  numValue = 0;
  valueStr = '';
  display.innerHTML = '0.00';
  ranLoad = false;
  console.log(numValue);
}