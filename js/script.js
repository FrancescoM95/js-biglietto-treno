console.log('JS OK')

//* 1. Chiediamo all'utente i km che deve percorrere. 

const distance = parseInt(prompt("Quanti kilometri intendi percorrere?"));
console.log('Km:', distance);

// Controllo km
const errorMessage = "Devi inserire un numero maggiore o uguale a 1.";

if (isNaN(distance) || distance < 1) {
    alert(errorMessage);
}

//* 2. Chiediamo all'utente l'età del passeggero.

const age = parseInt(prompt("Qual è l'età del passeggero?"));
console.log('Età:', age);

// Controllo età
if (isNaN(age) || age < 1) {
    alert(errorMessage);
}