//Elemente
//anzeige
const anzeige = document.querySelector('.anzeige');
//nummern
const nummern = document.querySelector('.nummern');
//operationen
const operationen = document.querySelector('.operationen');

//globale Funktion
window.addEventListener('DOMContentLoaded', function() {
    nummern.forEach( function(nummer) {
        nummer.addEventListener('click', function(e) {
            console.log(e.target.textcontent)
        });
    });

    operationen.forEach( function(operation) {
        operation.addEventListener('click', function(e) {
            console.log(e.target.textContent)
        })
    })
}); 


//kalkuliere
function kalkuliere() {

}