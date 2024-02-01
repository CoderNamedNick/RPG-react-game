import React from "react";
import CharacterData from "./CharacterData";

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const handleReturn = () => {
    onReturn(); // Call the onReturn function passed as a prop
  };

  return (
    <div>
      <h1>FIGHT</h1>
      {/* make a cool fight sceen with skills and think of an enemy to fight */}
      <div>
      <CharacterData
        playerName={playerName}
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
      </div>
      <div className="PLayerCombatMovesDiv">
        <div className="CombatMoves move1">Move 1</div>
        <div className="CombatMoves move2">Move 2</div>
        <div className="CombatMoves move3">Move 3</div>
        <div className="CombatMoves move4">Move 4</div>
      </div>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default A1Fight;
