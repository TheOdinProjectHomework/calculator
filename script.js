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