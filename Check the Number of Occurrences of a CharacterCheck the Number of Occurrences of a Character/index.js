/**
 * Title :  Check number of occurances of a character using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const inputFieldTwo = document.getElementById("input-two");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function characterOccurances() {
 let fullString = inputFieldOne.value;
 let searchLetter = inputFieldTwo.value;

let strLen = fullString.length;
let counter = 0;

for ( let i = 0; i <  strLen ; i++) {
if ( fullString[i]  ==  searchLetter){
counter++;
}

}
result.innerText = `${fullString} : ${searchLetter} => ${counter} times.`;
}


//event listeners are here
button.addEventListener("click" , characterOccurances);