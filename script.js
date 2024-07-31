// ? Chiedere a un utente nome, cognome ed età e stamparlo in pagina

/*
1- Recupero gli elementi della pagina di mio interesse
2- Chiedere all'utente il nome
3- Chiedere all'utente il cognome
4- Chiedere all'utente il suo colore preferito
5- Calcolo il nome completo ed il suo colore
6- stampo il messaggio in pagina
*/

// # Fase preparatoria
const userElement = document.getElementById('user')
console.log('userElement')



// # Fase di raccolta dati
const firstName = prompt('Dimmi il tuo nome', 'Francesco')
const lastName = prompt('Dimmi il tuo cognome', 'Minichiello')
const favouriteColor = prompt('Dimmi il tuo colore preferito', 'Verde')
const suffix = '21'
console.log(firstName, lastName, favouriteColor, suffix);

// # Fase di produzione output (risultato)
userElement.innerHTML = firstName + lastName + favouriteColor + suffix;
