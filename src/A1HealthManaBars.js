import React, { useState, useEffect } from "react";

const A1HealthManaBars = ({ playerName, characterStats }) => {
  const [healthBarWidth, setHealthBarWidth] = useState("100%");
  const [manaBarWidth, setManaBarWidth] = useState("100%");

  useEffect(() => {
    const calculateBarWidth = (currentValue, maxValue) => {
      const percentage = (currentValue / maxValue) * 100;
      return `${percentage}%`;
    };

    setHealthBarWidth(calculateBarWidth(characterStats.Hp, characterStats.MaxHp));
    setManaBarWidth(calculateBarWidth(characterStats.Mana, characterStats.MaxMana));
  }, [characterStats]);

  return (
    <div className="PlayerBars">
      <div className="playerName">Name: {playerName}</div>
      <div className="healthBar">
        <p>Health: {characterStats.Hp}</p>
        <div className="bar" style={{ width: healthBarWidth }}></div>
      </div>
      <div className="manaBar">
        <p>Mana: {characterStats.Mana}</p>
        <div className="bar2" style={{ width: manaBarWidth }}></div>
      </div>
      <br></br>
      <div>
        Nils: {characterStats.Nils}
      </div>
    </div>
  );
};

export default A1HealthManaBars;
