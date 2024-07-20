import React, { useState } from "react";

const StartGame = ({ updatePlayerName, onFinish }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (name.trim() === '') {
      setError('Very Funny! But Type Something.');
    } else {
      setError('');
      updatePlayerName(name);
      onFinish(); 
    }
  };

  return (
    <div className="StartGameDiv">
      <h1 className="Moms">{name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="SGinput"
            type="text"
            placeholder="CharacterName"
            value={name}
            onChange={handleNameChange} 
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <br />
        <div>
          <button className="SGbtn" type="submit">Start Game</button>
        </div>
      </form>
    </div>
  );
};

export default StartGame;