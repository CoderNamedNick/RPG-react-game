import React from "react";
import eye from './eye-ball.png'
import mouth from './mouth-smile-clip-art-nicubunu_Mouth_with_teeth.png'
import coin from './naira.png'

const A1Encounter = ({onReturn}) => {

  const handleReturn = () => {
    onReturn(); //return function
  };

  return (
    <div className="Main-A1-Encounter-Div">
      hello
      <img className="eye" src={eye} alt="eye"></img>
      <img className="eye2" src={eye} alt="eye"></img>
      <img className="mouth" src={mouth} alt="mouth"></img>
      <img className="coin" src={coin} alt="coin"></img>
      <button onClick={handleReturn}>return</button>
    </div>
  )
}

export default A1Encounter;