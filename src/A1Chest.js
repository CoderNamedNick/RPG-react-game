import React, { useEffect } from "react";
import CharacterData from "./CharacterData";

const A1Chest = ({ onReturn, updateCharacterStats, characterStats }) => {

  const handleChestClick = (attribute, StatIncrease) => {
    const items = [
      { range: [0, 10], item: 'Sword' },
      { range: [10, 20], item: 'Bow' },
      { range: [20, 30], item: 'Shield' },
      { range: [30, 40], item: 'Staff' },
      { range: [40, 50], item: 'Dagger' },
      { range: [50, 60], item: 'Spear' },
      { range: [60, 70], item: 'Axe' }
    ];

    let randomNum = Math.floor(Math.random() * 70);
    console.log(randomNum)

    const selectedItem = items.find(item => randomNum >= item.range[0] && randomNum < item.range[1]);

    if (selectedItem) {
      alert(`You got a ${selectedItem.item}`);
    }
};

  const handleReturn = (attribute, StatIncrease) => {
    // Update the attack (Atk) by 5 in A1Chest
    const updatedStats = {
      ...characterStats,
      [attribute]: characterStats[attribute] + StatIncrease
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
      <button onClick={handleChestClick}>Chest click for reward</button>
      <button onClick={() => handleReturn("Def", 5)}>Return</button>
      <CharacterData
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
    </div>
  );
};

export default A1Chest;
