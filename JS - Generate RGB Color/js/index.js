//---steps---//
//step-1 (Create onload function)//
window.onload = () => {
    main();
}

function main () {
const root = document.querySelector("body");
const button = document.querySelector(".button button");

button.addEventListener("click" , function () {
    const bgColor =  generateRgbColor ();

    root.style.backgroundColor = bgColor;
})
}
//step-2 (Generate random rgb background color function)//
function generateRgbColor () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red} , ${green} , ${blue})`;
}



