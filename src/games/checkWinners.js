import { lanzarModalMemory } from "./modals";

export function checkMemoryWinners(aciertosPlayer1, aciertosPlayer2) {
  if (aciertosPlayer1 + aciertosPlayer2 == 2) { //!hay que poner 10
    //console.log("Juego acabado");
    if (aciertosPlayer1 > aciertosPlayer2) {
      lanzarModalMemory("Jugador 1");
    } else if (aciertosPlayer1 < aciertosPlayer2) {
      lanzarModalMemory("Jugador 2");
    } else {
      lanzarModalMemory("empate");
      console.log("Empate");
    }
  };
}