class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  //checks if the user is still alive
  isAlive() {
    return this.health > 0;
  }

  //updates the damage dealt by the user
  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
  }
}

module.exports = Player;
