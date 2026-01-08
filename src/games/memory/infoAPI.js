import { createCards } from "./Card";
import { endPoint, accesKey } from "../../main";
export let imagesList = {};
// Traigo la info de la API y llamo a Card.js para pintar las Cards.
export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  function fisherYatesShuffle(array) { // Ordeno el array aleatoriamente
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
  }
  const imagesListDoble = imagesList.concat(imagesList);
  fisherYatesShuffle(imagesListDoble); // Ponemos las 20 cartas aleatoriamente
  createCards(imagesListDoble); // Pintamos las cartas
};