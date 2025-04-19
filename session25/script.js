
console.log("Task 1: Basic Counting Loop (For Loop)");

function countDownFrom(n){
    for(let i = n; i >= 1; i--) console.log(i);
}

countDownFrom(5);

console.log("");
console.log("Task 2: Iterate Over an Array (For...of Loop)");

function printArrayElements(arr){
    for (let fruit of arr) console.log(fruit)
}

printArrayElements(["Apple", "Banana", "Cherry"]);

console.log("");
console.log("Task 3: Sum of Numbers (While Loop)");

function sumNumbersUpTo(n){
    let start = 1;
    let sum = 0;

    while(start <= n){
        sum += start;
        start++;
    }
    console.log(sum); 
}

sumNumbersUpTo(5);
// sumNumbersUpTo(10);

console.log("");
console.log("Task 4: Repeat a String (Do...While Loop)");

function repeatString(str, n) {
    let num = 0;
    do {
        console.log(str);
        num++
    }while(num < n);
}

repeatString("Hello", 3); 

console.log("");
console.log("Task 5: Iterate Over Object Properties (For...in Loop)");

function printObjectKeys(obj){
    for(let key in obj) console.log(key);
}

printObjectKeys({ name: "Alice", age: 25 }); 

//Medium tasks
console.log("");
console.log("Task 1: Filter Odd Numbers (For Loop)");

function filterOdds(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

console.log(filterOdds([1, 2, 3, 4, 5]));

console.log("");
console.log("Task 2: Find Maximum Value (For...of Loop)");

function findMaxValue(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(num > max){
            max = num;
        }
    }
    console.log(max);
}

findMaxValue([10, 40, 5, 30]);

console.log("");
console.log("Task 3: Reverse a String (While Loop)");

function reverseString(str) {
    let result = "";
    let i = str.length - 1;
    while(i >= 0){
        result += str[i];
        i--;
    }
    console.log(result);
}

reverseString("Hello"); 
reverseString("tamar"); 

console.log("");
console.log("Task 4: Validate User Input (Do...While Loop)");

// function getValidInput() {
//     let num;
//     do {
//         num = Number(prompt("Enter a number between 1 and 10:"));
//     } while (num < 1 || num > 10 || isNaN(num));

//     console.log("Valid input received:", num);
// }

// getValidInput();

//Hard tasks
console.log("");
console.log("Task 1: FizzBuzz with a Twist");

function  fizzBuzzTwist() {
    let i = 1;
    while(i <= 50){
        if(i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(String(i).includes("3")){
           console.log("Almost Fizz")
        }else{
            console.log(i);
        }
    
        i++;
    }
}

fizzBuzzTwist(); 

console.log("");
console.log("Task 2: Nested Loops: Multiplication Table");

function printMultiplicationTable(n) {
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <=n; j++){
            let result = i * j;
            console.log(`${i} x ${j} = ${result}`)
        }
    }
}

printMultiplicationTable(5); 

console.log("");
console.log("Task 3: Modify Array While Looping");

function removeDuplicates(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7]); 





