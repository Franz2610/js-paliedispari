/**
 * Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */


// Iniziamo a prenderci gli elementi dal nostro html
const parola = document.getElementById('parola');
const controllo = document.getElementById('controllo');
const risultato = document.getElementById('risultato');

// Creiamo una funzione click affinchè al premere del nostro button possa scatenarsi la magia
controllo.addEventListener("click", controlloPali);


// creiamo una funzione dove :
// split separa ogni singola lettera della parola scritta dall'utente
// reverse inveterte l'ordine della parola
// ed infine join riunisce il tutto
function reverseParola(rev) {
    return rev.split('').reverse('').join('')
};


// Dopodichè creiamo un'altra funzione legata al button dove se il valore della parola sarà uguale al reverse della parola stessa allora da oggi abbiamo una parola in più nel nostro vocabolario ;)
function controlloPali() {
    const reverseName = reverseParola(parola.value);
    if (parola.value === reverseName) {
        risultato.innerHTML = 
        `
        <h1 class="text-success">
            Ottimo. Hai capito , questa parola è palindroma!
        </h1>
        `;
    }
    else {
        risultato.innerHTML = 
        `
        <h2 class="text-danger">
        Mi dispiace, non ci siamo. La parola non è palindroma!
        </h2>
        <h3class="text-primary">
        Il senso inverso di questa parola è: ${reverseName}
        </h3>
        `;
    }
    // console.log(reverseParola);
}