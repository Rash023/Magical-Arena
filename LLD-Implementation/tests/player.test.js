const Player = require("../src/player");

test("Player should be alive when health is greater than 0", () => {
  const player = new Player("Player", 10, 5, 5);
  expect(player.isAlive()).toBe(true);
});

test("Player should be dead when health is 0 or less", () => {
  const player = new Player("Player", 0, 5, 5);
  expect(player.isAlive()).toBe(false);
});

test("Player should take damage correctly", () => {
  const player = new Player("Player", 50, 5, 5);
  player.takeDamage(10);
  expect(player.health).toBe(40);
});
