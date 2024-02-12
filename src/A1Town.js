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
  const [ShowItem1, setShowItem1] = useState(false);
  const [hoveredArmorItem, setHoveredArmorItem] = useState(null);

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
  const HandleArmorHover2 = (itemIndex) => {
    setHoveredArmorItem(itemIndex);
  }

  if (ShowArmor) {

    let ArmorStoreItems = [{
      Item: 1,
      Name: 'Cloak',
      Cost: 4,
      Def: 3,
      Description: `A ragged old cloak that could be used for minor protection but won't offer much defense. It's a basic and affordable option for beginners.`
    },
    {
      Item: 2,
      Name: 'Boots',
      Cost: 4,
      Def: 3,
      Description: `Sturdy leather boots that provide moderate defense. While not the most protective, they offer a balance between cost and functionality.`
    },
    {
      Item: 3,
      Name: 'Helm',
      Cost: 10,
      Def: 8,
      Description: ` A well-crafted helmet offering significant defense for the head. It provides enhanced protection and is a crucial addition to your armor set.`
    },
    {
      Item: 4,
      Name: 'Arm Gaurds',
      Cost: 25,
      Def: 17,
      Description: `Tough arm guards made of reinforced materials, providing substantial defense for your arms. Ideal for those seeking better protection in battles.`
    },
    {
      Item: 5,
      Name: 'Chain Mail',
      Cost: 50,
      Def: 36,
      Description: `A suit of chain mail armor that covers the body, offering a high level of protection against various attacks. A solid choice for those who prioritize defense.`
    },
    {
      Item: 6,
      Name: 'Full Metal Armor',
      Cost: 90,
      Def: 60,
      Description: `The pinnacle of armor, this full metal set provides exceptional defense for the entire body. Expensive but worth the investment for those facing formidable foes.`
    }]

    const Item1hover = () => {
      if (ShowItem1) {
        setShowItem1(false)
      }else {
        setShowItem1(true);
      }
    }

    return (
      <div className="Inn-main-div">
        <h1>Armor Shop</h1>
        <img className="Floor" src={floor} alt="floor"></img>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        {ShowItem1 && (
          <div className="Armor-Description-Div">
          <h1>{ArmorStoreItems[0].Name}</h1>
          <div>
            <h3>Def Buff: {ArmorStoreItems[0].Def}</h3>
            <h3>Cost: {ArmorStoreItems[0].Cost} Nils</h3>
          </div>
          <h4>{ArmorStoreItems[0].Description}</h4>
        </div>
        )}
        <div className="Item-div">
          {ArmorStoreItems.map((item, index) => (
            <h1
              key={index}
              onMouseOver={() => HandleArmorHover2(index)}
              onMouseLeave={() => setHoveredArmorItem(null)}
              className="Moms Items"
            >
              ??
            </h1>
          ))}
        </div>
        {hoveredArmorItem !== null && (
          <div className="Armor-Description-Div">
            <h1>{ArmorStoreItems[hoveredArmorItem].Name}</h1>
            <div>
              <h3>Def Buff: {ArmorStoreItems[hoveredArmorItem].Def}</h3>
              <h3>Cost: {ArmorStoreItems[hoveredArmorItem].Cost} Nils</h3>
            </div>
            <h4>{ArmorStoreItems[hoveredArmorItem].Description}</h4>
          </div>
        )}
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
