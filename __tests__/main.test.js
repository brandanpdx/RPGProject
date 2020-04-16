import {newCharacterName, characterMaster, bossMaster, newBossName, blueSauce, storeState, initialCharacterValues, changeState, initialSauceBossValues, redSauce} from './../src/SauceQuest.js';

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
  test('should increase the health of a character by 5', () => {
    const newPlayer = storeState(initialCharacterValues);
    const healthyPlayer = newPlayer(blueSauce);
    expect(healthyPlayer.health).toEqual(105);
  })
  test('should increase the health of character by 10', () => {
    const newPlayer = storeState(initialCharacterValues);
    const healthyPlayer = newPlayer(redSauce);
    expect(healthyPlayer.health).toEqual(110);
  })
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
//   test('should decrease the health of a boss by 10', () => {
//     const newBoss = storeState(initialSauceBossValues);
//     const unhealthyBoss = newBoss(ladleSmash);
//     expect(unhealthyBoss.health).toEqual(90);
//   })
//   test('should increase the special of a boss by 30', () => {
//     const newBoss = storeState(initialSauceBossValues); 
//     const bossSepcial = newBoss(sleepySauce);
//     expect(bossSepcial.special).toEqual(30);
//   })


})