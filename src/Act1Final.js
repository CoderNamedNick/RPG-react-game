import React, { useState } from "react"; 
import A1Fight from "./A1Fight";
import knight from './images/81638-armour-oni-for-no-knight-orochi-yamata.png'

const Act1FinalComponent = ({ playerName, characterStats, updateCharacterStats,}) => {
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
    setFinalBossFightDone(true);
  }

  const fightclick = () => {
    setshowFinalBossFight(true);
  }
  

  if(FinalBossFightDone) {
    return (
      <div>
        <h1>Thank you for playing!!!!!</h1>
        <p>
          This game this is just a small project so that i can use on my portfolio. I felt like an RPG game was original and cool
          If you somehow played and enjoyed please feel free to reach out
          to me on github or my email what you can find on github! and if youre an employer and you beat my game I hope it was good.
          I dont plan to progress the game or make it better but maybe there is an end......maybe.
        </p>
        <h2>Shout Out to. FreepngImg.com for most of my pngs. </h2>
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

  if (!FinalBossFightDone){
    return(
      <div className="A1-Final-Div">
        <h2 className="h1-top-final">Congratulations. But will you stop Now?</h2>
        <p>or</p>
        <p>Will you fight??</p>
        <h1 onClick={fightclick} className="Moms final-fight">FIGHT</h1>
      </div>
    );
  }
}

export default Act1FinalComponent;