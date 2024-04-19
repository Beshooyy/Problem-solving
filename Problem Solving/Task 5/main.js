var num1 =Number(window.prompt("Enter 1st number"));
var num2 =Number(window.prompt("Enter 2nd number"));
var num3 =Number(window.prompt("Enter 3rd number"));
var max = 0;
var min =0;

if (num1 > num2 && num1 > num3){
    max = num1;
}
else if (num2 > num3){
    max = num2;
}
else {
    max = num3;
}
//////
if (num1 < num2 && num1 < num3){
    min = num1;
}
else if (num2 < num3){
    min = num2;
}
else {
    min = num3;
}

console.log("Max= " + max);
console.log("Min= " + min);
