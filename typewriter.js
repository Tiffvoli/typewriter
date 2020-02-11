"use strict";
//Get the text from html
let theText = document.querySelector(".typewritten").textContent;
//set the counter 0
let counter = 0;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  //remove the text on screen
  document.querySelector(".typewritten").textContent = "";
  countLetters();
}

function countLetters() {
  console.log("countLetters");
  //showing one character at a time
  document.querySelector(".typewritten").textContent = theText.substring(
    0,
    counter + 1
  );

  //keep counting
  counter++;
  //waiting for the next letter
  setTimeout(loop, 300);
}

function loop() {
  console.log("loop");
  if (theText.length > counter) {
    //if there're more letters, keep going
    start();
  } else {
    // stop and back to the start position
    clearTimeout(countLetters);
  }
}
