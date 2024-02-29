import React, { useState, useEffect } from "react";

const CharacterData = ({ playerName, characterStats, updateCharacterStats }) => {
  // Initialize character data using props
  const [characterData, setCharacterData] = useState({
    PlayerName: playerName,
    ...characterStats,  // Directly spread characterStats for initialization
  });

  // Update character data whenever characterStats prop changes
  useEffect(() => {
    // Check for skills and update damage based on current Atk attribute
    if (characterStats.Skills && characterStats.Skills.length > 0) {
      const updatedSkills = characterStats.Skills.map(skill => ({
        ...skill,
        damage: Math.floor(characterStats.Skills[0].damage * 0.25 + characterStats.Atk),
      }));

      // Update characterStats with the modified skills
      updateCharacterStats({ ...characterStats, Skills: updatedSkills });
    }

    // Update character data
    setCharacterData({
      PlayerName: playerName,
      ...characterStats,
    });
  }, [characterStats, playerName, updateCharacterStats]);

  return (
    <div className="Inv-data">
      <h2>Player Name: {characterData.PlayerName}</h2>
      <p>LVL: {characterData.LVL}</p>
      <p>MaxHP: {characterData.MaxHp}</p>
      <p>HP: {characterData.Hp}</p>
      <p>Attack: {characterData.Atk}</p>
      <p>Defense: {characterData.Def}</p>
      <p>MaxMana: {characterData.MaxMana}</p>
      <p>Mana: {characterData.Mana}</p>
      <div>
        <h3>Skills:</h3>
        <ul>
          {characterData.Skills.map((skill, index) => (
            <li key={index}>
              {skill.name} - Damage: {skill.damage}, ManaCost: {skill.manaCost}
            </li>
          ))}
        </ul>
      </div>
      <p>Inventory: {characterData.Inventory}</p>
      <p>Nils: {characterData.Nils}</p>
      <p>Potions: {characterData.Potions}</p>
    </div>
  );
};

export default CharacterData;
