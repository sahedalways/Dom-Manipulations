/**
 * Title : Find a factorial of a number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function findFactorial() {
 let numberOne = inputFieldOne.value;

let fact = 1;

if ( numberOne == 0 ) {
result.innerText = `The factorial of a ${numberOne} is :: 1`;
}else if ( numberOne < 0 ) {
    result.innerText = `Negetive factorial number is not possible !`;
}else {
    for ( let i = 1; i <= numberOne; i++ ) {
fact *= i;
    }
    result.innerText =`Your number :: ${numberOne} \n The Factorial number is :: ${fact}`;
}
}


//event listeners are here
button.addEventListener("click" , findFactorial);