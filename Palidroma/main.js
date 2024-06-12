//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//creo funzione
function verificaParolaPalindroma(word){  //se userWord al contario è uguale a userWord, la parola è palindroma

    //dichiaro word al contrario = 0
    let reverseWord = "";

    //creo ciclo per attraversare userWord al contario
    for (let i = word.length - 1; i >= 0; i--) {

        //setto che reverseWord è composta dagli elementi di word al contrario
        reverseWord += word[i];
    }

    //se word è uguale a reverseWord è palindroma altrimenti no
    return word == reverseWord ? "La parola è palindroma" : "La parola non è palindroma";
}

//selezione bottone
const verifyButton = document.querySelector("button");

//selezione output
let verifyOutput = document.getElementById("output");

//creo evento su click
verifyButton.addEventListener("click",
    function () {
        //seleziono input per chiedere parola all'utente
        const userWord = document.getElementById("user-word").value;

        //comunico come output il risultato della verifa effettuata dalla funzione
        verifyOutput.innerText = verificaParolaPalindroma(userWord);        
    }
)
