/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{

    let x = 4;
    let y = 7;
    
    if(x > y){
        console.log('il più grande è ' + x);
    }else if(x < y){
        console.log('il più grande è ' + y);
    }else{
        console.log('i numeri sono uguali');
    }
    
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{

    let x = 8;

    if(x !== 5) console.log('Not Equal');

}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

{

    let x = 10;

    if(x % 5 === 0) console.log('Divisibile per 5');

}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

{

    let x = 10;
    let y = 4;

    if(x === 8 || y === 8 || (x + y) === 8 || (x - y) === 8 || (y - x) === 8 ){
        console.log('verificato');
    }

}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{

    let totalShoppingCart = 80;
    let costoSpedizione = 10;
    let totaleDaPagare = totalShoppingCart;

    if(totalShoppingCart < 50){
        totaleDaPagare += costoSpedizione;
    }

    console.log(totaleDaPagare);
    
}
    
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{

    let totalShoppingCart = 80;
    totalShoppingCart *= 0.8;
    let costoSpedizione = 10;
    let totaleDaPagare = totalShoppingCart;

    if(totalShoppingCart < 50){
        totaleDaPagare += costoSpedizione;
    }

    console.log(totaleDaPagare);
    
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valore = 'test';

if(typeof valore === 'number'){
    console.log('è un numero');
}else{
    console.log('non è un numero');
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{

    let x = 11;
    if(x % 2 === 0){
        console.log('pari');
    }else{
        console.log('dispari');
    }

}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
      console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

  me.city = 'Toronto';
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  delete me.lastName
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

    me.skills.pop()
  
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  let arr = [];

  arr.push(1,2,3,4,5,6,7,8,9,10)
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  arr.splice(9,1,100);
  