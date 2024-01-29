
let anni = prompt('Quanti anni hai?');

if(anni >= 18 && anni <= 120){

    document.write('Sei maggiorenne');

}else if(anni > 120){

    document.write('Sei antico');
    
}else{

    document.write('Sei minorenne');
   // location.href = 'https://www.youtube.com/watch?v=vJ2wcmfpcWo'

}

/**
 * 
 * operatore not
 * 
 */

console.log( !false );//true
console.log( !true );//false

console.log( !(anni >= 18) );//false



console.log(30 == '30');//true
console.log(30 != '30');//false perchè i valori sono uguali

console.log(30 === '30');//false perché i tipi di dato sono diversi
console.log(30 !== '30');//true perché i tipi di dato sono diversi
