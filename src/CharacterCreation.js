export const storeState = () => {
  let currentState = { }; 
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
      [prop] : (state[prop] || 0) + value
    });
  };
};

const initialCharacterValues = {name: "", health: 100, strength: 30, level: 1, coins: 50};
const characterMaster = storeState(initialCharacterValues); 
const newPlayer = changeState("name");
const currentPlayer = newPlayer("Dracobian");
const characterObj = characterMaster(currentPlayer);
