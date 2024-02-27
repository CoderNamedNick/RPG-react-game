import React, { useState } from "react"; 
import A1Fight from "./A1Fight";
import knight from './images/81638-armour-oni-for-no-knight-orochi-yamata.png'

const Act1Final = ({ playerName, characterStats, updateCharacterStats,}) => {
  const [showFinalBossFight, setshowFinalBossFight] = useState(false);
  const [FinalBossFightDone, setFinalBossFightDone] = useState(false);
  const [A1FinalBossEnemyStats, setA1FinalBossEnemyStats] = useState({
    name: 'PART 1 Final Boss',
    Hp: 655,
    Atk: 115,
    Def: 85,
    Mana: 50,
    type: 'Boss',
  });
  const updateFinalBossEnemyStats = (updatedEnStats3) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setA1FinalBossEnemyStats(updatedEnStats3);
    }, 0);
  };
  
  const onReturn = () => {
    setshowFinalBossFight(false);
    setFinalBossFightDone(false);
  }

  const fightclick = () => {
    setshowFinalBossFight(true);
  }
  

  if(FinalBossFightDone) {
    return (
      <div>
        you won
      </div>
    )
  }

  if (showFinalBossFight) {
    return (
      <div>
          <h1>Final BOSS FIGHT</h1>
          <A1Fight
            onReturn={onReturn}
            Enemystats={A1FinalBossEnemyStats}
            updateEnemyStats={updateFinalBossEnemyStats}
            playerName={playerName}
            enemyImage={knight}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
    )
  }

  return(
    <div>
      <h2>Congratulations you have made it this far. But will you stop Now?</h2>
      <p>Walking out of the Enchanted cave you see statues surrounding you and you last foe. Will you fight??</p>
      <h1 onClick={fightclick}>FIGHT</h1>
    </div>
  );
}

export default Act1Final