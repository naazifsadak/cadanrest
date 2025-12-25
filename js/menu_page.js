
// Extracted Fast Food Data
const fastFoodData = [
    {
        "id": "fast-0",
        "name": "adan uni kalakal",
        "price": 4,
        "image": "assets/menu/item-0.jpg",
        "desc": "Signature Adan Uni Kalakal."
    },
    {
        "id": "fast-1",
        "name": "air-max",
        "price": 6.5,
        "image": "assets/menu/item-1.jpg",
        "desc": "The ultimate Air-Max burger."
    },
    {
        "id": "fast-2",
        "name": "Cadan air-rice",
        "price": 7,
        "image": "assets/menu/item-2.jpg",
        "desc": "Cadan special air-rice plate."
    },
    {
        "id": "fast-3",
        "name": "cadan air",
        "price": 6,
        "image": "assets/menu/item-3.jpg",
        "desc": "Classic Cadan Air meal."
    },
    {
        "id": "fast-4",
        "name": "cadan air VP",
        "price": 7,
        "image": "assets/menu/item-4.jpg",
        "desc": "VP Special Cadan Air."
    },
    {
        "id": "fast-5",
        "name": "cadan mix",
        "price": 3,
        "image": "assets/menu/item-5.jpg",
        "desc": "Mixed platter for a quick bite."
    },
    {
        "id": "fast-6",
        "name": "fish-mix",
        "price": 4.5,
        "image": "assets/menu/item-6.jpg",
        "desc": "Fresh fish mix with spices."
    },
    {
        "id": "fast-7",
        "name": "malawax",
        "price": 3,
        "image": "assets/menu/item-7.jpg",
        "desc": "Sweet, crispy Malawax."
    },
    {
        "id": "fast-8",
        "name": "potato-fish",
        "price": 7,
        "image": "assets/menu/item-8.jpg",
        "desc": "Hearty Potato and Fish combo."
    },
    {
        "id": "fast-9",
        "name": "Sandi",
        "price": 4,
        "image": "assets/menu/item-9.jpg",
        "desc": "Fresh sandwich."
    }
];

// Placeholder Lunch & Drinks
const lunchData = [
    { id: 'l1', name: 'Rice & Camel Meat', price: 12, desc: 'Tender camel meat with basmati rice.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
    { id: 'l2', name: 'Spaghetti & Chicken', price: 10, desc: 'Somali style pasta with grilled chicken.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=70' },
];

const drinksData = [
    {
        "id": "drinks-0",
        "name": "Avocado",
        "price": 2,
        "image": "assets/menu/drinks/drink-0.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-1",
        "name": "Canuuni",
        "price": 2,
        "image": "assets/menu/drinks/drink-1.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-2",
        "name": "Careys",
        "price": 2,
        "image": "assets/menu/drinks/drink-2.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-3",
        "name": "Furulaato",
        "price": 2,
        "image": "assets/menu/drinks/drink-3.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-4",
        "name": "Isbaandheys",
        "price": 1,
        "image": "assets/menu/drinks/drink-4.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-5",
        "name": "Isbarmuuto",
        "price": 1,
        "image": "assets/menu/drinks/drink-5.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-6",
        "name": "Liimacaan",
        "price": 1.5,
        "image": "assets/menu/drinks/drink-6.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-7",
        "name": "mango",
        "price": 1,
        "image": "assets/menu/drinks/drink-7.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-8",
        "name": "mango-milkshake",
        "price": 1.5,
        "image": "assets/menu/drinks/drink-8.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-9",
        "name": "milk-shake",
        "price": 1.5,
        "image": "assets/menu/drinks/drink-9.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-10",
        "name": "mushakal",
        "price": 1.5,
        "image": "assets/menu/drinks/drink-10.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-11",
        "name": "Papaya",
        "price": 1,
        "image": "assets/menu/drinks/drink-11.jpg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    },
    {
        "id": "drinks-12",
        "name": "Qarre",
        "price": 1,
        "image": "assets/menu/drinks/drink-12.jpeg",
        "category": "drinks",
        "desc": "Refreshing beverage."
    }
];

// Placeholder Cafeteria Data
const cafeteriaData = [
    { id: 'c1', name: 'Somali Coffee (Qaxwe)', price: 1, desc: 'Traditional spiced coffee.', image: 'https://images.unsplash.com/photo-1596952454508-1649962e84d4?auto=format&fit=crop&w=800&q=70' },
    { id: 'c2', name: 'Macchiato', price: 1.5, desc: 'Espresso with a dash of milk foam.', image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&w=800&q=70' },
    { id: 'c3', name: 'Samosa (Sambuus)', price: 0.5, desc: 'Crispy pastry filled with beef or veg.', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=70' },
    { id: 'c4', name: 'Mandazi (Bur)', price: 0.5, desc: 'Sweet fried dough.', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=70' },
    { id: 'c5', name: 'Coffee Latte', price: 1, desc: 'Creamy espresso with steamed milk.', image: 'https://images.unsplash.com/photo-1570968992193-96a7920b4104?auto=format&fit=crop&w=800&q=70' },
];

// Cart State (using partial persistence via localStorage would be better, but keeping simple for now)
let cart = JSON.parse(localStorage.getItem('cadan_cart')) || [];

// Formatter
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(price);
};

// Logic
function init() {
    renderSection('fast-food-grid', fastFoodData);
    renderSection('lunch-food-grid', lunchData);
    renderSection('drinks-grid', drinksData);
    renderSection('cafeteria-grid', cafeteriaData);
    updateCartUI();
    setupCartListeners();
}

function renderSection(elementId, data) {
    const grid = document.getElementById(elementId);
    if (!grid) return;

    grid.innerHTML = data.map(item => `
        <div class="menu-card animate-fade-in">
            <div class="card-img-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23eee%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23aaa%22 font-size=%2224%22>No Image</text></svg>'">
            </div>
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:8px;">
                    <h3 style="margin:0; font-size:1.2rem;">${item.name}</h3>
                    <span class="price">${formatPrice(item.price)}</span>
                </div>
                <p style="font-size:0.9rem; margin-bottom:16px;">${item.desc}</p>
                <button class="btn btn-outline btn-sm add-btn" style="width:100%;" data-item='${JSON.stringify(item)}'>
                    Add to Order
                </button>
            </div>
        </div>
    `).join('');

    // Add listeners
    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = JSON.parse(e.target.dataset.item);
            addToCart(item);

            // Visual feedback
            const originalText = e.target.textContent;
            e.target.textContent = "Added!";
            e.target.style.background = "var(--secondary)";
            e.target.style.color = "white";
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.background = "";
                e.target.style.color = "";
            }, 1000);
        });
    });
}

// Cart Logic
// (Ideally this should be a shared module, but for this constraint we duplicate the simplified logic or use the same storage)
function addToCart(item) {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('cadan_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = count;
        if (count > 0) {
            cartCount.classList.add('bump');
            setTimeout(() => cartCount.classList.remove('bump'), 300);
        }
    }
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container || !totalEl) return;

    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart" style="text-align:center; padding:40px; color:var(--text-muted);">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
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
                    <button class="remove-btn" data-id="${item.id}">&times;</button>
                </div>
            `;
            container.appendChild(div);
        });

        // Listeners for remove
        container.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
    }

    totalEl.textContent = formatPrice(total);
}

function setupCartListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const modal = document.getElementById('cart-modal');
    const close = document.getElementById('close-modal');
    const checkout = document.getElementById('checkout-btn');

    if (cartBtn) cartBtn.addEventListener('click', () => { modal.classList.add('open'); renderCartItems(); });
    if (close) close.addEventListener('click', () => modal.classList.remove('open'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

    if (checkout) checkout.addEventListener('click', () => {
        if (cart.length === 0) return alert("Please add items first!");
        let message = "Hello Cadan Restaurant! I would like to order:\n\n";
        let total = 0;
        cart.forEach(item => {
            message += `• ${item.qty}x ${item.name} - ${formatPrice(item.price * item.qty)}\n`;
            total += item.price * item.qty;
        });
        message += `\nTotal: ${formatPrice(total)}`;
        message += `\n\nPlease confirm my order.`;
        const url = `https://wa.me/252613712222?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

document.addEventListener('DOMContentLoaded', init);
