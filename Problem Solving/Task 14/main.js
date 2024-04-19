const subject =["Physics", "Chemistry", "Biology", "Mathematics","Computer"]
const percent = [];
var total = 0;
const grad = [];
function grade(p1){
    let g ="";
    if (p1 >= 90){
        g = "A";
    }
    else if (p1 >= 80){
        g = "B";
    }
    else if (p1 >= 70){
        g = "C";
    }
    else if (p1 >= 60){
        g = "D";
    }
    else if (p1 >= 40){
        g = "E";
    }
    else {
        g = "F";
    }
    return g;
}
for(i=0;i<5;i++){
    var num = Number(window.prompt(subject[i]));
    percent[i]=num;
    grad[i]=grade(num);
    total = total + num;
}

var total_percent = total / 5;


for(i=0;i<5;i++){
    console.log(subject[i]+": "+percent[i]+"%"+": Grad "+grad[i]);
}
console.log("Total Percentage: "+ total_percent + "%"+": Grad "+grade(total_percent));