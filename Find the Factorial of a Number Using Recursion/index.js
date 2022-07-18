/**
 * Title : Find a factorial of a number (recursion) using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");

let fact = 1;

//DOM functions are here
function findFactorial( n ) {
const numberOne = inputFieldOne.value;

if (n > numberOne ) {
    return;
}else {
    fact = fact * n;
    n++;
  
}
result.innerText = fact;
}
findFactorial(1);



//event listeners are here
button.addEventListener("click" , findFactorial);