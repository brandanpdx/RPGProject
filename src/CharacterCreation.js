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

export const player1 = storeState(initialCharacterValues);
export const player2 = storeState(initialCharacterValues);
export const player3 = storeState(initialCharacterValues);
export const player4 = storeState(initialCharacterValues);


//Assign Character Name
export const newName = changeState("name");
// const addNewPlayerName = newName("Dracobian");
// const updateGameObj = gameMaster(addNewPlayerName);
// console.log(updateGameObj)

//Assign Character Health
export const getHealthy = changeState("health");
// const addHealth = getHealthy(5);
// const NewPlayer1State = player1(addHealth);
// const NewPlayer2State = player2(addHealth);
// const NewPlayer3State = player3(addHealth);
// const NewPlayer4State = player4(addHealth);

//Assign Character Strength
export const getStrong = changeState("strength");


//Assign Character Level
export const upgrade = changeState("level")


//Assign Character Coins
export const getRich = changeState("coins")



console.log(player1);
