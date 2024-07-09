"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Component() {
  const [player1, setPlayer1] = useState({
    name: "Player 1",
    strength: 24,
    health: 75,
    attack: 3,
  });
  const [player2, setPlayer2] = useState({
    name: "Player 2",
    strength: 24,
    health: 75,
    attack: 3,
  });
  const [diceVal, setDiceVal] = useState<number | null>(null);
  const [rollsCount, setRollsCount] = useState(0);

  useEffect(() => {
    // Fetch initial player data
    fetchPlayerData();
  }, []);

  async function fetchPlayerData() {
    try {
      const response = await axios.get("http://localhost:3001/players");
      if (response.data) {
        // Assuming response.data contains player data
        setPlayer1(response.data.player1);
        setPlayer2(response.data.player2);
      }
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  }

  async function diceHandler() {
    try {
      const response = await axios.get("http://localhost:3001/play/roll");
      if (response.data && response.data.val) {
        setDiceVal(response.data.val);
        setRollsCount(rollsCount + 1);

        // Update scores after every two rolls
        if (rollsCount % 2 === 0) {
          updateScores();
        }
      }
    } catch (error) {
      console.error("Error rolling dice:", error);
    }
  }

  function updateScores() {
    // Example logic to update scores
    setPlayer1((prevPlayer1) => ({
      ...prevPlayer1,
      strength: prevPlayer1.strength + 1,
      health: prevPlayer1.health + 2,
      attack: prevPlayer1.attack + 0.5,
    }));

    setPlayer2((prevPlayer2) => ({
      ...prevPlayer2,
      strength: prevPlayer2.strength + 1,
      health: prevPlayer2.health + 2,
      attack: prevPlayer2.attack + 0.5,
    }));
  }

  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-4xl mx-auto mt-32">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>P1</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold">{player1.name}</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player1.strength}</div>
              <div className="text-sm text-muted-foreground">Strength</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player1.health}</div>
              <div className="text-sm text-muted-foreground">Health</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player1.attack}</div>
              <div className="text-sm text-muted-foreground">Attack</div>
            </div>
          </div>
          <Button className="w-full" onClick={diceHandler}>
            Roll Dice
          </Button>
        </div>
        <div className="bg-card rounded-lg p-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>P2</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-bold">{player2.name}</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player2.strength}</div>
              <div className="text-sm text-muted-foreground">Strength</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player2.health}</div>
              <div className="text-sm text-muted-foreground">Health</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-2xl font-bold">{player2.attack}</div>
              <div className="text-sm text-muted-foreground">Attack</div>
            </div>
          </div>
          <Button className="w-full" onClick={diceHandler}>
            Roll Dice
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div
              key={number}
              className={`rounded-lg p-4 flex items-center justify-center ${
                diceVal === number ? 'bg-green text-white font-bold' : 'bg-muted'
              }`}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
        <Button>Start Game</Button>
        <Button>End Game</Button>
        <Button>Exit Room</Button>
      </div>
      </div>
    </div>
  );
}
