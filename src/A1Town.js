import { useState} from "react"
import A1HealthManaBars from "./A1HealthManaBars"
import floor from './—Pngtree—wooden floor 2 way texture_6978182.png'


const A1Town = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [ShowInnDescription, setShowInnDescription] = useState(false)
  const [ShowInn, setShowInn] = useState(false)
  const [ShowAmorSHopDescription, setShowAmorSHopDescription] = useState(false)
  const [ShowArmor, setShowArmor] = useState(false)
  const [ShowWeaponShopDescription, setShowWeaponShopDescription] = useState(false)
  const [ShowItemShopDescription, setShowItemShopDescription] = useState(false)

  const handleLeaveclick =() => {
    onReturn()
  }
  const HandleInnHover = () => {
    setShowInnDescription(true)
  }
  const HandleInnClick = () => {
    setShowInn(true)
  }
  const HandleArmorClick = () => {
    setShowArmor(true)
  }
  const HandlExits = () => {
    setShowInnDescription(false)
    setShowAmorSHopDescription(false)
    setShowWeaponShopDescription(false)
    setShowItemShopDescription(false)
  }
  const HandleArmorHover = () => {
    setShowAmorSHopDescription(true)
  }
  const HandleWeaponHover = () => {
    setShowWeaponShopDescription(true)
  }
  const HandleItemHover = () => {
    setShowItemShopDescription(true)
  }

  if (ShowArmor) {
    return (
      <div className="Inn-main-div">
        <h1>Armor Shop</h1>
        <img className="Floor" src={floor} alt="floor"></img>
        <div className="Item-div">
          <h1 className="Moms Items">??</h1>
          <h1 className="Moms Items">??</h1>
          <h1 className="Moms Items">??</h1>
          <h1 className="Moms Items">??</h1>
          <h1 className="Moms Items">??</h1>
          <h1 className="Moms Items">??</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="Main-Town-Div">
      <div className="Town-Bars">
        <A1HealthManaBars 
          playerName={playerName}
          characterStats={characterStats}
        />
      </div>
      <div className="Leave-div" onClick={handleLeaveclick}>
        <h1>Leave</h1>
      </div>
      <div className="ROAD"></div>
      <h1>TOWN</h1>
      <div className="SHOPS  Shop1" onClick={HandleInnClick} onMouseOver={HandleInnHover} onMouseLeave={HandlExits}>
        <div className="Door"></div>
        <div className="Roof"></div>
        Inn
      </div>
      <div className="SHOPS  Shop2" onClick={HandleArmorClick} onMouseOver={HandleArmorHover} onMouseLeave={HandlExits}>
        <div className="Door"></div>
        <div className="Roof"></div>
        Shop2
      </div>
      <div className="SHOPS  Shop3" onMouseOver={HandleWeaponHover} onMouseLeave={HandlExits}>
        <div className="Door"></div>
        <div className="Roof"></div>
        Shop3
      </div>
      <div className="SHOPS  Shop4" onMouseOver={HandleItemHover} onMouseLeave={HandlExits}>
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
      {ShowAmorSHopDescription && (
        <div className="Hover-Descriptions">
        <h1>Armor Smith</h1>
        <p>May Raise Def and HP stats</p>
        <p>?? Nils</p>
      </div>
      )}
      {ShowWeaponShopDescription && (
        <div className="Hover-Descriptions">
        <h1>Weapon Smith</h1>
        <p>May Raise ATK and Skill stats</p>
        <p>?? Nils</p>
      </div>
      )}
      {ShowItemShopDescription && (
        <div className="Hover-Descriptions">
        <h1>Accessory Smith</h1>
        <p>?????</p>
        <p>?? Nils</p>
      </div>
      )}
    </div>
  )
}

export default A1Town
