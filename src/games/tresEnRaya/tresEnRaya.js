import './tresEnRaya.css';
export const printTresEnRaya = () => {
  const tresEnRayaTable = document.querySelector(`#tresEnRayaTable`);
  tresEnRayaTable.innerHTML = "";
  const arrayTresEnRaya = [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[``], [""], [""]]
  ];
  for (const fila of arrayTresEnRaya) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
      tresEnRayaTable.append(divCasilla);
    }
  }
  // Indicar el último ganador del juego.
  let anteriorGanadorTresEnRaya = localStorage.getItem("ganadorTresEnRaya");
  if (anteriorGanadorTresEnRaya != null) {
    let checkUltimoGanadorTresEnRaya = document.getElementById("ultimoGanadortresEnRaya");
    checkUltimoGanadorTresEnRaya.innerHTML = `El último ganador ha sido el ${anteriorGanadorTresEnRaya}`;
  };
  // Pintar los dos jugadores
  const tresEnRayaPlayersDiv = document.querySelector(`#tresEnRayaPlayers`);
  tresEnRayaPlayersDiv.innerHTML = "";
  const player1 = document.createElement("button");
  const player2 = document.createElement("button");
  tresEnRayaPlayersDiv.append(player1);
  tresEnRayaPlayersDiv.append(player2);
  player1.className = "player1";
  player2.className = "player2";
  player1.textContent = "Jugador 1 ❌";
  player2.textContent = "Jugador 2 ⭕";
};
export function clickCasillaCheck(cell, player) { // Al hacer click se pone círculo o cruz
  console.log("Cell clicked!");
  if (!(cell.classList.contains('cruz') || cell.classList.contains('circulo'))) {
    if (player === "1") {
      cell.classList = "cruz";
      player = "2";
    } else if (player === "2") {
      cell.classList = "circulo";
      player = "1";
    }
    // Comprobar si alguien ha ganado
    const arrayTresEnRayaCheck = document.querySelectorAll('#tresEnRayaTable > div');
    const infoGanador = [];
    arrayTresEnRayaCheck.forEach(element => {
      infoGanador.push(element.className);
    });
    // Comprobar las combinaciones que hacen un tres en raya
    if ((infoGanador[0] === "cruz" & infoGanador[1] === "cruz" & infoGanador[2] === 'cruz') || (infoGanador[3] === "cruz" & infoGanador[4] === "cruz" & infoGanador[5] === 'cruz') || (infoGanador[6] === "cruz" & infoGanador[7] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[0] === "cruz" & infoGanador[3] === "cruz" & infoGanador[6] === 'cruz') || (infoGanador[1] === "cruz" & infoGanador[4] === "cruz" & infoGanador[7] === 'cruz') || (infoGanador[2] === "cruz" & infoGanador[5] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[0] === "cruz" & infoGanador[4] === "cruz" & infoGanador[8] === 'cruz') || (infoGanador[2] === "cruz" & infoGanador[4] === "cruz" & infoGanador[6] === 'cruz')
    ) {
      setTimeout(() => {
        alert("Ha ganado el Jugador 1");
        localStorage.setItem("ganadorTresEnRaya", "Jugador 1");
      }, 500);
    }
    else if ((infoGanador[0] === "circulo" & infoGanador[1] === "circulo" & infoGanador[2] === 'circulo') || (infoGanador[3] === "circulo" & infoGanador[4] === "circulo" & infoGanador[5] === 'circulo') || (infoGanador[6] === "circulo" & infoGanador[7] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[3] === "circulo" & infoGanador[6] === 'circulo') || (infoGanador[1] === "circulo" & infoGanador[4] === "circulo" & infoGanador[7] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[5] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[4] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[4] === "circulo" & infoGanador[6] === 'circulo')
    ) {
      setTimeout(() => {
        alert("Ha ganado el Jugador 2");
        localStorage.setItem("ganadorTresEnRaya", "Jugador 2");
      }, 500);
    }
  }
  return player;
};