import React from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import leftarrow from './images/arrow-pointing-to-left.png'

const RestPoint = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const ExitArrow = () => {
    onReturn()
  }

  const handlerestclick = () => {
    if (characterStats.Hp >= characterStats.MaxHp && characterStats.Mana >= characterStats.MaxMana){
      alert(`you already have max Mana and Health`)
      return
    }
    let HpMissing = characterStats.MaxHp - characterStats.Hp
    let ManaMissing = characterStats.MaxMana - characterStats.Mana
    const updatedStats = {
      ...characterStats,
      Hp: characterStats.Hp + HpMissing,
      Mana: characterStats.Mana + ManaMissing,
      Nils: characterStats.Nils - 2
    };
    updateCharacterStats(updatedStats);
  }

  return (
    <div className="Inn-main-div">
      <img onClick={ExitArrow} className="LeftArrow" src={leftarrow} alt="EXIT"></img>
      <h1 onClick={handlerestclick} className="Moms Items">REST?</h1>
      <div className="Act2-Map-bars">
        <A1HealthManaBars 
          playerName={playerName}
          characterStats={characterStats}
        />
      </div>
      <div className="Bed">
        <div className="Blanket"></div>
        <div className="Pillow"></div>
      </div>
    </div>
  );
}


export default RestPoint;
