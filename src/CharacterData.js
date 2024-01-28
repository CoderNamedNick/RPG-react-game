const CharacterData = ({ playerName }) => {
  const data = {
    PlayerName: playerName,
    Hp: 100,
    Atk: 10,
    Def: 10,
    Mana: 0,
    Inventory: {}
  };

  // Extracting data from the object
  const { PlayerName, Hp, Atk, Def, Mana } = data;

  return (
    <div>
      <h2>Player Name: {PlayerName}</h2>
      <p>HP: {Hp}</p>
      <p>Attack: {Atk}</p>
      <p>Defense: {Def}</p>
      <p>Mana: {Mana}</p>
      {/* Render Inventory if needed */}
    </div>
  );
};

export default CharacterData;