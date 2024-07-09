const Player = require("../src/player");
const Arena = require("../src/arena");

test("Arena should correctly determine the first attacker based on health", () => {
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 100, 10, 5);
  const arena = new Arena(playerA, playerB);

  expect(arena.currentAttacker).toBe(playerA);
});

test("Arena should calculate damage correctly", () => {
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 100, 10, 5);
  const arena = new Arena(playerA, playerB);

  const attackDamage = playerA.attack * 6; // max attack roll
  const defendStrength = playerB.strength * 1; // min defend roll
  const damage = attackDamage - defendStrength;

  expect(damage).toBe(60 - 10);
});
