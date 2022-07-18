/**
 * Title : Check Palindrome using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function checkPalindrome() {
 let stringOne = inputFieldOne.value;

let stringArray = stringOne.split('');
let stringArrayRev = stringArray.reverse();
let stringRev = stringArrayRev.join("");

if ( stringOne ==  stringRev) {
    result.innerText = `${stringOne} is palindrome word.`;
}
else {
    result.innerText = `${stringOne} is not palindrome word.`;
}
}


//event listeners are here
button.addEventListener("click" , checkPalindrome);