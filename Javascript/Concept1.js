let numbers = [10, 25, 7, 42, 15, 3, 8, 30, 12, 5];

let doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubledNumbers);

let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

let greater20 = numbers.find(number => number > 20);
console.log("First number greater than 20:", greater20);

let replaceNumber = numbers.map(number => number === 5 ? 100 : number);
console.log("Numbers with 5 replaced by 100:", replaceNumber);
