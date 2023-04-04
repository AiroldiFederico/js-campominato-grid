
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*

1 - creo la funzione che mi crea i quadrati

2 - mi serve puntare al posto html dove inserire i quadrati

3 - inserisco come parametro indice del ciclo così mi stampa il numero

4 - rendo i quadrati clickabili

*/


//dichiaro la variabile associata al campo della griglia
let grid = document.querySelector('.grid')

function createElementHTML( tagHTML, classi, text) {
    
    let element = document.createElement(tagHTML);

    //aggiungo la classe
    element.className = classi;

    //stampo i numeri all'interno
    element.innerText = text;

    return element;
}


//ciclo di creazione
function createGrid(nCelle){
    for (let i = 1; i <= nCelle; i++) {

        //assegno la funzione con i parametri che mi servono ad una variabile
        const functionBox = createElementHTML("div", "box", i);

        //quadrati al click
        functionBox.addEventListener('click', function(){

            //click sull'oggetto aggiunge la classe
            this.classList.toggle('red')
            console.log(this.innerText)
        })


        //creiamo i div nella grid
        grid.append(functionBox);
    }
}



//funzione per far partire il gioco
let btnPlay = document.getElementById('btn');
btnPlay.addEventListener('click', function(){

    //richiamo funzione
    campoMinato();
});




//selezione difficolta
let selectDiff = document.getElementById("select");

function campoMinato() {

    //svuoto griglia
    grid.innerHTML = "";


    //valore numerico della difficoltà
    let difficoltà = parseInt(selectDiff.value);

    
    createGrid(difficoltà);


}
