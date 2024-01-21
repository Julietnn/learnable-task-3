let cart = [];

function addToCart() {
    let name = prompt("Enter product name: ");

    let price = prompt("Enter price: ");

    cart.push({
        name,
        price: Number(price)
    });

    console.log(`You added ${name} for $${price}`); // object literal
}

// Display cart
function displayCart() {
    console.log("Cart:");

    cart.forEach(item => {
        console.log(`${item.name} - $${item.price}`);
    });
}

// Calculate total
function calculateTotal() {
    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    return total;
}

// Main
console.log("Shopping Cart");
while (true) {
    addToCart();

    let choice = prompt("Add another item? (y/n)");

    if (choice.toLowerCase() !== "y") break;
}

displayCart();

let total = calculateTotal();
console.log(`Total: $${total}`);

