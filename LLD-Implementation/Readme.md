# Magical Arena

## Description

This is a simple simulation of a magical arena where two players fight until one dies. The player with lower health attacks first, and each player rolls a die to determine the effectiveness of their attack and defense.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the game simulation:
   ```
   node src/index.js
   ```
5. Run the unit tests:
   ```
   npm test
   ```

## Project Structure

- `src/`
  - `player.js`: Defines the Player class.
  - `arena.js`: Defines the Arena class.
  - `index.js`: Entry point to run the game simulation.
- `tests/`
  - `player.test.js`: Unit tests for the Player class.
  - `arena.test.js`: Unit tests for the Arena class.
