const form = document.getElementById("answers-form");
const message = document.getElementById("message");
let group = document.getElementById("input-group");
let array = document.getElementById("mytable");
////////// Count-down///////
let countdown = document.getElementById("countdown");
let timer;
let seconds = 10;
// table of random number to guess
let numberToguess = [];

// function della tabella di  Random numbers
function tableOfrndNumbers() {
  while (numberToguess.length < 5) {
    // Random numbers
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (!numberToguess.includes(randomNumber)) {
      numberToguess.push(randomNumber);
    }
  }
  console.log(numberToguess);
  array.innerHTML = numberToguess.join(", ");
}
tableOfrndNumbers();

// Timer////////////////
timer = setInterval(function () {
  countdown.innerHTML = --seconds;

  if (seconds <= 0) {
    clearInterval(timer);
    form.classList.remove("d-none");
    array.classList.add("d-none");
  }
}, 1000);
