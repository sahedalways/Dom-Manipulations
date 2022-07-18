/**
 * Title :Create a random number using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


//Dom reference are here
const button = document.getElementById("btn");
const result = document.getElementById("show-data");



//DOM functions are here
function createRandom () {
let rand = Math.random();
result.innerText = `Before Calculation :: ${rand}`;

rand = rand * (100 - 1) + 1;
result.innerText = `After Calculation :: ${rand}`;

rand = Math.floor(rand);
result.innerText = `After Flooring :: ${rand}`;

}


//event listeners are here
button.addEventListener("click" , createRandom);