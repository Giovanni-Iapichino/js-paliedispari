// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrome(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (word === reversed) {
    return true;
  }
  return false;
}

const userWord = prompt("Inserisci una parola: ");
if (isPalindrome(userWord)) {
  console.log("La parola è palindroma.");
} else {
  console.log("La parola non è palindroma.");
}
