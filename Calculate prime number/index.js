/**
 * Title :Calculate prime number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function calculatePrimeNumber() {
 let numberOne = inputFieldOne.value;

if ( numberOne == 1 ) {
result.innerText = `${numberOne} is neither prime or composite number!`
} else if ( numberOne < 1 ) {
    result.innerText = `${numberOne} is not a prime number!`
} else {
    for ( let i = 2; i < numberOne; i++ ) {
        if ( numberOne%i == 0 ) {
            result.innerText = `${numberOne} is not a prime number!`;
            break;
        }else {
            result.innerText = `${numberOne} is a prime number!`
        }
    }
   
}
}


//event listeners are here
button.addEventListener("click" , calculatePrimeNumber);