//import { gameMemory } from "../../main";
//import { seleccionarTemaMemory } from "../modals";
//import { createCards } from "./Card";
import { temaMemoryInicial } from "../../main";
import { getImages } from "./infoAPI";
//export const temaMemory = "dog";

export function pintarMemory() {
  const memoryTable = document.querySelector(`#memoryTable`);
  memoryTable.innerHTML = "";
  const memoryPlayersDiv = document.querySelector(`#memoryPlayers`);
  memoryPlayersDiv.innerHTML = "";
  const player1 = document.createElement("div");
  memoryPlayersDiv.append(player1);
  player1.className = "player1 cursor-text";
  player1.id = "cursorText1";
  player1.innerText = "Jugador 1";
  const player2 = document.createElement("div");
  memoryPlayersDiv.append(player2);
  player2.className = "notPlayer";
  player2.id = "cursorText2";
  player2.innerText = "Jugador 2";
  let anteriorGanadorMemory = localStorage.getItem("ultimoGanadorMemory");// Recupero el último ganador para ponerlo debajo del tablero

  let partidasGanadasMemoryJugador1 = localStorage.getItem("partidasGanadasMemoryJugador1") || 0;
  let partidasGanadasMemoryJugador2 = localStorage.getItem("partidasGanadasMemoryJugador2") || 0;

  if (anteriorGanadorMemory != null) {
    let checkAnteriorGanadorMemory = document.getElementById("ultimoGanadormemory");
    checkAnteriorGanadorMemory.innerHTML = `El último ganador ha sido el ${anteriorGanadorMemory}.<br><br> El JUGADOR 1 ha ganado ${partidasGanadasMemoryJugador1} veces <br>y el JUGADOR 2 ha ganado ${partidasGanadasMemoryJugador2} veces.`;
  };
  //Pintar el boton Reset
  const memoryReset = document.querySelector(`#memoryReset`);;
  memoryReset.innerHTML = "";
  memoryReset.textContent = "Resetea la partida aquí";
};

export function gameMemory(temaMemory) {
  pintarMemory(); // Pinto el HTML
  getImages(`${temaMemory}`);

}//Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.

export function clickResetMemory() {// Función para resetear el memory
  const resetMemory = document.querySelector(`#memoryReset`);
  resetMemory.addEventListener('click', () => {
    console.log("reset memory ok");
    gameMemory(`${temaMemoryInicial}`);
  });
};

export function changeImagesMemory(temaMemory) {
  console.log("vamos a cambiar las fotos");
  console.log(`a ${temaMemory}`);
  if (temaMemory) {
    gameMemory(`${temaMemory}`);
  } else {
    gameMemory(`${temaMemoryInicial}`);

  }
  const inputUsado = document.getElementById("inputMemory");
  inputUsado.value = "";
}