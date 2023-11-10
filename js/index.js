let userName = prompt("Введіть своє ім'я");
let userScore = 0;
let computerScore = 0;

function generate() {
  let userNumber = Math.floor(Math.random() * 50) + 1;
  let computerNumber = Math.floor(Math.random() * 50) + 1;

  document.getElementById("userNumber").innerText = userNumber;
  document.getElementById("computerNumber").innerText = computerNumber;

  if (userNumber > computerNumber) {
    userScore++;
  } else if (computerNumber > userNumber) {
    computerScore++;
  }

  document.getElementById(
    "user"
  ).innerHTML = `<h2>${userName}</h2><p class="score">${userScore}</p><p id="userNumber">${userNumber}</p>`;
  document.getElementById(
    "computer"
  ).innerHTML = `<h2>Комп’ютер</h2><p class="score">${computerScore}</p><p id="computerNumber">${computerNumber}</p>`;

  if (userScore === 3 || computerScore === 3) {
    alert(userScore === 3 ? `${userName} виграв!` : "Комп’ютер виграв!");
    userScore = 0;
    computerScore = 0;
  }
}
