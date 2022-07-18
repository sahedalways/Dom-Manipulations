/**
 * Title : Calculate Area of a Triangle using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const baseInput = document.getElementById("base");
const heightInput = document.getElementById("height");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function AreaTriangle () {
 let base = baseInput.value;
 let height = heightInput.value;

 const calculateAreaTriangle = base * height / 2;
 result.innerText = calculateAreaTriangle;
}


//event listeners are here
button.addEventListener("click" , AreaTriangle);