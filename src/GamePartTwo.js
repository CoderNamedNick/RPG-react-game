import React, { useState } from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import A1Encounter from "./A1Encounter";
import A1Town from "./A1Town";
import goblin from './images/goblin-18.png'

const GamePartTwoComponent = ({ playerName, characterStats, updateCharacterStats }) => {
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showFight2, setShowFight2] = useState(false);
  const [fightDone2, setFight2Done] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);
  const [Act2EnemyStats, setAct2EnemyStats] = useState({
    name: 'Goblin',
    Hp: 110,
    Atk: 14,
    Def: 6,
    Mana: 5,
  });
  const updateEnemyStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct2EnemyStats(updatedEnStats);
    }, 0);
  };

  const handleReturnToGame = () => {
    setShowFight(false);
    setShowEncounter(false);
    setShowTown(false);
  };
  const handleTownReturn = () => {
    setShowFight(false);
    setShowEncounter(false);
    setShowTown(false);
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


  return (
    <div className="map-main-div">
      {!showTown && (
        <div>
          {!showEncounter && (
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
                      <div className="Map-bars">
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
                      <div className="GameBoard">
                        <div className="Swamp-water"><p className="swamp-p">SWAMP</p></div>
                        <div className="Swamp-water2"><p className="swamp-p2">SWAMP</p></div>
                        <div className="map-Path"></div>
                        {!fightDone && (
                        <div
                          onClick={!fightDone ? handleFightClick : null}
                          className={`Map-places P1A1 ${fightDone ? "disabled" : ""}`}
                        >
                          Fight
                        </div>
                        )}
                        {!fightDone2 && (
                        <div
                          onClick={!fightDone2 ? handleFight2Click : null}
                          className={`Map-places P1A2 ${fightDone2 ? "disabled" : ""}`}
                        >
                          Fight
                        </div>
                        )}
                        {!TownDone && (
                          <div
                          onClick={!EncounterDone && fightDone ? handleEncounterClick : null}
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

      {showFight && (
        <div>
          <h1>FIGHT</h1>
          <A1Fight
            onReturn={handleReturnToGame}
            Enemystats={Act2EnemyStats}
            updateEnemyStats={updateEnemyStats}
            playerName={playerName}
            enemyImage={goblin}
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
            Enemystats={Act2EnemyStats}
            updateEnemyStats={updateEnemyStats}
            playerName={playerName}
            enemyImage={goblin}
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
