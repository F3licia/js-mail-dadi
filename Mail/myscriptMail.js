//chiedo indirizzo Utente//

var mailUtente = prompt("Inserisci la tua mail");
console.log(mailUtente)

var accesso = false 

var listaIndirizzi = ["aaa", "bbb", "ccc"];
console.log(listaIndirizzi)

//verifico sia nella lista//
for (var i = 0; i < listaIndirizzi.length; i++) { 

    //esito positivo//
    if (listaIndirizzi[i] === mailUtente) {
        console.log("ok")    
        var accesso = true}     
    } 

console.log(accesso)
      
//esito negativo//
if ( accesso === false ) { alert("Accesso negato")}
else if ( accesso === true ) {
    alert("Accesso effettuato");
    document.write("Accesso effettuato")
}

