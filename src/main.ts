// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscole
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”
let dato : unknown;                                           // dato di tipo sconosciuto

if(typeof dato === 'string'){                                 // controllo se è una stringa
    console.log(dato.toUpperCase());
}else if(typeof dato === 'number'){                           // controllo se è un numero
    console.log(dato * 2);
}else if(typeof dato === 'boolean'){                         // controllo se è un booleano
    console.log(dato ? 'Sì' : 'No');
}else{
    console.log('Tipo non supportato');
};
