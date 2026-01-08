import { clickCasillaCheck, printTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { crearEstructuraPpal } from './structure/structure';
import './style.css';
import { pintarMemory } from './games/memory/memory';
import { getImages } from './games/memory/infoAPI';
import { gameOca } from './games/laOca/laOca';
import { returnToChangeTheGame, selectGameToPlay } from './games/selectGame';
crearEstructuraPpal()

//! Juego Tres en Raya
export function gameTresEnRaya() {
  printTresEnRaya();
  // Poner cruz o círculo al hacer click en la casilla
  let player = "1";
  const cells = document.querySelectorAll('.casilla');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      player = clickCasillaCheck(cell, player);
    });
  });
};
gameTresEnRaya();

//! Juego la Oca
gameOca();

//! Juego Memory
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
export function gameMemory() {
  pintarMemory(); // Pinto el HTML
  getImages('dog'); //Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
};
gameMemory();

selectGameToPlay();// Click para seleccionar el juego
returnToChangeTheGame();// Click para volver a la pantalla inicial y resetear la partida jugada

