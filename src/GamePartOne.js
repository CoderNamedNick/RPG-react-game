import React, { useState } from "react";
import A1Chest from "./A1Chest";

const GamePartOne = () => {
  const [showChest, setShowChest] = useState(false);

  const handleChestClick = () => {
    setShowChest(true);
  }

  return (
    <div>
      {showChest ? (
        <A1Chest />
      ) : (
        <div>
          <h1> 
            Welcome to my game! You start with nothing! 
            and Are Nothing, play the game to become Something
          </h1>
          <div>
            <button>Inventory</button>
            <div className="Inv-Tooltip"></div>
          </div>
          <div className="GameBoard">
            <div className="Map-places Start">Start</div>
            <div onClick={handleChestClick} className="Map-places P1A1">Chest</div>
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