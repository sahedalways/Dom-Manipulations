/**
 * Title : Check Palindrome (using loop) using vanilla JavaScript DOM
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

 let stringLen = stringOne.length;
 let msg = "It is a palindrome!";

 for ( let i = 0; i < stringLen/2 ; i++ ) {
     if ( stringOne[i] != stringOne[ stringLen -1 - i ] ) { 
      msg = `${stringOne} is not palindrome!`;
     }

 }
 result.innerText = `${stringOne} :: ${msg}`;
}


//event listeners are here
button.addEventListener("click" , checkPalindrome);