import { useState} from "react"
import A1HealthManaBars from "./A1HealthManaBars"
import floor from './—Pngtree—wooden floor 2 way texture_6978182.png'
import leftarrow from './arrow-pointing-to-left.png'
import CharacterData from "./CharacterData"


const A1Town = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [ShowCharacterStats, setShowCharacterStats] = useState(false)
  const [ShowInnDescription, setShowInnDescription] = useState(false)
  const [ShowInn, setShowInn] = useState(false)
  const [ShowAmorSHopDescription, setShowAmorSHopDescription] = useState(false)
  const [ShowArmor, setShowArmor] = useState(false)
  const [ShowWeapon, setShowWeapon] = useState(false)
  const [ShowWeaponShopDescription, setShowWeaponShopDescription] = useState(false)
  const [ShowItemShopDescription, setShowItemShopDescription] = useState(false)
  const [hoveredArmorItem, setHoveredArmorItem] = useState(null);
  const [hoveredWeaponItem, setHoveredWeaponItem] = useState(null);

  const handleLeaveclick =() => {
    onReturn()
  }
  const handleCharacterstats = () => {
    setShowCharacterStats(!ShowCharacterStats)
  }
  const HandleInnHover = () => {
    setShowInnDescription(true)
  }
  const HandleInnClick = () => {
    setShowInn(true)
  }
  const HandleArmorClick = () => {
    setShowArmor(true)
    setShowAmorSHopDescription(false)
  }
  const HandleWeaponClick = () => {
    setShowWeapon(true)
    setShowWeaponShopDescription(false)
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
  const HandleWeaponHover2 = (itemIndex) => {
    setHoveredWeaponItem(itemIndex);
  }

  if (ShowInn) {

    const handlerestclick = () => {
      if (characterStats.Hp >= characterStats.MaxHp && characterStats.Mana >= characterStats.MaxMana){
        alert(`you already have max Mana and Health`)
        setShowInn(false);
        return
      }
      let HpMissing = characterStats.MaxHp - characterStats.Hp
      let ManaMissing = characterStats.MaxMana - characterStats.Mana
      const updatedStats = {
        ...characterStats,
        Hp: characterStats.Hp + HpMissing,
        Mana: characterStats.Mana + ManaMissing,
        Nils: characterStats.Nils - 2
      };
      updateCharacterStats(updatedStats);
      setShowInn(false);
    }

    return (
      <div>
        <h1 onClick={handlerestclick} className="Moms Items">REST?</h1>
      </div>
    );
  }

  if (ShowArmor) {

    let ArmorStoreItems = [{
      Item: 1,
      Name: '  Cloak,',
      Cost: 4,
      Def: 3,
      Description: `A ragged old cloak that could be used for minor protection but won't offer much defense. It's a basic and affordable option for beginners.`
    },
    {
      Item: 2,
      Name: '  Boots,',
      Cost: 4,
      Def: 3,
      Description: `Sturdy leather boots that provide moderate defense. While not the most protective, they offer a balance between cost and functionality.`
    },
    {
      Item: 3,
      Name: '  Helm,',
      Cost: 10,
      Def: 8,
      Description: ` A well-crafted helmet offering significant defense for the head. It provides enhanced protection and is a crucial addition to your armor set.`
    },
    {
      Item: 4,
      Name: '  Arm Gaurds,',
      Cost: 25,
      Def: 17,
      Description: `Tough arm guards made of reinforced materials, providing substantial defense for your arms. Ideal for those seeking better protection in battles.`
    },
    {
      Item: 5,
      Name: '  Chain Mail,',
      Cost: 50,
      Def: 36,
      Description: `A suit of chain mail armor that covers the body, offering a high level of protection against various attacks. A solid choice for those who prioritize defense.`
    },
    {
      Item: 6,
      Name: '  Full Metal Armor,',
      Cost: 90,
      Def: 60,
      Description: `The pinnacle of armor, this full metal set provides exceptional defense for the entire body. Expensive but worth the investment for those facing formidable foes.`
    }]

    const ExitArrow = () => {
      setShowArmor(false)
    }
    const handleArmorClick = (index) => {
      const selectedArmor = ArmorStoreItems[index];
      if (characterStats.Inventory.includes(selectedArmor.Name)) {
        alert(`You already have ${selectedArmor.Name} in your inventory`);
        return;
      }
    
      // Check if the player has enough Nils to buy the item
      if (characterStats.Nils >= selectedArmor.Cost) {
        // Subtract the cost from the player's Nils
        const updatedStats = {
          ...characterStats,
          Def: characterStats.Def + selectedArmor.Def, // Update the correct field (assuming characterStats has a 'Def' field)
          Nils: characterStats.Nils - selectedArmor.Cost,
        };
        updateCharacterStats(updatedStats);
    
        // Add the selected item to the player's inventory
        updatedStats.Inventory = [...updatedStats.Inventory, selectedArmor.Name];
    
        // Optionally, you can update other player stats based on the selected item
        // For example, you can add defense to the player's stats
        alert(`${selectedArmor.Name} Purchased`)
      } else {
        // Display a message or handle the case where the player doesn't have enough Nils
        alert("Not enough Nils to buy this item");
      }
    };

    return (
      <div className="Armor-main-div">
        <h1>Armor Shop</h1>
        <img className="Floor" src={floor} alt="floor"></img>
        <img onClick={ExitArrow} className="LeftArrow" src={leftarrow} alt="EXIT"></img>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <div className="Item-div">
          {ArmorStoreItems.map((item, index) => (
            <h1
              key={index}
              onClick={() => handleArmorClick(index)}
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

  if (ShowWeapon) {
    let WeaponStoreItems = [{
      Item: 1,
      Name: '  Tattered Cleaning Kit',
      Cost: 4,
      Atk: 5,
      SkillAtk: 0,
      Description: `A worn-out cleaning kit with rusty tools. Despite its shabby appearance, it adds a modest boost to your weapon's attack power. Suitable for beginners.`
    },
    {
      Item: 2,
      Name: '  Novice Sharpening Kit',
      Cost: 6,
      Atk: 8,
      SkillAtk: 0,
      Description: `An entry-level sharpening kit for improving the cutting edge of your weapon. Provides a noticeable increase in attack power without any additional skills.`
    },
    {
      Item: 3,
      Name: '  Crafted Hilt',
      Cost: 10,
      Atk: 9,
      SkillAtk: 3,
      Description: `A carefully crafted hilt designed for enhanced handling and precision. Grants a moderate boost to both attack power and skill-based attacks.`
    },
    {
      Item: 4,
      Name: '  Novice Enchantment Stone',
      Cost: 25,
      Atk: 22,
      SkillAtk: 9,
      Description: `A magical stone imbued with basic enchantments. Enhances your weapon with additional attack power and skill-based damage. A valuable upgrade for those seeking more power.`
    },
    {
      Item: 5,
      Name: '  Expert Sharpening Kit',
      Cost: 50,
      Atk: 40,
      SkillAtk: 0,
      Description: `A high-quality sharpening kit designed for experienced warriors. Significantly boosts the cutting power of your weapon, making it a formidable choice in battles.`
    },
    {
      Item: 6,
      Name: '  Dragon Stone Enchantment',
      Cost: 120,
      Atk: 60,
      SkillAtk: 30,
      Description: `An ancient stone infused with the power of dragons. Unleashes a tremendous surge in both attack power and skill-based damage. Reserved for those facing the most formidable foes.`
    }];
    const handleWeaponClick = (index) => {
      const selectedWeapon = WeaponStoreItems[index];
      if (characterStats.Inventory.includes(selectedWeapon.Name)) {
        alert(`You already have ${selectedWeapon.Name} in your inventory`);
        return;
      }
    
      // Check if the player has enough Nils to buy the item
      if (characterStats.Nils >= selectedWeapon.Cost) {
        // Subtract the cost from the player's Nils
        const updatedStats = {
          ...characterStats,
          Atk: characterStats.Atk + selectedWeapon.Atk, // Update the correct field (assuming characterStats has a 'Def' field)
          Nils: characterStats.Nils - selectedWeapon.Cost,
        };
        updateCharacterStats(updatedStats);
    
        updatedStats.Skills[0].damage += selectedWeapon.SkillAtk;
        updateCharacterStats(updatedStats);
        // Add the selected item to the player's inventory
        updatedStats.Inventory = [...updatedStats.Inventory, selectedWeapon.Name];
    
        // Optionally, you can update other player stats based on the selected item
        // For example, you can add defense to the player's stats
        alert(`${selectedWeapon.Name} Purchased`)
      } else {
        // Display a message or handle the case where the player doesn't have enough Nils
        alert("Not enough Nils to buy this item");
      }
    };
    const ExitArrow2 = () => {
      setShowWeapon(false)
    }
    return (
      <div className="Weapon-main-div">
        <h1>Weapon Shop</h1>
        <div className="WeaponFloor"></div>
        <img onClick={ExitArrow2} className="LeftArrow" src={leftarrow} alt="EXIT"></img>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <div className="Item-div">
          {WeaponStoreItems.map((item, index) => (
            <h1
              key={index}
              onClick={() => handleWeaponClick(index)}
              onMouseOver={() => HandleWeaponHover2(index)}
              onMouseLeave={() => setHoveredWeaponItem(null)}
              className="Moms Items"
            >
              ??
            </h1>
          ))}
        </div>
        {hoveredWeaponItem !== null && (
          <div className="Weapon-Description-Div">
            <h1>{WeaponStoreItems[hoveredWeaponItem].Name}</h1>
            <div>
              <h3>Atk Buff: {WeaponStoreItems[hoveredWeaponItem].Atk}</h3>
              <h3>Skill-Atk Buff: {WeaponStoreItems[hoveredWeaponItem].SkillAtk}</h3>
              <h3>Cost: {WeaponStoreItems[hoveredWeaponItem].Cost} Nils</h3>
            </div>
            <h4>{WeaponStoreItems[hoveredWeaponItem].Description}</h4>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="Main-Town-Div">
       <div className="C-div">
          {ShowCharacterStats &&(
            <div>
              <CharacterData
                playerName={playerName}
                updateCharacterStats={updateCharacterStats}
                characterStats={characterStats}
              />
            </div>
          )}
          <button className="Inv-btn" onClick={handleCharacterstats}>Player Stats</button>
        </div>
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
      <div className="SHOPS  Shop3" onClick={HandleWeaponClick} onMouseOver={HandleWeaponHover} onMouseLeave={HandlExits}>
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
