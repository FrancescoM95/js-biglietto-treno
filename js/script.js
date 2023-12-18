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

//* 3a. Calcoliamo il prezzo del biglietto moltiplicandolo per la tariffa base. 

let price = parseInt(distance * 0.21)
console.log('Prezzo: €', price);

//* 3b. Applichiamo uno sconto al prezzo dove possibile.

if (age < 18) {
    price *= 0.8;
} else if (age >= 65) {
    price *= 0.6;
}

const finalPrice = price.toFixed(2);
console.log('Prezzo scontato: €', finalPrice);