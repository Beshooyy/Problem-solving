var month =Number(window.prompt("Enter Month Number"));
var days = 31;
if (month == 2){
    days = 28;
}
else if (month < 8 && month % 2 == 0){
    days = 30;
}
else if (month > 8 && month % 2 != 0){
    days = 30;
}

console.log("Days in Month: " + days);