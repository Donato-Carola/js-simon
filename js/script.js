

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


const daysElem=document.querySelector('span#days')
const hoursElem=document.querySelector('span#hours')
const minutesElem=document.querySelector('span#minutes')
const secondElem=document.querySelector('span#seconds')

const newYear = new Date(2024,0,1,0,0,0,0);
console.log(newYear);

const timer = setInterval(function(){
    const nowDate =new Date();
    console.log(nowDate);
    
    const calcDate= newYear.getTime() - nowDate.getTime();
    console.log(calcDate);
    
    const seconds = Math.floor((calcDate % (60 * 1000)) / 1000);
    const minutes = Math.floor((calcDate % (60 * 60 * 1000)) / (1000 * 60));
    const hours = Math.floor((calcDate % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    const days = Math.floor((calcDate / (60 * 60 * 24 * 1000)));

    console.log(days, hours, minutes, seconds);

   secondElem.innerHTML=`${seconds}`
   minutesElem.innerHTML=`${minutes} :`
   hoursElem.innerHTML=`${hours} :`
   daysElem.innerHTML=`${days} :`




    if(calcDate <= 0){
        clearInterval(timer);
        document.querySelector('main h2').innerHTML = 'HAPPY NEW YEAR'
    }
},1000);
