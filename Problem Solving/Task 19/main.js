var num =Number(window.prompt("Enter Your Number"));

switch (true){
    case (num>0):
        console.log("positive");
        break;
    case (num<0):
        console.log("negative");
        break;
    case (num == 0):
        console.log("zero");
        break;
}
