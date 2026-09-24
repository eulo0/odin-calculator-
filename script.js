const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".button-number");
const equals = document.querySelector(".button-equal");
const operators = document.querySelectorAll(".button-operator");

var firstNumber = "ERROR";
var secondNumber = "ERROR";
var currentOperator = "ERROR";

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
    switch(op){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}


numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

var counter = 0;

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        counter += 1;
        event.target.style.border = "solid 6px orange"; 
        currentOperator = operator.textContent; 
        if (firstNumber === "ERROR"){
            firstNumber = display.textContent;
            display.textContent = "";
        }
        else{
            secondNumber = display.textContent 
        }
        console.log(counter)
    });
});

equals.addEventListener("click", () => {
    if (secondNumber === "ERROR" && display.textContent !== ""){
        secondNumber = display.textContent;
    }
    if (firstNumber !== "ERROR" || secondNumber !== "ERROR" || currentOperator !== "ERROR"){
        var result = operate(firstNumber, secondNumber, currentOperator);
        display.textContent = result;
        secondNumber = "ERROR";
        currentOperator = "ERROR";
    }
});



