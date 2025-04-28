const sectorNumber = 8;
const parity = sectorNumber % 2 === 0 ? 'Even' : 'Odd';
console.log(`Sector ${sectorNumber} is ${parity}`);