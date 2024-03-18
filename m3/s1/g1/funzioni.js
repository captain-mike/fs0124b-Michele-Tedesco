"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function somma(a, b = 0) {
    if (!a)
        a = 0; //il controllo dell'if fa un filtro, e mi permette di usare a come se fosse number, e non più number|undefined
    return a + b;
}
let risultato = somma(2, 3);
//void significa che la funzione non restituisce dati
function saluto() {
    alert('ciao');
}
function isAdult(anni) {
    if (anni >= 18) {
        return true;
    }
    return false;
}
isAdult(2);
function sommaConErrori(a, b) {
    if (a > 100)
        throw new Error('Il parametro è troppo alto');
    return a + b;
}
try {
    let x = sommaConErrori(2516, 5);
}
catch (error) {
    console.log(error);
}
//funzione asincrona: una promise contenente una string
function fnAsincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'ciao';
    });
}
fnAsincrona().then(res => console.log(res));
//funzione che somma o concatena
function sommaConcatenaAS(a, b) {
    //(a as any) permette l'utilizzo di a sotto forma di any, permettendo così il concatenamento o la somma con stringhe o numeri
    return a + b;
}
function sommaConcatena(a, b) {
    return a + b;
}
//# sourceMappingURL=funzioni.js.map