
let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x³): ${power.toFixed(2)}`);
console.log(`Random Number: ${randomNumber}`);
