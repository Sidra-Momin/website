let cart = [];
let products = [
    { id: 1, name: 'Product 1', price: 25.00 },
    { id: 2, name: 'Product 2', price: 40.00 },
    { id: 3, name: 'Product 3', price: 50.00 }
];

// Handle adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.closest('.product').dataset.id;
        addToCart(productId);
    });
});

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    cart.push(product);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;

    // Update cart modal contents
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Show cart modal
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'flex';
});

// Close cart modal
document.getElementById('close-cart-button').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Proceed to checkout
document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // In a real-world scenario, you'd redirect to a checkout page
});
