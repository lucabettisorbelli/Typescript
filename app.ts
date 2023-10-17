// tipo di array
let alunni: string[] = ['Luca', 'Mario', 'Francesco'];

console.log(alunni)

// tupla, un tipo di array in cui il tipo di un numero fisso di elementi è noto, ma non deve essere lo stesso. 
const Elements: [number, number, string] = [9, 8, 'ciao']

// union, array di stringhe O array di numeri
let gente: string[] | number[] = ['luca', 'marco', 'filippo'];

// custom Type, combinazione
type Persona = {
    nome: string;
    cognome: string;
    eta: number
}

const alunno: Persona = {
    nome: 'Franco',
    cognome: 'Bianchi',
    eta: 44
}

function trovaPersona(a: any) {
    console.log(`${alunno.nome} ${alunno.cognome} è un ragazzo di ${alunno.eta}`)
}

trovaPersona(alunno);

//gli argomenti delle funzioni posso essere dichiarate come tipo specifico, se non dichiarate vengono assegnate di default
function somma(num1: number, num2 = 1) {
    console.log(num1 + num2);
}

somma(2, 10)

class Utente {
    cognome: string;
    eta: number;

    // con Typescript puoi assegnare in valore ad una propietà direttamente nel costruttore senza dichiararla prima aggiungendo il modificatore (nome) 
    constructor(public nome: string, cognome: string, eta: number) {
        this.cognome = cognome;
        this.eta = eta;
    }

    presenta() {
        console.log(`Ciao sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni`);
    };

    // si possono passare come argomento oggetti di qualsiasi tipo
    saluta(user: Utente) {
        console.log(`Ciao ${user.nome} ${user.cognome}, molto piacere`);
    }

}

let user = new Utente('Luca', 'Belli', 78);
let user1 = new Utente('Marco', 'Brutti', 55);


user.presenta()
user1.saluta(user)

// nel super devo richiamare le propietà di Utente e nel constructor devo inserire una nuova proprietà con il modificatore e il tipo
class Studente extends Utente {
    constructor(nome: string, cognome: string, eta: number, public voto: number) {
        super(nome, cognome, eta)
    }

    mostra() {
        console.log(`Ciao sono ${this.nome} ${this.cognome} ed ho ${this.eta} anni e come voto ho ${this.voto}`)
    }
}

let studente = new Studente('Maria', 'Grazia', 21, 7)
studente.mostra();

// le classi astratte possono solo essere dichiarate e non possono essere usati con altre istanze, mentre i metodi se dichiarati in una classe devono essere sempre ridichiarate dentro alle sottoclassi (abstract)

interface Internet {
    indirizzoIp: string
    connettiInternet(): void
}

abstract class Dispositivo {

    constructor(protected nome: string, protected marca: string, protected anno: number) {

    }

    abstract accendi(): void
    abstract spegni(): void
}

class Telefono extends Dispositivo {
    accendi(): void {
        console.log('il telefono si accende..');
    };
    spegni(): void {
        console.log('il telefono si spegne');
    }
}

class Smartphone extends Dispositivo implements Internet {

    indirizzoIp: string;
    constructor(nome: string, marca: string, anno: number, indirizzoIp: string) {
        super(nome, marca, anno);
        this.indirizzoIp = indirizzoIp;
    }

    connettiInternet(): void {
        console.log('lo smartphone è connesso ad internet');
    }
    accendi(): void {
        console.log('lo smartphone si accende..');
    };
    spegni(): void {
        console.log('lo smartphone si spegne');
    }
}

class Computer extends Dispositivo implements Internet {
    indirizzoIp: string;
    constructor(nome: string, marca: string, anno: number, indirizzoIp: string) {
        super(nome, marca, anno);
        this.indirizzoIp = indirizzoIp;
    }
    connettiInternet(): void {
        console.log('il computer è connesso ad internet');
    }
    accendi(): void {
        console.log('il computer si accende..');
    };
    spegni(): void {
        console.log('il computer si spegne');
    }
}

// generics <T>
const arr: Array<string> = ['ciao', '44'];

//generic
function creaArray<T>(items: T[]): T[] {
    return new Array().concat(items);
};

let arr1 = creaArray(['ciao', 'hola']);
let arr2 = creaArray([45, 48]);

arr1.push('hskdlsdk', 'sdhsjk');
arr2.push(45, 44)

console.log(arr1);


// controllo della classe Prova con verifica tipo
class Prova<T> {
    public lista: T[] = [];

    aggiungiItem(item: T) {
        this.lista.push(item);
    };

    rimuoviItem(item: T) {
        this.lista.splice(this.lista.indexOf(item, 1));
    }
};

const listaStringhe = new Prova<string>();
listaStringhe.aggiungiItem('jdf');
listaStringhe.aggiungiItem('dssfds');
listaStringhe.aggiungiItem('sdjksld');

const listaNumeri = new Prova<number>();
listaNumeri.aggiungiItem(42);
listaNumeri.aggiungiItem(22);
listaNumeri.aggiungiItem(88);

console.log(listaStringhe);
console.log(listaNumeri);

// decorators, sono funzioni che possono essere implementate a delle classi con la @

function logger(messaggio: string) {
    return function (constructor: any) {
        console.log(messaggio);
        console.log(constructor);
    }
}

@logger('ciao sono il loggatore di frego')
class Frego {
    constructor() {
        console.log('sto loggando');
    }
};

@logger('ciao sono il loggatore di qwerty')
class Qwerty {
    constructor() {
        console.log('sto loggando');
    }
};
// let frego = new Frego();

