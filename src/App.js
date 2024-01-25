import React, { useState } from "react";
import StartGame from "./StartGame";
import CharacterData from "./CharacterData";

function App() {
  // Lift state up to App component
  const [playerName, setPlayerName] = useState('');

  // Define a function to update playerName
  const updatePlayerName = (name) => {
    setPlayerName(name);
  };

  return (
    <div>
      {/* Pass updatePlayerName function as a prop to StartGame */}
      <StartGame updatePlayerName={updatePlayerName} />
      {/* Pass playerName to CharacterData */}
      <CharacterData playerName={playerName} />
    </div>
  );
}

export default App;