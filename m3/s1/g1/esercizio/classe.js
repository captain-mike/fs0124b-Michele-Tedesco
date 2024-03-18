"use strict";
class User {
    constructor(nome, cognome, credito) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito || 0;
    }
    ricarica(c) {
        this.credito += c;
    }
    set setRicarica(c) {
        //ora questo metodo è utilizzabile solo per inserire dati
        this.credito += c;
    }
    chiamata(minuti) {
        let costo = this.costoMinuto * minuti;
        this.credito -= costo;
        this.numeroChiamate += minuti;
    }
    chiama404() {
        return this.credito + '€';
    }
    get getChiama404() {
        //in questo metodo il return è obbligatorio, i parametri sono vietati
        return this.credito + '€';
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let user = new User('Mario', 'Rossi', 30);
user.ricarica(50);
//user.setRicarica = 50 è un metodo set quindi si assegna con =
user.chiamata(20);
console.log(user);
console.log(user.chiama404());
//console.log(user.getChiama404);
console.log(user.getNumeroChiamate());
user.azzeraChiamate();
console.log(user.getNumeroChiamate());
//# sourceMappingURL=classe.js.map