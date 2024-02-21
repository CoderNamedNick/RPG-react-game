import React, { useState } from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import A1Encounter from "./A1Encounter";
import A1Town from "./A1Town";
import zombie from './images/9-2-zombie-high-quality-png_400x400.png'
import spirit from './images/4-2-ghost-png-image.png'
import RestPoint from './RestPoint'

const GamePartTwoComponent = ({ playerName, characterStats, updateCharacterStats }) => {
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showFight2, setShowFight2] = useState(false);
  const [fightDone2, setFight2Done] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [showRestPoint, setShowRestPoint] = useState(false);
  const [RestPointDone, setRestPointDone] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);
  const [Act2EnemyStats, setAct2EnemyStats] = useState({
    name: 'Spirit',
    Hp: 130,
    Atk: 20,
    Def: 1,
    Mana: 10,
  });
  const updateEnemyStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct2EnemyStats(updatedEnStats);
    }, 0);
  };
  const [Act2F2EnemyStats, setAct2F2EnemyStats] = useState({
    name: 'Zombie',
    Hp: 160,
    Atk: 13,
    Def: 6,
    Mana: 5,
  });
  const updateA2F2EnemyStats = (updatedEnStats2) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct2F2EnemyStats(updatedEnStats2);
    }, 0);
  };

  const handleReturnToGame = () => {
    setShowFight(false);
    setShowFight2(false)
    setShowEncounter(false);
    setShowTown(false);
    setShowRestPoint(false)
  };
  const handleTownReturn = () => {
    setShowFight(false);
    setShowEncounter(false);
    setShowTown(false);
    setShowRestPoint(false)
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

  const handleEncounterClick = () => {
    setShowEncounter(true);
    setEncounterDone(true);
  }
  const handleTownClick = () => {
    setShowTown(true);
    setTownDone(true);
  }
  const handleRestPointClick = () => {
    setShowRestPoint(true);
    setRestPointDone(true);
  }

  return (
    <div className="Forest-Map-main-div">
      {!showTown && (
        <div>
          {!showEncounter && (
            <div>
              {!showRestPoint && (
                <div>
                  {!showFight2 && (
                    <div>
                      {!showFight && (
                        <div>
                          <h1>
                            Act Two: Forest
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
                            {!fightDone && (
                            <div
                              onClick={!fightDone ? handleFightClick : null}
                              className={`Map-places Start ${fightDone ? "disabled" : ""}`}
                            >
                              Fight1
                            </div>
                            )}
                            {!fightDone2 && (
                            <div
                              onClick={!fightDone2 && fightDone ? handleFight2Click : null}
                              className={`Map-places P1A1 ${fightDone2 ? "disabled" : ""}`}
                            >
                              Fight2
                            </div>
                            )}
                            {!EncounterDone && (
                              <div
                              onClick={!EncounterDone && fightDone2 ? handleRestPointClick : null}
                              className={`Map-places P1A2 ${EncounterDone || !fightDone ? "disabled" : ""}`}
                            >
                              Rest Point
                            </div>
                            )}
                            {!TownDone && (
                              <div
                              onClick={!EncounterDone && fightDone2 ? handleEncounterClick : null}
                              className={`Map-places P1A3 ${EncounterDone || !fightDone ? "disabled" : ""}`}
                            >
                              Encounter
                            </div>
                            )}
                            <div 
                              onClick={!TownDone && EncounterDone && fightDone ? handleTownClick : null}
                              className={`Map-places P1A4 ${TownDone || !EncounterDone || !fightDone ? "disabled" : ""}`}
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

      {showFight && (
        <div>
          <h1>FIGHT</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act2EnemyStats}
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
          <h1>FIGHT</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act2F2EnemyStats}
            updateEnemyStats={updateA2F2EnemyStats}
            playerName={playerName}
            enemyImage={zombie}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {showRestPoint && (
        <RestPoint
          onReturn={handleReturnToGame}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      )}
      {showEncounter && (
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
export default GamePartTwoComponent;
