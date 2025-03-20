//1. Pokémon Battle – Function Basics
console.log("1. Pokémon Battle – Function Basics");

function compareAttack(pokemon1, attack1, pokemon2, attack2){
    if(attack1 > attack2){
        return pokemon1 + " is stronger!";
    }else{
        return pokemon2 + " is stronger!";
    }
}
console.log(compareAttack("Pikachu", 34, "Charizard", 22));

//2. Hogwarts Spell Casting – Function Parameters
console.log("");
console.log("2. Hogwarts Spell Casting – Function Parameters");

function castSpell(spell, wizard){
    // return wizard + " casts " + spell + "!";
    return `${wizard} casts ${spell}!`
} 

console.log(castSpell("Expelliarmus", "Hermione"));

//3. One Piece Bounty Calculator – Return Values
console.log("");
console.log("3. One Piece Bounty Calculator – Return Values");

function calculateBounty(currentBounty, increase){
    return currentBounty + increase;
}
console.log(calculateBounty(1_500_000_000, 500_000_000));

//4. Jedi Training – Default Parameters
console.log("");
console.log("4. Jedi Training – Default Parameters");

function  trainJedi(name, strength = 50){
    return  name + " has " +  strength +  " Power";
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));

//5. Gollum’s Precious – String Manipulation
console.log("");
console.log("5. Gollum’s Precious – String Manipulation");

function gollumSays(phrase){
    return (phrase + "... ").repeat(3);
}
console.log(gollumSays("My precious"));

//6. Super Mario Power-Up – Function Expressions
console.log("");
console.log("6. Super Mario Power-Up – Function Expressions");

const powerUp = function(jumpHeight){
    return jumpHeight * 2;
}

console.log(powerUp(5)); 

//7. Naruto’s Shadow Clone Jutsu – Arrow Functions
console.log("");
console.log("7. Naruto’s Shadow Clone Jutsu – Arrow Functions");

const shadowClone = (count) => count * 5;
console.log(shadowClone(10) + " clones created!");

//8. Sorting the Sorting Hat – Callback Functions
console.log("");
console.log("8. Sorting the Sorting Hat – Callback Functions");

function sortStudent(name, callback){
    console.log("Sorting " + name + " into...");
    console.log(callback());
}

sortStudent("Harry", () => "Gryffindor");

//9. Infinity Gauntlet – Function Scope
console.log("");
console.log("9. Infinity Gauntlet – Function Scope");

function snapFingers(){
    let stones = 6;
    function checkStones(){
        console.log(`Thanos has ${stones} stones. The universe trembles!`);
    }
    checkStones();
}

snapFingers();

//10. Time-Turner – Function Hoisting
console.log("");
console.log("10. Time-Turner – Function Hoisting");

turnBackTime();

function turnBackTime(){
    console.log("Going back in time!");
}

// JavaScript moves function declarations to the top before running code.
// So, when turnBackTime() is called, javaScript already knows about it.

//11. Batman’s Secret Identity – Function Closures
console.log("");
console.log("11. Batman’s Secret Identity – Function Closures");

function batman(){
    function innerFunction(){
        return "I am Batman!";
    }

    return innerFunction;
}

let result = batman();
console.log(result());

//12. The Enchanted Mirror – Higher-Order Functions
console.log("");
console.log("12. The Enchanted Mirror – Higher-Order Functions");

function magicMirror(message, transformFunction){
    return `The mirror says: ${transformFunction(message)}`;
    // console.log(transformFunction(message));
}
console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));



