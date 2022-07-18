/**
 * Title : print the table of any user defined using vanilla JavaScript DOM
 * Author : Sariful Islam (Sahed)
 * Date : 31/03/2022
 */


// //Dom reference are here
const result = document.getElementById("show-data");



//DOM functions are here
function printTable ( number ) {


for ( let i = 1; i <= 10; i++ ) {
let res = i*number;

document.write( `${number} x ${i} = ${res}` ) ;
}

}
printTable(5);

//event listeners are here