import React from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import leftarrow from './images/arrow-pointing-to-left.png'
import campfire from './images/campfire-clipart-md.png'

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
        <img className="Fire" src={campfire} alt="campfire"></img>
        <div className="Fire-shadow"></div>
        <div className="Fire-shadow2"></div>
    </div>
  );
}


export default RestPoint;
