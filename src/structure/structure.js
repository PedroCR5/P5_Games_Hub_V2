import { changeImagesMemory } from '../games/memory/memory';
import './structure.css';
const temaMemoryClick = "dog";
export function crearEstructuraPpal() {
  let appInfo = document.querySelector('#app');
  appInfo.innerHTML = "";

  const navGames = document.createElement("nav");
  appInfo.append(navGames);

  const titleNavDiv = document.createElement("div");
  titleNavDiv.id = "titleNavDiv";
  navGames.append(titleNavDiv);

  const titleNavBefore = document.createElement("h1");
  titleNavBefore.innerText = "🎲♦️🎲 ";
  titleNavBefore.id = "titleNavBefore";
  titleNavBefore.className = "titleNavAll";
  titleNavDiv.append(titleNavBefore);

  const titleNav = document.createElement("h1");
  titleNav.innerText = " Games  Hub ";
  titleNav.id = "titleNav";
  titleNav.className = "titleNavAll";
  titleNavDiv.append(titleNav);

  const titleNavAfter = document.createElement("h1");
  titleNavAfter.innerText = "🎲♦️🎲";
  titleNavAfter.id = "titleNavAfter";
  titleNavAfter.className = "titleNavAll";
  titleNavDiv.append(titleNavAfter);

  const pNav = document.createElement("p");
  pNav.innerText = "¡¡Aquí están tus juegos favoritos, elige a cual quieres jugar!!";
  pNav.id = "pInitialNav";
  navGames.append(pNav);


  const divNav = document.createElement("div");
  divNav.id = "divNav";
  navGames.append(divNav);

  let gamesInfo = ["tresEnRaya", "laOca", "memory"];

  gamesInfo.forEach(e => {
    const divGameDiv = document.createElement("div");
    divGameDiv.className = "divNavGames";
    divNav.append(divGameDiv);

    const divGame = document.createElement("button");
    divGame.id = `${e}Select`;
    divGame.className = `buttonNavGames`;
    divGame.textContent = `${e}`;
    divGameDiv.append(divGame);

    const divGameImg = document.createElement("img");
    divGameImg.id = `${e}SelectImg`;
    divGameImg.className = `imgNavGames`;
    divGameDiv.append(divGameImg);

    const game = document.createElement("section");
    game.id = e;
    appInfo.appendChild(game);

    const volverAlNav = document.createElement("button");
    volverAlNav.innerHTML = "Volver a la pantalla principal y jugar a otro juego";
    volverAlNav.id = `${e}ReturnToNav`;
    volverAlNav.className = `returnToNav`;
    game.append(volverAlNav);

    const title = document.createElement("h2");
    title.className = `gameTitle`;
    title.id = `${e}Title`;
    game.appendChild(title);

    if (e === "memory") {
      //Crear y pintar el input para el tema del Memory
      const inputMemory = document.createElement("input");
      inputMemory.className = "inputMe";
      inputMemory.id = "inputMemory";
      inputMemory.placeholder = "Escribe aquí el tema del juego";
      game.append(inputMemory);

      const inputMemoryButton = document.createElement("button");
      inputMemoryButton.id = "inputMemoryButton";
      inputMemoryButton.textContent = "Pulsa para cambiarlo"
      game.append(inputMemoryButton);

      inputMemoryButton.addEventListener('click', function () {
        const temaMemoryClick = document.getElementById("inputMemory").value;
        changeImagesMemory(temaMemoryClick);
      });
    };

    const ultimoGanador = document.createElement("h4");
    ultimoGanador.id = `ultimoGanador${e}`;
    ultimoGanador.className = "ultimosGanadores";
    title.insertAdjacentElement("afterend", ultimoGanador);

    const gameContainer = document.createElement("div");
    gameContainer.id = `${e}Container`;
    game.appendChild(gameContainer);

    const gameWinnerContainer = document.createElement("div");
    gameWinnerContainer.id = `${e}WinnerContainer`;
    gameWinnerContainer.className = "gameWinnerContainers";
    gameContainer.appendChild(gameWinnerContainer);

    const gameWinnerContainerSpan = document.createElement("span");
    gameWinnerContainerSpan.id = `${e}CloseModal`;
    gameWinnerContainerSpan.textContent = "&Times";
    gameWinnerContainer.appendChild(gameWinnerContainerSpan);

    const gameWinnerContainerP = document.createElement("p");
    gameWinnerContainerP.innerText = "Esto es un modal";
    gameWinnerContainer.appendChild(gameWinnerContainerP);

    const gameTable = document.createElement("div");
    gameTable.id = `${e}Table`;
    gameContainer.appendChild(gameTable);

    const gamePlayers = document.createElement("div");
    gamePlayers.id = `${e}Players`;
    gameContainer.appendChild(gamePlayers);

    const resetJuego = document.createElement("button");
    resetJuego.id = `${e}Reset`;
    resetJuego.className = "reset";
    resetJuego.textContent = "reset";
    game.append(resetJuego);

    // Crear la estructura del modal
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modalContainer';
    modalContainer.id = `${e}ModalContainer`;
    game.prepend(modalContainer);

    const modalDiv = document.createElement('div');
    modalDiv.className = 'modalDiv';
    modalDiv.id = `${e}ModalDiv`;
    modalContainer.appendChild(modalDiv);

    const modalInfo = document.createElement('p');
    modalInfo.className = 'modalInfo';
    modalInfo.id = `${e}ModalInfo`;
    modalDiv.appendChild(modalInfo);

    const modalButton = document.createElement('button');
    modalButton.className = 'modalButton';
    modalButton.id = `${e}ModalButton`;
    modalButton.textContent = 'Aceptar';
    modalDiv.appendChild(modalButton);
  });

  // Los 3 juegos en la pantalla principal
  const tresEnRayaSelectGame = document.getElementById("tresEnRayaSelect");
  tresEnRayaSelectGame.innerText = "JUGAR AL TRES EN RAYA";

  const tresEnRayaSelectGameImg = document.getElementById("tresEnRayaSelectImg");
  tresEnRayaSelectGameImg.src = `assets/TresEnRayaFoto.png`;

  const laOcaSelectGame = document.getElementById("laOcaSelect");
  laOcaSelectGame.innerText = "JUGAR A LA OCA";

  const laOcaSelectGameImg = document.getElementById("laOcaSelectImg");
  laOcaSelectGameImg.src = `assets/OcaFoto.png`;
  const memorySelectGame = document.getElementById("memorySelect");
  memorySelectGame.innerText = "JUGAR AL MEMORY";

  const memorySelectGameImg = document.getElementById("memorySelectImg");
  memorySelectGameImg.src = `assets/MemoryFoto.png`;

  const tresEnRayaTitleGame = document.getElementById("tresEnRayaTitle");
  tresEnRayaTitleGame.innerText = "JUGAR AL TRES EN RAYA";

  const laOcaTitle = document.getElementById("laOcaTitle");
  laOcaTitle.innerText = "JUGAR A LA OCA";

  const memoryTitle = document.getElementById("memoryTitle");
  memoryTitle.innerText = "JUGAR AL MEMORY";
};