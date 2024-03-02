import React, { useState } from "react"; 
import A1Fight from "./A1Fight";
import dragon from './images/2-2-dragon-png-4.png'

const Act1FinalComponent = ({ playerName, characterStats, updateCharacterStats,}) => {
  const [showFinalBossFight, setshowFinalBossFight] = useState(false);
  const [FinalBossFightDone, setFinalBossFightDone] = useState(false);
  const [A1FinalBossEnemyStats, setA1FinalBossEnemyStats] = useState({
    name: 'Felia the Shrine Goddess',
    Hp: 555,
    Atk: 105,
    Def: 85,
    Mana: 50,
    type: 'Boss',
  });
  const updateFinalBossEnemyStats = (updatedEnStats3) => {
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
        <div className="last-p-div">
        <p>
          This game is just a small project i can use on my portfolio. I felt like an RPG game was original and cool.
          If you played and enjoyed please feel free to reach out
          to me on <a href="https://github.com/CoderNamedNick">Github</a> or my email what you can find on <a href="https://github.com/CoderNamedNick">Github!</a> and if you are an employer and you beat my game I hope it was good.
          I dont plan to progress the game or make it better but maybe there is an end......maybe.
        </p>
        </div>
        <h1>Shout Out to. FreepngImg.com for most of my pngs. </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>And Thank You! </h1>
        <h1>Refresh page to play again!</h1>
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
            enemyImage={dragon}
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