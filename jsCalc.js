const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display')
const buttons = document.querySelectorAll("button");
const expression = document.getElementById("expression");

let expr = [];
let userPressed = false;

buttons.forEach(function(button) {

    button.onclick = function() {
        switch (button.textContent) {
            case "AC":
                clearAll();
                break;

            case ".":
                insertDecimal();
                break;

            case "0":
                insertZero();
                break;

            case "+":
            case "-":
            case "x":
            case "÷":
                editExpression(button.textContent);
                break;

            case "=":
                result();
                break;
        
            default:
                insertDigit(button.textContent);
                break;
        }
    }
})

function insertDigit(text) {
    if (userPressed) {
        display.textContent = ""; 
        userPressed = false;
    }

    if (display.textContent.includes(".") && display.textContent.split(".")[1] != "") {
        return;
    } else if (display.textContent.length > 11) {
        return;
    } else if (display.textContent == '0') {
        display.textContent = "";
    }
    display.textContent = display.textContent + text;
}

function clearAll() {
    display.textContent = "";
    expression.textContent = "";
    userPressed= false;
    expr = [];
}


function insertDecimal() {
    if (userPressed) {
        display.textContent = ""; 
        userPressed = false;
    }

    if (display.textContent == "") {
        display.textContent = "0.";
    } else if (!display.textContent.includes(".")) {
        display.textContent = display.textContent + ".";
    }    
}

function insertZero() {
    if (userPressed) {
        display.textContent = "";
        userPressed = false;
    }

    if (display.textContent == "0" || display.textContent.includes(".")) {
        return;
    } else {
        insertDigit(0);
    }
}


function editExpression(operator) {
    operator = operator === "x" ? "*" : operator;
    operator = operator === "÷" ? "/" : operator;
    
    if (userPressed) {
        expr[expr.length - 1] = operator;
    } else if (display.textContent != "") {
        expr.push(display.textContent);
        expr.push(operator);
        userPressed = true;
    }
    expression.textContent = expr.join(" ");
}

function result() {
    if (userPressed) {
        expr = expr.slice(0, -1);
    } else {
        expr.push(display.textContent);
    }

    let result = eval(expr.join(''));

    if (!Number.isInteger(result)) {
        result = result.toFixed(1);
    }

    display.textContent = result;
    expression.textContent = expr.join(" ") + " =";
    userPressed = false;
    expr = [];
}



