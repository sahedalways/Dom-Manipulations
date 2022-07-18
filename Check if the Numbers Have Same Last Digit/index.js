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
function sameDigitCheck() {
 let numberOne = inputFieldOne.value;
 let numberTwo = inputFieldTwo.value;
 let numberThree = inputFieldThree.value;

 let resultOne = numberOne%10;
 let resultTwo = numberTwo%10;
 let resultThree = numberThree%10;

 if ( resultOne ==  resultTwo && resultThree == resultTwo) {
result.innerText = `${numberOne}, ${numberTwo}, ${numberThree} are having the last same digit`;
 }else {
    result.innerText = `${numberOne}, ${numberTwo}, ${numberThree} are not having the last same digit`;
 }
}


//event listeners are here
button.addEventListener("click" , sameDigitCheck);