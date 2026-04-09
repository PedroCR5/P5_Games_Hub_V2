import { lanzarModalMemory } from "./modals";

export function checkMemoryWinners(aciertosPlayer1, aciertosPlayer2) {
  if (aciertosPlayer1 + aciertosPlayer2 == 1) { //!hay que pone 10
    //console.log("Juego acabado");
    if (aciertosPlayer1 > aciertosPlayer2) {
      lanzarModalMemory("Jugador 1");
    } else if (aciertosPlayer1 < aciertosPlayer2) {
      lanzarModalMemory("Jugador 2");
    } else {
      console.log("Empate");
    }
  };
}