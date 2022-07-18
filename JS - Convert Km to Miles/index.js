/**
 * Title : Convert of Kilometers to Miles using vanilla javascript DOM
 * Description : All the functions are related to convert km to miles..
 * Author : Sariful Islam (Sahed)
 * Date : 30/03/2022
 */
//DOM references are here
const kms = document.getElementById("data");
const button = document.getElementById("btn");
const result = document.getElementById("result");


//All the functions are here
function convert ( ) {
     const km =  kms.value;
    let factor = .621371;
    let miles = km * factor;

   result.innerText = `From your ${km} Kilometers converted to ${miles} Miles.`;
}


//event listeners are here
button.addEventListener("click" , convert);




