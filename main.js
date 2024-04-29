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
let secondOperator = '';
const num = '0123456789';
const op = '+-*/';

function clear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    secondOperator = '';
    display.textContent = '';
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (num.includes(button.textContent)) {
            if (operator === '') {
                firstNumber = firstNumber + button.textContent;
            } else [
                secondNumber = secondNumber + button.textContent
            ]
        } else if (op.includes(button.textContent) && operator === '') {
            operator = button.textContent;
        } else if (op.includes(button.textContent)) {
            secondOperator = button.textContent;
        }

        display.textContent = '';
        display.append(`${firstNumber} ${operator} ${secondNumber} ${secondOperator}`)

        if (button.textContent === '=' && (firstNumber === '' || secondNumber === '' || operator === '')) {}
        else if (button.textContent === '=') {
            if (operator === '+') {
                display.textContent = '';
                firstNumber = add(parseInt(firstNumber), parseInt(secondNumber))
                secondNumber = '';
                operator = secondOperator;
                secondOperator = '';
                display.append(`${firstNumber} ${operator} ${secondNumber}`)
            } else if (operator === '-') {
                display.textContent = '';
                firstNumber = substract(parseInt(firstNumber), parseInt(secondNumber))
                secondNumber = '';
                operator = secondOperator;
                secondOperator = '';
                display.append(`${firstNumber} ${operator} ${secondNumber}`)
            } else if (operator === '*') {
                display.textContent = '';
                firstNumber = multiply(parseInt(firstNumber), parseInt(secondNumber))
                secondNumber = '';
                operator = secondOperator;
                secondOperator = '';
                display.append(`${firstNumber} ${operator} ${secondNumber}`)
            } else if (operator === '/' && secondNumber === '0') {
                clear()
                display.textContent = 'ERROR';
            } else if (operator === '/') {
                display.textContent = '';
                firstNumber = divide(parseInt(firstNumber), parseInt(secondNumber))
                secondNumber = '';
                operator = secondOperator;
                secondOperator = '';
                display.append(`${firstNumber} ${operator} ${secondNumber}`)
            }
        } else if (button.textContent === 'clear') {
            clear()
            display.textContent = '';
        }
    });
});