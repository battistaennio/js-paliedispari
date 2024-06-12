//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo parola all'utente
const userWord = prompt("Inserisci una parola");

//creo funzione
function verificaParolaPalindroma(word){  //se userWord al contario è uguale a userWord, la parola è palindroma
    //dichiaro word al contrario
    let reverseWord = "";
    //creo ciclo per attraversare userWord al contario
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    console.log(reverseWord);
}


//risultato (per test)
const result = verificaParolaPalindroma(userWord)
