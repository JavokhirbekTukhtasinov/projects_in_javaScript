// declaring html elements
var btn1 = document.querySelectorAll("button")[0];
var btn2 = document.querySelectorAll("button")[1];
var btn3 = document.querySelectorAll("button")[2];
var btn4 = document.querySelectorAll("button")[3];
var btn5 = document.querySelectorAll("button")[4];
var btn6 = document.querySelectorAll("button")[5];
var btn7 = document.querySelectorAll("button")[6];

// functions 
function audio1() {
    var audio1 = new Audio('sounds/tom-1.mp3');
    audio1.play();
}
function audio2() {
    var audio2 = new Audio('sounds/tom-2.mp3');
    audio2.play();
}
function audio3() {
    var audio3 = new Audio('sounds/tom-3.mp3');
    audio3.play();
}
function audio4() {
    var audio4 = new Audio('sounds/tom-4.mp3');
    audio4.play();
}
function audio5() {
    var audio5 = new Audio('sounds/crash.mp3');
    audio5.play();
}
function audio6() {
    var audio6 = new Audio('sounds/kick-bass.mp3');
    audio6.play();
}
function audio7() {
    var audio7 = new Audio('sounds/snare.mp3');
    audio7.play();
}


// adding Eventlisleners

btn1.addEventListener("click", audio1);
btn2.addEventListener("click", audio2);
btn3.addEventListener("click", audio3);
btn4.addEventListener("click", audio4);
btn5.addEventListener("click", audio5);
btn6.addEventListener("click", audio6);
btn7.addEventListener("click", audio7);


// adding keypress
document.addEventListener('keydown', function(keyname){
   
})