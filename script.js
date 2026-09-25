const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".button-number");
const equals = document.querySelector(".button-equal");
const operators = document.querySelectorAll(".button-operator");

var firstNumber = "ERROR";
var secondNumber = "ERROR";
var currentOperator = "ERROR";
var flagOnce = true;

function add(x,y){
    return Number(x) + Number(y);
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate (x, y, op){
    flagOnce = true;
    switch(op){
        case "+":
            return add(x,y);
            break;
        case "-":
            return subtract(x,y);
            break;
        case "*":
            return multiply(x,y);
            break;
        case "/":
            return divide(x,y);
            break;
    }
}


numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (flagOnce){
            display.textContent = "";
            flagOnce = false;
        }
        display.textContent += number.textContent;
    });
});


operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // event.target.style.border = "solid 6px orange"; 
        if (firstNumber === "ERROR" || currentOperator === "ERROR"){
            currentOperator = operator.textContent; 
            firstNumber = display.textContent;
            display.textContent = "";
            console.log(`firstNumber: ${firstNumber}`)
            console.log(`secondNumber: ${secondNumber}`)
            console.log(`operator: ${currentOperator}`)
        }
        else {
            var nextOperator = operator.textContent;
            secondNumber = display.textContent;
            var result = operate(firstNumber, secondNumber, currentOperator);
            display.textContent = result;
            firstNumber = result; 
            currentOperator = nextOperator;
            secondNumber = "ERROR";
        }
    });
});

equals.addEventListener("click", () => {
    if (secondNumber === "ERROR" || display.textContent !== ""){
        secondNumber = display.textContent;
    }
    if (firstNumber !== "ERROR" || secondNumber !== "ERROR" || currentOperator !== "ERROR"){
        var result = operate(firstNumber, secondNumber, currentOperator);
        display.textContent = result;
        firstNumber = result;
        secondNumber = "ERROR";
        currentOperator = "ERROR";
    }
});



