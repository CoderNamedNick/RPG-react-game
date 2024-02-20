import React, { useState, useEffect } from "react";
import CharacterData from "./CharacterData";
import A1HealthManaBars from "./A1HealthManaBars";
import slash from './images/pixil-frame-0.png'
import potion from './images/love-potion.png'

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn, Enemystats, updateEnemyStats, enemyImage }) => {
  const [FirstAction, setFirstAction] = useState(true);
  const [EnemyDefeated, setEnemyDefeated] = useState(false);
  const [ShowCharacterStats, setShowCharacterStats] = useState(false)
  const [ShowEnemy, setShowEnemy] = useState(false)
  const [ShowSlash, setShowSlash] = useState(false)
  const [ShowFightBTN, setShowFightBTN] = useState(false)
  const [FightBtnDisabled, setFightBtnDisabled] = useState(false);
  const [ShowReturnBTN, setShowReturnBTN] = useState(false)
  const [RewardBtnDisabled, setRewardBtnDisabled] = useState(false);
  const [FirstActionCompleted, setFirstActionCompleted] = useState(false);
  const [observation, setobservation] = useState(false);
  const [trueDamageDealt, setTrueDamageDealt] = useState(null);
  const [isCharacterDead, setIsCharacterDead] = useState(false);
  useEffect(() => {
    if (Enemystats.Hp <= 0) {
      // Call the function you want to execute after the enemy is defeated
      handleAfterEnemyDefeated();
    }
  }, [EnemyDefeated]);
  useEffect(() => {
    if (characterStats.Hp <= 0) {
      // Call the function you want to execute after the character dies
      handleCharacterDeath();
    }
  }, [characterStats.Hp]);

  const handleReturn = () => {
    onReturn(); //return function
  };
  const handleCharacterstats = () => {
    setShowCharacterStats(!ShowCharacterStats)
  }

  //This is Enemy stats and and attacks
  useEffect(() => {
    // This effect runs when the component mounts
    // Set initial enemy stats using the passed Enemystats
    const updatedEnStats = { ...Enemystats };
    updateEnemyStats(updatedEnStats);
  }, [Enemystats]); // The empty dependency array ensures it only runs once when the component mounts

  const combatstart = (enemyStats) => {
    alert("Combat Has started");

    // Use the passed enemy stats to initialize the combat
    const updatedEnStats = { ...enemyStats };

    // Update the enemy stats
    updateEnemyStats(updatedEnStats);

    setFirstAction(false);
    setShowEnemy(true);

    setTimeout(() => {
      setFirstActionCompleted(true);
    }, 500);
  };
  const EnemyTurn = () => {
    if (FirstAction) {
      combatstart(Enemystats);
      return
    } else {
      const randomNumber = Math.floor(Math.random() * 5 + 1);
      if (randomNumber === 5) {
        alert('Enemy Used Skill')
        if (Enemystats.Mana < 5) { 
          alert('Enemy Skill failed')
          let DMGdealt = 0
          return DMGdealt;
        }
        const updatedStats = {
          ...Enemystats,
          Mana: Enemystats.Mana - 5,
        };
        updateEnemyStats(updatedStats);
        let EnemyAtk = Enemystats.Atk + 10;
        let CharacterDef = characterStats.Def / 1.5;
        let DmgDealt = Math.max(0, EnemyAtk - CharacterDef);
        let DMGdealt = Math.round(DmgDealt)
        return DMGdealt;
      }
      let EnemyAtk = Enemystats.Atk;
      let CharacterDef = characterStats.Def / 1.5;
      let DmgDealt = Math.max(0, EnemyAtk - CharacterDef);
      let DMGdealt = Math.round(DmgDealt);
  
      // Return the calculated damage value
      return DMGdealt;
    }
  };
  
  // Use useEffect to update the state after the component has rendered
  useEffect(() => {
    if (!FirstAction) {
      const damageDealt = EnemyTurn();
  
      // Update the enemy stats outside the rendering phase
      const updatedEnstats = {
        ...Enemystats,
        Hp: Enemystats.Hp - damageDealt,
      };
      updateEnemyStats(updatedEnstats);
    }
  }, [FirstAction]);
  //THIS IS PLAYER ATTACKS AND STATS
  const DamageToEnemy = (Enemy, damage) => {
    if (Enemy.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }

    const modifiedDef = Math.max(0, Enemy.Def - damage);
    const updatedEnstats = {
      ...Enemy,
      Hp: Enemy.Hp - Math.max(0, damage - Enemy.Def),
    };
    updateEnemyStats(updatedEnstats);
  
    return Math.max(0, Enemy.Def - modifiedDef);
  };
  const handleBasicAttack = () => {
    if (observation) {
      return;
    }
    if (Enemystats.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }
    if (!FirstAction) {
      const dps = DamageToEnemy(Enemystats, characterStats.Atk);
      const trueDamageDealt = characterStats.Atk - dps;
      setTrueDamageDealt(trueDamageDealt);
      let EnemyDmg = EnemyTurn();
      setShowSlash(true);
  
      // Use setTimeout to hide the slash after 2000 milliseconds (2 seconds)
      setTimeout(function () {
        setShowSlash(false);
      }, 700);
      if (characterStats.Mana < characterStats.MaxMana) {
        const updatedStats = {
          ...characterStats,
          Hp: characterStats.Hp - EnemyDmg,
          Mana: characterStats.Mana + 1,
        };
        updateCharacterStats(updatedStats);
      } else {
        const updatedStats = {
          ...characterStats,
          Hp: characterStats.Hp - EnemyDmg,
        };
        updateCharacterStats(updatedStats);
      }
    } else {
      combatstart(Enemystats);
    }
  };
  const handleSkillAttack = () => {
    if (observation) {
      return;
    }
    if (Enemystats.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }
    if (FirstAction) {
      combatstart(Enemystats);
    } else {
      if (characterStats.Skills.length > 0) {
        const firstSkill = characterStats.Skills[0];

        if (characterStats.Mana >= firstSkill.manaCost) {
          DamageToEnemy(Enemystats, firstSkill.damage);

          const dps = DamageToEnemy(Enemystats, firstSkill.damage);
          const trueDamageDealt = firstSkill.damage - dps;
          setTrueDamageDealt(trueDamageDealt);

          let EnemyDmg = EnemyTurn();
          setShowSlash(true);
  
          // Use setTimeout to hide the slash after 2000 milliseconds (2 seconds)
          setTimeout(function () {
            setShowSlash(false);
          }, 700);
          if (characterStats.Mana < characterStats.MaxMana + 1) {
            const updatedStats = {
              ...characterStats,
              Hp: characterStats.Hp - EnemyDmg,
              Mana: characterStats.Mana - firstSkill.manaCost + 1,
            };
            updateCharacterStats(updatedStats);
          } else {
            const updatedStats = {
              ...characterStats,
              Hp: characterStats.Hp - EnemyDmg,
              Mana: characterStats.Mana - firstSkill.manaCost
            };
            updateCharacterStats(updatedStats);
          }

        } else {
          alert("Not enough mana to use this skill!");
        }
      } else {
        alert("No skills available!");
      }
    }
  };
  //on Observation + Run
  const handleObsertaion = () => {
    setobservation(true)
    if (FirstActionCompleted) {
      return;
    }
    if (ShowEnemy) {
      return;
    }
    setShowEnemy(true)
    setTimeout(function () {
      setShowEnemy(false);
    }, 2000);
    const updatedEnStats = { ...Enemystats };
    updateEnemyStats(updatedEnStats);
    setTimeout(function () {
      const updatedEnStats2 = {
        ...Enemystats,
        name: '??',
        Hp: '??',
        Atk: '??',
        Def: '??',
        Mana: '??',
      };
      updateEnemyStats(updatedEnStats2);
    }, 2000);
    setTimeout(function () {
      setShowFightBTN(true)
      setobservation(false)
    }, 2000);
  }
  const handleFight = () => {
    if (FirstActionCompleted) {
      return;
    }
    if (ShowEnemy) {
      return;
    }
    combatstart(Enemystats);
    setFightBtnDisabled(true);
  }
  const handleRun = () => {
    alert(playerName + ' can not escape')
  }

  const handleCharacterDeath = () => {
    // Your logic for what should happen when the character dies
    alert("YOU DIED");
    setIsCharacterDead(true);
    // You might want to perform additional actions, such as resetting the game or navigating to a game-over screen.
  };

  if (isCharacterDead) {
    return (
      <div className="YouDiedScreen">
        <h1>YOU DIED</h1>
        <h2>{`${playerName} was a Hero And Died while fighting a ${Enemystats.name}`}</h2>
        <p>Refresh Page to restart</p>
      </div>
    );
  }

  //after Fight
 // The effect will re-run whenever EnemyDefeated changes
  const handleAfterEnemyDefeated = () => {
    // Your logic for what should happen after the enemy is defeated
    alert("Congratulations! You've defeated the enemy. Performing post-defeat actions...");
    if (Enemystats.type === 'Boss'){
      let HpMissing = characterStats.MaxHp - characterStats.Hp
      let ManaMissing = characterStats.MaxMana - characterStats.Mana
      const updatedStats = {
        ...characterStats,
        Hp: characterStats.Hp + HpMissing,
        Mana: characterStats.Mana + ManaMissing,
        LVL: characterStats.LVL + 1,
        Nils: characterStats.Nils + 25,
      };
      updateCharacterStats(updatedStats);
    }
    else{
      const updatedStats = {
        ...characterStats,
        LVL: characterStats.LVL + 1,
        Nils: characterStats.Nils + 10,
      };
      updateCharacterStats(updatedStats);
    }
  };

  const handleRewardDivs = (param) => {
    if (RewardBtnDisabled) {
      // Do nothing if the reward button is disabled
      return;
    }
    if (param === 1) {
      const updatedStats = {
        ...characterStats,
        MaxHp: characterStats.MaxHp + 10,
        MaxMana: characterStats.MaxMana + 5,
      };
      updateCharacterStats(updatedStats);
      setRewardBtnDisabled(true);
    }
    if (param === 2) {
      const updatedStats = {
        ...characterStats,
        Atk: characterStats.Atk + 5,
        Def: characterStats.Def + 5,
      };
      updateCharacterStats(updatedStats);
      setRewardBtnDisabled(true);
    }
    if (param === 3) {
      const items = [
        { range: [1], item: 'Heart Pendant, ', attributes: ['MaxHp'], increases: [25] },
        { range: [2], item: 'Skill Pendant, ', attributes: ['Skills.damage'], increases: [10] },
        { range: [3], item: 'Mana Ring, ', attributes: ['MaxMana'], increases: [10] },
        { range: [4], item: 'Pouch of Nil, ', attributes: ['Nils'], increases: [20] },
      ];
      const ItemNumb = Math.floor(Math.random() * 4) + 1; // Adjust range to cover 1, 2, and 3
      const selectedItem = items.find((item) => ItemNumb === item.range[0]);
  
      if (selectedItem) {
        alert(`you got a ${selectedItem.item} ${selectedItem.attributes[0]}: + ${selectedItem.increases[0]}`);
  
        const updatedStats = {
          ...characterStats,
        };
  
        if (selectedItem.attributes && selectedItem.increases && selectedItem.attributes.length === selectedItem.increases.length) {
          selectedItem.attributes.forEach((attribute, index) => {
            updatedStats[attribute] = characterStats[attribute] + selectedItem.increases[index];
          });
        }
  
        updatedStats.Inventory = Array.isArray(characterStats.Inventory) ? characterStats.Inventory : [];
  
        if (selectedItem.item && selectedItem.item.length > 0) {
          updatedStats.Inventory = [...updatedStats.Inventory, selectedItem.item];
        }
  
        // Check if the item is Skill Pendant
        if (selectedItem.item === 'Skill Pendant, ') {
          // Check if the character has Skills array
          if (updatedStats.Skills) {
            // Increase the damage of the first skill by 10
            updatedStats.Skills[0].damage += 10;
          } else {
            // If Skills array doesn't exist, create it with the first skill
            updatedStats.Skills = [
              { name: 'Basic Skill', damage: 10, manaCost: 5 },
              // Add more skills as needed
            ];
          }
        }
  
        updateCharacterStats(updatedStats);
        setRewardBtnDisabled(true);
      } else {
        console.error("No matching item found for random number:", ItemNumb);
      }
    }
  
    // setRewardBtnDisabled(true); // This line was repeated, removed to avoid redundancy
    setShowReturnBTN(true);
  };

  if (EnemyDefeated) {
    return (
      <div className="Lvl-up-main-div">
        <h1>LVL UP!</h1>
        <h2 className="Lvlh2">{`LVL ${characterStats.LVL - 1} => LVL ${characterStats.LVL}`}</h2>
        <br></br>
        <br></br>
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
        <h2>Choose a Reward</h2>
        <div className="Reward-main-div">
          <div 
            className={`Reward-Div1 ${RewardBtnDisabled ? 'disabled' : ''}`}
            onClick={() => {handleRewardDivs(1)}}
            disabled={RewardBtnDisabled}
          >
            <p>MaxHp: {characterStats.MaxHp} + 10</p>
            <p>MaxMana: {characterStats.MaxMana} + 5</p>
          </div>
          <div
            className={`Reward-Div2 ${RewardBtnDisabled ? 'disabled' : ''}`}
            onClick={() => {handleRewardDivs(2)}}
            disabled={RewardBtnDisabled}
          >
            <p>Atk: {characterStats.Atk} + 5</p>
            <p>Def: {characterStats.Def} + 5</p>
          </div>
          <div 
            className={`Reward-Div3 ${RewardBtnDisabled ? 'disabled' : ''}`}
            onClick={() => {handleRewardDivs(3)}}
            disabled={RewardBtnDisabled}
          >
            <p>Get a Random Item</p>
          </div>
        </div>
        {ShowReturnBTN && (
          <button className="Return-BTN" onClick={handleReturn}>Return</button>
        )}
      </div>
    );
  }

  return (
    <div>
      {/* make a cool fight scene with skills and think of an enemy to fight */}
      {ShowCharacterStats &&(
        <div>
          <CharacterData
            playerName={playerName}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {ShowEnemy && (
        <div className="Main-gob-div">
          <div className="dps-div">
            {ShowSlash && (
              <p className="DPS-num"> - {trueDamageDealt !== null ? trueDamageDealt : "DISPLAY DAMAGE HERE"}</p>
            )}
          </div>
          <div className="goblin-div">
            <img className="Enemy-PNG" src={enemyImage} alt="Enemy"></img>
            {ShowSlash && (
              <img className="Slash-PNG" src={slash} alt="Slash"></img>
            )}
          </div>
        </div>
      )}
      <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
      <div>
        <A1HealthManaBars 
          playerName={playerName}
          characterStats={characterStats}
        />
      </div>
      {!ShowEnemy && (
        <div className="EnemyStats">
        {/* Display EnemyStats */}
        <p>Name: ??</p>
        <p>HP: ??</p>
        <p>ATK: ??</p>
        <p>DEF: ??</p>
        <p>Mana: ??</p>
      </div>
      )}
      {ShowEnemy && (
         <div className="EnemyStats">
         {/* Display EnemyStats */}
         <p>Name: {Enemystats.name}</p>
         <p>HP: {Enemystats.Hp}</p>
         <p>ATK: {Enemystats.Atk}</p>
         <p>DEF: {Enemystats.Def}</p>
         <p>Mana: {Enemystats.Mana}</p>
       </div>
      )}
      <div className="potion-div">
        <img className="potion-img" src={potion} alt="potion"></img>
      </div>
      <div className="PlayerCombatMovesDiv">
        <div className="CombatMoves move1" onClick={handleBasicAttack}>
          <h2>Basic Attack</h2>
          <h3>dmg: {characterStats.Atk}</h3>
        </div>
        {characterStats.Skills.length > 0 && (
          <div className="CombatMoves move2" onClick={handleSkillAttack}>
            <h1>{characterStats.Skills[0].name}</h1>
            <h2>dmg: {characterStats.Skills[0].damage}</h2>
          </div>
        )}
        {/* Display other skills as needed */}
        {!ShowFightBTN && (
          <div 
            onClick={handleObsertaion}
            className={`CombatMoves move3`}
          >
            <h2>Observe</h2>
          </div>
        )}
        {ShowFightBTN && (
          <button
            onClick={handleFight}
            className={`CombatMoves move3 ${FightBtnDisabled ? 'disabled' : ''}`}
            disabled={FightBtnDisabled}
          >
            <h2>Fight</h2>
          </button>
        )}
        <div onClick={handleRun} className="CombatMoves move4">
          <h2>Run</h2>
        </div>
      </div>
    </div>
  );
};

export default A1Fight;
