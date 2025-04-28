// const students = [
//     { name: "Anna", grades: [90, 80, 100] },
//     { name: "Ben", grades: [70, 85, 60] },
//     { name: "Clara", grades: [88, 95, 91] }
//   ];

// function analyzeGrades(students) {
//     const result = [];
//     for(let student of students) {
//         const sum = student.grades.reduce((acc, elem) => (acc + elem), 0);
//         result.push(`${student.name}: ${Math.floor(sum / student.grades.length)}`)
//     }
//     return result;
// }

// console.log(analyzeGrades(students));

// const items = [
//     { name: "Laptop", quantity: 4 },
//     { name: "Mouse", quantity: 0 },
//     { name: "Keyboard", quantity: 0 }
// ];

// function checkInventory(items) {
//     const outOfStock = items.filter((obj) => obj.quantity === 0);
//     return outOfStock.map(item => item.name);
// }  

// console.log(checkInventory(items));

// const sentence = "the cat and the dog played and the dog slept";

// function wordFrequency(sentence) {
//     const arr = sentence.split(" ");
//     const result = {};
//     for(let elem of arr){
//         if(result[elem]){
//             result[elem] += 1;
//         } else {
//             result[elem] = 1;
//         }
//     }
//     return result;
// }

// console.log(wordFrequency(sentence));
// function sumEvenNumbers(arr) {
//     return arr.reduce((acc, elem) => elem % 2 === 0 ? acc + elem : acc, 0);
// }

// console.log(sumEvenNumbers([1, 2, 3, 4]));

// function findLongestWord(words) {
//     return words.reduce((a, b) => a.length > b.length ? a : b, words[0])
// }

// console.log(findLongestWord(['manana', 'tako', 'gamarjoba', '123456789']))



