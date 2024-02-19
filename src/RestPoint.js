import React from "react";

const RestPoint = ({onReturn}) => {
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
      <div className="Bed">
        <div className="Blanket"></div>
        <div className="Pillow"></div>
      </div>
    </div>
  );
}


export default RestPoint;
