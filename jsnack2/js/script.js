/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


// while
let guests = ['marco', 'lorenzo', 'eleonora', 'massimo', 'matilde'];
let guest = prompt('Inserisci il tuo nome').toLocaleLowerCase();
let find = false;
let i = 0;
while (i < guests.length && find == false) {
    const element = guests[i].toLocaleLowerCase();


    //se c'è il nome dell'ospite, find è vera
    if (element == guest) {
        find = true;
    }
    i++;
}

//se find è vera
if (find) {
    console.log('Il tuo nome è nella lista');
    document.writeln('Il tuo nome è nella lista');
} else { //altrimenti
    console.log('Il tuo nome non è nella lista');
    document.writeln('Il tuo nome non è nella lista');
}