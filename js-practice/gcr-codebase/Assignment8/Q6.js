let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Phone", category: "Electronics", price: 30000, stock: 15 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1500, stock: 3 },
    { id: 4, name: "Shoes", category: "Clothing", price: 2500, stock: 8 },
    { id: 5, name: "Book", category: "Stationery", price: 500, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());