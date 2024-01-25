import React, { useState } from "react";

const StartGame = () => {
  // Initialize state for the name
  const [name, setName] = useState('');

  // Function to handle input changes and update the name state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can do something with the name here, like save it to local storage or pass it to another component
    console.log("Name submitted:", name);
  };

  return (
    <div>
        <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Use the value attribute to bind the input field to the name state */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange} // Call handleNameChange when the input changes
          />
        </div>
        <br />
        <div>
          <button type="submit">Start Game</button>
        </div>
      </form>
      {/* Display the name below the form */}
    </div>
  );
};

export default StartGame;