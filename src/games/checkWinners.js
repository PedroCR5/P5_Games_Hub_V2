import { lanzarModalMemory } from "./modals";

export function checkMemoryWinners(aciertosPlayer1, aciertosPlayer2) {
  if (aciertosPlayer1 + aciertosPlayer2 == 10) {
    if (aciertosPlayer1 > aciertosPlayer2) {
      lanzarModalMemory("Jugador 1");
    } else if (aciertosPlayer1 < aciertosPlayer2) {
      lanzarModalMemory("Jugador 2");
    } else {
      lanzarModalMemory("empate");
    }
  };
}

export function pintarGanadoresTresEnRaya() {
  console.log("vamos a poner los ganadores");
  let anteriorGanadorTresEnRaya = localStorage.getItem("ultimoGanadorTresEnRaya");

  if (anteriorGanadorTresEnRaya != null) {
    let checkUltimoGanadorTresEnRaya = document.getElementById("ultimoGanadortresEnRaya");
    checkUltimoGanadorTresEnRaya.innerHTML = `El último ganador ha sido el ${anteriorGanadorTresEnRaya}`;
  };

  let anteriorGanadortresEnRaya = localStorage.getItem("ultimoGanadorTresEnRaya");// Recupero el último ganador para ponerlo debajo del tablero
  let partidasGanadastresEnRayaJugador1 = localStorage.getItem("partidasGanadastresEnRayaJugador1") || 0;
  let partidasGanadastresEnRayaJugador2 = localStorage.getItem("partidasGanadastresEnRayaJugador2") || 0;
  console.log(partidasGanadastresEnRayaJugador1);
  console.log(partidasGanadastresEnRayaJugador2);

  if (anteriorGanadortresEnRaya != null) {
    let checkAnteriorGanadortresEnRaya = document.getElementById("ultimoGanadortresEnRaya");
    checkAnteriorGanadortresEnRaya.innerHTML = `El último ganador ha sido el ${anteriorGanadortresEnRaya}.<br><br> El JUGADOR 1 ha ganado ${partidasGanadastresEnRayaJugador1} veces <br>y el JUGADOR 2 ha ganado ${partidasGanadastresEnRayaJugador2} veces.`;
  };
}