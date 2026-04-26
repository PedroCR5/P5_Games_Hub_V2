import { temaMemoryInicial } from "../main";
import { gameMemory, nuevoTema } from "./memory/memory";

export function lanzarModalMemory(ganador) {//Disparo el modal
  const modalOn = document.getElementById('memoryModalContainer');
  const infoModalP = document.getElementById("memoryModalInfo");

  if (ganador == "empate") {
    infoModalP.innerText = `Habeis empatado la partida. ¡¡Intentarlo de nuevo!!`;
  } else {
    infoModalP.innerText = `El ${ganador} ha ganado esta partida. ¡¡Enhorabuena!!`;
  }
  modalOn.style.display = "flex";

  const modalButton = document.getElementById("memoryModalButton");
  modalButton.addEventListener('click', function () {//Quito el modal al pulsar el button y reseteo el memory
    modalOn.style.display = "none";

    gameMemory(`${nuevoTema}`);
  });

  //Leo las partidas ganadas, si no estuviera declarada pone un 0 y luego incrementamos a 1.
  if (ganador == "Jugador 1") {
    let partidasGanadasMemoryJugador1 = parseInt(localStorage.getItem("partidasGanadasMemoryJugador1"), 10) || 0;
    partidasGanadasMemoryJugador1++;
    localStorage.setItem("ultimoGanadorMemory", "Jugador 1");
    localStorage.setItem("partidasGanadasMemoryJugador1", partidasGanadasMemoryJugador1.toString());
  }
  if (ganador == "Jugador 2") {
    let partidasGanadasMemoryJugador2 = parseInt(localStorage.getItem("partidasGanadasMemoryJugador2"), 10) || 0;
    partidasGanadasMemoryJugador2++;
    localStorage.setItem("ultimoGanadorMemory", "Jugador 2");
    localStorage.setItem("partidasGanadasMemoryJugador2", partidasGanadasMemoryJugador2.toString());
  }
};