// export const stateChanger = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || "") + value
    });
  };
};

export const storeState = (initialCharacterState) => {
  let currentState = initialCharacterState; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

//Initial Character Values
export const initialCharacterValues = {name:"", health: 100, strength: 30, level: 1, coins: 100};  

export const characterMaster = storeState(initialCharacterValues);

export const newCharacterName = changeState("name");
export const getCharacterHealthy = changeState("health");
export const getCharacterStrong = changeState("strength");
export const upgrade = changeState("level");
export const getRich = changeState("coins");

//Inventory
export const blueSauce = getCharacterHealthy(5);
export const redSauce = getCharacterHealthy(10);
export const shield = getCharacterStrong(5);
export const ladle = getCharacterStrong (7);

//Initial Boss Values
export const initialSauceBossValues = {name:"", health: 100, damage: 0, specialTrick: 10};

export const bossMaster = storeState(initialSauceBossValues);

export const newBossName = changeState("name");
export const getBossHealthy = changeState("health");
export const getBossDamage = changeState("damage");
export const getBossSpecial = changeState("specialTrick");

//Character Moves
export const ladleSmash = getBossHealthy(-10);
export const sauceBlock = getBossDamage(-3);

//Boss Moves
export const sauceSmash = getBossDamage(25);
export const sleepySauce = getBossSpecial(30);



