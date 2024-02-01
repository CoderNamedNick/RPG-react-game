import React, { useState, useEffect } from "react";

const CharacterData = ({ playerName, characterStats, skills }) => {
  // Initialize character data using props
  const [characterData, setCharacterData] = useState({
    PlayerName: playerName,
    Hp: characterStats.Hp,
    Atk: characterStats.Atk,
    Def: characterStats.Def,
    Mana: characterStats.Mana,
    Skills: characterStats.Skills,
    Inventory: characterStats.Inventory,
  });

  // Update character data whenever characterStats prop changes
  useEffect(() => {
    setCharacterData({
      ...characterData,
      Hp: characterStats.Hp,
      Atk: characterStats.Atk,
      Def: characterStats.Def,
      Mana: characterStats.Mana,
      Skills: characterStats.Skills,
      Inventory: characterStats.Inventory,
    });
  }, [characterStats]);

  return (
    <div className="Inv-data">
      <h2>Player Name: {characterData.PlayerName}</h2>
      <p>HP: {characterData.Hp}</p>
      <p>Attack: {characterData.Atk}</p>
      <p>Defense: {characterData.Def}</p>
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
    </div>
  );
};

export default CharacterData;
