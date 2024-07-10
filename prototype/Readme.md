# Magical Arena Prototype

## Overview

This directory contains the initial prototype of the Magical Arena project. The prototype focuses on the basic flow of user interaction, including login/signup, room creation/joining, and the game playground where the battle takes place.

## Features

- **User Authentication**: Users can sign up for a new account or log in to an existing account.
- **Room Management**: Users can create a new room or join an existing room.
- **Game Playground**: Once in a room, users can start the game and engage in a battle.

## How It Works

### User Authentication

1. **Signup**: Users can sign up by providing a username and password.
2. **Login**: Users can log in using their credentials.

### Room Management

1. **Create Room**: Logged-in users can create a new room.
2. **Join Room**: Users can join an existing room using a room code or room name.

### Game Playground

1. **Start Game**: Once in a room, users can start the game.
2. **Battle**: Players take turns attacking and defending until one player's health reaches zero.

## How to Run

### Prerequisites

- Node.js installed on your machine.

### Steps

1. **Navigate to the prototype directory**:
    ```sh
    cd prototype
    ```

2. **Setup the backend**:
    ```sh
    cd backend
    ```

3. **Create env file and add variables reference .env.example**:
     ```sh
    touch .env
    ```

5. **Start the backend**:
    ```sh
    npm i
    npm run dev
    ```

### Running the Prototype

1. **Start the application**:
    ```sh
    cd frontend
    npm i
    npm run dev
    ```

2. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

3. **Signup/Login**:
   - Sign up for a new account or log in with existing credentials.

4. **Create/Join Room**:
   - After logging in, create a new room or join an existing room.

5. **Game Playground**:
   - Once in a room, start the game and engage in the battle.



