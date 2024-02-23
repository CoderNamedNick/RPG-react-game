import React, { useState } from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import A1Encounter from "./A1Encounter";
import A1Town from "./A1Town";
import zombie from './images/9-2-zombie-high-quality-png_400x400.png'
import spirit from './images/4-2-ghost-png-image.png'
import treant from './images/5ca4c3fa1cf23004f2836882.png'

const GamePartThreeComponent = ({ playerName, characterStats, updateCharacterStats }) => {
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showFight2, setShowFight2] = useState(false);
  const [fightDone2, setFight2Done] = useState(false);
  const [showFight3, setShowFight3] = useState(false);
  const [fightDone3, setFight3Done] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [showEncounter2, setShowEncounter2] = useState(false);
  const [Encounter2Done, setEncounter2Done] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);
  const [showA3BossFight, setA3BossFight] = useState(false);
  const [Act3EnemyStats, setAct3EnemyStats] = useState({
    name: 'Enemy 1',
    Hp: 200,
    Atk: 35,
    Def: 20,
    Mana: 10,
  });
  const updateEnemyStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct3EnemyStats(updatedEnStats);
    }, 0);
  };
  const [Act3F2EnemyStats, setAct3F2EnemyStats] = useState({
    name: 'Enemy 2',
    Hp: 220,
    Atk: 10,
    Def: 40,
    Mana: 25,
  });
  const [Act3F3EnemyStats, setAct3F3EnemyStats] = useState({
    name: 'Enemy 3',
    Hp: 210,
    Atk: 38,
    Def: 25,
    Mana: 15,
  });
  const [A3BossEnemyStats, setA3BossEnemyStats] = useState({
    name: 'BOSS',
    Hp: 320,
    Atk: 65,
    Def: 40,
    Mana: 20,
    type: 'Boss',
  });
  const updateA3BossEnemyStats = (updatedEnStats3) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setA3BossEnemyStats(updatedEnStats3);
    }, 0);
  };
  const updateA3F2EnemyStats = (updatedEnStats2) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct3F2EnemyStats(updatedEnStats2);
    }, 0);
  };
  const updateA3F3EnemyStats = (updatedEnStats2) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct3F3EnemyStats(updatedEnStats2);
    }, 0);
  };

  const handleReturnToGame = () => {
    setShowFight(false);
    setShowFight2(false)
    setShowEncounter(false);
    setShowFight3(false)
    setShowEncounter2(false);
    setShowTown(false);
  };
  const handleTownReturn = () => {
    setShowFight(false);
    setShowEncounter(false);
    setShowFight2(false);
    setShowFight3(false);
    setShowEncounter2(false);
    setShowTown(false);
    setA3BossFight(true);
  }

  const handleInventoryClick = () => {
    setShowCharacterData(!showCharacterData);
  };

  const handleFightClick = () => {
    setShowFight(true);
    setFightDone(true);
  };
  const handleFight2Click = () => {
    setShowFight2(true);
    setFight2Done(true);
  };
  const handleFight3Click = () => {
    setShowFight3(true);
    setFight3Done(true);
  };

  const handleEncounterClick = () => {
    setShowEncounter(true);
    setEncounterDone(true);
  }
  const handleEncounter2Click = () => {
    setShowEncounter2(true);
    setEncounter2Done(true);
  }
  const handleTownClick = () => {
    setShowTown(true);
    setTownDone(true);
  }


  //get png
  if (showA3BossFight) {
    return (
      <div>
          <h1>Act 3 BOSS FIGHT</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={A3BossEnemyStats}
            updateEnemyStats={updateA3BossEnemyStats}
            playerName={playerName}
            enemyImage={treant}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
    )
  }

  return (
    <div className="Forest-Map-main-div">
      {!showTown && (
        <div>
          {!showFight3 && (
            <div>
              {!showEncounter2 && (
                <div>
                  {!showFight2 && (
                    <div>
                      {!showFight && (
                        <div>
                          {!showEncounter && (
                            <div>
                              <h1>
                                Act Three: Forest Cave
                              </h1>
                              <div className="Inv-div">
                                <button className="Inv-btn" onClick={handleInventoryClick}>
                                  Player Stats
                                </button>
                              </div>
                              <div className="Act2-Map-bars">
                                <A1HealthManaBars 
                                  playerName={playerName}
                                  characterStats={characterStats}
                                />
                              </div>
                              {showCharacterData && (
                                <div className="CharacterData">
                                  <CharacterData
                                    playerName={playerName}
                                    updateCharacterStats={updateCharacterStats}
                                    characterStats={characterStats}
                                  />
                                </div>
                              )}
                              <div className="Act2-GameBoard">
                                <div className="Forest"><p className="Forest-p">Forest</p></div>
                                <div className="Forest2"><p className="Forest-p2">Forest</p></div>
                                {!EncounterDone && (
                                  <div
                                  onClick={!EncounterDone ? handleEncounterClick : null}
                                  className={`Map-places Start ${EncounterDone ? "disabled" : ""}`}
                                >
                                  Encounter1
                                </div>
                                )}
                                {!fightDone && (
                                <div
                                  onClick={!fightDone && EncounterDone ? handleFightClick : null}
                                  className={`Map-places P1A1 ${fightDone ? "disabled" : ""}`}
                                >
                                  Fight1
                                </div>
                                )}
                                {!fightDone2 && (
                                <div
                                  onClick={!fightDone2 && fightDone ? handleFight2Click : null}
                                  className={`Map-places P1A2 ${fightDone2 ? "disabled" : ""}`}
                                >
                                  Fight2
                                </div>
                                )}
                                {!Encounter2Done && (
                                  <div
                                  onClick={!EncounterDone && fightDone2 ? handleEncounter2Click : null}
                                  className={`Map-places P1A3 ${EncounterDone || !fightDone ? "disabled" : ""}`}
                                >
                                  Encounter2
                                </div>
                                )}
                                {!fightDone3 && (
                                <div
                                  onClick={!fightDone3 && fightDone2 ? handleFight3Click : null}
                                  className={`Map-places P1A4 ${fightDone2 ? "disabled" : ""}`}
                                >
                                  Fight3
                                </div>
                                )}
                                <div 
                                  onClick={!TownDone && EncounterDone && fightDone3 ? handleTownClick : null}
                                  className={`Map-places P1A5 ${TownDone || !Encounter2Done || !fightDone3 ? "disabled" : ""}`}
                                >
                                  Town1
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {showFight && (
        <div>
          <h1>FIGHT</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act3EnemyStats}
            updateEnemyStats={updateEnemyStats}
            playerName={playerName}
            enemyImage={spirit}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {showFight2 && (
        <div>
          <h1>FIGHT 2</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act3F2EnemyStats}
            updateEnemyStats={updateA3F2EnemyStats}
            playerName={playerName}
            enemyImage={zombie}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {showFight3 && (
        <div>
          <h1>FIGHT 3</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act3F3EnemyStats}
            updateEnemyStats={updateA3F3EnemyStats}
            playerName={playerName}
            enemyImage={zombie}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {showEncounter && (
        <A1Encounter
          onReturn={handleReturnToGame}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      )}
      {showEncounter2 && (
        <A1Encounter
          onReturn={handleReturnToGame}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      )}
      {showTown && (
        <A1Town
          onReturn={handleTownReturn}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      )}

    </div>
  );
}

export default GamePartThreeComponent;
