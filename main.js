function add (a, b) {
    return (a + b).toFixed(2).replace(/(\.[1-9]*)(0+)$/, "$1");
}
function substract (a, b) {
    return (a - b).toFixed(2).replace(/(\.[1-9]*)(0+)$/, "$1");
}
function multiply (a, b) {
    return (a * b).toFixed(2).replace(/(\.[1-9]*)(0+)$/, "$1");
}
function divide (a, b) {
    return (a / b).toFixed(2).replace(/(\.[1-9]*)(0+)$/, "$1");
}/\.$/

let firstNumber = '';
let secondNumber = '';
let operator = '';
const num = '0123456789';
const op = '+-*/';
const dot = '.';

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

function parse(number) {
    if (number.includes(dot)) {
        return parseFloat(number)
    } else {
        return parseInt(number)
    }
}

function calculus() {
    if (operator === '+') {
        firstNumber = add(parse(firstNumber), parse(secondNumber)).toString().replace(/\.$/, "")
        result();
        textDisplay();
    } else if (operator === '-') {
        firstNumber = substract(parse(firstNumber), parse(secondNumber)).toString().replace(/\.$/, "")
        result();
        textDisplay();
    } else if (operator === '*') {
        firstNumber = multiply(parse(firstNumber), parse(secondNumber)).toString().replace(/\.$/, "")
        result();
        textDisplay();
    } else if (operator === '/' && secondNumber === '0') {
        clear()
        display.textContent = "CAN'T DIVIDE BY ZERO DOOFUS";
    } else if (operator === '/') {
        firstNumber = divide(parse(firstNumber), parse(secondNumber)).toString().replace(/\.$/, "")
        result();
        textDisplay();
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        if (num.includes(button.textContent)) {
            if (operator.length === 0 || firstNumber.length === 0) {
                firstNumber = firstNumber + button.textContent;
            } else {
                secondNumber = secondNumber + button.textContent;
            }
        } else if (op.includes(button.textContent) && operator.length === 0) {
            operator = button.textContent;
        } else if (op.includes(button.textContent)) {
            calculus();
            operator = button.textContent;
        }

        if (firstNumber === '' && operator.length > 0) {
            firstNumber = '0';
        }

        if (dot.includes(button.textContent)) {
            if (secondNumber.includes(dot)) {;}
            else if (operator.length > 0 && secondNumber.length > 0) {
                secondNumber = secondNumber + button.textContent
            }
            else if (firstNumber.includes(dot)) {;}
            else if (firstNumber.length > 0) {
                firstNumber = firstNumber + button.textContent
            }
        };

        textDisplay();

        if (button.textContent === '=' && (firstNumber.length === 0 || secondNumber.length === 0 || operator.length === 0)) {;}
        else if (button.textContent === '=') {
            calculus()
            operator = '';
            textDisplay();
        } else if (button.textContent === 'clear') {
            clear()
        }

        if (button.textContent === '←' && secondNumber.length > 0) {
            secondNumber = secondNumber.slice(0, -1);
            textDisplay();
        } else if (button.textContent === '←' && operator.length > 0) {
            operator = operator.slice(0, -1);
            textDisplay();
        } else if (button.textContent === '←' && firstNumber.length > 0) {
            firstNumber = firstNumber.slice(0, -1);
            textDisplay();
        }
    });
});