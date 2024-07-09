const Player = require("./player");

class Arena {
  constructor(playerA, playerB) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.currentAttacker = playerA.health <= playerB.health ? playerA : playerB;
    this.currentDefender = playerA.health > playerB.health ? playerA : playerB;
    this.roundCount = 1;
  }

  //function to roll the dice
  rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //function to calculate damage dealt to the defender
  calculateDamage(attacker, defender) {
    const attackRoll = this.rollDie();
    const defendRoll = this.rollDie();

    const attackDamage = attacker.attack * attackRoll;
    const defendStrength = defender.strength * defendRoll;

    this.DisplayStats(
      attacker,
      defender,
      attackRoll,
      defendRoll,
      attackDamage,
      defendStrength
    );

    const damage = attackDamage - defendStrength;
    return damage > 0 ? damage : 0;
  }

  //game play logic
  fight() {
    while (this.playerA.isAlive() && this.playerB.isAlive()) {
      const damage = this.calculateDamage(
        this.currentAttacker,
        this.currentDefender
      );
      if (damage > 0) {
        this.currentDefender.takeDamage(damage);
      }
      this.displayScores();
      // Swap roles
      [this.currentAttacker, this.currentDefender] = [
        this.currentDefender,
        this.currentAttacker,
      ];
      this.roundCount++;
    }

    if (this.playerA.isAlive()) {
      console.log(
        `                                        ${this.playerA.name} Wins!                               `
      );
    } else {
      console.log(
        `                                        ${this.playerB.name} Wins!                               `
      );
    }
  }

  //function to display the game stats
  DisplayStats(
    attacker,
    defender,
    attackRoll,
    defendRoll,
    attackDamage,
    defendStrength
  ) {
    console.log(
      `  ----------------------------------------Round:${this.roundCount}----------------------------------------------`
    );
    if (attacker == this.playerA) {
      console.log(" ");
      console.log(
        `${attacker.name} rolled an attack die: ${attackRoll}                                   ${defender.name} rolled a defend die: ${defendRoll}`
      );
      console.log(
        `Attack Damage:${attackDamage}                                                    Defending Strength:${defendStrength}`
      );
    } else {
      console.log(" ");
      console.log(
        `${defender.name} rolled a defend die: ${defendRoll}                                   ${attacker.name} rolled an attack die: ${attackRoll} `
      );
      console.log(
        `Defending Strength:${defendStrength}                                                    Attack Damage:${attackDamage}`
      );
    }
  }

  //function display scores
  displayScores() {
    console.log(" ");
    console.log(
      `              ${this.playerA.name}                                                      ${this.playerB.name}`
    );
    console.log("");
    console.log(
      "       Health | Strength | Attack                                Health | Strength | Attack"
    );
    console.log(
      "    ---------------------------------                         -------------------------------"
    );
    console.log(
      `         ${String(this.playerA.health).padEnd(4)} |    ${String(
        this.playerA.strength
      ).padEnd(5)} |   ${String(this.playerA.attack).padEnd(
        20
      )}                  ${String(this.playerB.health).padEnd(
        4
      )} |    ${String(this.playerB.strength).padEnd(5)} |    ${String(
        this.playerB.attack
      )}`
    );
    console.log(" ");
    console.log();
  }
}

module.exports = Arena;
