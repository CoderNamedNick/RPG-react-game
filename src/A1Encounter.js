import { useState, useEffect } from "react";
import mouth from './mouth-smile-clip-art-nicubunu_Mouth_with_teeth.png'

const A1Encounter = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [PlayingGame, setPlayingGame] = useState(false);
  const [Heads, setHeads] = useState('');
  const [Tails, setTails] = useState('');

  const handleReturn = () => {
    onReturn(); //return function
  };
  const handleyesclick = () => {
    coinflip();
    setPlayingGame(true)
  }

  const coinflip = () => {
    const randomNum = Math.ceil(Math.random() * 2);
    if (randomNum === 1) {
      setHeads('yes');
      setTails('no');
    } else {
      setHeads('no');
      setTails('yes');
    }
  };

  if (PlayingGame) {
    // Add your game logic here
    // You can return different content or components based on the game state
    
    const handlHeadsclick = () => {
      if (Heads === 'yes') {
        alert('You WIn')
      }
      if (Heads === 'no') {
        alert('You Lose')
      }
      coinflip();
    }
    const handlTailsclick = () => {
      if (Tails === 'yes') {
        alert('You WIn')
      }
      if (Tails === 'no') {
        alert('You Lose')
      }
      coinflip();
    }


    return (
      <div className="Main-A1-Encounter-Div">
        <p className="Moms">I WoNt ChEaT</p>
        <img className="mouth" src={mouth} alt="mouth"></img>
        {/* Display game content or components */}
        <h2 onClick={handlHeadsclick} className="h2Head">
        Heads
      </h2>
      <h2 onClick={handlTailsclick} className="h2Tail">
        Tails
      </h2>
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
