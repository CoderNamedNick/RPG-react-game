import React, { useState } from "react";
import StartGame from "./StartGame";
import GamePartOne from "./GamePartOne";

function App() {
  const [playerName, setPlayerName] = useState('');
  const [characterStats, setCharacterStats] = useState({
    Hp: 100,
    Atk: 10,
    Def: 10,
    Mana: 0,
    Skills: '',
    Inventory: []
  });
  const [gameStarted, setGameStarted] = useState(false); // Define gameStarted state

  const updateCharacterStats = (updatedStats) => {
    setCharacterStats(updatedStats);
  };

  const handleStartGame = () => {
    setGameStarted(true); // Update gameStarted state when the game starts
  };

  // Log characterStats whenever it changes
  console.log("Character Stats:", characterStats);

  return (
    <div>
      {!gameStarted && <StartGame updatePlayerName={setPlayerName} onFinish={handleStartGame} />}
      {gameStarted && <GamePartOne playerName={playerName} characterStats={characterStats} updateCharacterStats={updateCharacterStats} />}
    </div>
  );
}

export default App;