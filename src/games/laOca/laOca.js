import './laOca.css';
// Posición de salida para los 4 jugadores
export let positionPlayer1 = "1";
export let positionPlayer2 = "1";
export let positionPlayer3 = "1";
export let positionPlayer4 = "1";
export let clavePlayerCurrent = "jugador1";
export const casillasOcaTablero = [
  { id: 1, tipo: "inicio" },
  { id: 2, tipo: "oca", destino: 8 },
  { id: 3, tipo: "normal" },
  { id: 4, tipo: "normal" },
  { id: 5, tipo: "puente", destino: 12 },
  { id: 6, tipo: "normal" },
  { id: 7, tipo: "normal" },
  { id: 8, tipo: "oca", destino: 13 },
  { id: 9, tipo: "normal" },
  { id: 10, tipo: "normal" },
  { id: 11, tipo: "normal" },
  { id: 12, tipo: "puente", destino: 5 },
  { id: 13, tipo: "oca", destino: 17 },
  { id: 14, tipo: "normal" },
  { id: 15, tipo: "normal" },
  { id: 16, tipo: "normal" },
  { id: 17, tipo: "oca", destino: 22 },
  { id: 18, tipo: "normal" },
  { id: 19, tipo: "posada", turnosPerdidos: 1 },
  { id: 20, tipo: "normal" },
  { id: 21, tipo: "normal" },
  { id: 22, tipo: "oca", destino: 28 },
  { id: 23, tipo: "normal" },
  { id: 24, tipo: "normal" },
  { id: 25, tipo: "normal" },
  { id: 26, tipo: "dados", destino: 48 },
  { id: 27, tipo: "normal" },
  { id: 28, tipo: "oca", destino: 34 },
  { id: 29, tipo: "normal" },
  { id: 30, tipo: "carcel", turnosPerdidos: 3 },
  { id: 31, tipo: "normal" },
  { id: 32, tipo: "normal" },
  { id: 33, tipo: "normal" },
  { id: 34, tipo: "oca", destino: 40 },
  { id: 35, tipo: "normal" },
  { id: 36, tipo: "normal" },
  { id: 37, tipo: "normal" },
  { id: 38, tipo: "normal" },
  { id: 39, tipo: "normal" },
  { id: 40, tipo: "oca", destino: 46 },
  { id: 41, tipo: "laberinto", turnosPerdidos: 2 },
  { id: 42, tipo: "normal" },
  { id: 43, tipo: "normal" },
  { id: 44, tipo: "normal" },
  { id: 45, tipo: "normal" },
  { id: 46, tipo: "oca", destino: 51 },
  { id: 47, tipo: "normal" },
  { id: 48, tipo: "dados", destino: 26 },
  { id: 49, tipo: "normal" },
  { id: 50, tipo: "normal" },
  { id: 51, tipo: "oca", destino: 60 },
  { id: 52, tipo: "normal" },
  { id: 53, tipo: "normal" },
  { id: 54, tipo: "normal" },
  { id: 55, tipo: "calavera", destino: 1 },
  { id: 56, tipo: "normal" },
  { id: 57, tipo: "normal" },
  { id: 58, tipo: "normal" },
  { id: 59, tipo: "normal" },
  { id: 60, tipo: "oca", destino: 63 },
  { id: 61, tipo: "normal" },
  { id: 62, tipo: "normal" },
  { id: 63, tipo: "meta" }
];
// Pinto el tablero
export const printOca = () => {
  const laOcaTable = document.querySelector(`#laOcaTable`);
  const arrayOca = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];
  laOcaTable.innerHTML = "";
  let counter = "0"; // Voy a usar esto para pintar las casillas.
  for (const fila of arrayOca) {
    for (const columna of fila) {
      const divCasilla = document.createElement("div");
      const datoCasilla = casillasOcaTablero[counter];
      divCasilla.className = `casillaOca ${datoCasilla.tipo}`;
      divCasilla.id = `${datoCasilla.id}`;
      divCasilla.textContent = counter + 1;
      laOcaTable.append(divCasilla);
      counter++
    }
  }
  // Pongo al final del tablero el último ganador de la Oca.
  let anteriorGanadorOca = localStorage.getItem("ganadorOca");
  console.log(anteriorGanadorOca);
  if (anteriorGanadorOca !== null) {
    console.log("si no es null Oca");
    let checkUltimoGanadorOca = document.getElementById("ultimoGanadorlaOca");
    checkUltimoGanadorOca.innerHTML = `El último ganador ha sido el ${anteriorGanadorOca}`;
  };
};
export function createImputNumberPlayers() {
  const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
  const numberPlayers = document.createElement("input");
  numberPlayers.value = "0";
  numberPlayers.type = 'number';
  numberPlayers.min = "2";
  numberPlayers.max = "4";
  numberPlayers.id = "jugadoresOca";
  numberPlayers.placeholder = "Número de jugadores";
  numberPlayers.type = "number";
  laOcaPlayersDiv.append(numberPlayers);
  const playersList = document.createElement("ul");
  playersList.id = "playerListId";
  laOcaPlayersDiv.append(playersList);
}
export function createPlayerToPlay() {
  const playersList = document.getElementById(`playerListId`);
  const numberPlayers = document.getElementById("jugadoresOca");
  const laOcaPlayersDiv = document.querySelector(`#laOcaPlayers`);
  playersList.innerHTML = "";
  if (numberPlayers.value > 4) {
    numberPlayers.value = 4;
  }
  if (numberPlayers.value == 1) {
    numberPlayers.value = 2;
  }
  let i = 0;
  for (i; i < numberPlayers.value; i++) {
    const playerLi = document.createElement("li");
    const playerName = document.createElement("p");
    const playerDice = document.createElement("button");
    playersList.append(playerLi);
    playerLi.append(playerName);
    playerLi.append(playerDice);
    playerLi.id = `${i + 1}Li`;
    playerName.id = `${i + 1}Name`;
    playerDice.id = `${i + 1}Dice`;
    playerLi.className = `jugador`;
    playerName.className = `jugadorName`;
    playerDice.className = `jugadorDice`;
    playerName.textContent = `Jugador ${i + 1}`;
    //Pintamos la ficha en la posición inicial
    const ficha1 = document.createElement("div");
    ficha1.id = `ficha${i + 1}`;
    ficha1.className = "fichaJugador";
    const casillaInicial = document.getElementById("1");
    casillaInicial.append(ficha1);
  }
  // Creo los dados que indican el jugador al que le toca
  const diceGif = document.createElement("image");
  diceGif.id = `dados`;
  laOcaPlayersDiv.append(diceGif);
  const diceValue = document.createElement("number");
  diceValue.id = `dadoValor`;
  laOcaPlayersDiv.append(diceValue);
}
export function moverFichaJugador(n, position, numeroAleatorio) {
  const casillaAnterior = parseInt(position) - parseInt(numeroAleatorio);;
  const parentDivA = document.getElementById(casillaAnterior);
  const childDivA = document.getElementById(`ficha${n}`);
  parentDivA.removeChild(childDivA);
  let newPosition = `${position}`;
  if (newPosition > 63) {
    let diferencia = newPosition - 63;
    newPosition = 63 - diferencia;
  }
  const result = casillasOcaTablero.find(obj => obj.id == newPosition);
  if (result.destino) {
    newPosition = parseInt(result.destino);
  }
  const casillaNewPosition = document.getElementById(newPosition);
  const ficha = document.createElement("div");
  ficha.id = `ficha${n}`;
  ficha.className = "fichaJugador";
  casillaNewPosition.append(ficha);
  if (newPosition == 63) {
    if (n = 1) {
      alert("Ha ganado el Jugador 1");
      localStorage.setItem("ganadorOca", "Jugador 1");
    } else if (n = 2) {
      alert("Ha ganado el Jugador 2");
      localStorage.setItem("ganadorOca", "Jugador 2");
    } else if (n = 3) {
      alert("Ha ganado el Jugador 3");
      localStorage.setItem("ganadorOca", "Jugador 3");
    } else if (n = 4) {
      alert("Ha ganado el Jugador 4");
      localStorage.setItem("ganadorOca", "Jugador 4");
    }
  }
  return newPosition;
};
export function gameOca() {
  document.getElementById("laOcaTable").innerHTML = "";
  document.getElementById("laOcaPlayers").innerHTML = "";
  positionPlayer1 = "1";
  positionPlayer2 = "1";
  positionPlayer3 = "1";
  positionPlayer4 = "1";
  clavePlayerCurrent = "jugador1";
  let lostTurnPlayers = {
    player1: 0, player2: 0, player3: 0, player4: 0,
  };
  printOca();
  createImputNumberPlayers();  //Hacer un input nº jugadores y luego con bucle crearlos 
  //Pintar los jugadores
  const numberPlayers = document.getElementById("jugadoresOca");
  numberPlayers.addEventListener('input', () => {
    //Si pulsamos de nuevo en número de jugadores, borramos la partida para empezar una nueva.
    const dadoAnterior = document.getElementById("dadoValor");
    if (dadoAnterior) { dadoAnterior.remove(); };
    let j = 0;
    for (j; j < 4; j++) {
      const elemento = document.getElementById(`ficha${j + 1}`);
      if (elemento) { elemento.remove(); };
    }
    positionPlayer1 = "1";
    positionPlayer2 = "1";
    positionPlayer3 = "1";
    positionPlayer4 = "1";
    clavePlayerCurrent = "jugador1";
    let lostTurnPlayers = {
      player1: 0, player2: 0, player3: 0, player4: 0,
    };
    createPlayerToPlay();
    let playersCurrentDice = document.getElementById("1Dice");
    playersCurrentDice.className = "jugadorDice jugadorDiceCurrent";
    const playersDice = document.querySelectorAll('.jugadorDice');
    playersDice.forEach(dice => {
      dice.addEventListener('click', () => {
        // Generar un número aleatorio entre 1 y 6
        const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        const diceValue = document.querySelector(`#dadoValor`);
        diceValue.textContent = `Te ha salido un ${numeroAleatorio}`;
        //Ver quien tiene el turno y mover su ficha, además comprobamos que no tiene que esperar turnos sin jugar
        if ((dice.id == "1Dice") && (clavePlayerCurrent == "jugador1")) {
          if (lostTurnPlayers.player1 == 0) {
            positionPlayer1 = parseInt(positionPlayer1) + parseInt(numeroAleatorio);
            positionPlayer1 = moverFichaJugador(1, positionPlayer1, numeroAleatorio);
            //Turnos perdidos
            if (positionPlayer1 == 19) {
              lostTurnPlayers.player1 = 1;
            } else if (positionPlayer1 == 30) {
              lostTurnPlayers.player1 = 3;
            } else if (positionPlayer1 == 41) {
              lostTurnPlayers.player1 = 2;
            }
            // Comprobar posición para cambiar el turno al siguiente jugador
            if (positionPlayer1 == 8 || positionPlayer1 == 12 || positionPlayer1 == 13 || positionPlayer1 == 5 || positionPlayer1 == 17 || positionPlayer1 == 22 || positionPlayer1 == 28 || positionPlayer1 == 48 || positionPlayer1 == 34 || positionPlayer1 == 40 || positionPlayer1 == 46 || positionPlayer1 == 51 || positionPlayer1 == 26 || positionPlayer1 == 60) {
              clavePlayerCurrent = "jugador1";
            } else {
              let playersCurrentDice1 = document.getElementById("1Dice");
              playersCurrentDice1.className = "jugadorDice";
              if (playersDice.length > 1) {
                clavePlayerCurrent = "jugador2";
                let playersCurrentDice2 = document.getElementById("2Dice");
                playersCurrentDice2.className = "jugadorDiceCurrent";
              } else {
                clavePlayerCurrent = "jugador1";
                let playersCurrentDice1 = document.getElementById("1Dice");
                playersCurrentDice1.className = "jugadorDiceCurrent";
              }
            };
          } else {
            lostTurnPlayers.player1--;
            clavePlayerCurrent = "jugador2";
            let playersCurrentDice2 = document.getElementById("2Dice");
            playersCurrentDice2.className = "jugadorDiceCurrent";
            let playersCurrentDice1 = document.getElementById("1Dice");
            playersCurrentDice1.className = "jugadorDice";
            return;
          }
        } else if ((dice.id == "2Dice") && (clavePlayerCurrent == "jugador2")) {
          if (lostTurnPlayers.player2 == 0) {
            positionPlayer2 = parseInt(positionPlayer2) + parseInt(numeroAleatorio);
            positionPlayer2 = moverFichaJugador(2, positionPlayer2, numeroAleatorio);
            //Turnos perdidos
            if (positionPlayer2 == 19) {
              lostTurnPlayers.player2 = 1;
            } else if (positionPlayer2 == 30) {
              lostTurnPlayers.player2 = 3;
            } else if (positionPlayer2 == 41) {
              lostTurnPlayers.player2 = 2;
            }
            // Comprobar posición para cambiar el turno al siguiente jugador
            if (positionPlayer2 == 8 || positionPlayer2 == 12 || positionPlayer2 == 13 || positionPlayer2 == 5 || positionPlayer2 == 17 || positionPlayer2 == 22 || positionPlayer2 == 28 || positionPlayer2 == 48 || positionPlayer2 == 34 || positionPlayer2 == 40 || positionPlayer2 == 46 || positionPlayer2 == 51 || positionPlayer2 == 26 || positionPlayer2 == 60) {
              clavePlayerCurrent = "jugador2";
            } else {
              if (playersDice.length > 2) {
                clavePlayerCurrent = "jugador3";
                let playersCurrentDice3 = document.getElementById("3Dice");
                playersCurrentDice3.className = "jugadorDiceCurrent";
              } else {
                clavePlayerCurrent = "jugador1";
                let playersCurrentDice1 = document.getElementById("1Dice");
                playersCurrentDice1.className = "jugadorDiceCurrent";
              }
              let playersCurrentDice2 = document.getElementById("2Dice");
              playersCurrentDice2.className = "jugadorDice";
            };
          } else {
            lostTurnPlayers.player2--;
            if (playersDice.length > 2) {
              clavePlayerCurrent = "jugador3";
              let playersCurrentDice3 = document.getElementById("3Dice");
              playersCurrentDice3.className = "jugadorDiceCurrent";
            } else {
              clavePlayerCurrent = "jugador1";
              let playersCurrentDice1 = document.getElementById("1Dice");
              playersCurrentDice1.className = "jugadorDiceCurrent";
            }
            let playersCurrentDice2 = document.getElementById("2Dice");
            playersCurrentDice2.className = "jugadorDice";
            return;
          }
        } else if ((dice.id == "3Dice") && (clavePlayerCurrent == "jugador3")) {
          if (lostTurnPlayers.player3 == 0) {
            positionPlayer3 = parseInt(positionPlayer3) + parseInt(numeroAleatorio);
            positionPlayer3 = moverFichaJugador(3, positionPlayer3, numeroAleatorio);
            //Turnos perdidos
            if (positionPlayer3 == 19) {
              lostTurnPlayers.player3 = 1;
            } else if (positionPlayer3 == 30) {
              lostTurnPlayers.player3 = 3;
            } else if (positionPlayer3 == 41) {
              lostTurnPlayers.player3 = 2;
            }
            // Comprobar posición para cambiar el turno al siguiente jugador
            if (positionPlayer3 == 8 || positionPlayer3 == 12 || positionPlayer3 == 13 || positionPlayer3 == 5 || positionPlayer3 == 17 || positionPlayer3 == 22 || positionPlayer3 == 28 || positionPlayer3 == 48 || positionPlayer3 == 34 || positionPlayer3 == 40 || positionPlayer3 == 46 || positionPlayer3 == 51 || positionPlayer3 == 26 || positionPlayer3 == 60) {
              clavePlayerCurrent = "jugador3";
            } else {
              if (playersDice.length == 4) {
                clavePlayerCurrent = "jugador4";
                let playersCurrentDice4 = document.getElementById("4Dice");
                playersCurrentDice4.className = "jugadorDiceCurrent";
              } else {
                clavePlayerCurrent = "jugador1";
                let playersCurrentDice1 = document.getElementById("1Dice");
                playersCurrentDice1.className = "jugadorDiceCurrent";
              }
              let playersCurrentDice3 = document.getElementById("3Dice");
              playersCurrentDice3.className = "jugadorDice";
            };
          } else {
            lostTurnPlayers.player3--;
            if (playersDice.length == 4) {
              clavePlayerCurrent = "jugador4";
              let playersCurrentDice4 = document.getElementById("4Dice");
              playersCurrentDice4.className = "jugadorDiceCurrent";
            } else {
              clavePlayerCurrent = "jugador1";
              let playersCurrentDice1 = document.getElementById("1Dice");
              playersCurrentDice1.className = "jugadorDiceCurrent";
            }
            let playersCurrentDice3 = document.getElementById("3Dice");
            playersCurrentDice3.className = "jugadorDice";
            return;
          }
        }
        else if ((dice.id == "4Dice") && (clavePlayerCurrent == "jugador4")) {
          if (lostTurnPlayers.player4 == 0) {
            positionPlayer4 = parseInt(positionPlayer4) + parseInt(numeroAleatorio);
            positionPlayer4 = moverFichaJugador(4, positionPlayer4, numeroAleatorio);
            //Turnos perdidos
            if (positionPlayer4 == 19) {
              lostTurnPlayers.player4 = 1;
            } else if (positionPlayer4 == 30) {
              lostTurnPlayers.player4 = 3;
            } else if (positionPlayer4 == 41) {
              lostTurnPlayers.player4 = 2;
            }
            // Comprobar posición para cambiar el turno al siguiente jugador
            if (positionPlayer4 == 8 || positionPlayer4 == 12 || positionPlayer4 == 13 || positionPlayer4 == 5 || positionPlayer4 == 17 || positionPlayer4 == 22 || positionPlayer4 == 28 || positionPlayer4 == 48 || positionPlayer4 == 34 || positionPlayer4 == 40 || positionPlayer4 == 46 || positionPlayer4 == 51 || positionPlayer4 == 26 || positionPlayer4 == 60) {
              clavePlayerCurrent = "jugador4";
            } else {
              clavePlayerCurrent = "jugador1";
              let playersCurrentDice1 = document.getElementById("1Dice");
              playersCurrentDice1.className = "jugadorDiceCurrent";
              let playersCurrentDice4 = document.getElementById("4Dice");
              playersCurrentDice4.className = "jugadorDice";
            };
          } else {
            lostTurnPlayers.player4--;
            clavePlayerCurrent = "jugador1";
            let playersCurrentDice1 = document.getElementById("1Dice");
            playersCurrentDice1.className = "jugadorDiceCurrent";
            let playersCurrentDice4 = document.getElementById("4Dice");
            playersCurrentDice4.className = "jugadorDice";
            return
          }
        }
      });
    });
  });
  numberPlayers.value = "";
};




