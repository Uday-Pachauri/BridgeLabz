let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    try {
        let prices = orderItems.map(item => {
            let food = menu.find(m => m.name === item);

            if (!food) {
                throw new Error("Invalid item: " + item);
            }

            return food.price;
        });

        let total = prices.reduce((sum, price) => sum + price, 0);

        return total;
    } catch (error) {
        return error.message;
    }
}

console.log(calculateBill(["Pizza", "Burger"]));
console.log(calculateBill(["Pizza", "Invalid Food"]));