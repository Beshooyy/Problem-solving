var num =Number(window.prompt("Enter Your Number"));
var power =Number(window.prompt("Enter the power"));
var num1 = 1;
if(num != 0){
    for (i=0;i<power;i++){
        num1 =num1*num;
    }  
}
else {
    num1 = 0;
}

console.log(num1);