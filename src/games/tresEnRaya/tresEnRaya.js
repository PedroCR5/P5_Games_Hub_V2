import './tresEnRaya.css';

export function printTresEnRayaTable() {// Función para pintar el tablero del tres en  raya
  const tresEnRayaTable = document.querySelector(`#tresEnRayaTable`);
  tresEnRayaTable.innerHTML = "";
  const arrayTresEnRaya = [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[""], [""], [""]]
  ];
  for (const fila of arrayTresEnRaya) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      divCasilla.className = "casilla";
      tresEnRayaTable.append(divCasilla);
    }
  }
};

export const printTresEnRaya = () => {//Pintar todo el 3 en raya
  printTresEnRayaTable();
  // Indicar el último ganador del juego.
  let anteriorGanadorTresEnRaya = localStorage.getItem("ultimoGanadorTresEnRaya");
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
  //Pintar el boton Reset
  const resetTresEnRaya = document.querySelector(`#tresEnRayaReset`);;
  resetTresEnRaya.innerHTML = "";
  resetTresEnRaya.className = "reset";
  resetTresEnRaya.id = "resetTresEnRaya";
  resetTresEnRaya.textContent = "Resetea la partida aquí";
};

export function initializationCells() {//Inicializar casillas
  let player = "1";
  const cells = document.querySelectorAll('.casilla');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      player = clickCasillaCheck(cell, player);
    });
  });
};

export function clickResetTresEnRaya() {// Función para resetear el tres en raya
  const resetTresEnRaya = document.querySelector(`#resetTresEnRaya`);
  resetTresEnRaya.addEventListener('click', () => {
    printTresEnRayaTable();
    initializationCells();
  });
};

export function clickCasillaCheck(cell, player) {// Al hacer click se pone círculo o cruz en la casilla
  console.log("Cell clicked!");
  if ((!(cell.classList.contains('cruz') || cell.classList.contains('circulo')))) {
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
        // Disparo el modal
        const modalOn = document.getElementById('tresEnRayaModalContainer');
        const infoModalP = document.getElementById("tresEnRayaModalInfo");
        infoModalP.innerText = "El jugador 1 ha ganado esta partida. ¡¡Enhorabuena!!";
        modalOn.style.display = "flex";

        // Quito el modal al pulsar el button
        const modalButton = document.getElementById("tresEnRayaModalButton");
        modalButton.addEventListener('click', function () {
          modalOn.style.display = "none";
        });

        //Leo las partidas ganadas, si no estuviera declarada pone un 0 y luego incrementamos a 1.
        let partidasGanadasJugador1 = parseInt(localStorage.getItem("partidasGanadasJugador1"), 10) || 0;
        partidasGanadasJugador1++;
        localStorage.setItem("ultimoGanadorTresEnRaya", "Jugador 1");
        localStorage.setItem("partidasGanadasJugador1", partidasGanadasJugador1.toString());
        console.log(partidasGanadasJugador1);

        // Ponemos el último ganador en el juego
        const ultGanador3EnRaya = document.getElementById("ultimoGanadortresEnRaya");
        ultGanador3EnRaya.innerHTML = "El último ganador ha sido el Jugador 1";
      }, 500);

      setTimeout(() => {//Reseteamos el 3 en raya después de la partida
        printTresEnRayaTable();
        initializationCells();
      }, 500);

      return //finDelJuego;
    }
    else if ((infoGanador[0] === "circulo" & infoGanador[1] === "circulo" & infoGanador[2] === 'circulo') || (infoGanador[3] === "circulo" & infoGanador[4] === "circulo" & infoGanador[5] === 'circulo') || (infoGanador[6] === "circulo" & infoGanador[7] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[3] === "circulo" & infoGanador[6] === 'circulo') || (infoGanador[1] === "circulo" & infoGanador[4] === "circulo" & infoGanador[7] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[5] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[0] === "circulo" & infoGanador[4] === "circulo" & infoGanador[8] === 'circulo') || (infoGanador[2] === "circulo" & infoGanador[4] === "circulo" & infoGanador[6] === 'circulo')
    ) {
      setTimeout(() => {
        //Disparo el modal
        const modalOn = document.getElementById('tresEnRayaModalContainer');
        const infoModalP = document.getElementById("tresEnRayaModalInfo");
        infoModalP.innerText = "El jugador 2 ha ganado esta partida. ¡¡Enhorabuena!!";
        modalOn.style.display = "flex";

        //Quito el modal al pulsar el button
        const modalButton = document.getElementById("tresEnRayaModalButton");
        modalButton.addEventListener('click', function () {
          modalOn.style.display = "none";
        });

        //Leo las partidas ganadas, si no estuviera declarada pone un 0 y luego incrementamos a 1.
        let partidasGanadasJugador2 = parseInt(localStorage.getItem("partidasGanadasJugador2"), 10) || 0;
        partidasGanadasJugador2++;
        localStorage.setItem("ultimoGanadorTresEnRaya", "Jugador 2");
        localStorage.setItem("partidasGanadasJugador2", partidasGanadasJugador2.toString());
        console.log(partidasGanadasJugador2);

        // Ponemos el último ganador en el juego
        const ultGanador3EnRaya = document.getElementById("ultimoGanadortresEnRaya");
        ultGanador3EnRaya.innerHTML = "El último ganador ha sido el Jugador 2";
      }, 500);

      setTimeout(() => {//Reseteamos el 3 en raya después de la partida
        printTresEnRayaTable();
        initializationCells();
      }, 500);

      return //finDelJuego;
    }
  }
  return player;
};

export function gameTresEnRaya() {//Función para empezar el 3 en raya desde main
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
