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
      [prop] : (state[prop] || "") + value
    });
  };
};

intialWeaponValues = {damage: 0}

const rubberDuck = storeState(intialWeaponValues);
const hammer = storeState(intialWeaponValues);
const garlicBreath = storeState(intialWeaponValues); 

initialBossValues = {name: "", health: 100, damage: 0}

const sauceBoss = storeState(initialBossValues);
const irritatedGoose = storeState(initialBossValues);
const sleepwalkingNeighbor = storeState(initialBossValues);
const poorlyWrittenCode = storeState(initialBossValues);