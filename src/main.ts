// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscole
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”
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


// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.
