import React, { useState, useEffect } from "react";
import CharacterData from "./CharacterData";

const A1Chest = ({ onReturn, updateCharacterStats, characterStats }) => {
  const [RewardDone, setRewardDone] = useState(false);
  const [ShowRewardBtn, setShowRewardBtn] = useState(true);

  const handleChestClick = () => {
    const items = [
      { range: [0, 10], item: 'Sword', attribute: 'Atk', increase: 12, skills: 'Slash' },
      { range: [10, 20], item: 'Bow', attribute: 'Atk', increase: 8, skills: 'Arrow Shot' },
      { range: [20, 30], item: 'Shield', attribute: 'Def', increase: 15, skills: 'Block' },
      { range: [30, 40], item: 'Staff', attributes: ['Mana', 'Atk'], increases: [20, 3], skills: 'Fireball' },
      { range: [40, 50], item: 'Dagger', attribute: 'Atk', increase: 10, skills: 'Backstab' },
      { range: [50, 60], item: 'Spear', attribute: 'Atk', increase: 14, skills: 'Thrust' },
      { range: [60, 70], item: 'Axe', attribute: 'Atk', increase: 16, skills: 'Cleave' },
    ];

    let randomNum = Math.floor(Math.random() * 70);
    console.log(randomNum);

    const selectedItem = items.find(item => randomNum >= item.range[0] && randomNum < item.range[1]);

    if (selectedItem) {
      alert(`You got a ${selectedItem.item}`);
      
      const updatedStats = {
        ...characterStats,
      };

      // Update each attribute and increase value
      if (selectedItem.attributes && selectedItem.increases && selectedItem.attributes.length === selectedItem.increases.length) {
        selectedItem.attributes.forEach((attribute, index) => {
          updatedStats[attribute] = characterStats[attribute] + selectedItem.increases[index];
        });
      } else {
        updatedStats[selectedItem.attribute] = characterStats[selectedItem.attribute] + selectedItem.increase;
      }

      // Call the updateCharacterStats function passed as a prop
      updateCharacterStats(updatedStats);
      console.log(updatedStats);
    }

    setRewardDone(true);
    setShowRewardBtn(false);
  };

  const handleReturn = () => {
    console.log(characterStats);
    onReturn();
  };

  useEffect(() => {
    console.log(characterStats);
  }, [characterStats]);

  return (
    <div>
      <h2>A1 Chest</h2>
      {ShowRewardBtn ? (
        <button onClick={handleChestClick}>Chest click for reward</button>
      ) : null}
      <button
        onClick={handleReturn}
        className={`${RewardDone ? "disabled" : ""}`}
      >
        Return
      </button>
      {/* Assuming CharacterData is used to display character stats */}
      <CharacterData
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
    </div>
  );
};

export default A1Chest;
