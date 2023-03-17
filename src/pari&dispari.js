/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

// Iniziamo a prenderci gli elementi dal nostro html
const scelta = document.getElementById('scelta');
const btnGioca = document.getElementById('gioca');
const risultato = document.getElementById('risultato');

// Creiamo una funzione click affinchè al premere del nostro button possa scatenarsi la magia
btnGioca.addEventListener('click', giocare);

/* Creaiamo una funzione legata al nostro button con delle variabili*/
// la nostra scelta per il risultato finale che sarà
// il numero per la somma con il numero randomico del computer con un max 5
// il risulatato del gioco che è appunto la somma dei due numeri
// creiamo una variabile dove il risultato della somma sarà diviso per due è ci teniamo il resto grazie alla %
// se il numero generato sarà uguale alla nostra scelta vorrà dire che vinceremo
function giocare() {
    let sceltaUser = scelta.value;
    let numUser = document.getElementById('num1').value;
    let numCPU = Math.floor((Math.random() * 5) + 1);
    let risultatoGioco = numCPU + parseInt(numUser)
    let genNum = risultatoGioco % 2

    if (genNum === 0 ){
        genNum = 'pari';
    } else{
        genNum = 'dispari';
    }
    // console.log(genNum);

    if (genNum === sceltaUser) {
        risultato.innerHTML = 
        `
        <div class="card text-center d-flex bg-black text-white">
            <h3>Scelta giocatore:</h3>
            <h4>${sceltaUser}</h4>
            <h3>Il numero random del Computer è:</h3>
            <h4>${numCPU} </h4>
            <h3>Hai vinto!!!</h3>
            <h3> Perchè la somma dei due numeri è ${risultatoGioco}</h3>
        </div>
        `
    } else {

        risultato.innerHTML = 
        `
        <div class="card text-center d-flex bg-black text-white">
            <h3>Scelta giocatore:</h3>
            <h4>${sceltaUser}</h4>
            <h3> Il numero random del Computer è:</h3>
            <h4>${numCPU} </h4>
            <h3>Hai perso :(</h3>
            <h3> Perchè la somma dei due numeri è ${risultatoGioco} </h3>
        </div>
        `
    }
}






