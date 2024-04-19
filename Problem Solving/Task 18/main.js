var num =Number(window.prompt("Enter Your Number"));

switch (true){
    case (num%2 == 0):
        console.log("even");
        break;
    case (num%2 != 0):
        console.log("odd");
        break;
}
