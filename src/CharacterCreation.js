export const storeState = (initialCharacterValues) => {
  let currentState = initialCharacterValues; 
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : (state[prop] || "") + value
    });
  };
};

const initialCharacterValues = {name:"", health: 100, strength: 30, level: 1, coins: 100};

export const newName = changeState("name");
export const getHealthy = changeState("health");
export const getStrong = changeState("strength");
export const upgrade = changeState("level");
export const getRich = changeState("coins");

// const bigHit = getHealthy(-10);

export const player1 = storeState(initialCharacterValues);
export const player2 = storeState(initialCharacterValues);
export const player3 = storeState(initialCharacterValues);
export const player4 = storeState(initialCharacterValues);


console.log(player1Obj);

