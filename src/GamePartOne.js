import React, { useState } from "react";
import A1HealthManaBars from "./A1HealthManaBars";
import A1Chest from "./A1Chest";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import arrow from './images/up-arrow.png';
import A1Encounter from "./A1Encounter";
import A1Town from "./A1Town";
import goblin from './images/goblin-18.png'
import troll from './images/84614-troll-mythical-monster-minotaur-organism-creature.png'

const GamePartOne = ({ playerName, characterStats, updateCharacterStats, FinishP1, }) => {
  const [showChest, setShowChest] = useState(false);
  const [chestDone, setChestDone] = useState(false);
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);
  const [ShowAct1Boss, setShowAct1Boss] = useState(false)
  const [Act1EnemyStats, setAct1EnemyStats] = useState({
    name: 'Goblin',
    Hp: 80,
    Atk: 12,
    Def: 4,
    Mana: 5,
  });
  const updateEnemyStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct1EnemyStats(updatedEnStats);
    }, 0);
  };
  const [Act1BossStats, setAct1BossStats] = useState({
    name: 'Troll',
    Hp: 160,
    Atk: 16,
    Def: 7,
    Mana: 8,
    type: 'Boss',
  });
  const updatebossStats = (updatedEnStats) => {
    // Wrap the state update in a setTimeout to defer it to the next tick
    setTimeout(() => {
      setAct1BossStats(updatedEnStats);
    }, 0);
  };

  const handleChestClick = () => {
    setShowChest(true);
    setChestDone(true);
  };
  const handleReturnToGame = () => {
    setShowChest(false);
    setShowFight(false);
    setShowEncounter(false);
    setShowTown(false);
  };
  const handleTownReturn = () => {
    setShowChest(false);
    setShowFight(false);
    setShowEncounter(false);
    setShowTown(false);
    setShowAct1Boss(true)
  }

  const handleInventoryClick = () => {
    setShowCharacterData(!showCharacterData);
  };

  const handleFightClick = () => {
    setShowFight(true);
    setFightDone(true);
  };

  const handleEncounterClick = () => {
    setShowEncounter(true);
    setEncounterDone(true);
  }
  const handleTownClick = () => {
    setShowTown(true);
    setTownDone(true);
  }

  if (ShowAct1Boss) {
    return(
      <div>
        <h1>BOSS FIGHT</h1>
       <A1Fight
          onReturn={FinishP1}
          Enemystats={Act1BossStats}
          updateEnemyStats={updatebossStats}
          enemyImage={troll}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      </div>
    );
  }

  return (
    <div className="map-main-div">
      {!showTown && (
        <div>
          {!showEncounter && (
            <div>
              {!showFight && (
                <div>
                  {showChest ? (
                    <A1Chest
                      playerName={playerName}
                      onReturn={handleReturnToGame}
                      updateCharacterStats={updateCharacterStats}
                      characterStats={characterStats}
                    />
                  ) : (
                    <div>
                      <h1>
                        Welcome to my game! You start from the bottom and work up!
                        I hope you enjoy my game! its a work in progress!
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
                      <div className="current-position">
                        <img className={
                          (chestDone && !fightDone && !EncounterDone) ? "Arrow2" :
                          (fightDone && !EncounterDone) ? "Arrow3" :
                          (EncounterDone ? "Arrow4" : "Arrow")
                        } src={arrow} alt="Start From bottom go up" />
                        <p className={
                          (chestDone && !fightDone && !EncounterDone) ? "here2" :
                          (fightDone && !EncounterDone) ? "here3" :
                          (EncounterDone ? "here4" : "Here-p")
                        }>you are here</p>
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
                        {!chestDone && <div className="Map-places Start">Start</div>}
                        {!fightDone && (
                          <div
                            onClick={chestDone ? null : handleChestClick}
                            className={`Map-places P1A1 ${chestDone ? "disabled" : ""}`}
                          >
                            Chest
                          </div>
                        )}
                        {!EncounterDone && (
                        <div
                          onClick={chestDone && !fightDone ? handleFightClick : null}
                          className={`Map-places P1A2 ${fightDone || !chestDone ? "disabled" : ""}`}
                        >
                          Fight
                        </div>
                        )}
                        {!TownDone && (
                          <div
                          onClick={!EncounterDone && chestDone && fightDone ? handleEncounterClick : null}
                          className={`Map-places P1A3 ${EncounterDone || !fightDone || !chestDone ? "disabled" : ""}`}
                        >
                          Encounter
                        </div>
                        )}
                        <div 
                          onClick={!TownDone && EncounterDone && chestDone && fightDone ? handleTownClick : null}
                          className={`Map-places P1A4 ${TownDone || !EncounterDone || !fightDone || !chestDone ? "disabled" : ""}`}
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
            Enemystats={Act1EnemyStats}
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
};

export default GamePartOne;
