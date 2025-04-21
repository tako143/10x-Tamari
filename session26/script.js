//easy tasks
console.log("1. The Sorting Hat (Harry Potter)");

const students = ['Harry', 'Hermione', 'Ron', 'Draco'];
const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
const assignedHouses = students.map((student) => `${student} - ${houses[Math.floor(Math.random() * houses.length)]}`);

console.log(assignedHouses);
//-----------------------------------------------

console.log("");
console.log("2. The Pokémon Filter");

const pokemon = [ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ];
const filteredArray = pokemon.filter((obj) => obj.CP >= 500);

console.log(filteredArray);
//--------------------------------------------------

console.log("");
console.log("3. Avengers Assemble (Reduce)");

const avengersBudget = [ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];
const totalBudget = avengersBudget.reduce((acc, elem) => acc + elem.budget, 0);

console.log(`Total budget: ${totalBudget}`);
//--------------------------------------------------

console.log("");
console.log("4. The Lost Treasure Map");

const directions = ['left', 'right', 'forward'];
const instructions = directions.map((direction) => `Move ${direction}`);

console.log(instructions);
//--------------------------------------------------
//normal tasks

console.log("");
console.log("5. The Jedi Archives");

const jediNames = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];
const result = jediNames.find((elem) => elem === 'Yoda');

console.log(result === 'Yoda' ? 'Master found!' : 'Master not found!');
//--------------------------------------------------

console.log("");
console.log("6. The One Ring Inventory");

const inventory = [];
inventory.push('Lembas Bread'); 
inventory.push('Ring');
inventory.pop();

console.log(inventory);

//--------------------------------------------------
console.log("");
console.log("7. Spider-Man’s Web of Crime");

const crimeLocations = ['Times Square', 'Central Park', 'Brooklyn'];
crimeLocations.sort();

console.log(crimeLocations);
//--------------------------------------------------
console.log("");
console.log("8. The Time Stone (Array Slicing)");

const mysticalOccurrences = [ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ];
const newArr = mysticalOccurrences.slice(-3);

console.log(newArr);
//--------------------------------------------------
//hard tasks

console.log("");
console.log("9. Matrix Reloaded: Data Processing");

const numbers = [3, 7, 15, 22, 40];
const binaryFormat = numbers.map((num) => num.toString(2));
const highestValue = numbers.reduce((acc, elem) => acc > elem ? acc : elem, numbers[0]);
//or
// const highestValue = numbers.reduce((acc, elem) => Math.max(acc, elem));

console.log(binaryFormat);
console.log(highestValue);
//--------------------------------------------------

console.log("");
console.log("10. Cyberpunk City Data Processing");

const riskLevels = [99, 135, 76, 200, 150, 89];
const hexadecimalArr = riskLevels.map((num) => num.toString(16));
console.log(hexadecimalArr);

const filteredArr = riskLevels.filter((elem) => elem >= 100);
console.log(filteredArr);

const totalRisk = riskLevels.reduce((acc, elem) => acc + elem, 0);
console.log(totalRisk);

const firstRisk = riskLevels.find((elem) => elem > 150);
console.log(firstRisk);

for (let i = 0; i < riskLevels.length; i++) {
    if (riskLevels[i] < 80) {
      riskLevels.splice(i, 1);
      i--;
    }
}

console.log(riskLevels);





















