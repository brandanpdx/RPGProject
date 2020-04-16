import {newCharacterName, characterMaster, bossMaster, newBossName} from './../src/SauceQuest.js';

describe('player', () => {

  test('should correctly set player name and initial values for strength, coins, level, name, and health.', () => {
    const newPlayer = newCharacterName("Dracobian");
    const newPlayerObj = characterMaster(newPlayer);
    expect(newPlayerObj.strength).toEqual(30);
    expect(newPlayerObj.coins).toEqual(100);
    expect(newPlayerObj.level).toEqual(1);
    expect(newPlayerObj.name).toEqual("Dracobian");
    expect(newPlayerObj.health).toEqual(100);
  });
});

describe('boss' , () => {
  test('should correctly set boss name and initial values', () => {
    const newBoss = newBossName("Sir. Racha"); 
    const newBossObj = bossMaster(newBoss);
    expect(newBossObj.name).toEqual("Sir. Racha");
    expect(newBossObj.health).toEqual(100);
    expect(newBossObj.damage).toEqual(0);
    expect(newBossObj.special).toEqual(0);
  })
})