// Calcolo del prezzo del biglietto del treno 

/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana */


// Chiedo all'utente il numero di chilometri che vuole percorrere
let n_Kilometres = parseFloat(prompt("Inserisci il numero dei chilometri da percorrere"));
let n_KilometresDecimal = Math.round((n_Kilometres + Number.EPSILON) * 100) / 100;
// console.log("N° chilometri da percorrere: ", n_KilometresDecimal);

// Chiedo all'utente la sua età
let age = parseInt(prompt("Inserisci la tua età"));
// console.log("La tua età è di: ", age);

// Calcolo prezzo del biglietto in base ai km (0.21 € al km)
const ticketPrice = 0.21 * n_KilometresDecimal;
const ticketPriceDecimal = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;
// console.log("Il prezzo del biglietto è di: ", ticketPriceDecimal);

// Calcolo prezzo totale del viaggio e seguente Output
let total_cost = document.getElementById("total_cost");
let percentageMinors;
let percentageOverSixtyFive;
let totalPrice;
let totalDecimalPrice;

if (age < 18) {
    percentageMinors = (ticketPriceDecimal * 20) / 100;
    totalPrice = ticketPriceDecimal - percentageMinors;
    totalDecimalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;
    total_cost.innerHTML = ` Il prezzo totale del viaggio è di: <strong>${totalDecimalPrice}€</strong>. <br> 
    Essendo minorenne hai usufruito del 20% di sconto`;
} else if (age >= 65) {
    percentageOverSixtyFive = (ticketPriceDecimal * 40) / 100;
    totalPrice = ticketPriceDecimal - percentageOverSixtyFive;
    totalDecimalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;
    total_cost.innerHTML = ` Il prezzo totale del viaggio è di: <strong>${totalDecimalPrice}€</strong>. <br> 
    Essendo over 65 hai usufruito del 40% di sconto `;
} else {
    totalDecimalPrice = ticketPriceDecimal;
    total_cost.innerHTML = ` Il prezzo totale del viaggio è di: <strong>${totalDecimalPrice}€</strong>.`;
}

// console.log("Il prezzo totale del viaggio è di: ", prezzoTotaleDecimal);

// 