/**
 * Title : Adding two number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function calculateAdd () {
 let numberOne = inputFieldOne.value;
 let numberTwo = inputFieldTwo.value;

 const calculateTotal = numberOne + numberTwo;
 result.innerText = `First number : ${numberOne} and Second number : ${numberTwo}, Your Sum is :: ${calculateTotal}`;
}


//event listeners are here
button.addEventListener("click" , calculateAdd);