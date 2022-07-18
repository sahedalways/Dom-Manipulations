/**
 * Title :Squire root number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function squireRoot () {
 let numberOne = inputFieldOne.value;
 let numberTwo = inputFieldTwo.value;

 const calculateTotal =parseInt( numberOne + numberTwo);
 console.log(typeof(calculateTotal));
 const sqrRoot = Math.sqrt(calculateTotal);
 result.innerText =`Your squire root result is :: ${sqrRoot}`;
}


//event listeners are here
button.addEventListener("click" , squireRoot);