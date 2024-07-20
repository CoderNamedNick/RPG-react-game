import React, { useState, useEffect } from "react";
import CharacterData from "../CharacterData";
import chest from '../images/treasure.png';

const A1Chest = ({ playerName, onReturn, updateCharacterStats, characterStats }) => {
  const [RewardDone, setRewardDone] = useState(false);
  const [ShowRewardBtn, setShowRewardBtn] = useState(true);
  const [ShowItems, setShowItems] = useState(false);
  const [isReturnButtonEnabled, setReturnButtonEnabled] = useState(true);

  const ShowItemDiv = () => {
    setShowItems(!ShowItems)
  }

  const handleChestClick = () => {
    const items = [
      { range: [0, 10], item: 'Sword', attributes: ['MaxMana','Mana', 'Atk', 'Def'], increases: [10, 10, 12, 5], Skills: [{ name: 'Slash', damage: 26, manaCost: 5 }] },
      { range: [10, 20], item: 'Bow', attributes: ['MaxMana','Mana', 'Atk'], increases: [15, 15, 13], Skills: [{ name: 'Strong Shot', damage: 25, manaCost: 3 }] },
      { range: [20, 30], item: 'Shield', attributes: ['MaxMana','Mana','MaxHp', 'Hp', 'Def'], increases: [10, 10, 20, 20, 12], Skills: [{ name: 'Deflect', damage: 20, manaCost: 3 }] },
      { range: [30, 40], item: 'Staff',attributes: ['MaxMana','Mana', 'Atk'], increases: [42, 42, 5], Skills: [{ name: 'Fireball', damage: 166, manaCost: 8 }] },
      { range: [40, 50], item: 'Dagger', attributes: ['MaxMana','Mana', 'Atk'], increases: [8, 8, 16], Skills: [{ name: 'Backstab', damage: 42, manaCost: 5 }] },
      { range: [50, 60], item: 'Spear', attributes: ['MaxMana','Mana', 'Atk', 'Def'], increases: [10, 10, 11, 6], Skills: [{ name: 'Thrust', damage: 28, manaCost: 5 }] },
      { range: [60, 70], item: 'Axe', attributes: ['MaxMana','Mana', 'Atk', 'Def'], increases: [18, 18, 13, 6], Skills: [{ name: 'Cleave', damage: 45, manaCost: 8 }] },
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
      <button className="ShowchestItems-btn" onClick={ShowItemDiv}>Show Obtainable Items</button>
      {ShowItems && (
        <div className="ItemStatsDiv">
          <h2>Items Obtainable From Chest</h2>
          <h3>guaranteed: 3 Health Potions</h3>
          <h2>CHANCE:</h2>
          <h4>Sword - Skill "Slash" scales with Atk stat</h4>
          <h4>Bow - Skill "Strong Shot" scales with Atk stat</h4>
          <h4>Shield - Skill "Deflect" scales with Def stat</h4>
          <h4>Staff - Skill "FireBall" scales with MaxMana stat</h4>
          <h4>Dagger - Skill "BackStab" scales with Atk stat</h4>
          <h4>Spear - Skill "Thrust" scales with Atk stat</h4>
          <h4>Axe - Skill "Cleave" scales with Max Hp stat</h4>
        </div>
      )}
      <CharacterData
        playerName={playerName}
        updateCharacterStats={updateCharacterStats}
        characterStats={characterStats}
      />
    </div>
  );
};

export default A1Chest;