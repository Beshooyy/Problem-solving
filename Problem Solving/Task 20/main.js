var num1 =Number(window.prompt("Enter 1st Number"));
var num2 =Number(window.prompt("Enter 2nd Number"));
var operator = window.prompt("Enter operator +,-,*,/,%");
function sum(p1,p2){
    return p1 + p2;
}
function subtraction(p1,p2){
    return p1-p2;
}
function multiply(p1,p2){
    return p1*p2;
}
function division(p1,p2){
    return p1/p2;
}
function remainder(p1,p2){
    return p1%p2;
}

switch (operator){
    case "+":
        console.log(sum(num1,num2));
        break;
    case "-":
        console.log(subtraction(num1,num2));
        break;
    case "*":
        console.log(multiply(num1,num2));
        break;
    case "/":
        console.log(division(num1,num2));
        break;
    case "%":
        console.log(remainder(num1,num2));
        break;
}
