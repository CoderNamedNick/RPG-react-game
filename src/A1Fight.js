import React from "react";

const A1Fight = ({ onReturn }) => {
  const handleReturn = () => {
    onReturn(); // Call the onReturn function passed as a prop
  };

  return (
    <div>
      <h1>FIGHT</h1>
      <button onClick={handleReturn}>Return</button>
    </div>
  );
};

export default A1Fight;
