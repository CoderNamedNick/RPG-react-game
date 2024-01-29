import React, { useState } from "react";
import A1Chest from "./A1Chest";
import CharacterData from "./CharacterData";

const GamePartOne = ({ playerName, characterStats, updateCharacterStats }) => {
  const [showChest, setShowChest] = useState(false);
  const [chestDone, setChestDone] = useState(false);
  const [showCharacterData, setShowCharacterData] = useState(false);

  const handleChestClick = () => {
    setShowChest(true);
    setChestDone(true);
  };

  const handleReturnToGame = () => {
    setShowChest(false);
  };

  const handleInventoryClick = () => {
    setShowCharacterData(!showCharacterData); // Toggle the state
  };

  return (
    <div>
      {showChest ? (
        <A1Chest onReturn={handleReturnToGame} updateCharacterStats={updateCharacterStats} characterStats={characterStats} />
      ) : (
        <div>
          <h1>
            Welcome to my game! You start with nothing!
            and Are Nothing, play the game to become Something
          </h1>
          <div className="Inv-div">
            <button className="Inv-btn" onClick={handleInventoryClick}>Player Stats</button>
          </div>
          {showCharacterData && (
            <div className="CharacterData">
              {/* Render your character data here */}
              <CharacterData playerName={playerName} updateCharacterStats={updateCharacterStats} characterStats={characterStats}/>
            </div>
          )}
          <div className="GameBoard">
            {!chestDone && (
              <div className="Map-places Start">Start</div>
            )}
            <div
              onClick={chestDone ? null : handleChestClick}
              className={`Map-places P1A1 ${chestDone ? 'disabled' : ''}`}
            >
              Chest
            </div>
            <div className="Map-places P1A2">Fight</div>
            <div className="Map-places P1A3">Encounter</div>
            <div className="Map-places P1A4">Town1</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePartOne;