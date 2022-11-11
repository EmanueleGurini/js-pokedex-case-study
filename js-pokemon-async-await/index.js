'use strict'

import { q, createCard } from "./utils.js";

const container = q(".container");
let lastElement = container;

// Dichiaro delle variabili globali, start e limit che utilizzerò per muovermi 
// all'interno di un set di valori (da 1 a 11 --> da 11 a 21 etc.)
let start = 1;
let limit = 0;

// Limit verrà aumentato di dieci a ogni ciclo
let crosser = 10;


/**
 * Prende un array di elementi del DOM
 * Quando l'elemento puntato dall'observer sarà visibile, verrà eseguita la funzione populateCards. 
 * La funzione populateCards viene eseguita solo se limit < a 150.
 * 
 * @param {HTMLElements} array
 */
const callback = (array) => {
  array.forEach((card) => {
    if (card.isIntersecting) {
      if (limit < 150) {
        populateCards(crosser);
      }
    }
  });
};


/**
 * 
 * @param {number} index 
 * @returns Data from the selected Pokémon
 */
const GET = async (index) => {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  let data = await response.json();
  return data;
}


/**
 * Aumenta limit di dieci.
 * Esegue la funzione GET per ogni Pokémon con indice che va da start a limit.
 * Stampa ogni Pokémon.
 * 
 * Toglie l'observer dall'ultimo elemento su cui era impostato.
 * Seleziona l'ultima card contenuta nel .container e la inserisce nell'observer.
 * 
 * Aggiorna la variabile globale start
 *  
 * @param {number} num 
 */
const populateCards = (num) => {
  limit += num;

  for (let i = start; i <= limit; i++) {
    GET(i)
      .then((res) =>
        createCard(
          container,
          res.sprites.other["official-artwork"].front_default,
          res.name,
          res.id,
          res.types[0].type.name
        )
      )
      .finally(() => {
        observer.unobserve(lastElement);
        lastElement = document.querySelector(".container").lastElementChild;
        observer.observe(lastElement);
      })
  }

  start += num;
};

// Creo il mio observer
const observer = new IntersectionObserver(callback);

// Imposto il mio observer iniziale con il primo elemento visibile al primo download della pagina web.
observer.observe(lastElement);
