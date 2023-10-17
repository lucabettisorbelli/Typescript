"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tipo di array
let alunni = ['Luca', 'Mario', 'Francesco'];
console.log(alunni);
// tupla, un tipo di array in cui il tipo di un numero fisso di elementi è noto, ma non deve essere lo stesso. 
const Elements = [9, 8, 'ciao'];
// union, array di stringhe O array di numeri
let gente = ['luca', 'marco', 'filippo'];
const alunno = {
    nome: 'Franco',
    cognome: 'Bianchi',
    eta: 44
};
function trovaPersona(a) {
    console.log(`${alunno.nome} ${alunno.cognome} è un ragazzo di ${alunno.eta}`);
}
trovaPersona(alunno);
//gli argomenti delle funzioni posso essere dichiarate come tipo specifico, se non dichiarate vengono assegnate di default
function somma(num1, num2 = 1) {
    console.log(num1 + num2);
}
somma(2, 10);
class Utente {
    // con Typescript puoi assegnare in valore ad una propietà direttamente nel costruttore senza dichiararla prima aggiungendo il modificatore (nome) 
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    presenta() {
        console.log(`Ciao sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`);
    }
    ;
    // si possono passare come argomento oggetti di qualsiasi tipo
    saluta(user) {
        console.log(`Ciao ${user.nome} ${user.cognome}, molto piacere`);
    }
}
let user = new Utente('Luca', 'Belli', 78);
let user1 = new Utente('Marco', 'Brutti', 55);
user.presenta();
user1.saluta(user);
// nel super devo richiamare le propietà di Utente e nel constructor devo inserire una nuova proprietà con il modificatore e il tipo
class Studente extends Utente {
    constructor(nome, cognome, eta, voto) {
        super(nome, cognome, eta);
        this.voto = voto;
    }
    mostra() {
        console.log(`Ciao sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni e come voto ho ${this.voto}`);
    }
}
let studente = new Studente('Maria', 'Grazia', 21, 7);
studente.mostra();
class Dispositivo {
    constructor(nome, marca, anno) {
        this.nome = nome;
        this.marca = marca;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    accendi() {
        console.log('il telefono si accende..');
    }
    ;
    spegni() {
        console.log('il telefono si spegne');
    }
}
class Smartphone extends Dispositivo {
    constructor(nome, marca, anno, indirizzoIp) {
        super(nome, marca, anno);
        this.indirizzoIp = indirizzoIp;
    }
    connettiInternet() {
        console.log('lo smartphone è connesso ad internet');
    }
    accendi() {
        console.log('lo smartphone si accende..');
    }
    ;
    spegni() {
        console.log('lo smartphone si spegne');
    }
}
class Computer extends Dispositivo {
    constructor(nome, marca, anno, indirizzoIp) {
        super(nome, marca, anno);
        this.indirizzoIp = indirizzoIp;
    }
    connettiInternet() {
        console.log('il computer è connesso ad internet');
    }
    accendi() {
        console.log('il computer si accende..');
    }
    ;
    spegni() {
        console.log('il computer si spegne');
    }
}
// generics <T>
const arr = ['ciao', '44'];
//generic
function creaArray(items) {
    return new Array().concat(items);
}
;
let arr1 = creaArray(['ciao', 'hola']);
let arr2 = creaArray([45, 48]);
arr1.push('hskdlsdk', 'sdhsjk');
arr2.push(45, 44);
console.log(arr1);
// controllo della classe Prova con verifica tipo
class Prova {
    constructor() {
        this.lista = [];
    }
    aggiungiItem(item) {
        this.lista.push(item);
    }
    ;
    rimuoviItem(item) {
        this.lista.splice(this.lista.indexOf(item, 1));
    }
}
;
const listaStringhe = new Prova();
listaStringhe.aggiungiItem('jdf');
listaStringhe.aggiungiItem('dssfds');
listaStringhe.aggiungiItem('sdjksld');
const listaNumeri = new Prova();
listaNumeri.aggiungiItem(42);
listaNumeri.aggiungiItem(22);
listaNumeri.aggiungiItem(88);
console.log(listaStringhe);
console.log(listaNumeri);
// decorators, sono funzioni che possono essere implementate a delle classi con la @
function logger(messaggio) {
    return function (constructor) {
        console.log(messaggio);
        console.log(constructor);
    };
}
let Frego = class Frego {
    constructor() {
        console.log('sto loggando');
    }
};
Frego = __decorate([
    logger('ciao sono il loggatore di frego')
], Frego);
;
let Qwerty = class Qwerty {
    constructor() {
        console.log('sto loggando');
    }
};
Qwerty = __decorate([
    logger('ciao sono il loggatore di qwerty')
], Qwerty);
;
// let frego = new Frego();
