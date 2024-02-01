import React, { useState, useEffect } from "react";
import CharacterData from "./CharacterData";
import chest from './treasure.png';

const A1Chest = ({ playerName, onReturn, updateCharacterStats, characterStats }) => {
  const [RewardDone, setRewardDone] = useState(false);
  const [ShowRewardBtn, setShowRewardBtn] = useState(true);
  const [isReturnButtonEnabled, setReturnButtonEnabled] = useState(true);

  const handleChestClick = () => {
    const items = [
      { range: [0, 10], item: 'Sword', attribute: 'Atk', increase: 12, Skills: [{ name: 'Slash', damage: 15, manaCost: 5 }] },
      { range: [10, 20], item: 'Bow', attribute: 'Atk', increase: 8, Skills: [{ name: 'Arrow Shot', damage: 10, manaCost: 8 }] },
      { range: [20, 30], item: 'Shield', attribute: 'Def', increase: 15, Skills: [{ name: 'Block', damage: 0, manaCost: 0 }] },
      { range: [30, 40], item: 'Staff', attributes: ['Mana', 'Atk'], increases: [20, 3], Skills: [{ name: 'Fireball', damage: 20, manaCost: 10 }] },
      { range: [40, 50], item: 'Dagger', attribute: 'Atk', increase: 10, Skills: [{ name: 'Backstab', damage: 12, manaCost: 6 }] },
      { range: [50, 60], item: 'Spear', attribute: 'Atk', increase: 14, Skills: [{ name: 'Thrust', damage: 18, manaCost: 8 }] },
      { range: [60, 70], item: 'Axe', attribute: 'Atk', increase: 16, Skills: [{ name: 'Cleave', damage: 25, manaCost: 12 }] },
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

      // Ensure skills is an array before attempting to concatenate
      updatedStats.Skills = Array.isArray(characterStats.Skills) ? characterStats.Skills : [];
      
      // Add skills to updatedStats
      if (selectedItem.Skills && selectedItem.Skills.length > 0) {
        updatedStats.Skills = [...updatedStats.Skills, ...selectedItem.Skills];
      }

      // Call the updateCharacterStats function passed as a prop
      updateCharacterStats(updatedStats);
      console.log(updatedStats);
    }

    setRewardDone(true);
    setShowRewardBtn(false);
    setReturnButtonEnabled(false)
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
      <div className="A1ChestDiv">
        <h2>Chest</h2>
        {ShowRewardBtn ? (
          <img className="Chest-img" src={chest} alt="Chest click for reward" onClick={handleChestClick}></img>
        ) : null}
        <button
          onClick={handleReturn}
          className={` return-btn ${RewardDone ? "disabled" : ""}`}
          disabled={isReturnButtonEnabled}
        >
          Return
        </button>
      </div>
      {/* Assuming CharacterData is used to display character stats */}
      <CharacterData
        playerName={playerName}
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
    </div>
  );
};

export default A1Chest;

