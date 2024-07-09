# Magical Arena

## Description

This project simulates a magical arena where two players fight until one dies. Each player has `health`, `strength`, and `attack` attributes. Players take turns attacking each other until one player's health reaches 0. The player with lower health attacks first at the start of the match.

## How It Works

- **Players**: Each player is defined by `name`, `health`, `strength`, and `attack`.
- **Turns**: Players attack in turns. The attacking player rolls an attack die, and the defending player rolls a defense die.
- **Damage Calculation**: The attack damage is calculated as `attack * attack die roll`. The defense strength is calculated as `strength * defense die roll`. The difference between attack damage and defense strength is subtracted from the defender's health.
- **Game End**: The game continues until one player's health reaches 0. The player still standing is declared the winner.

## Project Structure

- **`src/`**
  - `player.js`: Defines the `Player` class.
  - `arena.js`: Defines the `Arena` class where the match logic is implemented.
  - `index.js`: Entry point to run the game simulation.
- **`tests/`**
  - `player.test.js`: Unit tests for the `Player` class.
  - `arena.test.js`: Unit tests for the `Arena` class.

## How to Run

### Prerequisites

- Node.js installed on your machine.

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Rash023/Magical-Arena.git
   cd magical-arena/Design-Implementation
   ```

2. **Install the dependencies**:

   ```sh
   npm install
   ```

3. **Run the game simulation**:
   ```sh
   npm run dev
   ```

### Running Tests

1. **Run the unit tests**:
   ```sh
   npm test
   ```

## Test Cases

### Player Tests

- **Player should be alive when health is greater than 0**:

  - Ensure the `isAlive` method returns `true` when health is greater than 0.

- **Player should be dead when health is 0 or less**:

  - Ensure the `isAlive` method returns `false` when health is 0 or less.

- **Player should take damage correctly**:
  - Ensure the `takeDamage` method correctly reduces the player's health.

### Arena Tests

- **Arena should correctly determine the first attacker based on health**:

  - Ensure the player with lower health is chosen as the first attacker.

- **Arena should calculate damage correctly**:
  - Ensure the damage calculation considers the attacker's attack roll and defender's defense roll correctly.

## Example Output

Here is an example of what you might see in your terminal after running the game simulation:

```sh

  ----------------------------------------Round:1----------------------------------------------

john rolled an attack die: 2                                   doe rolled a defend die: 4
Attack Damage:20                                                        Defending Strength:40

              john                                                      doe

       Health | Strength | Attack                                Health | Strength | Attack
    ---------------------------------                         -------------------------------
         10   |    5     |   10                                    20   |    10    |    5

```

## Example Test Output

Here is an example of what you might see in your terminal after running the unit tests:

```sh
PASS tests/player.test.js
✓ Player should be alive when health is greater than 0 (4 ms)
✓ Player should be dead when health is 0 or less (1 ms)
✓ Player should take damage correctly (1 ms)

PASS tests/arena.test.js
✓ Arena should correctly determine the first attacker based on health (1 ms)
✓ Arena should calculate damage correctly (1 ms)

Test Suites: 2 passed, 2 total
Tests: 5 passed, 5 total
Snapshots: 0 total
Time: 1.243 s

```
