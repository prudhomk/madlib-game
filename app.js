// import functions and grab DOM elements
import { sync } from './dom-utilities.js';
// initialize state
const word1 = document.getElementById('input1');
const word2 = document.getElementById('input2');
const word3 = document.getElementById('input3');
const word4 = document.getElementById('input4');
const word5 = document.getElementById('input5');
const word6 = document.getElementById('input6');
const word7 = document.getElementById('input7');
const word8 = document.getElementById('input8');
const word9 = document.getElementById('input9');
const word10 = document.getElementById('input10');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');
const span5 = document.getElementById('span5');
const span6 = document.getElementById('span6');
const span7 = document.getElementById('span7');
const span8 = document.getElementById('span8');
const span9 = document.getElementById('span9');
const span10 = document.getElementById('span10');
const madlibButton = document.getElementById('madlibButton');
const expected1 = "";
const expected2 = "";
const expected3 = "";
const expected4 = "";
const expected5 = "";
const expected6 = "";
const expected7 = "";
const expected8 = "";
const expected9 = "";
const expected10= "";
input1.value = expected1;
input2.value = expected2;
input3.value = expected3;
input4.value = expected4;
input5.value = expected5;
input6.value = expected6;
input7.value = expected7;
input8.value = expected8;
input9.value = expected9;
input10.value = expected10;
    
// set event listeners to update state and DOM
madlibButton.addEventListener('click', () => {
    sync(word1, span1);
    sync(word2, span2);
    sync(word3, span3);
    sync(word4, span4);
    sync(word5, span5);
    sync(word6, span6);
    sync(word7, span7);
    sync(word8, span8);
    sync(word9, span9);
    sync(word10, span10);

});