'use strict';

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

const setArr = new Set();

for(const [key,value] of gameEvents.entries()){
    setArr.add(value);
}
const events = [...setArr];

gameEvents.delete(64);
//console.log(gameEvents);

console.log("Hello");

for(const [key,value] of gameEvents.entries()){
  console.log((key<45 && `${key} First Half: ${value}`)||`${key} Second Half: ${value}`);
}