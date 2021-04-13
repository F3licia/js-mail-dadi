//chiedo all'utente di lanciare il dado//
alert("Lancia il tuo dado!")

//ottengo un numero casuale tra 1 e 6//
var dadoUtente= Math.floor(Math.random() * 6) + 1;
document.getElementById("lancioUtente").innerHTML= dadoUtente;

//informo l'utente del suo risultato//
alert("è uscito " + dadoUtente + ", ora tocca a me!");

//ottengo un secondo numero casuale tra 1 e 6//
var dadoComputer= Math.floor(Math.random() * 6) + 1;
document.getElementById("lancioComputer").innerHTML= dadoComputer;

//Qual è il più alto?//

if (dadoUtente > dadoComputer){
    document.getElementById("messaggio").innerHTML= "Hai vinto!";   //Se vince l'utente//  
} else if (dadoUtente < dadoComputer){
    document.getElementById("messaggio").innerHTML= "Ho vinto!";    //Se vince la macchina//
} else if (dadoUtente == dadoComputer){
    document.getElementById("messaggio").innerHTML= "Spareggio?";   //Se pari//
}













