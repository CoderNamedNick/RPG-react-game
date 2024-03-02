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
      const updatedSkills = characterStats.Skills.map(skill => {
        if (skill.name === 'Fireball') {
          // Update damage for 'Fireball'
          return {
            ...skill,
            damage: Math.floor(30 * 0.25 + characterStats.MaxMana),
          };
        }
        if (skill.name === 'Backstab') {
          // Update damage for 'Backstab'
          return {
            ...skill,
            damage: Math.floor(42 * 0.25 + characterStats.Atk),
          };
        }
        if (skill.name === 'Deflect') {
          // Update damage for 'Deflect'
          return {
            ...skill,
            damage: Math.floor(22 * 0.25 + characterStats.Def),
          };
        }
        // Update damage for other skills
        return {
          ...skill,
          damage: Math.floor(skill.damage * 0.25 + characterStats.Atk),
        };
      });
  
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
