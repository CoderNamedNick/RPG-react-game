import React, { useState } from "react";
import A1Chest from "./A1Chest";

const GamePartOne = () => {
  const [showChest, setShowChest] = useState(false);
  const [chestDone, setChestDone] = useState(false);

  const handleChestClick = () => {
    setShowChest(true);
    setChestDone(true);
  }

  const handleReturnToGame = () => {
    setShowChest(false);
  }

  return (
    <div>
      {showChest ? (
        <A1Chest onReturn={handleReturnToGame} />
      ) : (
        <div>
          <h1> 
            Welcome to my game! You start with nothing! 
            and Are Nothing, play the game to become Something
          </h1>
          <div className="Inv-div">
            <button className="Inv-btn">Inventory</button>
            <div className="Inv-Tooltip">
            </div>
          </div>
          <div className="GameBoard">
            <div className="Map-places Start">Start</div>
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
}

export default GamePartOne;