// 12. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str){
    return str.split("").map(c => c + c).join("");
}
// OR 
const doubleChar = (str) => str.split("").map(c => c + c).join("");
