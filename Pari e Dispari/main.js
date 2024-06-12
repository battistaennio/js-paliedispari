//L’utente sceglie pari o dispari 
//inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

//funzione per generare un numero random
function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}

//funzione per stabilire pari o dispari
function evenOdd(num) {
    return num % 2 === 0 ? "Pari" : "Dispari";
}

//utente sceglie se pari o dispari
const userEvenOdd = prompt("Scegli pari o dispari");
console.log(userEvenOdd);

//utente sceglie numero
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);
