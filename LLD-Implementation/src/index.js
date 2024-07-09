const Player = require("./player");
const Arena = require("./arena");

const playerA = new Player("john", 40, 5, 10);
const playerB = new Player("doe", 20, 10, 5);

const arena = new Arena(playerA, playerB);

arena.fight();
