import React, { useState, useEffect } from "react";

const CharacterData = ({ playerName, characterStats }) => {
  // Initialize character data using props
  const [characterData, setCharacterData] = useState({
    PlayerName: playerName,
    Hp: characterStats.Hp,
    Atk: characterStats.Atk,
    Def: characterStats.Def,
    Mana: characterStats.Mana,
    Inventory: characterStats.Inventory
  });

  // Update character data whenever characterStats prop changes
  useEffect(() => {
    setCharacterData({
      ...characterData,
      Hp: characterStats.Hp,
      Atk: characterStats.Atk,
      Def: characterStats.Def,
      Mana: characterStats.Mana,
      Inventory: characterStats.Inventory
    });
  }, [characterStats]);

  return (
    <div className="Inv-data">
      <h2>Player Name: {characterData.PlayerName}</h2>
      <p>HP: {characterData.Hp}</p>
      <p>Attack: {characterData.Atk}</p>
      <p>Defense: {characterData.Def}</p>
      <p>Mana: {characterData.Mana}</p>
    </div>
  );
};

export default CharacterData;