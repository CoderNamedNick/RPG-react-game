import { useState } from "react";
import mouth from './images/mouth-smile-clip-art-nicubunu_Mouth_with_teeth.png'
import A1HealthManaBars from "./A1HealthManaBars";
import CharacterData from "./CharacterData";

const A1Encounter = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [PlayingGame, setPlayingGame] = useState(false);
  const [Heads, setHeads] = useState('');
  const [Tails, setTails] = useState('');
  const [SecondGame, setSecondGame] = useState(false);
  const [SecondPlayingGame, setSecondPlayingGame] = useState(false);
  const [ThirdGame, setThirdGame] = useState(false);

  const handleReturn = () => {
    onReturn(); // return function
  };

  const handleyesclick = () => {
    coinflip();
    setPlayingGame(true);
  };

  const handleyesclick2 = () => {
    coinflip();
    setSecondPlayingGame(true);
  };

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

  const randomnum = Math.ceil(Math.random() * 2);

  if (randomnum === 1) {
    if (ThirdGame) {
      return (
        <div className="Main-A1-Encounter-Div">
          <img className="mouth3" src={mouth} alt="mouth"></img>
          <p className="Moms">PLAY! PLAY! PLAY!</p>
          <h2 onClick={handleReturn} className="h2Leave">
            Leave
          </h2>
        </div>
      );
    }

    if (SecondPlayingGame) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick3 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Nils: characterStats.Nils + 15,
            Potions: characterStats.Potions + 1,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            MaxMana: characterStats.MaxMana - 10,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        coinflip();
      }
      const handlTailsclick3 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Nils: characterStats.Nils + 15,
            Potions: characterStats.Potions + 1,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            MaxMana: characterStats.MaxMana - 10,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        coinflip();
      }


      return (
        <div className="Main-A1-Encounter-Div">
          <p className="Moms">I WoNt ChEaT</p>
          <img className="mouth" src={mouth} alt="mouth"></img>
          {/* Display game content or components */}
          <div>
            <A1HealthManaBars 
              playerName={playerName}
              characterStats={characterStats}
            />
          </div>
          <h2 onClick={handlHeadsclick3} className="h2Head">
          Heads
        </h2>
        <h2 onClick={handlTailsclick3} className="h2Tail">
          Tails
        </h2>
        </div>
      );
    }


    if (SecondGame) {
      return (
      <div className="Main-A1-Encounter-Div">
        <img className="mouth2" src={mouth} alt="mouth"></img>
        <p className="Moms">PLAY AGAIN!</p>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <p className="Wincon">
          If yOu WiN I ReWarD yOu!
          <br></br>
          <br></br>
          <span>Current Nils: {characterStats.Nils} + 15</span>
          <br></br>
          <span>and</span>
          <br></br>
          <span>Current Potions: {characterStats.Potions} + 1</span>
        </p>
        <p className="Losecon">
          If yOu LoSe I HuRt yOu!
          <br></br>
          <br></br>
          <span>Current MaxMana: {characterStats.MaxMana} - 10</span>
        </p>
        <h1 className="Moms PLay">PLAY?</h1>
        <h2 onClick={handleyesclick2} className="h2yes">
          YES
        </h2>
        <h2 onClick={handleReturn} className="h2no">
          NO
        </h2>
      </div>
      )
    }



    if (PlayingGame) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick4 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Def: characterStats.Def + 5,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        coinflip();
      }
      const handlTailsclick4 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Def: characterStats.Def + 5,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        coinflip();
      }


      return (
        <div className="Main-A1-Encounter-Div">
          <p className="Moms">I WoNt ChEaT</p>
          <img className="mouth" src={mouth} alt="mouth"></img>
          {/* Display game content or components */}
          <div>
            <A1HealthManaBars 
              playerName={playerName}
              characterStats={characterStats}
            />
          </div>
          <h2 onClick={handlHeadsclick4} className="h2Head">
          Heads
        </h2>
        <h2 onClick={handlTailsclick4} className="h2Tail">
          Tails
        </h2>
        </div>
      );
    }

    return (
      <div className="Main-A1-Encounter-Div">
        <img className="mouth" src={mouth} alt="mouth"></img>
        <p className="Moms">pLaY A gAme WiTh Me</p>
        <div>
          <A1HealthManaBars
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <p className="Wincon">
          If yOu WiN I HeLp yOu!
          <br></br>
          <br></br>
          <span>Current Def: {characterStats.Def} + 5</span>
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

  if (randomnum === 2) {
    if (ThirdGame) {
      return (
        <div className="Main-A1-Encounter-Div">
          <img className="mouth3" src={mouth} alt="mouth"></img>
          <p className="Moms">PLAY! PLAY! PLAY!</p>
          <h2 onClick={handleReturn} className="h2Leave">
            Leave
          </h2>
        </div>
      );
    }

    if (SecondPlayingGame) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick2 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Def: characterStats.Def + 5,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            MaxHp: characterStats.MaxHp - 10,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        coinflip();
      }
      const handlTailsclick2 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Def: characterStats.Def + 5,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            MaxHp: characterStats.MaxHp - 10,
          };
          updateCharacterStats(updatedStats);
          setThirdGame(true)
        }
        coinflip();
      }


      return (
        <div className="Main-A1-Encounter-Div">
          <p className="Moms">I WoNt ChEaT</p>
          <img className="mouth" src={mouth} alt="mouth"></img>
          {/* Display game content or components */}
          <div>
            <A1HealthManaBars 
              playerName={playerName}
              characterStats={characterStats}
            />
          </div>
          <h2 onClick={handlHeadsclick2} className="h2Head">
          Heads
        </h2>
        <h2 onClick={handlTailsclick2} className="h2Tail">
          Tails
        </h2>
        </div>
      );
    }


    if (SecondGame) {
      return (
      <div className="Main-A1-Encounter-Div">
        <img className="mouth2" src={mouth} alt="mouth"></img>
        <p className="Moms">PLAY AGAIN!</p>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <p className="Wincon">
          If yOu WiN I ReWarD yOu!
          <br></br>
          <br></br>
          <span>Current Def: {characterStats.Def} + 5</span>
          <br></br>
          <span>and</span>
          <br></br>
          <span>Current ATK: {characterStats.Atk} + 5</span>
        </p>
        <p className="Losecon">
          If yOu LoSe I HuRt yOu!
          <br></br>
          <br></br>
          <span>Current MaxHP: {characterStats.MaxHp} - 10</span>
        </p>
        <h1 className="Moms PLay">PLAY?</h1>
        <h2 onClick={handleyesclick2} className="h2yes">
          YES
        </h2>
        <h2 onClick={handleReturn} className="h2no">
          NO
        </h2>
      </div>
      )
    }



    if (PlayingGame) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        coinflip();
      }
      const handlTailsclick = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats = {
            ...characterStats,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats);
          setSecondGame(true)
        }
        coinflip();
      }


      return (
        <div className="Main-A1-Encounter-Div">
          <p className="Moms">I WoNt ChEaT</p>
          <img className="mouth" src={mouth} alt="mouth"></img>
          {/* Display game content or components */}
          <div>
            <A1HealthManaBars 
              playerName={playerName}
              characterStats={characterStats}
            />
          </div>
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
        <div>
          <A1HealthManaBars
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <p className="Wincon">
          If yOu WiN I HeLp yOu!
          <br></br>
          <br></br>
          <span>Current ATk: {characterStats.Atk} + 5</span>
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
};

export default A1Encounter;
