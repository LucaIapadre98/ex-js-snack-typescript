//#SNACK 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscole
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve
let dato : unknown;                                            // dato di tipo sconosciuto

if(typeof dato === 'string'){                                  // controllo se è una stringa
  console.log(dato.toUpperCase());
}else if(typeof dato === 'number'){                            // controllo se è un numero
  console.log(dato * 2);
}else if(typeof dato === 'boolean'){                           // controllo se è un booleano
  console.log(dato ? 'Sì' : 'No');
}else if(dato === null){                                       // controllo se è null
  console.log('Il dato è vuoto');
}else if(dato instanceof Array){                               // controllo se è un array, Array.isArray è un metodo statico di Array
  console.log(dato.length);
}else if(dato instanceof Promise){                             // controllo se è una Promise
  dato.then(value => console.log(value));                      // quando la Promise si risolve, stampo il valore
}else{
  console.log('Tipo non supportato');
};




//#SNACK 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
// anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
// Il type alias Dipendente, ha anche i seguenti dati:
// emailAziendale → Email assegnata al dipendente (non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[]
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
};

//#SNACK 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
// Developer
// livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
// linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda 
// (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
// certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
// ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
// budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
// stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).

type  Developer = Dipendente & {                                    // estendo Dipendente
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],                                            // opzionale perchè i neo assunti non hanno ancora dei linguaggi assegnati
  certificazioni: string[]
};

type ProjectManager = Dipendente & {                               // estendo Dipendente
  teamSize: number | null,                                        // può essere null se non ha ancora un team assegnato
  budgetGestito?: number,                                         // opzionale
  stakeholderPrincipali: string[]
};