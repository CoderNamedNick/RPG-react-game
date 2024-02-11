import { useState} from "react"
import A1HealthManaBars from "./A1HealthManaBars"


const A1Town = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [ShowInnDescription, setShowInnDescription] = useState(false)

  const HandleInnHover = () => {
    setShowInnDescription(true)
  }
  const HandleInnExit = () => {
    setShowInnDescription(false)
  }

  return (
    <div className="Main-Town-Div">
      <div className="Town-Bars">
        <A1HealthManaBars 
          playerName={playerName}
          characterStats={characterStats}
        />
      </div>
      <div className="ROAD"></div>
      <h1>TOWN</h1>
      <div className="SHOPS  Shop1" onMouseOver={HandleInnHover} onMouseLeave={HandleInnExit}>
        <div className="Door"></div>
        <div className="Roof"></div>
        Inn
      </div>
      <div className="SHOPS  Shop2">
        <div className="Door"></div>
        <div className="Roof"></div>
        Shop2
      </div>
      <div className="SHOPS  Shop3">
        <div className="Door"></div>
        <div className="Roof"></div>
        Shop3
      </div>
      <div className="SHOPS  Shop4">
        <div className="Door"></div>
        <div className="Roof"></div>
        Shop4
      </div>
      {ShowInnDescription && (
        <div className="Hover-Descriptions">
        <h1>Inn</h1>
        <p>Revovers HP and Mana</p>
        <p>2 Nils</p>
      </div>
      )}
    </div>
  )
}

export default A1Town