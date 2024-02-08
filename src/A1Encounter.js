import React from "react";
import mouth from './mouth-smile-clip-art-nicubunu_Mouth_with_teeth.png'
import coin from './naira.png'

const A1Encounter = ({onReturn}) => {

  const handleReturn = () => {
    onReturn(); //return function
  };

  return (
    <div className="Main-A1-Encounter-Div">
      <img className="mouth" src={mouth} alt="mouth"></img>
      <img className="coin" src={coin} alt="coin"></img>
      <p className="Moms">pLaY A gAme WiTh Me</p>
      {//<button onClick={handleReturn}>return</button>}
      }   
      <p className="Wincon" >If yOu WiN I hEaL yOu!</p>
      <p className="Losecon" >If yOu LoSe I HuRt yOu!</p>
    </div>
  )
}

export default A1Encounter;