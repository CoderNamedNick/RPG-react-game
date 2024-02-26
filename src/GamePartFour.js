import React, { useState } from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import A1Encounter from "./A1Encounter";
import RestPoint from './RestPoint'
import A1Town from "./A1Town";
import abomination from './images/4-2-creature-png-file.png'
import wizard from './images/3-2-wizard-picture.png'
import reaper from './images/30101-4-grim-reaper-hd.png'
import knight from './images/81638-armour-oni-for-no-knight-orochi-yamata.png'

const GamePartFourComponent = ({ playerName, characterStats, updateCharacterStats, FinishP3 }) => {
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showFight2, setShowFight2] = useState(false);
  const [fightDone2, setFight2Done] = useState(false);
  const [showFight3, setShowFight3] = useState(false);
  const [fightDone3, setFight3Done] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [ShowRestPoint, setShowRestPoint] = useState(false);
  const [RestPointDone, setRestPointDone] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);
  const [showA3BossFight, setA3BossFight] = useState(false);
  const [Act3EnemyStats, setAct3EnemyStats] = useState({
    name: 'Abomination',
    Hp: 420,
    Atk: 85,
    Def: 40,
    Mana: 20,
  });
  const updateEnemyStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct3EnemyStats(updatedEnStats);
    }, 0);
  };
  const [Act3F2EnemyStats, setAct3F2EnemyStats] = useState({
    name: 'Wizard',
    Hp: 430,
    Atk: 86,
    Def: 48,
    Mana: 45,
  });
  const [Act3F3EnemyStats, setAct3F3EnemyStats] = useState({
    name: 'Reaper',
    Hp: 380,
    Atk: 87,
    Def: 50,
    Mana: 15,
  });
  const [A3BossEnemyStats, setA3BossEnemyStats] = useState({
    name: 'Shadow Knight',
    Hp: 575,
    Atk: 105,
    Def: 70,
    Mana: 30,
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
    setShowFight3(false);
    setShowRestPoint(false);
    setShowTown(false);
  };
  const handleTownReturn = () => {
    setShowFight(false);
    setShowEncounter(false);
    setShowFight2(false);
    setShowFight3(false);
    setShowTown(false);
    setShowRestPoint(false);
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
  const handleRestPointClick = () => {
    setShowRestPoint(true);
    setRestPointDone(true);
  }
  const handleTownClick = () => {
    setShowTown(true);
    setTownDone(true);
  }


  //get png
  if (showA3BossFight) {
    return (
      <div>
          <h1>Act 4 BOSS FIGHT</h1>
          <A1Fight
            onReturn={FinishP3}
            Enemystats={A3BossEnemyStats}
            updateEnemyStats={updateA3BossEnemyStats}
            playerName={playerName}
            enemyImage={Demon}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
    )
  }

  return (
    <div className="E-Cave-Map-main-div">
      {!showTown && (
        <div>
          {!showFight3 && (
            <div>
              {!showFight2 && (
                <div>
                  {!ShowRestPoint && (
                    <div>
                      {!showEncounter && (
                        <div>
                          {!showFight && (
                            <div>
                              <h1 className="h1-cave">
                                Act Four: Enchanted Cave
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
                                <div className="stone3"></div>
                                <div className="stone4"></div>
                                {!fightDone && (
                                  <div
                                  onClick={!fightDone ? handleFightClick : null}
                                  className={`Map-places Start ${fightDone ? "disabled" : ""}`}
                                >
                                  Fight1
                                </div>
                                )}
                                {!EncounterDone && (
                                <div
                                  onClick={!EncounterDone && fightDone ? handleEncounterClick : null}
                                  className={`Map-places P1A1 ${EncounterDone ? "disabled" : ""}`}
                                >
                                  Encounter
                                </div>
                                )}
                                {!RestPointDone && (
                                <div
                                  onClick={!RestPointDone && EncounterDone ? handleRestPointClick : null}
                                  className={`Map-places P1A2 ${RestPointDone ? "disabled" : ""}`}
                                >
                                  RestPoint
                                </div>
                                )}
                                {!fightDone2 && (
                                  <div
                                  onClick={!fightDone2  && RestPointDone ? handleFight2Click : null}
                                  className={`Map-places P1A3 ${fightDone2 ? "disabled" : ""}`}
                                >
                                  Fight2
                                </div>
                                )}
                                {!fightDone3 && (
                                <div
                                  onClick={!fightDone3 && fightDone2 ? handleFight3Click : null}
                                  className={`Map-places P1A4 ${fightDone3 ? "disabled" : ""}`}
                                >
                                  Fight3
                                </div>
                                )}
                                <div 
                                  onClick={!TownDone && EncounterDone && fightDone3 ? handleTownClick : null}
                                  className={`Map-places P1A5 ${TownDone || !fightDone3 ? "disabled" : ""}`}
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
            enemyImage={Werewolf}
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
            enemyImage={DarkElf}
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
            enemyImage={Orc}
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
      {ShowRestPoint && (
        <RestPoint
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

export default GamePartFourComponent;
