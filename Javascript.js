//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 4
let num2 = 8

if(num1 < num2){
  console.log("8 è più grande di " + num1)
}


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num3 = 18

if ( num3 < 5){
  console.log("Tiny")
} else if ( num3 < 10){
  console.log("Small")
} else if (num3 < 15){
  console.log("Medium")
} else if (num3 < 20){
  console.log("Large")
} else {
  console.log("Huge")
}



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i=0;i <= 10;i++){
  if(i ===3){
    continue
  } if( i===8){
    continue
  }
 console.log(i)
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i2=0; i2 <= 15; i2++){
  if(i2 % 2===0){
    console.log( i2 + " è pari")
  } else{
    console.log( i2 + " è dispari")
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

num4 = 5
num5 = 4

if (num4 ===8 || num5 ===8){
  console.log("Il numero è 8")
}else if (num4 + num5 === 8){
  console.log("il numero è 8")
} else if (num4 - num5 === 8){
  console.log("il numero è 8")
} else{
 console.log("nessuno di questi numeri è 8")
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/



const totalShoppingCart = 60
const freeShipping = totalShoppingCart > 50
const shippingPrice = 10

let totalPrice = freeShipping ? totalShoppingCart : (totalShoppingCart + shippingPrice)

console.log(totalPrice)



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCart2 = 37
const discount = totalShoppingCart2 * 0.80
const freeShipping2 = totalShoppingCart2 > 50
const shippingPrice2 = 10

let totalPrice2 = freeShipping2 ? discount : (discount + shippingPrice2)

console.log(totalPrice2)

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true
let gender = isMale ? "male" : "female"

console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i3=1; i3 <= 100; i3++){
  const multipleOfThree = i3 % 3 === 0
  const multipleOfFive = i3 % 5 === 0
  const multipleOfBoth = multipleOfThree && multipleOfFive

  if(multipleOfBoth){
    console.log(i3 + " FizzBuzz")
  } else if (multipleOfFive){
    console.log(i3 + " Buzz")
  } else if (multipleOfThree){
    console.log (i3 + " Fizz")
}  else{
  console.log (i3)
}
}

