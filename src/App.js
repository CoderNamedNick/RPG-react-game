import React, { useState } from "react";
import StartGame from "./StartGame";
import CharacterData from "./CharacterData";
import GamePartOne from "./GamePartOne";

function App() {
  // Lift state up to App component
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false); // Track if the game has started

  // Define a function to update playerName
  const updatePlayerName = (name) => {
    setPlayerName(name);
  };

  // Define a function to handle the finish event from StartGame
  const handleStartGame = () => {
    setGameStarted(true); // Set gameStarted to true when the game starts
  };

  return (
    <div>
      {/* Render StartGame only if the game hasn't started */}
      {!gameStarted && <StartGame updatePlayerName={updatePlayerName} onFinish={handleStartGame} />}
      {/* Pass playerName to CharacterData */}
      {/*<CharacterData playerName={playerName} /> */}
      {/* Render GamePartOne only if the game has started */}
      {gameStarted && <GamePartOne playerName={playerName}/>}
    </div>
  );
}

export default App;