var num1 = Number(window.prompt("Enter 1st Number"));
var num2 = Number(window.prompt("Enter 2nd Number"));
let m = num1 - num2;
switch(true){
    case (m>0):
        console.log("Max: " + num1);
        break;
    case (m<0):
        console.log("Max: " + num2);
        break;
}

