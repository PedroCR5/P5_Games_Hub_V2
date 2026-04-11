//import { gameMemory } from "../../main";
import { createCards } from "./Card";
import { getImages } from "./infoAPI";

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
  //console.log(anteriorGanadorMemory);

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

  //Pintar el input del tema del juego
  const memoryTitle = document.getElementById("memoryTitle");
  const inputMemory = document.createElement("input");
  memoryTitle.append(inputMemory);
  //inputMemory.className = "inputMe";
  inputMemory.id = "inputMemory";
  inputMemory.placeholder = "Escribe aquí el tema del juego";

  const inputMemoryButton = document.createElement("button");
  inputMemoryButton.id = "inputMemoryButton";
  inputMemoryButton.textContent = "Pulsa para cambiarlo"
  memoryTitle.append(inputMemoryButton);

  inputMemoryButton.addEventListener('click', function () {
    const temaMemory = document.getElementById("inputMemory").value;

    changeImagesMemory(temaMemory);
  });


};

export function gameMemory() {
  pintarMemory(); // Pinto el HTML

  getImages('casa'); //Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
  //getImages('temaMemory'); //Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.

};
function changeImagesMemory(temaMemory) {
  console.log(temaMemory);
  //borrar las cards y ponerlas de nuevo
  createCards(temaMemory);
  gameMemory();
}
export function clickResetMemory() {// Función para resetear el memory
  const resetMemory = document.querySelector(`#memoryReset`);
  resetMemory.addEventListener('click', () => {
    console.log("reset memory ok");
    gameMemory();
  });
};
