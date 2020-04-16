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

export const gameMaster = storeState(initialCharacterValues);

export const newName = changeState("name");
export const getHealthy = changeState("health");
export const getStrong = changeState("strength");
export const upgrade = changeState("level");
export const getRich = changeState("coins");


const initialSauceBossValues = {name:"", health: 100, damage: 0, special: 0}
export const bossMaster = storeState(initialSauceBossValues); 
export const newBossName = changeState("name");
export const addNewBossName = newBossName("Sauce Boss");
export const updatedSauceBossObj = bossMaster(addNewBossName);


// export const player1 = storeState(initialCharacterValues);
// export const player2 = storeState(initialCharacterValues);
// export const player3 = storeState(initialCharacterValues);
// export const player4 = storeState(initialCharacterValues);

// const sauceBoss = storeState(initialBossValues);
// const irritatedGoose = storeState(initialBossValues);
// const sleepwalkingNeighbor = storeState(initialBossValues);
// const poorlyWrittenCode = storeState(initialBossValues);


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



