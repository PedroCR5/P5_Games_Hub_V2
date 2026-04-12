import { gameMemory } from "./memory/memory";

//import { gameMemory } from "../main";

export function lanzarModalMemory(ganador) {

  //Disparo el modal
  const modalOn = document.getElementById('memoryModalContainer');
  const infoModalP = document.getElementById("memoryModalInfo");
  if (ganador == "empate") {
    infoModalP.innerText = `Habeis empatado la partida. ¡¡Intentarlo de nuevo!!`;
  } else {
    infoModalP.innerText = `El ${ganador} ha ganado esta partida. ¡¡Enhorabuena!!`;
  }
  modalOn.style.display = "flex";

  //Quito el modal al pulsar el button y reseteo el memory
  const modalButton = document.getElementById("memoryModalButton");
  modalButton.addEventListener('click', function () {
    modalOn.style.display = "none";
    gameMemory();//Así reseteo el memory
  });

  //Leo las partidas ganadas, si no estuviera declarada pone un 0 y luego incrementamos a 1.
  if (ganador == "Jugador 1") {
    let partidasGanadasMemoryJugador1 = parseInt(localStorage.getItem("partidasGanadasMemoryJugador1"), 10) || 0;
    partidasGanadasMemoryJugador1++;
    localStorage.setItem("ultimoGanadorMemory", "Jugador 1");
    localStorage.setItem("partidasGanadasMemoryJugador1", partidasGanadasMemoryJugador1.toString());
    //console.log(`En el memory el Jugador 1 lleva ganadas ${partidasGanadasMemoryJugador1} partidas.`);
    //console.log(partidasGanadasMemoryJugador1);
  }
  if (ganador == "Jugador 2") {
    let partidasGanadasMemoryJugador2 = parseInt(localStorage.getItem("partidasGanadasMemoryJugador2"), 10) || 0;
    partidasGanadasMemoryJugador2++;
    localStorage.setItem("ultimoGanadorMemory", "Jugador 2");
    localStorage.setItem("partidasGanadasMemoryJugador2", partidasGanadasMemoryJugador2.toString());
    //console.log(`En el memory el Jugador 2 lleva ganadas ${partidasGanadasMemoryJugador2} partidas.`);
    //console.log(partidasGanadasMemoryJugador2);
  }

  // Ponemos el último ganador en el juego
  /* const ultGanadorMemory = document.getElementById("ultimoGanadorMemory");
  ultGanadorMemory.innerHTML = "El último ganador ha sido el Jugador 2"; */
}

export function seleccionarTemaMemory(temaMemory) {
  //Crear modal cuando seleccionemos
  //Imput para cambiar el tema, y se resetea la partida
  console.log(temaMemory);
  gameMemory(temaMemory);

}