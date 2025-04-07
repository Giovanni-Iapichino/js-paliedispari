// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function randomEvenOdd() {
  let randomNumber = Math.floor(Math.random() * 5) + 1; //Genera un numero casuale tra 1 e 5
  console.log("Numero computer: " + randomNumber);
  return randomNumber; // Restituisce il numero casuale
}

function isSumNumbers(num1, num2) {
  if ((num1 + num2) % 2 === 0) {
    return true; // La somma è pari
  }
  return false; // La somma è dispari
}

const userChoice = prompt("Scegli pari o dispari:");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5:"));
console.log("Numero utente: " + userNumber);
const computerNumber = randomEvenOdd(); // Chiama la funzione per generare il numero del computer

if (
  userChoice === "pari" &&
  userNumber >= 1 &&
  userNumber <= 5 &&
  !isNaN(userNumber)
) {
  if (isSumNumbers(userNumber, computerNumber)) {
    // Controlla se la somma è pari
    console.log("Hai vinto! La somma è pari.");
  } else {
    console.log("Hai perso! La somma è dispari.");
  }
} else if (
  userChoice === "dispari" &&
  userNumber >= 1 &&
  userNumber <= 5 &&
  !isNaN(userNumber)
) {
  if (!isSumNumbers(userNumber, computerNumber)) {
    // Controlla se la somma è dispari
    console.log("Hai vinto! La somma è dispari.");
  } else {
    console.log("Hai perso! La somma è pari.");
  }
}

if (userChoice !== "pari" && userChoice !== "dispari") {
  alert("Scelta non valida. Devi scegliere 'pari' o 'dispari'.");
}
