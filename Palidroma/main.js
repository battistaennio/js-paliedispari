//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo parola all'utente
const userWord = prompt("Inserisci una parola");

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
    return word == reverseWord ? "è palindroma" : "non è palindroma";
}


//risultato 
const result = verificaParolaPalindroma(userWord)
//(per test)
console.log(result);
