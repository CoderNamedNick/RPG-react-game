import React, { useState, useEffect } from "react";
import CharacterData from "./CharacterData";
import goblin from "./goblin-18.png";

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [FirstAction, setFirstAction] = useState(true);
  const [EnemyDefeated, setEnemyDefeated] = useState(false);
  const [ShowCharacterStats, setShowCharacterStats] = useState(false)
  const [ShowGoblin, setShowGoblin] = useState(false)

  const handleReturn = () => {
    onReturn(); //return function
  };
  const handleCharacterstats = () => {
    setShowCharacterStats(!ShowCharacterStats)
  }

  //This is Enemy stats and and attacks
  const [FirstEnemyStats, setEnemyStats] = useState({
    name: '??',
    Hp: '??',
    Atk: '??',
    Def: '??',
    Mana: '??',
  });
  const updateEnemyStats = (updatedEnStats) => {
    setEnemyStats(updatedEnStats);
  };
  let combatstart = () => {
    alert("Combat Has started");
    const updatedEnStats = {
      ...FirstEnemyStats,
      name: 'Goblin',
      Hp: 80,
      Atk: 12,
      Def: 4,
      Mana: 5,
    };
    updateEnemyStats(updatedEnStats);
    setFirstAction(false);
    setShowGoblin(true)
  };
  const EnemyTurn = () => {
    if (FirstAction) {
      combatstart();
    } else {
      let EnemyAtk = FirstEnemyStats.Atk;
      let CharacterDef = characterStats.Def / 1.5;
      alert("Cd:" + Math.round(CharacterDef) + 'EA:' + EnemyAtk);
      let DmgDealt = Math.max(0, EnemyAtk - CharacterDef);
      let DMGdealt = Math.round(DmgDealt);
      alert(DMGdealt);

      return DMGdealt;
    }
  };
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
    if (FirstEnemyStats.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }
    if (!FirstAction) {
      const dps = DamageToEnemy(FirstEnemyStats, characterStats.Atk);
      alert(`Basic Attack! DMG: ${characterStats.Atk}, True Damage Dealt: ${characterStats.Atk - dps}`);
      let EnemyDmg = EnemyTurn();
      const updatedStats = {
        ...characterStats,
        Hp: characterStats.Hp - EnemyDmg,
      };
      updateCharacterStats(updatedStats);
    } else {
      combatstart();
    }
  };
  const handleSkillAttack = () => {
    if (FirstEnemyStats.Hp <= 0) {
      setEnemyDefeated(true);
      return null;
    }
    if (FirstAction) {
      combatstart();
    } else {
      if (characterStats.Skills.length > 0) {
        const firstSkill = characterStats.Skills[0];

        if (characterStats.Mana >= firstSkill.manaCost) {
          DamageToEnemy(FirstEnemyStats, firstSkill.damage);

          let EnemyDmg = EnemyTurn();

          const updatedStats = {
            ...characterStats,
            Hp: characterStats.Hp - EnemyDmg,
            Mana: characterStats.Mana - firstSkill.manaCost,
          };
          updateCharacterStats(updatedStats);

        } else {
          alert("Not enough mana to use this skill!");
        }
      } else {
        alert("No skills available!");
      }
    }
  };
  //on Observation
  const handleObsertaion = () => {
    combatstart();
  }

  // useEffect to execute a function after EnemyDefeated changes to true
  useEffect(() => {
    if (EnemyDefeated) {
      // Call the function you want to execute after the enemy is defeated
      handleAfterEnemyDefeated();
    }
  }, [EnemyDefeated]); // The effect will re-run whenever EnemyDefeated changes

  const handleAfterEnemyDefeated = () => {
    // Your logic for what should happen after the enemy is defeated
    alert("Congratulations! You've defeated the enemy. Performing post-defeat actions...");
  };

  if (EnemyDefeated) {
    return (
      <div>
        <h1>LVL UP!</h1>
        <div>
          <CharacterData
            playerName={playerName}
            updateCharacterStats={updateCharacterStats}
            characterStats={characterStats}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>FIGHT</h1>
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
      {ShowGoblin && (
        <div className="goblin-div">
          <img className="Goblin-PNG" src={goblin} alt="Goblin"></img>
        </div>
      )}
      <button onClick={handleCharacterstats}>Stats</button>
      <div className="EnemyStats">
        {/* Display EnemyStats */}
        <p>Name: {FirstEnemyStats.name}</p>
        <p>HP: {FirstEnemyStats.Hp}</p>
        <p>ATK: {FirstEnemyStats.Atk}</p>
        <p>DEF: {FirstEnemyStats.Def}</p>
        <p>Mana: {FirstEnemyStats.Mana}</p>
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
        <div onClick={handleObsertaion} className="CombatMoves move3">
          <h2>Observe</h2>
        </div>
        <div className="CombatMoves move4">
          <h2>Run</h2>
        </div>
      </div>
    </div>
  );
};

export default A1Fight;
