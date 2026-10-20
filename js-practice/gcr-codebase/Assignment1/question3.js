
let expenses = {
    food: 4000,
    travel: 1500,
    rent: 6000,
    bills: 1200,
    leisure: 800
};

let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

let average = total / Object.keys(expenses).length;
let tax = total * 0.10;
total += tax;

console.log(`Total Expenses: ₹${(total - tax).toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax: ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${total.toFixed(2)}`);
