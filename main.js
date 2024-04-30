function add (a, b) {
    return a + b;
}
function substract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
const num = '0123456789';
const op = '+-*/';

function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '';
}

function textDisplay() {
    display.textContent = '';
    display.append(`${firstNumber} ${operator} ${secondNumber}`)
}

function result() {
    secondNumber = '';
}

function calculus() {
    if (operator === '+') {
        firstNumber = add(parseInt(firstNumber), parseInt(secondNumber))
        result();
        textDisplay();
    } else if (operator === '-') {
        firstNumber = substract(parseInt(firstNumber), parseInt(secondNumber))
        result();
        textDisplay();
    } else if (operator === '*') {
        firstNumber = multiply(parseInt(firstNumber), parseInt(secondNumber))
        result();
        textDisplay();
    } else if (operator === '/' && secondNumber === '0') {
        clear()
        display.textContent = 'ERROR';
    } else if (operator === '/') {
        firstNumber = divide(parseInt(firstNumber), parseInt(secondNumber))
        result();
        textDisplay();
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (num.includes(button.textContent)) {
            if (operator === '' || firstNumber === '') {
                firstNumber = firstNumber + button.textContent;
            } else {
                secondNumber = secondNumber + button.textContent;
            }
        } else if (op.includes(button.textContent) && operator === '') {
            operator = button.textContent;
        } else if (op.includes(button.textContent)) {
            calculus();
            operator = button.textContent;
        }
        if (firstNumber === '' && op.includes(operator)) {
            firstNumber = 0;
        }

        textDisplay();

        if (button.textContent === '=' && (firstNumber === '' || secondNumber === '' || operator === '')) {}
        else if (button.textContent === '=') {
            calculus()
            operator = '';
            textDisplay();
        } else if (button.textContent === 'clear') {
            clear()
        }

        if (button.textContent === '←' && secondNumber >= 10) {
            secondNumber = Math.floor(secondNumber / 10);
            textDisplay();
        } else if (button.textContent === '←' && (parseInt(secondNumber) >= 0 && secondNumber < 10)) {
            secondNumber = '';
            textDisplay();
        } else if (button.textContent === '←' && secondNumber === '' && firstNumber >= 10) {
            firstNumber = Math.floor(firstNumber / 10);
            textDisplay();
        } else if (button.textContent === '←' && secondNumber === '' && firstNumber < 10) {
            firstNumber = '';
            textDisplay();
        }

    });
});