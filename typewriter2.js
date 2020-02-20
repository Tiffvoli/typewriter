"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  const element = document.querySelector(".typewritten");
  typewriter(element, done);
}

function done() {
  console.log("Done!");
}

function typewriter(element, callback) {
  console.log("typewriter");
  let theText = element.textContent;
  let counter = 0;
  setTimeout(callback, 300);

  function callback() {
    element.textContent = theText.substring(0, counter + 1);

    counter++;
    console.log("callback");
    if (theText.length > counter) {
      //if there're more letters, keep going
      setTimeout(callback, 300);
    } else {
      // stop and back to the start position
      callback();
    }
  }
}
