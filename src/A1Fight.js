import React from "react";
import CharacterData from "./CharacterData";

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const handleReturn = () => {
    onReturn(); // Call the onReturn function passed as a prop
  };

  return (
    <div>
      <h1>FIGHT</h1>
      {/* make a cool fight scene with skills and think of an enemy to fight */}
      <div>
        <CharacterData
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
          skills={characterStats.Skills} // Pass the skills prop
        />
      </div>
      <div className="PlayerCombatMovesDiv">
        <div className="CombatMoves move1">Basic Attack</div>
        <div className="CombatMoves move2">{characterStats.Skills[0]}</div>
        {/* Display other skills as needed */}
        <div className="CombatMoves move3">Observe</div>
        <div className="CombatMoves move4">Run</div>
      </div>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default A1Fight;
