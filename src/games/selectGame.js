import { gameMemory, gameTresEnRaya } from "../main";
import { gameOca } from "./laOca/laOca";
export function selectGameToPlay() { // Entrar en el juego al pulsar en la pantalla principal
  let tresEnRayaClickAJugar = document.getElementById("tresEnRayaSelect");
  tresEnRayaClickAJugar.addEventListener('click', () => {
    document.getElementById("tresEnRaya").style.display = "flex";
    document.getElementById("divNav").style.display = "none";
  });
  let laOcaClickAJugar = document.getElementById("laOcaSelect");
  laOcaClickAJugar.addEventListener('click', () => {
    document.getElementById("laOca").style.display = "flex";
    document.getElementById("divNav").style.display = "none";
  });
  let memoryClickAJugar = document.getElementById("memorySelect");
  memoryClickAJugar.addEventListener('click', () => {
    document.getElementById("memory").style.display = "flex";
    document.getElementById("divNav").style.display = "none";
  });
};
export function returnToChangeTheGame() { // Volver a la pantalla principal para cambiar de juego o reiniciar el mismo
  let tresEnRayaClickOtroJuego = document.getElementById("tresEnRayaReturnToNav");
  tresEnRayaClickOtroJuego.addEventListener('click', () => {
    document.getElementById("tresEnRaya").style.display = "none";
    document.getElementById("divNav").style.display = "flex";
    gameTresEnRaya();
  });
  let laOcaClickOtroJuego = document.getElementById("laOcaReturnToNav");
  laOcaClickOtroJuego.addEventListener('click', () => {
    document.getElementById("laOca").style.display = "none";
    document.getElementById("divNav").style.display = "flex";
    gameOca();
  });
  let memoryClickOtroJuego = document.getElementById("memoryReturnToNav");
  memoryClickOtroJuego.addEventListener('click', () => {
    document.getElementById("memory").style.display = "none";
    document.getElementById("divNav").style.display = "flex";
    gameMemory();
  });
}