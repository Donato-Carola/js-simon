

//!Traccia
//**Sfruttiamo le timing functions per fare il conto alla rovescia per la fine di quest'anno!
//**Che scadra' quindi a capodanno!

/*Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?*/ 

const Timer = document.getElementById(timerNewYear)

const dataCapodanno = (new Date("January 01, 2024 00:00:00")).getTime();

console.log(dataCapodanno);

const dataNow = new Date().getTime()
console.log(dataNow);

if(dataNow!==dataCapodanno){
   const risultato = (dataCapodanno-dataNow);
   console.log(`i millesecondi che ci separano dal capodanno sono ${risultato}`)
}else{
    console.log(`buon anno`)

}