

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



/*const dataCapodanno = (new Date("January 01, 2024 00:00:00")).getTime();
const dataMillisecondi=new Date (dataCapodanno)
//const dataa = dataMillisecondi.toLocaleTimeString()

//console.log(`la data in millesecondi copiata in una variabile è ${dataMillisecondi}`)

console.log(dataCapodanno);

const dataNow = new Date().getTime()
console.log(dataNow);

if(dataNow!==dataCapodanno){
   const risultato = (dataCapodanno-dataNow);
   console.log(`i millesecondi che ci separano dal capodanno sono ${risultato}`)
   stampa.innerHTML=(`${risultato}`)
}else{
    console.log(`buon anno`)

}*/
const stampa = document.querySelector('#spanStampa');
const currentYear=new Date().getFullYear();
const dataCapodanno=new Date(`January 1 ${currentYear+1} 00:00:00`);

function aggiornamentoTime(){
    const dataNow= new Date();
    const risultato = dataCapodanno - dataNow;
    console.log(risultato)
    const ms =Math.floor(risultato%1000)
    stampa.innerHTML=ms<10?"0"+ms:ms;
}

//setInterval(aggiornamentoTime,1000);