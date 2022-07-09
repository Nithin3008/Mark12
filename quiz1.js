var msg = document.querySelector("#msg");
var btn = document.querySelector("#btn1");
var formData = document.querySelector(".quiz-ans");
var correctAns = ["90", "angled", "true", "88", "28", "69.65", "55"];
function calculateScore() {
  var score = 0;
  var index = 0;

  var form1 = new FormData(formData);

  for (var entries of form1.values()) {
    if (entries === correctAns[index]) {
      score++;
    }
    index++;
  }
  msg.innerText = "The score is " + score;
}
btn.addEventListener("click", calculateScore);
