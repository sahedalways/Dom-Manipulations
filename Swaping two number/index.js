/**
 * Title : Swaping two number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function swapingNumber () {
 let numberOne = inputFieldOne.value;
 let numberTwo = inputFieldTwo.value;

 numberOne = numberOne + numberTwo;
 numberTwo = numberOne - numberTwo;
 numberOne = numberOne - numberTwo;
 
 result.innerText = `After swaping :: \n The value of first number :: ${numberOne} The value of Second number :: ${numberTwo}`;
}


//event listeners are here
button.addEventListener("click" , swapingNumber);