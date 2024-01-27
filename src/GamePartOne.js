import React from "react";
import { useState } from "react";

const GamePartOne = () => {
  const [onstart, SetStart] = useState(true);

  return (
    <div>
      <h1> 
        Welcome to my game! you start with nothing! 
        and Are Nothing play the Game to become Something
      </h1>
      <div>
        <button>Inventory</button>
        <div className="Inv-Tooltip"></div>
      </div>
      <div className="GameBoard">
        <div className="Map-places Start">Start</div>
        <div className="Map-places P1A1">Chest</div>
        <div className="Map-places P1A2">Fight</div>
        <div className="Map-places P1A3">Encounter</div>
        <div className="Map-places P1A4">Town1</div>
      </div>
    </div>
  )
}

export default GamePartOne