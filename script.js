let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //store all components on html in our Js
    let clear = document.querySelector("#clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator");
    
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;

    })) 

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent = previousValue +""+ operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue ='';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener( "click", function(){
        calculate()
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

function handleNumber(num){
    if(currentValue.length <=5){
        currentValue += num;

    }
}

function handleOperators(op){
    operator = op;
    previousValue = currentValue
    currentValue = "";
}

function calculate(){
    previousValue = number(previousValue);
    currentValue = number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }

    else if(operator === "-"){
        previousValue -= currentValue;
    }

    else if(operator === "/"){
        previousValue /= currentValue;
    }

    else{
        previousValue *= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

    
// function roundNumber(num){
//         return Math.round(num * 1000) / 1000;
// }

function addDecimal(){
if(!currentValue.includes(".")){
    currentValue += '.';
}
}
