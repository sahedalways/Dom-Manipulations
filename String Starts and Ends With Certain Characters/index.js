/**
 * Title : check in String Starts and Ends With Certain Characters using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const inputFieldOne = document.getElementById("input-one");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function matchStartsEnds() {
 let numberOne = inputFieldOne.value;

let testStart = numberOne.startsWith('s');
let testEnd = numberOne.endsWith('d');

if ( testStart == true && testEnd == true ) {
result.innerText = `${numberOne} starts with "S" and ends with "D"`;
} else if ( testStart == true && testEnd == false ) {
    result.innerText = `${numberOne} starts with "S" but  ends does not match.`;
} else if ( testStart == false && testEnd == true ) {
    result.innerText = `${numberOne} starts does not match but  ends with "D".`;
} else {
    result.innerText = `${numberOne} :: That does not match with our requirements.`;
}
}


//event listeners are here
button.addEventListener("click" , matchStartsEnds);