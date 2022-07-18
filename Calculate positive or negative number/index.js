/**
 * Title : Calculate positive or negative number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function calculateSign () {
 let numberOne = inputFieldOne.value;

if ( numberOne < 0 ) {
    result.innerText = `The ${numberOne} is :: Negative Number`;
}else if ( numberOne > 0 ) {
    result.innerText = `The ${numberOne} is :: Positive Number`;
}else if ( numberOne == "0" ) {
    result.innerText = `The ${numberOne} is :: Zero`;
}else {
    result.innerText = `The ${numberOne} is :: Not a Number`;
}
}


//event listeners are here
button.addEventListener("click" , calculateSign);