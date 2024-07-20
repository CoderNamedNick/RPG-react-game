import React, { useState, useEffect } from "react";

const CharacterData = ({ playerName, characterStats, updateCharacterStats }) => {
  const [characterData, setCharacterData] = useState({
    PlayerName: playerName,
    ...characterStats, 
  });

  useEffect(() => {
    if (characterStats.Skills && characterStats.Skills.length > 0) {
      const updatedSkills = characterStats.Skills.map(skill => {
        if (skill.name === 'Fireball') {
          return {
            ...skill,
            damage: Math.floor(30 * 0.25 + characterStats.MaxMana),
          };
        }
        if (skill.name === 'Backstab') {
          return {
            ...skill,
            damage: Math.floor(42 * 0.25 + characterStats.Atk),
          };
        }
        if (skill.name === 'Cleave') {
          return {
            ...skill,
            damage: Math.floor(-200 * 0.25 + characterStats.MaxHp),
          };
        }
        if (skill.name === 'Deflect') {
          return {
            ...skill,
            damage: Math.floor(22 * 0.25 + characterStats.Def),
          };
        }
        return {
          ...skill,
          damage: Math.floor(skill.damage * 0.25 + characterStats.Atk),
        };
      });
  
      updateCharacterStats({ ...characterStats, Skills: updatedSkills });
    }

    setCharacterData({
      PlayerName: playerName,
      ...characterStats,
    });
  }, [characterStats, playerName, updateCharacterStats]);

  return (
    <div className="Inv-data">
      <h2><span className="PN-span">Player Name:</span>{characterData.PlayerName}</h2>
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