import React from "react";
import { useState } from "react";
import CharacterData from "./CharacterData";

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [FirstAction, setFirstAction] = useState(true)
  const [EnemyDefeated, setEnemyDefeated] = useState(false)

  const handleReturn = () => {
    onReturn(); // Call the onReturn function passed as a prop
  };

  const [FirstEnemyStats, setEnemyStats] = useState({
    name: '??',
    Hp: '??',
    Atk: '??',
    Def: '??',
    Mana: '??',
  });
  
  const DamageToEnemy = (Enemy, damage) => {
    if(Enemy.Hp <= 0){
      alert('you won')
      setEnemyDefeated(true)
      return null
    }
    const modifiedDef = Math.max(0, Enemy.Def - damage); // Calculate modified Defense
    const updatedEnstats = {
      ...Enemy,
      //Def: modifiedDef, // Use the modified Defense value for calculations
      Hp: Enemy.Hp - Math.max(0, damage - Enemy.Def), // Subtracting effective damage (max of 0 and damage - Def)
    };
    updateEnemyStats(updatedEnstats);
    return Math.max(0, Enemy.Def - modifiedDef); // Return Defense reduction
  };
  
  const handleBasicAttack = () => {
    if(FirstEnemyStats.Hp <= 0){
      alert('you won')
      setEnemyDefeated(true)
      return null
    }
    if (!FirstAction) {
      // Display an alert with the true damage dealt
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
  
  const updateEnemyStats = (updatedEnStats) => { 
    setEnemyStats(updatedEnStats);
  };

  let combatstart = () => {
    alert("Combat Has started")
    const updatedEnStats = {
      ...FirstEnemyStats,
      name: 'Goblin',
      Hp: 80,
      Atk: 12,
      Def: 4,
      Mana: 5,
    }
    updateEnemyStats(updatedEnStats)
    setFirstAction(false);
  }

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

   return DMGdealt
  }
};

const handleSkillAttack = () => {
  if(FirstEnemyStats.Hp <= 0){
    alert('you won')
    setEnemyDefeated(true)
    return null
  }
  if (FirstAction) {
    combatstart();
  } else {

    if (characterStats.Skills.length > 0) {
      const firstSkill = characterStats.Skills[0];

      if (characterStats.Mana >= firstSkill.manaCost) {
        DamageToEnemy(FirstEnemyStats, firstSkill.damage);

        //alert(`Skill Attack! ${firstSkill.name} - DMG: ${firstSkill.damage}, ManaCost: ${firstSkill.manaCost}, True DMG: ${firstSkill.damage - skilldps}`);

        let EnemyDmg = EnemyTurn()

        // Update character stats only if the skill can be used
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

  if (EnemyDefeated) {
    return <div> hello </div>;
  }
  return (
    <div>
      <h1>FIGHT</h1>
      {/* make a cool fight scene with skills and think of an enemy to fight */}
      <div>
        <CharacterData
          playerName={playerName}
          updateCharacterStats={updateCharacterStats}
          characterStats={characterStats}
        />
      </div>
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
          Basic Attack
        </div>
        {characterStats.Skills.length > 0 && (
          <div className="CombatMoves move2" onClick={handleSkillAttack}>
            {characterStats.Skills[0].name}
          </div>
        )}
        {/* Display other skills as needed */}
        <div className="CombatMoves move3">Observe</div>
        <div className="CombatMoves move4">Run</div>
      </div>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default A1Fight;
