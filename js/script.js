
// Chiedo all'utente nome, cognome e colore per salvarli nelle variabili corrispondenti e mando un messaggio sulla console di debug per vedere che tutto funzioni correttamente
const Name = prompt('Inserisci il tuo nome');
console.log(Name);

const lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

const prefColor = prompt('Inserisci il tuo colore preferito');
console.log(prefColor);

// metto insieme le stringhe precedenti per creare la password
const message = `La password creata è: 
${Name}${lastName}${prefColor}22`;
console.log(message);

// faccio vedere all'utente il risultato
document.getElementById('my-pwd').innerHTML = message;