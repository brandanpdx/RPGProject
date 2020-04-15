import {newName, gameMaster} from './../src/CharacterCreation.js';

describe('player', () => {

  test('should correctly set player name and initial character values.', () => {
    const newPlayer = newName("Dracobian");
    const newPlayerObj = gameMaster(newPlayer);
    expect(newPlayerObj.strength).toEqual(30);
    expect(newPlayerObj.coins).toEqual(100);
    expect(newPlayerObj.level).toEqual(1);
    expect(newPlayerObj.name).toEqual("Dracobian");
    expect(newPlayerObj.health).toEqual(100);
  });
});