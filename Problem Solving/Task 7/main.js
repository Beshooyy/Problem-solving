var char = window.prompt("Enter Your Number").toLowerCase();
const vowels = ["a","e","i","o","u"];
let char_state = "Consonant";

for(i=0;i<5;i++){
    if (char == vowels[i]){
        char_state = "Vowel";
        break;
    }
}

console.log(char_state);
