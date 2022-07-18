/**
 * Title :  Find largest number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const inputFieldThree = document.getElementById("input-three");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function FindLargestNumber() {
 let numberOne = inputFieldOne.value;
 let numberTwo = inputFieldTwo.value;
 let numberThree = inputFieldThree.value;

const calculateLargest = Math.max( numberOne,  numberTwo, numberThree)
 result.innerText = `First number :: ${numberOne} , Second number :: ${numberTwo} and Third number ::  ${numberThree} \n Your largest number is :: ${calculateLargest}`;
}


//event listeners are here
button.addEventListener("click" , FindLargestNumber);