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
  const [ShowCharacterStats, setShowCharacterStats] = useState(false)
  const [PlayingGame1, setPlayingGame1] = useState(false);
  const [SecondPlayingGame1, setSecondPlayingGame1] = useState(false);
  const [SecondGame1, setSecondGame1] = useState(false);
  const [ThirdGame1, setThirdGame1] = useState(false);
  const [randomnum] = useState(() => Math.floor(Math.random() * 2) + 1);

  //I FIXED IT

  const handleReturn = () => {
    onReturn(); // return function
  };
  const handleCharacterstats = () => {
    setShowCharacterStats(!ShowCharacterStats)
  }

  const coinflip = (callback) => {
    const randomNum = Math.ceil(Math.random() * 2);
    if (randomNum === 1) {
      setHeads('yes');
      setTails('no');
    } else {
      setHeads('no');
      setTails('yes');
    }

    // Execute the callback with the updated values
    if (callback) {
      callback();
    }
  };

  const handleyesclick = () => {
    coinflip(() => setPlayingGame(true));
  };

  const handleyesclick2 = () => {
    coinflip(() => setSecondPlayingGame(true));
  };

  const handleyesclick3 = () => {
    coinflip(() => setPlayingGame1(true));
  };

  const handleyesclick4 = () => {
    coinflip(() => setSecondPlayingGame1(true));
  };

  

  if (randomnum === 1) {
    if (ThirdGame1) {
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

    if (SecondPlayingGame1) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick3 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats5 = {
            ...characterStats,
            Nils: characterStats.Nils + 15,
            Potions: characterStats.Potions + 1,
          };
          updateCharacterStats(updatedStats5);
          setThirdGame1(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats6 = {
            ...characterStats,
            MaxMana: characterStats.MaxMana - 10,
          };
          updateCharacterStats(updatedStats6);
          setThirdGame1(true)
        }
      }
      const handlTailsclick3 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats7 = {
            ...characterStats,
            Nils: characterStats.Nils + 15,
            Potions: characterStats.Potions + 1,
          };
          updateCharacterStats(updatedStats7);
          setThirdGame1(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats8 = {
            ...characterStats,
            MaxMana: characterStats.MaxMana - 10,
          };
          updateCharacterStats(updatedStats8);
          setThirdGame1(true)
        }
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


    if (SecondGame1) {
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
        <div className="C-div">
          {ShowCharacterStats &&(
            <div>
              <CharacterData
                playerName={playerName}
                updateCharacterStats={updateCharacterStats}
                characterStats={characterStats}
              />
            </div>
          )}
          <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
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
        <h2 onClick={handleyesclick4} className="h2yes">
          YES
        </h2>
        <h2 onClick={handleReturn} className="h2no">
          NO
        </h2>
      </div>
      )
    }



    if (PlayingGame1) {
      // Add your game logic here
      // You can return different content or components based on the game state
      
      const handlHeadsclick4 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats9 = {
            ...characterStats,
            Def: characterStats.Def + 5,
          };
          updateCharacterStats(updatedStats9);
          setSecondGame1(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats0 = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats0);
          setSecondGame1(true)
        }
      }
      const handlTailsclick4 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats11 = {
            ...characterStats,
            Def: characterStats.Def + 5,
          };
          updateCharacterStats(updatedStats11);
          setSecondGame1(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats12 = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats12);
          setSecondGame1(true)
        }
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
        <div className="C-div">
          {ShowCharacterStats &&(
            <div>
              <CharacterData
                playerName={playerName}
                updateCharacterStats={updateCharacterStats}
                characterStats={characterStats}
              />
            </div>
          )}
          <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
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
        <h2 onClick={handleyesclick3} className="h2yes">
          YES
        </h2>
        <h2 onClick={handleReturn} className="h2no">
          NO
        </h2>
      </div>
    );
  }

  //I ONLY WHANT THIS TO PLAY IF RANDOMNUM IS 2

  else if (randomnum === 2) {
    if (randomnum === 1) {
      alert('ERROR')
    }
    if (ThirdGame) {
      if (randomnum === 1) {
        alert('ERROR')
      }
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
      if (randomnum === 1) {
        alert('ERROR')
      }
      
      const handlHeadsclick2 = () => {
        if (Heads === 'yes') {
          alert('You WIn')
          const updatedStats13 = {
            ...characterStats,
            Def: characterStats.Def + 5,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats13);
          setThirdGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats14 = {
            ...characterStats,
            MaxHp: characterStats.MaxHp - 10,
          };
          updateCharacterStats(updatedStats14);
          setThirdGame(true)
        }
      }
      const handlTailsclick2 = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats15 = {
            ...characterStats,
            Def: characterStats.Def + 5,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats15);
          setThirdGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats16 = {
            ...characterStats,
            MaxHp: characterStats.MaxHp - 10,
          };
          updateCharacterStats(updatedStats16);
          setThirdGame(true)
        }
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
      if (randomnum === 1) {
        return
      }
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
        <div className="C-div">
          {ShowCharacterStats &&(
            <div>
              <CharacterData
                playerName={playerName}
                updateCharacterStats={updateCharacterStats}
                characterStats={characterStats}
              />
            </div>
          )}
          <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
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
          const updatedStats17 = {
            ...characterStats,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats17);
          setSecondGame(true)
        }
        if (Heads === 'no') {
          alert('You Lose')
          const updatedStats18 = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats18);
          setSecondGame(true)
        }
      }
      const handlTailsclick = () => {
        if (Tails === 'yes') {
          alert('You WIn')
          const updatedStats19 = {
            ...characterStats,
            Atk: characterStats.Atk + 5,
          };
          updateCharacterStats(updatedStats19);
          setSecondGame(true)
        }
        if (Tails === 'no') {
          alert('You Lose')
          const updatedStats20 = {
            ...characterStats,
            Hp: characterStats.Hp - 10,
          };
          updateCharacterStats(updatedStats20);
          setSecondGame(true)
        }
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
        <div className="C-div">
          {ShowCharacterStats &&(
            <div>
              <CharacterData
                playerName={playerName}
                updateCharacterStats={updateCharacterStats}
                characterStats={characterStats}
              />
            </div>
          )}
          <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
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
