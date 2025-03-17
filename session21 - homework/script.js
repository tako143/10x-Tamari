//Exercise 1: The Power of Variables and Operators
console.log("Exercise 1: The Power of Variables and Operators");

let gandalfLevel = 29;
let  dumbledoreLevel = 37;
gandalfLevel += 5;
dumbledoreLevel -= 3;

console.log("Gandalf:" + " Level " + gandalfLevel);
console.log("Dumbledore:" + " Level " + dumbledoreLevel);

function isStronger(){
    if (gandalfLevel > dumbledoreLevel){
        console.log("Gandalf is stronger");
    }else if(gandalfLevel < dumbledoreLevel){
        console.log("Dumbledore is stronger");
    }else{
        console.log("You guys are equally powerful! Friendship wins!");
    }
}
isStronger();

//Exercise 2: The Treasure Chest of Data Types
console.log("");
console.log("Exercise 2: The Treasure Chest of Data Types");

let goldCoinCount = 90;
let treasureMap = "Map showing treasure location";
let cursedAmulet = true;

console.log(typeof goldCoinCount);
console.log(typeof treasureMap);
console.log(typeof cursedAmulet);

// console.log(treasureMap);
treasureMap = "Updated Map showing treasure location";
// console.log(treasureMap);

//Exercise 3: The Potion Shop’s Price Calculator
console.log("");
console.log("Exercise 3: The Potion Shop’s Price Calculator");

const potionShop = [
    {name: "health potion", price: 10}, 
    {name: "mana potion", price: 15}, 
    {name: "tata potion", price: 17}
];

let healthPotionCount = 3;
let manaPotionCount = 2;

let total = potionShop[0].price * healthPotionCount + potionShop[1].price * manaPotionCount;

console.log("Total price: " + total);

let discount = 30/100; //30% discount
if(total >= 50){
    total = total - total * discount;
}

console.log("Discounted price: " + total);

//Exercise 4: The Brave Knight’s Inventory
console.log("");
console.log("Exercise 4: The Brave Knight’s Inventory");

let swordAttackPower = 40;
let armorName = "Cape-Silk";
let hasShield = false;

console.log(`Sir Debugalot is ready for battle! 
He has a sword with an attack power of ${swordAttackPower}, 
wears ${armorName}, and ${hasShield ? "carries a shied for protection" : "he has no shield, but still is fearless"}`);

//Exercise 5: The Bakery's Daily Earnings
console.log("");
console.log("Exercise 5: The Bakery's Daily Earnings");


const bakery = [
    {name: "bread", price: 1.50, sold: 37}, 
    {name: "cake", price: 5.30, sold: 15}, 
    {name: "funtusha", price: 3, sold: 28}
]

let dailyEarning = 0;

for(let i = 0; i < bakery.length; i++){
    dailyEarning += bakery[i].price * bakery[i].sold; //dailyEarning = dailyEarning + bakery[i].price * bakery[i].sold; 
}

console.log(`bakery daily earing: ${dailyEarning} GEL`);

//Exercise 6: The Space Mission’s Fuel Check
console.log("");
console.log("Exercise 6: The Space Mission’s Fuel Check");

let spaceshipFuelCapacity = 500; 
let currentFuel = 450; 

let percentage = currentFuel * 100 / spaceshipFuelCapacity;

if(percentage > 80){
    console.log("enough fuel! Astronauts are ready for launch");
}else{
    console.log("Not enough fuel! The launch is delayed");
}

//Exercise 7: The Time Traveler’s Stopwatch (Updated)
console.log("");
console.log("Exercise 7: The Time Traveler’s Stopwatch (Updated)");

const currentYear = new Date().getFullYear();
// console.log(currentYear);

let yearsJumped = 6;
let newYear = currentYear + yearsJumped;

console.log(`Time jumped: ${yearsJumped} years. New Year: ${newYear}`);

 
//Exercise 8: The Wizard’s Spell Strength Test
console.log("");
console.log("Exercise 8: The Wizard’s Spell Strength Test");

let spell1 = 4;
let spell2 = 9;
let spell3 = 10;

if(spell1 > spell2 && spell1 > spell3){
    console.log("spell1 is the strongest");
}else if(spell2 > spell1 && spell2 > spell3){
    console.log("spell2 is the strongest");
}else if(spell3 > spell1 && spell3 > spell2){
    console.log("spell3 is the strongest");
}else{
    console.log("there is a tie between spells!");
}

//Exercise 9: The Haunted House Mystery
console.log("");
console.log("Exercise 9: The Haunted House Mystery");

let kitchenHasGhost = false;
let livingRoomHasGhost = false;

let isHouseSafe = !kitchenHasGhost && !livingRoomHasGhost;
console.log(`${isHouseSafe ? "House is safe" : "House is not safe"}`);

//Exercise 10: The Robot’s Battery Check
console.log("");
console.log("Exercise 10: The Robot’s Battery Check");

let batteryLevel = 20;

if(batteryLevel > 30){
    console.log("Battery sufficient");
}else{
    console.log("Low battery");
}

//Exercise 11: The Dragon’s Health Meter
console.log("");
console.log("Exercise 11: The Dragon’s Health Meter");

let dragonHealth = 100;
let knightAttackDamage = 25;

dragonHealth -= knightAttackDamage;
console.log(`dragon health: ${dragonHealth}`);

//Exercise 12: The Speeding Race Car
console.log("");
console.log("Exercise 12: The Speeding Race Car");

let speedLimit = 50;
let carSpeed = 10;

carSpeed += 30;

console.log(`Current Speed: ${carSpeed}`);

if(carSpeed >= speedLimit){
    console.log("Speed Warning: You are going too fast!");
}else{
    console.log("Speed is okay");
}

//Exercise 13: The Superhero Strength Test
console.log("");
console.log("Exercise 13: The Superhero Strength Test");

let heroStrength = 95;
let villainStrength = 90;

if (heroStrength === villainStrength) {
    console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
} else if (heroStrength > villainStrength) {
    if (heroStrength - villainStrength > 10) {
        console.log("Valiant triumphs decisively! Malakor is utterly outmatched! 💥");
    } else {
        console.log("Valiant barely edges out! A close call victory against Malakor!");
    }
} else {
    if (villainStrength - heroStrength > 10) {
        console.log("Malakor's power is overwhelming! Valiant is soundly defeated! 🔥");
    } else {
        console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
    }
}
