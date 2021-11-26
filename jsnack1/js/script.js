/* Jsnack1
Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.*/



let somma = 0;
let i = 0;
while (i < 10) {
    let numero = prompt('Inserisci un numero');
    somma += parseInt(numero);
    i++;
}
console.log(somma);