var array = [];
var arrayUser = [];
var maxTries = 0;
var points = 0;
var numMaxCheck= 0;
var difficult =  prompt('scegli la difficoltà: facile, medio, difficile');

while (difficult != 'facile' && difficult != 'medio' && difficult != 'difficile') {
    difficult =  prompt('scegli la difficoltà: facile, medio, difficile');
}

if (difficult == 'facile') {
    maxTries = 84;
    numMaxCheck = 100;
} else if (difficult == 'medio') {
    maxTries = 64;
    numMaxCheck = 80;
} else if (difficult == 'difficile') {
    maxTries = 24;
    numMaxCheck = 50;
}

while (array.length < 16) {
    var numCp = getRandomNumber(1,numMaxCheck);
        if (array.includes(numCp) == false) {
            array.push(numCp);
        } 
};
console.log(array.sort(function(a, b){return a-b}));

for (var i = 0 ; arrayUser.length < maxTries && array.includes(userTry)== false; i++) {
    var userTry =  parseInt(prompt('Inserisci un numero tra 1 e ' + numMaxCheck)); 
    if (arrayUser.includes(userTry) == false && userTry >= 1 && userTry < numMaxCheck) {
        arrayUser.push(userTry);
        points++;
    }
    if (userTry < 1 || userTry > numMaxCheck) {
        alert('numero non consentito');
    } else if (array.includes(userTry)== true) {
        alert('Hai trovato la bomba!');
        points--;
    }
};
console.log(arrayUser);
console.log('Il tuo punteggio è di ' + points + ' punti');
document.getElementById('point').innerHTML = 'Il tuo punteggio è di ' + points + ' punti';

document.getElementById("point").style.color = "red";
//----------------FUNZIONE NUMERI RANDOM-------------------
function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


