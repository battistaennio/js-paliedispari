//L’utente sceglie pari o dispari 
//inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//funzione per generare un numero random
function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}

//funzione per stabilire pari o dispari
function evenOdd(num) {
    return num % 2 === 0 ? "pari" : "dispari";
}




//utente sceglie se pari o dispari e numero
const userEvenOdd = prompt("Scegli pari o dispari");
console.log("user sceglie: ", userEvenOdd);

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("numero user:", userNumber);


// // condizione per far scegliere l'opposto di userEvenOdd al PC e numero pc
// let pcEvenOdd = "";
// if (userEvenOdd === "pari") {
//     pcEvenOdd = "dispari";
// } else {
//     pcEvenOdd ="pari"
// }
// console.log("il pc sceglie: ", pcEvenOdd);

const pcNumber = randomNumber(1, 5)
console.log("numero pc:", pcNumber);

//creo somma di userNumber e pcNumber e verifico se è pari o dispari
const userAdditionPc = userNumber + pcNumber;
console.log("La somma dei numeri è: ", userAdditionPc);

const resultEvenOdd = evenOdd(userAdditionPc);
console.log(resultEvenOdd);

//condizione di vincita
if (userEvenOdd === "pari" & resultEvenOdd === "pari") {
    console.log("VINCE USER");
} else if (userEvenOdd === "dispari" & resultEvenOdd === "dispari") {
    console.log("VINCE USER");
} else {
    console.log("VINCE PC");
}