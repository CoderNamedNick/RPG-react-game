import React from "react";
import CharacterData from "./CharacterData";

const A1Fight = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const handleReturn = () => {
    onReturn(); // Call the onReturn function passed as a prop
  };

  const handleBasicAttack = () => {
    // Display an alert with the ATK value
    alert(`Basic Attack! DMG: ${characterStats.Atk}`);
  };

  const handleSkillAttack = () => {
    // Display an alert with the first skill's DMG value
    if (characterStats.Skills.length > 0) {
      const firstSkill = characterStats.Skills[0];
      alert(`Skill Attack! ${firstSkill.name} - DMG: ${firstSkill.damage}, ManaCost: ${firstSkill.manaCost}`);
      const updatedStats = {
        ...characterStats,
      };
      updatedStats.Mana = characterStats.Mana - firstSkill.manaCost
      updateCharacterStats(updatedStats);
    } else {
      alert("No skills available!");
    }
  };

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
