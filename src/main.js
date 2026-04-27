import './style.css';
import { crearEstructuraPpal } from './structure/structure';
import { selectOrReturnGame } from './games/selectGame';
import { clickResetTresEnRaya, gameTresEnRaya } from './games/tresEnRaya/tresEnRaya';
import { clickResetMemory, gameMemory } from './games/memory/memory';
import { gameOca } from './games/laOca/laOca';

crearEstructuraPpal()

//! Juego Tres en Raya
gameTresEnRaya();
clickResetTresEnRaya();

//! Juego la Oca
gameOca();

//! Juego Memory
export const temaMemoryInicial = "dog";
gameMemory(`${temaMemoryInicial}`);
clickResetMemory();

//! Seleccionar juego y volver a la pantalla inicial
selectOrReturnGame();// Click para seleccionar el juego, click para volver a la pantalla inicial y resetear la partida jugada

//!Notas Técnicas
/* 
 En lugar de los alerts del sistema deberías manejar modales propios para interactuar con los usuarios.
 Pintar todos los ganadores con nº de victoria
//Tengo la estructura del modal hecha, me falta style, display none, colocarlo, y funciones de dispararlo.
Tres en raya
Pintar la cuenta de partidas ganadas.
Al volver a la pantalla ppal y entrar en el juego de nuevo, no va.
//Ya tiene modal, falta ponerlo guapo.
//Cambiar el ganador, no lo refresca despues de cada partida ganadora
//Una vez que gana un jugador, el juego no se detiene, si quedan casillas en blanco en el tablero, cada jugada (sea del jugador que sea), muestra nuevamente el mensae de victoria del jugador ganador. 
//El tablero no se resetea al ganar uno de ellos. ////Tampoco hay un botón para volver a reiniciar la partida, solo el de volver al menú inicial para jugar otro juego.
//En el local storage se guarda solamente quien ganó la última vez, no se lleva estadística de las veces que ganó cada uno de los jugadores
//Al salir y entrar en el juego me añade un reset mas.


Juego de la Oca:
Tampoco termina y solo guarda en el Local Storage al que gane la primera partida.
Al ganar uno de los jugadores y no finalizar la partida, el ganador comienza a ir hacia atrás en cada jugada.
Da siempre que gana el jugador 1 aunque gane cualquier otro. Ya que tienes fichas de colores, deberías identificar los dados y el ganador con el color correspondiente.
¿Por qué el tablero es clicable?ñ
Tampoco hay cómo reiniciar el juego. Debo volver al inicio y seleccionar nuevamente el Juego de la Oca
Cuanto más jugadores escoja, más se extiende el tablero y el input del N° de jugadores. Cuando juega el primer jugador, el tablero vuelve a su posición normal.
Añadir Reset

//Memory
//El empate que pasa
//Elegir la foto para el juego
//El input sale de nuevo al resetear
//Hacer que el input funcione
//Cuando no pones nada, poner dogs.
//Faltan las puntuaciones
//Empate no resetea
//Cuando alguien gana, hay que mantener el tema
//Al ganar no resetea
//Leer en algún sitio el tema actual para que se vea.
//Probar a resetear localStore para ver como empieza el ganador
//Me falla el nº de partidas ganadas
//El Modal sale arriba a la izda
//En este caso si cambia qué jugador gana la última partida, pero no se guarda el record de cuántas partidas ganadas por cada jugador.
//Igual que los otros juegos, debo volver a la pantalla principal, porque no tengo como reiniciar el juego desde su propia pantalla
//reset ok
//modal ok
//guardar los ganadores

//Aspectos Positivos

//Me gusta que las imagenes del memory sean una búsqueda en Unsplash. Hubiese sido un punto extra que el jugador pudiese buscar con qué imágenes jugar.
//Muy bueno el notificar con un tooltip qué jugador está jugando al momento en el Memory


Mejoras Opcionales

//El layout es sencillo pero funcional. 
//Las imágenes de los juegos en la pantalla inicial deberían ser más nítidas.
//Debes dejar “respirar” un poco al código para hacerlo más legible: Dejar espacio entre funciones o elementos relacionados.
  
Los componentes `structure.js`, `tresEnRaya.js`, `Card.js`, `laOca.js` podría componentizarse más. Deberías separar la lógica de los juegos de su renderizado.
//Las funciones `selectGameToPlay` y `returnToChangeTheGame` podrían/deberían refactorizarse, las subfunciones internas son iguales.
//Por qué en el tablero del tres en raya una celda está con ` ` mientras que las otras están con “ ”
En dispositivos móviles por debajo de 350px de ancho el tablero de la oca queda fuera de la vista, por ambos lados.

 */