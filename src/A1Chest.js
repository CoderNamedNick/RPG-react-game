import React, { useEffect } from "react";
import CharacterData from "./CharacterData";

const A1Chest = ({ onReturn, updateCharacterStats, characterStats }) => {
  const handleReturn = () => {
    // Update the attack (Atk) by 5 in A1Chest
    const updatedStats = {
      ...characterStats,
      Atk: characterStats.Atk + 5
    };

    // Call the updateCharacterStats function passed as a prop
    updateCharacterStats(updatedStats);
    
    
    console.log(characterStats);
    

    // Call the onReturn function passed as a prop
    onReturn();
  };

  // Log characterStats whenever it changes
  useEffect(() => {
    console.log(characterStats);
  }, [characterStats]);

  return (
    <div>
      <h2>A1 Chest</h2>
      <button onClick={handleReturn}>Return</button>
      <CharacterData
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
    </div>
  );
};

export default A1Chest;
