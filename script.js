console.log('Server is running on port 3000');

let displayValue = '0';
let operand1 = null;
let operand2 = null;
let operator1 = null;
let result = null;

const buttons = document.querySelectorAll('button');
console.log(buttons);

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}

updateDisplay();

function clickBtn() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('number')) {
                console.log('Number clicked: ', buttons[i].value);
                inputNumber(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('clear')){
                clearDisplay();
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')){
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('equals')){
                equals();
                updateDisplay();
            } else if(buttons[i].classList.contains('percent')){
                percent(displayValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('decimal')){
                decimalPoint(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('sign')){
                sign(displayValue);
                updateDisplay();
            }
        });
    }
}

clickBtn();

function inputNumber(number) {
    if(operator1 === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = number;
        } else if(displayValue === operand1) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    } else {
        if(displayValue === operand1) {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
}

function clearDisplay(){
    displayValue = '0';
    operand1 = null;
    operand2 = null;
    operator1 = null;
    result = null;  
}

function inputOperator(operator){
    operator1 = operator;
    operand1 = displayValue;
    console.log("operator in use: " + operator);
    console.log(`operand: ${operand1}`);
}

function equals() {
    if(operator1 === null) {
        displayValue = displayValue;
    } else {
        operand2 = displayValue;
        result = calculate(operator1, Number(operand1), Number(operand2));
        displayValue = parseFloat(result).toString();
    }
}

function calculate(sign, x, y) {
    console.log(`sign: ${sign}, x: ${x}, y: ${y}`);
    if(sign === '+') {
        return add(x, y);
    } else if(sign === '-') {
        return subtract(x, y);
    } else if(sign === '*') {
        return multiply(x,y);
    } else if(sign === '/') {
        return divide(x, y);
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {  
    return x * y;
}

function divide(x, y) {
    if(y === 0) {
        return 'NaN';
    } else {
        return x / y;
    }
}

function percent(x) {
    displayValue = (x / 100).toString();
}

function decimalPoint(dec) {
    if(displayValue === operand1 || displayValue === operand2) {
        displayValue = '0';
        displayValue += dec;
    } else if(!displayValue.includes(dec)) {
        displayValue += dec;
    }
}

function sign(value) {
    displayValue = (value * -1).toString();
}