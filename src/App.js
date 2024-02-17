import React, { useState } from "react";
import StartGame from "./StartGame";
import GamePartOne from "./GamePartOne";
import GamePartTwoComponent from "./GamePartTwo";

function App() {
  const [playerName, setPlayerName] = useState('');
  const [characterStats, setCharacterStats] = useState({
    LVL: 1,
    Hp: 100,
    MaxHp: 100,
    Atk: 10,
    Def: 10,
    Mana: 0,
    MaxMana: 0,
    Skills: [],
    Inventory: [],
    Nils: 0,
  });
  const [gameStarted, setGameStarted] = useState(false);
  const [GamePartTwo, setGamePartTwo] = useState(false); // Rename the state variable

  const updateCharacterStats = (updatedStats) => {
    setCharacterStats(updatedStats);
  };

  const finishPartOne = () => {
    setGamePartTwo(true); // Use the correct state variable
  }

  const handleStartGame = () => {
    setGameStarted(true);
  };

  console.log("Character Stats:", characterStats);

  return (
    <div>
      {!gameStarted && <StartGame updatePlayerName={setPlayerName} onFinish={handleStartGame} />}
      {!GamePartTwo && gameStarted && <GamePartOne FinishP1={finishPartOne} playerName={playerName} characterStats={characterStats} updateCharacterStats={updateCharacterStats} />}
      {GamePartTwo && gameStarted && <GamePartTwoComponent playerName={playerName} characterStats={characterStats} updateCharacterStats={updateCharacterStats} />}
    </div>
  );
}

export default App;
