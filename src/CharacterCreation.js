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

const initialCharacterValues = {name: "", health: 0, strength: 0, level: 0, coins: 0};
const characterMaster = storeState(initialCharacterValues); 
const newPlayer = changeState("name")("health")("strength")("level")("coins");

const player1 = newPlayer("Dracobian")(100)(10)(1)(150);
export const player1Obj = characterMaster(player1);

const player2 = newPlayer("Mr. Miyagi")(100)(80)(1)(25);
export const player2Obj = characterMaster(player2);

const player3 = newPlayer("Todders")(75)(30)(1)(150);
export const player3Obj = characterMaster(player3);

const player4 = newPlayer("Epicodbro")(100)(50)(1)(150);
export const player4Obj = characterMaster(player4);