/*
CONSEGNA:
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/


/* STEP:

1 - Utente inserisce la parola

2 - Prendo il valore dell'input registrandolo in una variabile

3 - Avvio la sequenza tramite un bottone, quindi registro anche quel input

4 - Creo la funzione che al click del bottone raccoglie l'input della parola, e stampi la funzione 

5 - Creo una funzione con un ciclo for, il ciclo for partirà al contrario e durerà per la lunghezza della parola

6 - alla funzione che raccoglie l'input e stampa la funziona ora gli faccio paragonare le due stringhe

*/


//inputraw
//let  = raw.toLowerCase();

//input parola inserita dall'utente
// let InputPalindrome = document.getElementById('InputPali');



// //Tasto per verificare
// let Button1 = document.getElementById('btn1');

// //Al click raccolgo i dati
// Button1.addEventListener("click", function() {

//     InputPalindrome = document.getElementById('InputPali').value;



//     if ( InputPalindrome === verPali(InputPalindrome)) {

//         //risultatato positivo
//         document.getElementById("OutputPali").innerHTML = 'Complimenti, è palindroma!';
//     } else {

//         //risultato negativo
//         document.getElementById("OutputPali").innerHTML = 'Purtroppo non è palindroma';
//     }
//     //document.getElementById("OutputPali").innerHTML = verPali(InputPalindrome);

//     //console.log(InputPalindrome);
//     //console.log(verPali(InputPalindrome));
// });

    
    
// // funzione che trascrive la parola al contrario
// function verPali(word) {
    
//     let RevWord = "";
    
//     //ad ogni ciclo stampo l'ultima lettera
//     for (let i = word.length - 1; i >= 0; i--) {
//         RevWord += word[i];
//     }
//     console.log(word.lenght);
//     console.log(RevWord);
//     return RevWord;
    
// };


// /*------------------------------------------------------------------------*/
// /*
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. */


// /*

// STEP:

// 1. Sistemo la struttura html

// 2. Raccolgo gli input

// 3. Selezione click button

// 4. Evento al click

// 5. Genero un numero casuale per la cpu e la stampo nel placeholder

// 6. Faccio la somma del numero CPU e Utente

// */


// //input even odd
// let EvenOrOdd = document.getElementById('InputEO');

// //input numero
// let InputNumero = document.getElementById('Inumero');

// //Tasto per verificare
// let Button2 = document.getElementById('btn2');


// //evento al click
// Button2.addEventListener("click", function() {

//     //genero un numero casuale
//     let numeroCasuale = Math.floor(Math.random() * 5) + 1;

//     //punto al elemento html 
//     let numeroCPU = document.getElementById('disabledTextInput');

//     //scrivo il numero come placeholder
//     numeroCPU.setAttribute("placeholder", numeroCasuale);

//     EvenOrOdd.value;
//     InputNumero.value;

//     let somma = parseInt(numeroCasuale) + parseInt(InputNumero.value);

//     if ( EvenOrOdd.value == 1 && somma % 2 == 0 || EvenOrOdd.value == 2 && somma % 2 !== 0 ) {
//         //risultatato positivo
//         document.getElementById("OutputEvenOdd").innerHTML = `Complimenti, hai vinto! il risultato è ${somma}`;
//     } else {
//         //risultatato negativo
//         document.getElementById("OutputEvenOdd").innerHTML = `Hai perso! il risultato è ${somma}`;
//     }

   
    
//     console.log(somma);

// });



