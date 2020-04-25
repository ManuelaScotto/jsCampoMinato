/* Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero. 
La partita termina quando il giocatore inserisce un numero 'vietato' o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

BONUS: all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali. 
Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50*/
var array = [];
var arrayUser = [];
var numCp = 0;
var maxTries; //tentativi dell'utente
var numMaxCheck; 
var points = 0; //punteggio
var message = 'Hai vinto!'; //messaggio standard 

// Se voglio dargli un massimo di tentativi creo una variabile e poi all'interno del do aggiungo il contatore e nel while gli do il massimo dei tentativi
var count = 0;
var difficult = parseInt(prompt('Scegli il grado di difficoltà: 0, 1, 2'));
while(checkRange(0, 2, difficult) == false && count < 3) {
    count++;
}

if (difficult === 0) {
    maxTries = 84;
    numMaxCheck = 100;
} else if (difficult === 1) {
    maxTries = 64;
    numMaxCheck = 80;
} else if (difficult === 2) {
    maxTries = 34;
    numMaxCheck = 50;
} 

console.log(difficult);
console.log(maxTries);
console.log(numMaxCheck);

//faccio l'estrazione fino a quando la lunghezza del mio array non arriva a 16. Non ho bisogno di un contatore perchè ad ogni giro aggiungo un numero con il .push quindi non inserisco la var i e nemmeno i ++. Il ciclo for in questo caso non posso inserirlo perchè mi ripeterebbe l'operazione 16 volte a prescindere, anche se si ci sono numeri doppi.
while (array.length < 16) { 
    numCp = getRandomNumber (numMaxCheck, 1);
    if (isInArray(array , arrayUser) == false) {
        array.push(numCp); //è come dire i++
    }
}
console.log(array.sort(function(a, b){return a-b})); //per metterli in ordine 
// COSA DEVO CONTROLLARE
// 1- che non ha già inserito il numero
// 2- che il numero non è una bomba
// 3- che non abbia finito i tentativi
// var findBomb = false;
var i= 0;
while ( i < maxTries && isInArray(array, userTry) == false) { 
   //chiedi il num finchè non rispetta le caratteristiche giuste. Devo creare un do while così almeno una volta il prompt viene chiesto 
   do {
       var userTry =  parseInt(prompt('Inserisci un numero tra 1 e ' + numMaxCheck)); 
    }   while (checkRange(1, numMaxCheck, userTry) == false || isInArray(arrayUser,userTry));
 
    if(isInArray(arrayUser, userTry) == false) { //questa condizione si avvera se inserisco numeri diversi, quindi pusha i numeri nell'array, altrimenti continuerà a chiedermelo
        arrayUser.push(userTry);   
        //se i numeri sono diversi controllo che non ci sia la bomba
        if (isInArray(array, userTry) == true) {
            alert('Hai trovato la bomba! Gioco terminato');
            message = 'Hai perso!';
            // findBomb = true;
            //se è una bomba il gioco finisce e dico il punteggio                   
         } else {
           points++;  //se non trovo la bomba aggiungi 1 punto
         }
    } i++;
}
console.log(arrayUser.sort());
console.log(message + ' Hai fatto ' + points + ' punti');

// ----------------function------------
function getRandomNumber(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}


// funzione di js per vedere se il numero è già stato inserito o meno nell'array
// if (array.includes(numCp) == false) {
//     array.push(numCp);
// }
// se il numCp non è uguale all'array (==false) lo inserisco nell'array

// FUNZIONE CHE CERCA IN UN ARRAY MI RESTITUISCE UN TRUE O UN FALSE
function isInArray(array, element) {
// Come scrivere la funzione senza utilizzare  con il ciclo while
    var i=0;
    var result = false; //ho creato una variabile che è false perchè dobbiamo terminare con false se non troviamo niente
      while (i < array.length && result == false ) { //ho dovuto inserire un altra condizione per dirgli che per entrare result deve essere false
          if (element == array[i]) {  
                 result = true;
              }
              i++;
          }
           return result;   //il messaggio base(var result = false) viene modificato solo nel caso in cui lo troviamo quindi restituiamo il valore di result 
}

// TUTTO QUESTO SI PUò SCRIVERE CON LA FUNZIONE DI JS .INCLUDES
//if ( array.includes(numCp) == false) se i numeri sono diversi... faccio qualcosa

// FUNZIONE CHE CONTROLLA CHE UN NUMERO SIA IN UN CERTO RANGE
function checkRange (min ,max, num) {
    var result = false;
    if (num > min && num <= max) {
        result = true;
    }
    return result;
}