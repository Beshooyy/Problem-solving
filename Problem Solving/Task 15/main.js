var num = Number(window.prompt("Enter Month Number"));

switch(num) {
    case 2:
        console.log("28");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30");
        break;
    default:
        console.log("Unknown");
        break;
}
