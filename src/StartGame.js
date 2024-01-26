import React, { useState } from "react";

const StartGame = ({ updatePlayerName, onFinish }) => {
  // Initialize state for the name and error message
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  // Function to handle input changes and update the name state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Check if the name is not empty
    if (name.trim() === '') {
      setError('Very Funny! But Type Something.'); // Set error message if the name is empty
    } else {
      setError(''); // Clear any existing error messages
      // You can do something with the name here, like save it to local storage or pass it to another component
      console.log("Name submitted:", name);
      updatePlayerName(name);
      onFinish(); // Call onFinish when the form is submitted
    }
  };

  return (
    <div>
      <h1 className="Moms">{name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Use the value attribute to bind the input field to the name state */}
          <input
            type="text"
            placeholder="CharacterName"
            value={name}
            onChange={handleNameChange} // Call handleNameChange when the input changes
          />
        </div>
        {/* Display error message if there is one */}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <br />
        <div>
          <button type="submit">Start Game</button>
        </div>
      </form>
    </div>
  );
};

export default StartGame;