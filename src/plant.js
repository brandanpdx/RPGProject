
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

const doubleFoodStore = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState, ...redFood(newState)};
    return newState;
  };
};

export const doubleFoodChanger = doubleFoodStore();

export const blueFood = changeState("soil")(5);
export const redFood = changeState("soil")(7);
export const wateringCan = changeState("water")(5);
export const sunnyDay = changeState("light")(7);