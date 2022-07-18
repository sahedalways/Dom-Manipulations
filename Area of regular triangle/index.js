/**
 * Title : Calculate Area of regular Triangle using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const baseInput = document.getElementById("base");
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function areaRegularTriangle () {
 let base = baseInput.value;
 let height = heightInput.value;
let width = widthInput.value;

 const generalFormula = base + height + width / 2;
 const areaTrianagle = generalFormula * (generalFormula - base) * (generalFormula - height) * ( generalFormula -  width);

 let areaRegularTriangle = Math.sqrt(areaTrianagle);
 result.innerText = areaRegularTriangle;
}


//event listeners are here
button.addEventListener("click" , areaRegularTriangle);