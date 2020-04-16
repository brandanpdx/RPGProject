export const storeState = (initialCharacterState) => {
  let currentState = initialCharacterState; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

// export const stateChanger = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || "") + value
    });
  };
};

//Initial Character Values
const initialCharacterValues = {name:"", health: 100, strength: 30, level: 1, coins: 100};  

export const characterMaster = storeState(initialCharacterValues);

export const newCharacterName = changeState("name");
export const getCharacterHealthy = changeState("health");
export const getCharacterStrong = changeState("strength");
export const upgrade = changeState("level");
export const getRich = changeState("coins");

//Inventory
export const blueSauce = getCharacterHealthy(+5);
export const redSauce = getCharacterHealthy(+10);
export const shield = getCharacterStrong(+5);
export const ladle = getCharacterStrong (+7);


//Initial Boss Values
const initialSauceBossValues = {name:"", health: 100, damage: 0, special: 0}

export const bossMaster = storeState(initialSauceBossValues);

export const newBossName = changeState("name");
export const getBossHealthy = changeState("health");
export const getBossDamage = changeState("damage");
export const getBossSpecial = changeState("special");

//Character Moves
export const ladleSmash = getBossHealthy(-10);
export const sauceBlock = getBossDamage(-3);

//Boss Moves
export const sauceSmash = getBossDamage(25);
export const sleepySauce = getBossSpecial(30);


// export const player1 = storeState(initialCharacterValues);
// export const player2 = storeState(initialCharacterValues);
// export const player3 = storeState(initialCharacterValues);
// export const player4 = storeState(initialCharacterValues);

// const sauceBoss = storeState(initialSauceBossValues);
// const irritatedGoose = storeState(initialSauceBossValues);
// const sleepwalkingNeighbor = storeState(initialSauceBossValues);
// const poorlyWrittenCode = storeState(initialSauceBossValues);

//Assign Character Name
// const addNewPlayerName = newName("Dracobian");
// const updateGameObj = gameMaster(addNewPlayerName);
// console.log(updateGameObj)

//Assign Character Health
// const addHealth = getHealthy(5);
// const NewPlayer1State = player1(addHealth);
// const NewPlayer2State = player2(addHealth);
// const NewPlayer3State = player3(addHealth);
// const NewPlayer4State = player4(addHealth);

//Assign Character Strength


//Assign Character Level


//Assign Character Coins



