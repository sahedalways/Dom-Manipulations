/**
 * Title : Calculate whether a String Contains a Substring  using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const baseInput = document.getElementById("base");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function searchSubstring () {
 let base = baseInput.value;

 let subString = "the";

let testOne = base.includes( subString );
let testTwo = base.indexOf( subString );
alert(testTwo);

if ( testOne == true ) {
result.innerText = `${ base } :: There are includes "The"`;
}else {
    result.innerText = `${ base } :: "the" is missing.`;
}

}


//event listeners are here
button.addEventListener("click" , searchSubstring);