document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <span class="price">${item.name} - $${item.price}</span>
            <button class="delete" onclick="removeFromCart(${index})">Delete</button>
        `;
        cartElement.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('total').innerText = `Total: $ ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// BUTON BUY

// Funcția pentru deschiderea ferestrei modale
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Funcția pentru închiderea ferestrei modale
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Închiderea ferestrei modale când utilizatorul face clic în afara ferestrei
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Tratează trimiterea formularului
document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aici poți adăuga cod pentru procesarea datelor cardului
    alert('Datele cardului au fost trimise!');

    // Golește câmpurile formularului
    document.getElementById('card-form').reset();

    // Golește coșul de cumpărături
    localStorage.removeItem('cart');
    renderCart();

    // Închide fereastra modală
    closeModal();
});
