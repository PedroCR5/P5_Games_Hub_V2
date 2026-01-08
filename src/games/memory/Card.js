import "./memory.css";
let currentPlayerMemory = "player1"; // Jugador que le toca
let cardFirst = 0;
let cardSecond = 0;
// Función crear cartas
export function createCards(imagesList) {
  document.querySelector("#memoryTable").innerHTML = ` `;
  let j = 101;  // Variable j para crear IDs en las cartas
  // Pinto todas las cartas
  imagesList.forEach(image => {
    let divContainerCards = document.querySelector("#memoryTable");
    const cardDiv = document.createElement("div");
    const imgImageDiv = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.id = j;
    j++;
    imgImageDiv.className = "imgImageDiv notSee";
    imgImageDiv.src = image.urls.regular;
    imgImageDiv.alt = image.alt_description;
    imgImageDiv.loading = "lazy";
    divContainerCards.appendChild(cardDiv);
    cardDiv.appendChild(imgImageDiv);
  });
  //Meto todas las cartas en allCardDivs
  let allCardDivs = { cards: "0" };
  allCardDivs = document.querySelectorAll('.cardDiv');
  //Cursor con Jugador 1 al inicio
  document.addEventListener('mousemove', (event) => {
    // Jugador 1 sigue al cursor
    cursorText1.style.left = `${event.pageX}px`;
    cursorText1.style.top = `${event.pageY + 50}px`;
  });
  // Jugador 1 del cursor solo cuando el cursor está en el tablero
  const zoneMemory = document.getElementById('memoryTable')
  zoneMemory.addEventListener('mouseenter', () => {
    cursorText1.style.display = 'block';
  });
  zoneMemory.addEventListener('mouseleave', () => {
    cursorText1.style.display = 'none';
  })
  //Variables para contabilizar aciertos
  let aciertosPlayer1 = 0;
  let aciertosPlayer2 = 0;
  let counterCards = 0;
  let idCard = 0;
  let cardFirstID = 0;
  let cardSecondID = 0;
  let checkClickCard = "bien";  // Variable para permitir destapar otra carta
  allCardDivs.forEach(cardClicked => {
    //Cuando se hace click en una carta se ejecuta todo
    cardClicked.addEventListener('click', () => {
      // Ejecutar solo si checkClickCard lo permite con el valor "bien"
      if (checkClickCard === "bien") {
        const imgCambioClase = cardClicked.querySelector('img');
        const el1 = document.getElementById("cursorText1");
        const el2 = document.getElementById("cursorText2");
        if ((imgCambioClase.className == "imgImageDiv notSee")) {
          //Verificamos si es la primera carta que se levanta (counterCards=0) o la segunda (counterCards=1)
          if (counterCards == 0) {
            imgCambioClase.className = "imgImageDiv";
            idCard = imgCambioClase.id;
            counterCards++;
            cardFirst = imgCambioClase.alt;
            cardFirstID = imgCambioClase.id;
          } else if (counterCards == 1) {
            checkClickCard = "adios";
            imgCambioClase.className = "imgImageDiv";
            cardSecond = imgCambioClase.alt;
            cardSecondID = imgCambioClase.id;
            //Si las dos cartas son iguales, pero no es la misma ID, reseteamos el counterCards y sumamos un acierto al jugador.
            if ((cardFirst == cardSecond) && (cardFirstID !== cardSecondID)) {
              counterCards = 0;
              //Sumamos el acierto al jugador correspondiente
              if (currentPlayerMemory == "player1") {
                aciertosPlayer1++;
                checkClickCard = "bien";
              } else if (currentPlayerMemory == "player2") {
                aciertosPlayer2++;
                checkClickCard = "bien";
              }
              console.log(aciertosPlayer1);
              console.log(aciertosPlayer2);
              //Comprobamos si el juego se acaba y quien gana
              if (aciertosPlayer1 + aciertosPlayer2 == 10) {
                console.log("Juego acabado");
                if (aciertosPlayer1 > aciertosPlayer2) {
                  alert("Ha ganado el Jugador 1");
                  localStorage.setItem("ganadorMemory", "Jugador 1");
                } else if (aciertosPlayer1 < aciertosPlayer2) {
                  alert("Ha ganado el Jugador 2");
                  localStorage.setItem("ganadorMemory", "Jugador 2");
                } else {
                  console.log("Empate");
                }
              };
              counterCards = 0;
            }
            //Si no hay acierto, damos la vuelta a las cartas en un segundo
            else {
              imgCambioClase.className = "imgImageDiv";
              setTimeout(() => {
                imgCambioClase.className = 'imgImageDiv notSee';
                let paraOcultarCard = document.getElementById(`${idCard}`);
                paraOcultarCard.className = "imgImageDiv notSee";
                //Cambiamos el turno al jugador 2 si era el 1
                if (currentPlayerMemory == "player1") {
                  currentPlayerMemory = "player2";
                  el1.className = "notPlayer";
                  el1.innerHTML = "";
                  el2.className = "player2 cursor-text";
                  el2.innerHTML = "Jugador 2";
                } else {
                  //Cambiamos el turno al jugador 1 si era el 2
                  currentPlayerMemory = "player1";
                  el2.className = "notPlayer";
                  el2.innerHTML = "";
                  el1.className = "player1 cursor-text";
                  el1.innerHTML = "Jugador 1";
                }
                //Esto es para que Jugador 1 esté con el cursor solo cuando el cursor está en el tablero.
                if (currentPlayerMemory == "player1") {
                  document.addEventListener('mousemove', (event) => {
                    cursorText1.style.left = `${event.pageX}px`;
                    cursorText1.style.top = `${event.pageY + 50}px`;
                  });
                  const zoneMemory = document.getElementById('memoryTable')
                  zoneMemory.addEventListener('mouseenter', () => {
                    cursorText1.style.display = 'block';
                  });
                  zoneMemory.addEventListener('mouseleave', () => {
                    cursorText1.style.display = 'none';
                  })
                } else if (currentPlayerMemory == "player2") {
                  //Esto es para que Jugador 1 esté con el cursor solo cuando el cursor está en el tablero.
                  document.addEventListener('mousemove', (event) => {
                    cursorText2.style.left = `${event.pageX}px`;
                    cursorText2.style.top = `${event.pageY + 50}px`;
                  });
                  const zoneMemory = document.getElementById('memoryTable')
                  zoneMemory.addEventListener('mouseenter', () => {
                    cursorText2.style.display = 'block';
                  });
                  zoneMemory.addEventListener('mouseleave', () => {
                    cursorText2.style.display = 'none';
                  })
                }
                checkClickCard = "bien";
                counterCards = 0;
              }, 1000);
              // Reseteamos el contador de cartas
              counterCards = 0;
            }
          }
        }
      }
    });
  });
};