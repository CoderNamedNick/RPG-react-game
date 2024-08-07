import React, { useState, useEffect } from "react";
import CharacterData from "../CharacterData";
import A1HealthManaBars from "../A1HealthManaBars";
import slash from '../images/pixil-frame-0.png'
import potion from '../images/love-potion.png'

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn, Enemystats, updateEnemyStats, enemyImage }) => {
  const [FirstAction, setFirstAction] = useState(true);
  const [EnemyDefeated, setEnemyDefeated] = useState(false);
  const [ShowCharacterStats, setShowCharacterStats] = useState(true)
  const [ShowTutorial, setShowTutorial] = useState(false)
  const [ShowTutorialBtn, setShowTutorialBtn] = useState(true)
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
      handleAfterEnemyDefeated();
    }
  }, [EnemyDefeated]);
  useEffect(() => {
    if (characterStats.Hp <= 0) {
      handleCharacterDeath();
    }
  }, [characterStats.Hp]);

  const handleReturn = () => {
    onReturn(); 
  };
  const handleCharacterstats = () => {
    setShowCharacterStats(!ShowCharacterStats)
  }
  const tutorialbtnclick = () => {
    setShowCharacterStats(false)
    setShowTutorial(!ShowTutorial)
  }

  useEffect(() => {
    const updatedEnStats = { ...Enemystats };
    updateEnemyStats(updatedEnStats);
  }, [Enemystats]); 

  const combatstart = (enemyStats) => {
    setShowCharacterStats(false)
    alert("Combat Has started");

    const updatedEnStats = { ...enemyStats };

    updateEnemyStats(updatedEnStats);

    setFirstAction(false);
    setShowEnemy(true);
    setShowTutorial(false)
    setShowTutorialBtn(false)

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

      return DMGdealt;
    }
  };

  useEffect(() => {
    if (!FirstAction) {
      const damageDealt = EnemyTurn();

      const updatedEnstats = {
        ...Enemystats,
        Hp: Enemystats.Hp - damageDealt,
      };
      updateEnemyStats(updatedEnstats);
    }
  }, [FirstAction]);
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

  const handleObsertaion = () => {
    setobservation(true)
    setShowTutorialBtn(false)
    setShowTutorial(false)
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
  const handleMana = () => {
    if (Enemystats.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }
    if (characterStats.Mana >= characterStats.MaxMana) {
      alert('already full mana')
      return
    }
    let EnemyDmg = EnemyTurn();
    let manaRegen = Math.floor(characterStats.MaxMana / 6)
    const updatedStats = {
      ...characterStats,
      Hp: characterStats.Hp - EnemyDmg,
      Mana: characterStats.Mana + manaRegen,
    };
    updateCharacterStats(updatedStats);
  }

  const handleCharacterDeath = () => {
    alert("YOU DIED");
    setIsCharacterDead(true);
  };

  if (isCharacterDead) {
    return (
      <div className="YouDiedScreen">
        <h1>YOU DIED</h1>
        <h2 className="h2-death">{`${playerName} was a Hero And Died while fighting a ${Enemystats.name}`}</h2>
        <div className="deathdata">
          <p>LVL: {characterStats.LVL}</p>
          <p>MaxHP: {characterStats.MaxHp}</p>
          <p>Attack: {characterStats.Atk}</p>
          <p>Defense: {characterStats.Def}</p>
          <p>MaxMana: {characterStats.MaxMana}</p>
          <div>
            <ul>
              {characterStats.Skills.map((skill, index) => (
                <li key={index}>
                  {skill.name} - Damage: {skill.damage}, ManaCost: {skill.manaCost}
                </li>
              ))}
            </ul>
          </div>
          <p>Inventory: {characterStats.Inventory}</p>
          <p>Nils: {characterStats.Nils}</p>
          <p>Potions: {characterStats.Potions}</p>
        </div>
        <h2>Refresh Page to restart</h2>
      </div>
    );
  }

  const handleAfterEnemyDefeated = () => {
    alert("Congratulations! You've defeated the enemy. Performing post-defeat actions...");
    if (Enemystats.type === 'FinalBoss'){
      return
    }
    if (Enemystats.type === 'Boss'){
      if (characterStats.Hp >= characterStats.MaxHp && characterStats.Mana <= characterStats.MaxMana){
        let ManaMissing = characterStats.MaxMana - characterStats.Mana
        const updatedStats3 = {
          ...characterStats,
          LVL: characterStats.LVL + 1,
          Nils: characterStats.Nils + 25,
          Mana: characterStats.Mana + ManaMissing,
        };
        updateCharacterStats(updatedStats3);
        return
      }
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
  const handlepotionclick = () => {
    if (characterStats.Potions <= 0) {
      alert(`you have no Potions`)
      return
    }
    const updatedStats = {
      ...characterStats,
      Hp: characterStats.Hp + 50,
      Potions: characterStats.Potions - 1,
    };
    updateCharacterStats(updatedStats);
  }

  const handleRewardDivs = (param) => {
    if (RewardBtnDisabled) {
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
        { range: [2], item: 'Atk Pendant, ', attributes: ['Atk'], increases: [8] },
        { range: [3], item: 'Mana Ring, ', attributes: ['MaxMana'], increases: [10] },
        { range: [4], item: 'Pouch of Nil, ', attributes: ['Nils'], increases: [20] },
        { range: [5], item: 'Pair of Potions, ', attributes: ['Potions'], increases: [2] },
      ];
      const ItemNumb = Math.floor(Math.random() * 5) + 1; // Adjust range to cover 1, 2, and 3
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
  
        updateCharacterStats(updatedStats);
        setRewardBtnDisabled(true);
      } else {
        console.error("No matching item found for random number:", ItemNumb);
      }
    }
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
    <div className="Fight-main-Div">
      {ShowCharacterStats &&(
        <div>
          <CharacterData
            playerName={playerName}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      )}
      {ShowTutorialBtn && (
        <button onClick={tutorialbtnclick} className="Tutorial-btn">Tutorial?</button>
      )}
      {ShowTutorial && (
        <div className="MainTut-div">
          <h2>Rules Of combat</h2>
          <p>
            You start by not knowing who or what you opponent is To find out before you fight you can OBSERVE. After seeing you enemy you can choose to start combat.
            You may also start combat by pressing any attack command! When in combat you take turns fighting but the enemy attacks first
            so watch your HP at the top right if you take to much damge the health pots to the left heal you for 50 hp.
            Occasionally your attacks can miss so try to be as lucky as you can.
            Opponents also have stats the more you play the stronger foes await.
            To see your stats just press the "Player Stats" button on the top left. When entering a fight space it is shown by default.
          </p>
          <h2>Commands</h2>
          <p>
            BASIC ATTACK- To fight use your Attack commands at the bottom. Basic attack does the damage of your ATK stat - part of enemies def stat.
            <br></br>
            SKILLS- damge with skills vary with different stats you raise! for example the Sword skill "SLASH" does more damage based off your Atk stat.
            You can only use your skill sparingly "some more than others" check how much mana is required in the Player Stats. 
            Opponents can use skills to and deal more damage than regularly
            <br></br>
            RECOVER MANA- after every attack you recover 1 mana the more your Max mana raises you can use this to restore 1/5th of Max Mana
            at the cost of taking a hit.
          </p>
          <h1>BEST OF LUCK</h1>
          <h2 style={{cursor: "pointer", color: 'red'}} onClick={tutorialbtnclick}>Exit</h2>
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
        <p>Name: ??</p>
        <p>HP: ??</p>
        <p>ATK: ??</p>
        <p>DEF: ??</p>
        <p>Mana: ??</p>
      </div>
      )}
      {ShowEnemy && (
         <div className="EnemyStats">
         <p>Name: {Enemystats.name}</p>
         <p>HP: {Enemystats.Hp}</p>
         <p>ATK: {Enemystats.Atk}</p>
         <p>DEF: {Enemystats.Def}</p>
         <p>Mana: {Enemystats.Mana}</p>
       </div>
      )}
      <div className="potion-div" onClick={handlepotionclick}>
        <img className="potion-img" src={potion} alt="potion"></img>
        <p className="potion-p">x {characterStats.Potions}</p>
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
        <div onClick={handleMana} className="CombatMoves move4">
          <h2>Recover Mana</h2>
        </div>
      </div>
    </div>
  );
};

export default A1Fight;