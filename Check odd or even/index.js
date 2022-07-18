/**
 * Title : Calculate odd or even number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function calculateOddOrPositive() {
 let numberOne = inputFieldOne.value;

if ( numberOne%2 == 0 ) {
    result.innerText = `${ numberOne } is a Even number!`;
} else if ( numberOne%2 != 0 ) {
    result.innerText = `${ numberOne } is a Odd number!`;
}else {
    result.innerText = `${ numberOne } is a Invalid number!`;
}
}


//event listeners are here
button.addEventListener("click" , calculateOddOrPositive);