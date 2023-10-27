// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function newH1() {
  const h1 = document.querySelector("h1");
  h1.innerText = "GAMING HOUSE";
}
newH1();

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function backgroundColor() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "purple";
}

backgroundColor();
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
function changeAddress() {
  const footer = document.querySelector("footer");
  footer.innerText = "Via le mani dal naso 14";
}
changeAddress();
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClassA() {
  const links = document.querySelectorAll("a");
  for (i = 0; i < links.length; i++) links[i].classList.add("class_a");
}
addClassA();
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function visibility() {
  const img = document.querySelectorAll("tabella,img");
  for (i = 0; i < img.length; i++) {
    img[i].classList.toggle("Hidden");
  }
}
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function changeColorPrices() {
  const prices = document.querySelectorAll(".prezzi");
  for (i = 0; i < prices.length; i++) {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    prices[i].style.color = `rgb(${red}, ${green}, ${blue})`;
  }
}
