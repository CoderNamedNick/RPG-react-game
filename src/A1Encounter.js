import { useState, useEffect } from "react";
import mouth from './mouth-smile-clip-art-nicubunu_Mouth_with_teeth.png'

const A1Encounter = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [PlayingGame, setPlayingGame] = useState(false)

  const handleReturn = () => {
    onReturn(); //return function
  };
  const handleyesclick = () => {
    setPlayingGame(true)
  }


  if (PlayingGame) {
    // Add your game logic here
    // You can return different content or components based on the game state
    return (
      <div className="Main-A1-Encounter-Div">
        <img className="mouth" src={mouth} alt="mouth"></img>
        {/* Display game content or components */}
      </div>
    );
  }

  return (
    <div className="Main-A1-Encounter-Div">
      <img className="mouth" src={mouth} alt="mouth"></img>
      <p className="Moms">pLaY A gAme WiTh Me</p>
      <p className="Wincon">
        If yOu WiN I hEaL yOu!
        <br></br>
        <br></br>
        <span>Current HP: {characterStats.Hp} + 10</span>
      </p>
      <p className="Losecon">
        If yOu LoSe I HuRt yOu!
        <br></br>
        <br></br>
        <span>Current HP: {characterStats.Hp} - 10</span>
      </p>
      <h1 className="Moms PLay">PLAY?</h1>
      <h2 onClick={handleyesclick} className="h2yes">
        YES
      </h2>
      <h2 onClick={handleReturn} className="h2no">
        NO
      </h2>
    </div>
  );
}

export default A1Encounter;
