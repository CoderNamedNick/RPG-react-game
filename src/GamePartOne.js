import React, { useState } from "react";
import A1Chest from "./A1Chest";
import A1Fight from "./A1Fight";
import CharacterData from "./CharacterData";
import arrow from './up-arrow.png';
import A1Encounter from "./A1Encounter";
import A1Town from "./A1Town";

const GamePartOne = ({ playerName, characterStats, updateCharacterStats }) => {
  const [showChest, setShowChest] = useState(false);
  const [chestDone, setChestDone] = useState(false);
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [showFight, setShowFight] = useState(false);
  const [fightDone, setFightDone] = useState(false);
  const [showEncounter, setShowEncounter] = useState(false);
  const [EncounterDone, setEncounterDone] = useState(false);
  const [showTown, setShowTown] = useState(false);
  const [TownDone, setTownDone] = useState(false);

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

  return (
    <div>
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
                        Welcome to my game! You start From the bottom and work up!
                        I hope you enjoy my game! its a work in progress!
                      </h1>
                      <div className="Inv-div">
                        <button className="Inv-btn" onClick={handleInventoryClick}>
                          Player Stats
                        </button>
                      </div>
                      <img className="Arrow" src={arrow} alt="Start From bottom go up" />
                      <img className="Arrow2" src={arrow} alt="Start From bottom go up" />
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
                        {!chestDone && <div className="Map-places Start">Start</div>}
                        {!chestDone && (
                          <div
                            onClick={chestDone ? null : handleChestClick}
                            className={`Map-places P1A1 ${chestDone ? "disabled" : ""}`}
                          >
                            Chest
                          </div>
                        )}
                        {!fightDone && (
                        <div
                          onClick={chestDone && !fightDone ? handleFightClick : null}
                          className={`Map-places P1A2 ${fightDone || !chestDone ? "disabled" : ""}`}
                        >
                          Fight
                        </div>
                        )}
                        {!EncounterDone && (
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
        <A1Fight
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
          onReturn={handleReturnToGame}
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      )}

    </div>
  );
};

export default GamePartOne;
