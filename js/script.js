// function della tabella di  Random numbers
let array = document.getElementById("numbers-list");
let numberToguess = [];
function tableOfrndNumbers() {
  while (numberToguess.length < 5) {
    // Random numbers
    let randomNumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    if (!numberToguess.includes(randomNumber)) {
      numberToguess.push(randomNumber);
      const listeEl = document.createElement("li");
      listeEl.innerHTML = randomNumber;
      array.appendChild(listeEl);
    }
  }
  console.log(numberToguess);
  // array.innerHTML = numberToguess.join(" || ");
}
tableOfrndNumbers();

// Timer////////////////
const instruction = document.getElementById("instructions");
let countdown = document.getElementById("countdown");
let timer;
let seconds = 10;
timer = setInterval(function () {
  countdown.innerHTML = --seconds;

  if (seconds <= 0) {
    clearInterval(timer);
    // far apparire le input del giocatore
    form.classList.remove("d-none");
    // far scomparire le numeri da indovinare
    array.classList.add("d-none");
    instruction.innerHTML = "Good luck!!";
  }
}, 700);

// form function per ottenere il risultato
const form = document.getElementById("answers-form");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let usersNumber = [];
  // Chiamare tutti gli input del form
  const inputs = document.querySelectorAll("input");
  console.log(inputs);
  for (let i = 0; i < inputs.length; i++) {
    usersNumber.push(inputs[i].value.trim());
  }
  console.log(usersNumber);
  // Il confronto tra il numero giusti e quelli del giocatore
  let counter = 0;
  for (let i = 0; i < usersNumber.length; i++) {
    let valore = parseInt(usersNumber[i]);
    if (numberToguess.includes(valore)) {
      counter += 1;
    }
  }

  let errori = usersNumber.length - counter;
  console.log(errori);
  message.innerHTML = " Hai sbagliato: " + errori;
  message2.innerHTML = "hai : " + counter + " Numeri giusti ";
});
