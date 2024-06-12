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


//selettore bottone
const playButton = document.querySelector("button");

playButton.addEventListener("click",
    function () {
        //utente sceglie se pari o dispari e comunico in pagina
        const userEvenOdd = document.getElementById("input-user-evenodd").value;
        document.getElementById("user-output-evenodd").innerText = userEvenOdd;

        //utente sceglie un numero da 1 a 5 e comunico in pagina
        const userNumber = parseInt(document.getElementById("input-user-number").value);
        document.getElementById("user-output-number").innerText = userNumber;


        // condizione per far scegliere l'opposto di userEvenOdd al PC e numero pc
        let pcEvenOdd = "";
        if (userEvenOdd === "pari") {
            pcEvenOdd = "dispari";
        } else {
            pcEvenOdd ="pari"
        }
        //comunico risultato della condizioni in pagina
        document.getElementById("pc-output-evenodd").innerText = pcEvenOdd;


        //pc sceglie numero random da 1 a 5 e comunico in pagina
        const pcNumber = randomNumber(1, 5)
        document.getElementById("pc-output-number").innerText = pcNumber;


        //creo somma di userNumber e pcNumber e comunico in pagina
        const userAdditionPc = userNumber + pcNumber;
        document.getElementById("symbol").innerText = userAdditionPc;


        //verifico se la somma di userNumber e pcNumber è pari o dispari
        const resultEvenOdd = evenOdd(userAdditionPc);


        //selettore risultato in pagina
        let resultOutput = document.getElementById("result-output");

        //condizione di vincita
        if (userEvenOdd === resultEvenOdd) {
            resultOutput.innerText = "VINCE USER";
        } else {
            resultOutput.innerText = "VINCE PC";
        }
            }
)

