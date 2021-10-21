// Calcolo del prezzo del biglietto del treno 

/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana */


// Chiedo all'utente il numero di chilometri che vuole percorrere
let numChilometri = parseFloat(prompt("Inserisci il numero dei chilometri da percorrere"));
let numChilometriDecimal = Math.round((numChilometri + Number.EPSILON) * 100) / 100;
// console.log("N° chilometri da percorrere: ", numChilometriDecimal);

// Chiedo all'utente la sua età
let age = parseInt(prompt("Inserisci la tua età"));
// console.log("La tua età è di: ", age);

// Calcolo prezzo del biglietto in base ai km (0.21 € al km)
const prezzoBiglietto = 0.21 * numChilometriDecimal;
const prezzoBigliettoDecimal = Math.round((prezzoBiglietto + Number.EPSILON) * 100) / 100;
// console.log("Il prezzo del biglietto è di: ", prezzoBigliettoDecimal);

// Calcolo prezzo totale del viaggio e seguente Output
let costo_totale = document.getElementById("costo_totale");
let minorenne = document.getElementById("minorenne");
let over_sessantacinque = document.getElementById("over_sessantacinque");
let percentualeMinorenni;
let percentualeOverSessantaCinque;
let prezzoTotale;
let prezzoTotaleDecimal;

if (age < 18) {
    percentualeMinorenni = (prezzoBigliettoDecimal * 20) / 100;
    prezzoTotale = prezzoBigliettoDecimal - percentualeMinorenni;
    prezzoTotaleDecimal = Math.round((prezzoTotale + Number.EPSILON) * 100) / 100;
    costo_totale.innerHTML = ` Il prezzo totale del viaggio è di: ${prezzoTotaleDecimal}€. `;
    minorenne.innerHTML = `Essendo minorenne hai usufruito del 20% di sconto`;
} else if (age >= 65) {
    percentualeOverSessantaCinque = (prezzoBigliettoDecimal * 40) / 100;
    prezzoTotale = prezzoBigliettoDecimal - percentualeOverSessantaCinque;
    prezzoTotaleDecimal = Math.round((prezzoTotale + Number.EPSILON) * 100) / 100;
    costo_totale.innerHTML = ` Il prezzo totale del viaggio è di: ${prezzoTotaleDecimal}€. `;
    over_sessantacinque.innerHTML = ` Essendo over 65 hai usufruito del 40% di sconto `;
} else {
    prezzoTotaleDecimal = prezzoBigliettoDecimal;
    costo_totale.innerHTML = ` Il prezzo totale del viaggio è di: ${prezzoTotaleDecimal}€.`;
}

// console.log("Il prezzo totale del viaggio è di: ", prezzoTotaleDecimal);

// 