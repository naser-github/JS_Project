'use strict';

//ex-1

const checkDogs = function (juliaDog, kateDog) {

    const copyJD = juliaDog;

    copyJD.splice(0, 1);
    copyJD.splice(-2);

    const dog = [...copyJD, ...kateDog];

    console.log(...dog);

    dog.forEach(function (element, index) {
      console.log(
        element > 2
          ? `Dog number ${index + 1} is an adult, and is ${element} years old`
          : `Dog number ${index + 1} is still a puppy 🐶`
      );
    });   
}

const juliaDog1 = [3, 5, 2, 12, 7];
const kateDog1 = [4, 1, 15, 8, 3];

const juliaDog2 = [9, 16, 6, 8, 3];
const kateDog2 = [10, 5, 6, 1, 4];

// checkDogs(juliaDog1, kateDog1);
// console.log('------------------');
// checkDogs(juliaDog2, kateDog2);

//ex-2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

const test = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  
  const humanAge = ages.map(function (age) {
    return age<=2? 2*age: 16+ age * 4; 
  });
  
  const include = humanAge.filter(function (age){
    return age>18;
  });

  const avg = include.reduce( function(sum, val){
    return sum+val;
  })/include.length;

  return avg;
};
// console.log(calcAverageHumanAge(test));

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const test2 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge2 = ages => (
  ages
  .map(age => age <= 2 ? 2 * age : 16 + age * 4)
  .filter(age=> age > 18)
  .reduce( (sum, val,i, arr) => sum + val/arr.length,0)
  );

//console.log(calcAverageHumanAge2(test2));


// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)


HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
const addRecommend = function (dogs) {
  dogs.forEach(function (dog) {
    dog.recommend = dog.weight * 0.75 * 28;
  });
};
addRecommend(dogs);

//2
const sarah = function(sarah){
  console.log(dogs);
  const getSarah = dogs.find( 
    dog => dog.owners.map(
      owner => owner === sarah
    )
  );
  
  if(getSarah.current > getSarah.recommend * 1.1 ) 
    console.log(`it's eating too much.`);
  else if(getSarah.current < getSarah.recommend * 1.1);
    console.log(`it's eating too little.`);     
}
sarah("Sarah");

//3 & 4
const identical = function () {
  const tooMuch = dogs.filter(
    dog => dog.curFood>=dog.recommend*1.1
  );

  const tooLittle = dogs.filter(
    (dog) => dog.curFood <= dog.recommend * .9
  );
    const ownersEatTooMuch = tooMuch.map(t => t.owners);
    const ownersEatTooLittle = tooLittle.map(t => t.owners);

    console.log(`${ownersEatTooMuch.flat()}'s dogs eat too much`);
    console.log(`${ownersEatTooLittle.flat()}'s dogs eat too less`);
    
}
identical();

//5
const exactRecommend = function () {
  console.log('exact');
  dogs.map(function (dog) {
    if(dog.curFood === dog.recommend)
      console.log(true);
  })
};
exactRecommend();

//6 & 7
const doggo = [];
const okayAmount = function () {
  console.log('okayAmount');
  dogs.map(function (dog) {
    if (dog.curFood <= dog.recommend * 1.1 && dog.curFood >= dog.recommend * 0.9){
        console.log(true);
        doggo.push(dog);
    }
  });
  
};
okayAmount();
console.log(doggo);

//8

const dogCopy = dogs.slice().sort((a, b) => a.recommend - b.recommend);
console.log(dogCopy);

