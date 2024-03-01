import React, { useState, useEffect } from "react";
import CharacterData from "./CharacterData";
import chest from './images/treasure.png';

const A1Chest = ({ playerName, onReturn, updateCharacterStats, characterStats }) => {
  const [RewardDone, setRewardDone] = useState(false);
  const [ShowRewardBtn, setShowRewardBtn] = useState(true);
  const [isReturnButtonEnabled, setReturnButtonEnabled] = useState(true);

  const handleChestClick = () => {
    const items = [
      { range: [0, 10], item: 'Sword', attributes: ['MaxMana','Mana', 'Atk', 'Def'], increases: [10, 10, 12, 5], Skills: [{ name: 'Slash', damage: 26, manaCost: 5 }] },
      { range: [10, 20], item: 'Bow', attributes: ['MaxMana','Mana', 'Atk'], increases: [15, 15, 11], Skills: [{ name: 'Strong Shot', damage: 25, manaCost: 3 }] },
      { range: [20, 30], item: 'Shield', attributes: ['MaxHp', 'Hp', 'Def'], increases: [20, 20, 12], Skills: [{ name: 'Deflect', damage: 20, manaCost: 0 }] },
      { range: [30, 40], item: 'Staff',attributes: ['MaxMana','Mana', 'Atk'], increases: [42, 42, 3], Skills: [{ name: 'Fireball', damage: 166, manaCost: 8 }] },
      { range: [40, 50], item: 'Dagger', attributes: ['MaxMana','Mana', 'Atk'], increases: [8, 8, 13], Skills: [{ name: 'Backstab', damage: 42, manaCost: 5 }] },
      { range: [50, 60], item: 'Spear', attributes: ['MaxMana','Mana', 'Atk'], increases: [10, 10, 10], Skills: [{ name: 'Thrust', damage: 28, manaCost: 5 }] },
      { range: [60, 70], item: 'Axe', attributes: ['MaxMana','Mana', 'Atk'], increases: [18, 18, 13], Skills: [{ name: 'Cleave', damage: 45, manaCost: 8 }] },
    ];

    let randomNum = Math.floor(Math.random() * 70);
    console.log(randomNum);

    const selectedItem = items.find(item => randomNum >= item.range[0] && randomNum < item.range[1]);

    if (selectedItem) {
      alert(`You got a ${selectedItem.item} and 3 potions`);
      
      const updatedStats = {
        ...characterStats,
        Potions: characterStats.Potions + 3,
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

