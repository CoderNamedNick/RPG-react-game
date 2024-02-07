import React from "react";

const A1Encounter = ({onReturn}) => {

  const handleReturn = () => {
    onReturn(); //return function
  };

  return (
    <div>
      hello
      <button onClick={handleReturn}>return</button>
    </div>
  )
}

export default A1Encounter;