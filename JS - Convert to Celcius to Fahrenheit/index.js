/**
 * Title : Convert of Celcius to Fahrenheit using vanilla javascript DOM
 * Description : All the functions are related to convert Celcius to Fahrenheit..
 * Author : Sariful Islam (Sahed)
 * Date : 30/03/2022
 */
//DOM references are here
const celciusInput = document.getElementById("data");
const button = document.getElementById("btn");
const result = document.getElementById("result");


//All the functions are here
function convert ( ) {
    const celcius = celciusInput.value;
    const fahrenheit = celcius * 1.8 + 32;

    result.innerText = `From your ${celcius} Celcius convert to ${fahrenheit} Fahrenheit`;
}


//event listeners are here
button.addEventListener("click" , convert);




