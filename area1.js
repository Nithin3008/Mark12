var height1 = document.querySelector("#height");
var base1 = document.querySelector("#base");
var btn1 = document.querySelector("#btn");
var msg1 = document.querySelector("#msg");
function handler() {
  var result = (1 / 2) * (Number(height1.value) * Number(base1.value));
  msg1.innerText = "the area of the triange is " + result;
}

btn1.addEventListener("click", handler);
