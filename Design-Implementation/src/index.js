const Player = require("./player");
const Arena = require("./arena");

//defining player objects
const playerA = new Player("john", 10, 5, 10);
const playerB = new Player("doe", 20, 10, 5);

//create an arena
const arena = new Arena(playerA, playerB);

//starting the game play
arena.fight();
