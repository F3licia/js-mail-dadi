//chiedo indirizzo Utente//

var mailUtente = prompt("Inserisci la tua mail");
console.log(mailUtente)


var listaIndirizzi = ["tizio@gmail.com", "caio@gmail.com"];
console.log(listaIndirizzi)

//verifico sia nella lista//
for (var i = 0; i < listaIndirizzi.length; i++) { 
    //esito positivo//
    if (listaIndirizzi[i] === mailUtente) {
        console.log("ok")
        document.write("Accesso effettuato")
        break;
    } 
} 
//esito negativo//
if (listaIndirizzi[i] !== mailUtente) {
    console.log("not ok")
    alert("Mail non valida")
    document.write("La mail non è valida")
}



