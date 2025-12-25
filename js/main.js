/**
 * Cadan Restaurant App Logic
 * Complete Version - All Categories included.
 */

const state = {
    cart: JSON.parse(localStorage.getItem('cadan_cart')) || [],
    menuItems: [
        // --- Fast Foods (20 Items) ---
        { id: "fast-0", name: "adan uni kalakal", category: "fast-food", price: 4, image: "assets/menu/item-0.jpg", desc: "Signature Adan Uni Kalakal." },
        { id: "fast-1", name: "air-max", category: "fast-food", price: 6.5, image: "assets/menu/item-1.jpg", desc: "The ultimate Air-Max burger." },
        { id: "fast-2", name: "Cadan air-rice", category: "fast-food", price: 7, image: "assets/menu/item-2.jpg", desc: "Cadan special air-rice plate." },
        { id: "fast-3", name: "cadan air", category: "fast-food", price: 6, image: "assets/menu/item-3.jpg", desc: "Classic Cadan Air meal." },
        { id: "fast-4", name: "cadan air VP", category: "fast-food", price: 7, image: "assets/menu/item-4.jpg", desc: "VP Special Cadan Air." },
        { id: "fast-5", name: "cadan mix", category: "fast-food", price: 3, image: "assets/menu/item-5.jpg", desc: "Mixed platter for a quick bite." },
        { id: "fast-6", name: "fish-mix", category: "fast-food", price: 4.5, image: "assets/menu/item-6.jpg", desc: "Fresh fish mix with spices." },
        { id: "fast-7", name: "malawax", category: "fast-food", price: 3, image: "assets/menu/item-7.jpg", desc: "Sweet, crispy Malawax." },
        { id: "fast-8", name: "potato-fish", category: "fast-food", price: 7, image: "assets/menu/item-8.jpg", desc: "Hearty Potato and Fish combo." },
        { id: "fast-9", name: "Sandi", category: "fast-food", price: 4, image: "assets/menu/item-9.jpg", desc: "Fresh sandwich." },
        { id: "fast-10", name: "Fish Burger", category: "fast-food", price: 2, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=70", desc: "Crispy fish fillet burger with tartar sauce." },
        { id: "fast-11", name: "Chicken Burger", category: "fast-food", price: 2, image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80", desc: "Juicy chicken patty with fresh lettuce." },
        { id: "fast-12", name: "Fish Shawarma", category: "fast-food", price: 2.5, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=70", desc: "Spiced fish wrapped in warm flatbread." },
        { id: "fast-13", name: "Chicken Shawarma", category: "fast-food", price: 3, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=70", desc: "Grilled chicken wrap with garlic sauce." },
        { id: "fast-14", name: "Chips", category: "fast-food", price: 1, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=70", desc: "Golden crispy french fries." },
        { id: "fast-15", name: "Fish Curry", category: "fast-food", price: 5, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", desc: "Rich and spicy traditional fish curry." },
        { id: "fast-16", name: "Fish Masala", category: "fast-food", price: 6, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=70", desc: "Fish cooked in aromatic masala spices." },
        { id: "fast-17", name: "Chicken Curry", category: "fast-food", price: 6, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=70", desc: "Tender chicken simmered in curry sauce." },
        { id: "fast-18", name: "Sandwich", category: "fast-food", price: 3.5, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=70", desc: "Fresh sandwich with your choice of filling." },
        { id: "fast-19", name: "Grilled Fish", category: "fast-food", price: 5, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=70", desc: "Perfectly char-grilled fish fillet." },

        // --- Lunch Foods (8 Items) ---
        { id: 'lunch-0', name: 'Baasto Saldato', category: 'lunch', price: 1.36, image: 'assets/menu/lunch/drink-0.jpeg', desc: 'Hearty and delicious pasta with stew.' },
        { id: 'lunch-1', name: 'Bariis', category: 'lunch', price: 1, image: 'assets/menu/lunch/drink-1.jpeg', desc: 'Fragrant Somali rice.' },
        { id: 'lunch-2', name: 'Geel Dhaylo', category: 'lunch', price: 8.5, image: 'assets/menu/lunch/drink-2.jpeg', desc: 'Tender young camel meat.' },
        { id: 'lunch-3', name: 'Ido', category: 'lunch', price: 10.5, image: 'assets/menu/lunch/drink-3.jpg', desc: 'Succulent goat meat.' },
        { id: 'lunch-4', name: 'Kabsa', category: 'lunch', price: 8.5, image: 'assets/menu/lunch/drink-4.jpg', desc: 'Spiced rice with meat.' },
        { id: 'lunch-5', name: 'Kalankal', category: 'lunch', price: 3, image: 'assets/menu/lunch/drink-5.jpg', desc: 'Spicy fish stew.' },
        { id: 'lunch-6', name: 'Laxoox (Laxmind)', category: 'lunch', price: 8.5, image: 'assets/menu/lunch/drink-6.jpg', desc: 'Traditional savory pancake meal.' },
        { id: 'lunch-7', name: 'Soor', category: 'lunch', price: 1.5, image: 'assets/menu/lunch/drink-7.jpg', desc: 'Soft cornmeal porridge.' },

        // --- Drinks (13 Items) ---
        { id: "drinks-0", name: "Avocado", category: "drinks", price: 2, image: "assets/menu/drinks/drink-0.jpg", desc: "Fresh Avocado Juice." },
        { id: "drinks-1", name: "Canuuni", category: "drinks", price: 2, image: "assets/menu/drinks/drink-1.jpeg", desc: "Refreshing beverage." },
        { id: "drinks-2", name: "Careys", category: "drinks", price: 2, image: "assets/menu/drinks/drink-2.jpeg", desc: "Refreshing beverage." },
        { id: "drinks-3", name: "Furulaato", category: "drinks", price: 2, image: "assets/menu/drinks/drink-3.jpg", desc: "Refreshing beverage." },
        { id: "drinks-4", name: "Isbaandheys", category: "drinks", price: 1, image: "assets/menu/drinks/drink-4.jpg", desc: "Refreshing beverage." },
        { id: "drinks-5", name: "Isbarmuuto", category: "drinks", price: 1, image: "assets/menu/drinks/drink-5.jpeg", desc: "Refreshing beverage." },
        { id: "drinks-6", name: "Liimacaan", category: "drinks", price: 1.5, image: "assets/menu/drinks/drink-6.jpg", desc: "Refreshing beverage." },
        { id: "drinks-7", name: "mango", category: "drinks", price: 1, image: "assets/menu/drinks/drink-7.jpg", desc: "Fresh Mango Juice." },
        { id: "drinks-8", name: "mango-milkshake", category: "drinks", price: 1.5, image: "assets/menu/drinks/drink-8.jpg", desc: "Creamy Mango Milkshake." },
        { id: "drinks-9", name: "milk-shake", category: "drinks", price: 1.5, image: "assets/menu/drinks/drink-9.jpeg", desc: "Classic Milkshake." },
        { id: "drinks-10", name: "mushakal", category: "drinks", price: 1.5, image: "assets/menu/drinks/drink-10.jpeg", desc: "Mixed Fruit Juice." },
        { id: "drinks-11", name: "Papaya", category: "drinks", price: 1, image: "assets/menu/drinks/drink-11.jpg", desc: "Fresh Papaya." },
        { id: "drinks-12", name: "Qarre", category: "drinks", price: 1, image: "assets/menu/drinks/drink-12.jpeg", desc: "Watermelon Juice." },

        // --- Cafeteria (9 Items) ---
        { id: 'c1', name: 'Coffee', category: 'cafette', price: 0.75, desc: 'Freshly brewed house coffee.', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=70' },
        { id: 'c2', name: 'Tea (Shaah)', category: 'cafette', price: 0.5, desc: 'Classic spiced Somali tea.', image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=70' },
        { id: 'c3', name: 'Cappuccino', category: 'cafette', price: 0.75, desc: 'Rich espresso with steamed milk foam.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=70' },
        { id: 'c4', name: 'Espresso', category: 'cafette', price: 1, desc: 'Strong and bold shot of coffee.', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=70' },
        { id: 'c5', name: 'Coffee Latte', category: 'cafette', price: 1, desc: 'Creamy espresso with steamed milk.', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=70' },
        { id: 'c6', name: 'Ice Coffee', category: 'cafette', price: 1, desc: 'Chilled coffee served over ice.', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=70' },
        { id: 'c7', name: 'Qaxwo', category: 'cafette', price: 0.5, desc: 'Traditional Somali coffee with ginger.', image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=70' },
        { id: 'c8', name: 'Qaxwo Yamani', category: 'cafette', price: 0.5, desc: 'Spiced Yemeni style coffee.', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=70' },
        { id: 'c9', name: 'Masala Tea', category: 'cafette', price: 1, desc: 'Aromatic tea with milk and spices.', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=70' },
    ]
};

// Formatter
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(price);
};

// DOM Elements
const menuGrid = document.querySelector('#menu-grid');
const cartCount = document.querySelector('#cart-count');
const cartBtn = document.querySelector('#cart-btn');
const cartModal = document.querySelector('#cart-modal');
const cartItemsContainer = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutBtn = document.querySelector('#checkout-btn');
const closeModal = document.querySelector('#close-modal');
// Note: We need to make sure this selector works dynamically or we re-query if buttons change.
const filterBtns = document.querySelectorAll('.filter-btn');

// Init
function init() {
    // Default to 'all' or 'fast-food'
    renderMenu('all');
    setupEventListeners();
    updateCartUI();
}

function setupEventListeners() {
    // Filter Items
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            btns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');

            // Render category
            const category = e.target.dataset.category;
            renderMenu(category);
        });
    });

    // Cart Interactions
    if (cartBtn) cartBtn.addEventListener('click', () => {
        cartModal.classList.add('open');
        renderCartItems();
    });

    if (closeModal) closeModal.addEventListener('click', () => {
        cartModal.classList.remove('open');
    });

    if (cartModal) cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.classList.remove('open');
    });

    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);
}

function renderMenu(category) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    const filtered = category === 'all'
        ? state.menuItems
        : state.menuItems.filter(item => item.category === category);

    if (filtered.length === 0) {
        menuGrid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px;">No items found in this category.</div>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card animate-fade-in';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23eee%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2224%22>No Image</text></svg>'">
            </div>
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom: 8px;">
                    <h3 style="margin:0; font-size:1.1rem;">${item.name}</h3>
                    <span class="price">${formatPrice(item.price)}</span>
                </div>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 16px;">${item.desc}</p>
                <button class="btn btn-outline btn-sm add-btn" style="width:100%;" data-item='${JSON.stringify(item)}'>
                    Add to Order
                </button>
            </div>
        `;

        // Event delegation fallback or direct attachment
        const btn = card.querySelector('.add-btn');
        btn.addEventListener('click', () => addToCart(item));

        menuGrid.appendChild(card);
    });
}

function addToCart(item) {
    const existing = state.cart.find(i => i.id === item.id);
    if (existing) {
        existing.qty++;
    } else {
        state.cart.push({ ...item, qty: 1 });
    }
    saveCart();
    updateCartUI();

    // Feedback
    // We need to find the specific button clicked. Since we re-render, this is tricky.
    // Simpler: Just show a global toast or try to find button by data attribute if visible.
}

function removeFromCart(id) {
    state.cart = state.cart.filter(item => item.id !== id);
    saveCart();
    renderCartItems();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('cadan_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const count = state.cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartCount) {
        cartCount.textContent = count;
        if (count > 0) {
            cartCount.classList.add('bump');
            setTimeout(() => cartCount.classList.remove('bump'), 300);
        }
    }
}

function renderCartItems() {
    if (!cartItemsContainer || !cartTotal) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart" style="text-align:center; padding:20px; color: #888;">Your cart is empty.</div>';
    } else {
        state.cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <small>${item.qty} x ${formatPrice(item.price)}</small>
                </div>
                <div class="cart-item-actions">
                    <span>${formatPrice(itemTotal)}</span>
                    <button class="remove-btn" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;">&times;</button>
                </div>
            `;

            div.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(item.id));
            cartItemsContainer.appendChild(div);
        });
    }

    cartTotal.textContent = formatPrice(total);
}

function handleCheckout() {
    if (state.cart.length === 0) return alert("Please add items first!");

    let message = "Hello Cadan Restaurant! I would like to order:\n\n";
    let total = 0;

    state.cart.forEach(item => {
        message += `• ${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}\n`;
        total += item.price * item.qty;
    });

    message += `\nTotal: ${formatPrice(total)}`;
    message += `\n\nPlease confirm my order.`;

    const url = `https://wa.me/252613712222?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Lightbox logic
const galleryImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1543353071-087092ec393a",
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
];

window.openLightbox = (index) => {
    const lightbox = document.createElement('div');
    lightbox.className = 'cart-modal open';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.innerHTML = `
        <div style="position:relative; max-width:90%; max-height:90%;">
            <img src="${galleryImages[index]}?auto=format&fit=crop&w=1200&q=80" style="max-width:100%; max-height:80vh; border-radius:12px; box-shadow:0 20px 50px rgba(0,0,0,0.5);">
            <button style="position:absolute; top:-40px; right:0; background:white; width:40px; height:40px; border-radius:50%; border:none; font-size:20px; cursor:pointer;" onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.remove();
    });
    document.body.appendChild(lightbox);
};

document.addEventListener('DOMContentLoaded', init);
