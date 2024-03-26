import { useState} from "react"
import A1HealthManaBars from "./A1HealthManaBars"
import leftarrow from './images/arrow-pointing-to-left.png'
import CharacterData from "./CharacterData"


const A1Town = ({ playerName, characterStats, updateCharacterStats, onReturn }) => {
  const [ShowCharacterStats, setShowCharacterStats] = useState(false)
  const [ShowInnDescription, setShowInnDescription] = useState(false)
  const [ShowInn, setShowInn] = useState(false)
  const [ShowAmorSHopDescription, setShowAmorSHopDescription] = useState(false)
  const [ShowArmor, setShowArmor] = useState(false)
  const [ShowWeapon, setShowWeapon] = useState(false)
  const [ShowAssesory, setShowAssesory] = useState(false)
  const [ShowWeaponShopDescription, setShowWeaponShopDescription] = useState(false)
  const [ShowAssesoryShopDescription, setShowAssesoryShopDescription] = useState(false)
  const [hoveredArmorItem, setHoveredArmorItem] = useState(null);
  const [hoveredWeaponItem, setHoveredWeaponItem] = useState(null);
  const [hoveredAssesoryItem, setHoveredAssesoryItem] = useState(null);
  
  //MAKE REST NOT CHNAGE OVERHEAL

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
  const HandleAssesoryClick = () => {
    setShowAssesory(true)
    setShowAssesoryShopDescription(false)
  }
  const HandlExits = () => {
    setShowInnDescription(false)
    setShowAmorSHopDescription(false)
    setShowWeaponShopDescription(false)
    setShowAssesoryShopDescription(false)
  }
  const HandleArmorHover = () => {
    setShowAmorSHopDescription(true)
  }
  const HandleWeaponHover = () => {
    setShowWeaponShopDescription(true)
  }
  const HandleItemHover = () => {
    setShowAssesoryShopDescription(true)
  }
  const HandleArmorHover2 = (itemIndex) => {
    setHoveredArmorItem(itemIndex);
  }
  const HandleWeaponHover2 = (itemIndex) => {
    setHoveredWeaponItem(itemIndex);
  }
  const HandleAssesoryHover2 = (itemIndex) => {
    setHoveredAssesoryItem(itemIndex);
  }

  if (ShowInn) {

    const ExitArrow4 = () => {
      setShowInn(false)
      setShowInnDescription(false)
      setShowAmorSHopDescription(false)
      setShowWeaponShopDescription(false)
      setShowAssesoryShopDescription(false)
    }

    const handlerestclick = () => {
      if (characterStats.Nils < 2) {
        alert('sorry you are to broke for this') 
        return
      }
      if (characterStats.Hp >= characterStats.MaxHp && characterStats.Mana >= characterStats.MaxMana){
        alert(`you already have max Mana and Health`)
        setShowInn(false);
        setShowInnDescription(false)
        return
      } 
      if (characterStats.Hp >= characterStats.MaxHp && characterStats.Mana <= characterStats.MaxMana){
        let ManaMissing = characterStats.MaxMana - characterStats.Mana
        const updatedStats = {
          ...characterStats,
          Mana: characterStats.Mana + ManaMissing,
        };
        updateCharacterStats(updatedStats);
        setShowInn(false);
        setShowInnDescription(false)
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
      setShowInnDescription(false)
    }

    return (
      <div className="Inn-main-div">
        <img onClick={ExitArrow4} className="LeftArrow" src={leftarrow} alt="EXIT"></img>
        <h1 onClick={handlerestclick} className="Moms Items">REST?</h1>
        <div className="Bed">
          <div className="Blanket"></div>
          <div className="Pillow"></div>
        </div>
      </div>
    );
  }
  if (ShowAssesory) {
    let AssesoryStoreItems = [{
      Item: 1,
      Name: '  Lucky Charm',
      Cost: 3,
      Atk: 2,
      MaxMana: 0,
      Def: 2,
      Description: `A simple Lucky Charm that adds a touch of fortune to your adventures. Boosts your attack and defense moderately.`
    },
    {
      Item: 2,
      Name: '  silver Medalian',
      Cost: 5,
      Def: 4,
      Atk: 2,
      MaxMana: 0,
      Description: `A finely crafted Silver Medallion with magical properties. Enhances your attack and provides a bonus to defence.`
    },
    {
      Item: 3,
      Name: '  DMG Infused Stone',
      Cost: 10,
      Def: 0,
      Atk: 7,
      MaxMana: 4,
      Description: `This stone radiates powerful energy, empowering your attacks with increased damage. Ideal for those seeking a more offensive playstyle.`
    },
    {
      Item: 4,
      Name: '  Ward Stone',
      Cost: 25,
      Atk: 0,
      Def: 15,
      MaxMana: 10,
      Description: `A protective Ward Stone that significantly boosts your defense. Perfect for those who prefer a resilient and sturdy approach in battles.`
    },
    {
      Item: 5,
      Name: '  Enhanced Mana Charm',
      Cost: 50,
      Atk: 5,
      Def: 2,
      MaxMana: 30,
      Description: `An intricate charm that amplifies your Mana to an extraordinary level. Recommended for those who rely on their special abilities.`
    },
    {
      Item: 6,
      Name: '  Infused Gardian Stone',
      Cost: 100,
      Atk: 30,
      Def: 40,
      MaxMana: 50,
      Description: ` A legendary Guardian Stone with unparalleled power. Provides a substantial boost to attack, defense, and Mana. The ultimate accessory for seasoned adventurers.`
    }];
    const handleAssesoryClick = (index) => {
      const selectedAssesory = AssesoryStoreItems[index];
      if (characterStats.Inventory.includes(selectedAssesory.Name)) {
        alert(`You already have ${selectedAssesory.Name} in your inventory`);
        return;
      }
    
      // Check if the player has enough Nils to buy the item
      if (characterStats.Nils >= selectedAssesory.Cost) {
        // Subtract the cost from the player's Nils
        const updatedStats = {
          ...characterStats,
          Atk: characterStats.Atk + selectedAssesory.Atk,
          Def: characterStats.Def + selectedAssesory.Def, // Update the correct field (assuming characterStats has a 'Def' field)
          MaxMana: characterStats.MaxMana + selectedAssesory.MaxMana,
          Nils: characterStats.Nils - selectedAssesory.Cost,
        };
        updateCharacterStats(updatedStats);
        
        updatedStats.Inventory = [...updatedStats.Inventory, selectedAssesory.Name];
    
        // Optionally, you can update other player stats based on the selected item
        // For example, you can add defense to the player's stats
        alert(`${selectedAssesory.Name} Purchased`)
      } else {
        // Display a message or handle the case where the player doesn't have enough Nils
        alert("Not enough Nils to buy this item");
      }
    };
    const ExitArrow3 = () => {
      setShowAssesory(false)
      setShowInnDescription(false)
      setShowAmorSHopDescription(false)
      setShowWeaponShopDescription(false)
      setShowAssesoryShopDescription(false)
    }
    return (
      <div className="Assesory-main-div">
        <h1>Assesory Shop</h1>
        <div className="AssesoryFloor"></div>
        <img onClick={ExitArrow3} className="LeftArrow" src={leftarrow} alt="EXIT"></img>
        <div>
          <A1HealthManaBars 
            playerName={playerName}
            characterStats={characterStats}
          />
        </div>
        <div className="Item-div">
          {AssesoryStoreItems.map((item, index) => (
            <h1
              key={index}
              onClick={() => handleAssesoryClick(index)}
              onMouseOver={() => HandleAssesoryHover2(index)}
              onMouseLeave={() => setHoveredAssesoryItem(null)}
              className="Moms Items"
            >
              ??
            </h1>
          ))}
        </div>
        {hoveredAssesoryItem !== null && (
          <div className="Weapon-Description-Div">
            <h1>{AssesoryStoreItems[hoveredAssesoryItem].Name}</h1>
            <div>
              <h4>Atk Buff: {AssesoryStoreItems[hoveredAssesoryItem].Atk}</h4>
              <h4>Mana Buff: {AssesoryStoreItems[hoveredAssesoryItem].MaxMana}</h4>
              <h4>Def Buff: {AssesoryStoreItems[hoveredAssesoryItem].Def}</h4>
              <h4>Cost: {AssesoryStoreItems[hoveredAssesoryItem].Cost} Nils</h4>
            </div>
            <h4 style={{ marginTop: '-20px' }}>{AssesoryStoreItems[hoveredAssesoryItem].Description}</h4>
          </div>
        )}
      </div>
    )
  }

  if (ShowArmor) {

    let ArmorStoreItems = [{
      Item: 1,
      Name: '  Cloak,',
      Cost: 4,
      Def: 3,
      MaxHp: 0,
      Description: `A ragged old cloak that could be used for minor protection but won't offer much defense. It's a basic and affordable option for beginners.`
    },
    {
      Item: 2,
      Name: '  Boots,',
      Cost: 4,
      Def: 3,
      MaxHp: 0,
      Description: `Sturdy leather boots that provide moderate defense. While not the most protective, they offer a balance between cost and functionality.`
    },
    {
      Item: 3,
      Name: '  Helm,',
      Cost: 10,
      Def: 6,
      MaxHp: 10,
      Description: ` A well-crafted helmet offering significant defense for the head. It provides enhanced protection and is a crucial addition to your armor set.`
    },
    {
      Item: 4,
      Name: '  Arm Gaurds,',
      Cost: 25,
      Def: 15,
      MaxHp: 25,
      Description: `Tough arm guards made of reinforced materials, providing substantial defense for your arms. Ideal for those seeking better protection in battles.`
    },
    {
      Item: 5,
      Name: ' Enhanced Chain Mail,',
      Cost: 60,
      Def: 30,
      MaxHp: 40,
      Description: `A suit of chain mail armor that covers the body, offering a high level of protection against various attacks. A solid choice for those who prioritize defense and health.`
    },
    {
      Item: 6,
      Name: '  Full Metal Armor,',
      Cost: 110,
      Def: 50,
      MaxHp: 60,
      Description: `The pinnacle of armor, this full metal set provides exceptional defense for the entire body. Expensive but worth the investment for those facing formidable foes.`
    }]

    const ExitArrow = () => {
      setShowArmor(false)
      setShowInnDescription(false)
      setShowAmorSHopDescription(false)
      setShowWeaponShopDescription(false)
      setShowAssesoryShopDescription(false)
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
          MaxHp: characterStats.MaxHp + selectedArmor.MaxHp,
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
        <div className="ArmorFloor"></div>
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
              <h3>Max Hp Buff: {ArmorStoreItems[hoveredArmorItem].MaxHp}</h3>
              <h3>Cost: {ArmorStoreItems[hoveredArmorItem].Cost} Nils</h3>
            </div>
            <h4 style={{ marginTop: '-20px' }}>{ArmorStoreItems[hoveredArmorItem].Description}</h4>
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
      Description: `A worn-out cleaning kit with rusty tools. Despite its shabby appearance, it adds a modest boost to your weapon's attack power. Suitable for beginners.`
    },
    {
      Item: 2,
      Name: '  Novice Sharpening Kit',
      Cost: 6,
      Atk: 8,
      Description: `An entry-level sharpening kit for improving the cutting edge of your weapon. Provides a noticeable increase in attack power without any additional skills.`
    },
    {
      Item: 3,
      Name: '  Crafted Hilt',
      Cost: 10,
      Atk: 11,
      Description: `A carefully crafted hilt designed for enhanced handling and precision. Grants a moderate boost to both attack power and skill-based attacks.`
    },
    {
      Item: 4,
      Name: '  Novice Enchantment Stone',
      Cost: 25,
      Atk: 28,
      Description: `A magical stone imbued with basic enchantments. Enhances your weapon with additional attack power and skill-based damage. A valuable upgrade for those seeking more power.`
    },
    {
      Item: 5,
      Name: '  Expert Sharpening Kit',
      Cost: 50,
      Atk: 40,
      Description: `A high-quality sharpening kit designed for experienced warriors. Significantly boosts the cutting power of your weapon, making it a formidable choice in battles.`
    },
    {
      Item: 6,
      Name: '  Dragon Stone Enchantment',
      Cost: 120,
      Atk: 145,
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
      setShowInnDescription(false)
      setShowAmorSHopDescription(false)
      setShowWeaponShopDescription(false)
      setShowAssesoryShopDescription(false)
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
      <div className="SHOPS  Shop4" onClick={HandleAssesoryClick} onMouseOver={HandleItemHover} onMouseLeave={HandlExits}>
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
        <p> Raise ATK stats</p>
        <p>?? Nils</p>
      </div>
      )}
      {ShowAssesoryShopDescription && (
        <div className="Hover-Descriptions">
        <h1>Accessory Smith</h1>
        <p>Raise Many Stats </p>
        <p>?? Nils</p>
      </div>
      )}
    </div>
  )
}

export default A1Town
