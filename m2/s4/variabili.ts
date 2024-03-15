let numero:number = 0;
let stringa:string = '';
let booleano:boolean = false;


let arrayStringhe:string[] = ['a','b']
let arrayNumeri:number[] = [0,1]
let arrayBooleano:boolean[] = [true,false]


//il ? significa prop facoltativa
let obj:{nome:string, cognome:string, anni?:number} = {
    nome:'Mario',
    cognome:'Rossi',
}

console.log(obj.nome)


class Persona{
    nome:string = ''
    cognome:string = ''
    anni?:number = 0
}

let objPersona:Persona = {
    nome:'Mario',
    cognome:'Rossi',
}