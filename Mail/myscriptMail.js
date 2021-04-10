//chiedo indirizzo Utente//

var notValid
var mailUtente = prompt("Inserisci la tua mail");
console.log(mailUtente)

//verifico sia nella lista//

var listaIndirizzi = ["a", "b", "c"];
console.log(listaIndirizzi)

for (var i = 0; i < listaIndirizzi.length; i++) { 
       //esito positivo//
    if (listaIndirizzi[i] === mailUtente) {
        console.log("ok")
        document.writeln("accesso consentito")
        break;
       
    } else if ((listaIndirizzi[i] !== mailUtente) * listaIndirizzi.length) {
        mailUtente = notValid  
    }   //esito negativo//
}

if (mailUtente === notValid) {
    alert("indirizzo non valido")
} //messaggio errore//
