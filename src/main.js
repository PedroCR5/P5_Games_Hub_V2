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

//!Notas Técnicas
/* 
En lugar de los alerts del sistema deberías manejar modales propios para interactuar con los usuarios.
Tres en raya
Una vez que gana un jugador, el juego no se detiene, si quedan casillas en blanco en el tablero, cada jugada (sea del jugador que sea), muestra nuevamente el mensae de victoria del jugador ganador. El tablero no se resetea al ganar uno de ellos. Tampoco hay un botón para volver a reiniciar la partida, solo el de volver al menú inicial para jugar otro juego.
En el local storage se guarda solamente quien ganó la última vez, no se lleva estadística de las veces que ganó cada uno de los jugadores


Juego de la Oca:
Tampoco termina y solo guarda en el Local Storage al que gane la primera partida.
Al ganar uno de los jugadores y no finalizar la partida, el ganador comienza a ir hacia atrás en cada jugada.
Da siempre que gana el jugador 1 aunque gane cualquier otro. Ya que tienes fichas de colores, deberías identificar los dados y el ganador con el color correspondiente.
¿Por qué el tablero es clicable?
Tampoco hay cómo reiniciar el juego. Debo volver al inicio y seleccionar nuevamente el Juego de la Oca
Cuanto más jugadores escoja, más se extiende el tablero y el input del N° de jugadores. Cuando juega el primer jugador, el tablero vuelve a su posición normal.


Memory
En este caso si cambia qué jugador gana la última partida, pero no se guarda el record de cuántas partidas ganadas por cada jugador.
Igual que los otros juegos, debo volver a la pantalla principal, porque no tengo como reiniciar el juego desde su propia pantalla
 */