interface iSmartphone{
    credito:number
    numeroChiamate:number
}

class User implements iSmartphone {
    credito: number = 0
    numeroChiamate: number = 0
    costoMinuto:number = 0.2
    nome: string
    cognome: string

    constructor(nome:string, cognome:string, credito?:number){
        this.nome = nome
        this.cognome = cognome
        this.credito = credito || 0
    }

    
    ricarica(c:number):void{
        this.credito += c;
    }
    set setRicarica(c:number){
        //ora questo metodo è utilizzabile solo per inserire dati
        this.credito += c;
    }

    chiamata(minuti:number):void{
        let costo = this.costoMinuto * minuti;
        this.credito -= costo;
        this.numeroChiamate += minuti;
    }

    chiama404():string{
        return this.credito + '€'
    }
    get getChiama404():string{
        //in questo metodo il return è obbligatorio, i parametri sono vietati
        return this.credito + '€'
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0;
    }
}

let user = new User('Mario','Rossi',30)

user.ricarica(50)
//user.setRicarica = 50 è un metodo set quindi si assegna con =
user.chiamata(20)

console.log(user);

console.log(user.chiama404());
//console.log(user.getChiama404);
console.log(user.getNumeroChiamate());

user.azzeraChiamate()

console.log(user.getNumeroChiamate());


