var total = 0;
for (i=0;i<5;i++){
    var num = Number(window.prompt("Enter the Marks of five subjects: "));
    total = total+num;
}
var average = total / 5;
console.log("Total Marks = " + total);
console.log("Average Marks = " + average);
console.log("Percentage = " + average + "%");


