'use strict';
// ─── CONFIG ───────────────────────────────
const WA_NUMBER = '919209088663'; //  WhatsApp number

// ─── STATIC PRODUCTS ──────────────────────
const PRODUCTS = [
    {
        id: 1, name: 'Flowerhorn Classic Red Dragon',
        category: 'Fish', price: 2500, stock: 8, badge: 'hot',
        desc: 'Classic Red Dragon Flowerhorn with a vibrant red body, prominent kok, and bold black markings. Imported from Thailand — healthy and quarantined.',
        images: [
            "images/Classic_Red_Dragon_img1.jpg",
            "images/ClassicRedDragonimg2.png",
        ]
    },
    {
        id: 2, name: 'Flowerhorn Golden Monkey',
        category: 'Fish', price: 3800, stock: 4, badge: 'rare',
        desc: 'Premium Golden Monkey Flowerhorn with a beautiful golden body and pearl scaling. Rare import from Malaysia. Only a few left!',
        images: [
            "images/Goldenbase.png",
            "images/Gemini_Generated_Image_oouyxkoouyxkoouy.png",
            "images/GoldenMonkey_img1.png",
            "images/GoldenMonkey_img2.jpg",
        ]
    },
    {
        id: 3, name: 'Flowerhorn King Kamfa',
        category: 'Fish', price: 5200, stock: 3, badge: 'rare',
        desc: 'Majestic King Kamfa Flowerhorn — the jewel of the cichlid world. Striking blue pearls, massive kok, and a royal presence. Very limited stock.',
        images: [
            "images/FlowerhornKingKamfaimg1.jpg"]
    },
    {
        id: 4, name: 'Thai Silk ',
        category: 'Fish', price: 499, stock: 20, badge: 'new',
        desc: 'Thai Silk Betta (2 inch) – Premium metallic Betta with a smooth, shiny silk-like body color and elegant fins.Known for its bright metallic shades and graceful swimming, making it a stunning centerpiece for nano aquariums.',
        images: [
            "images/thaisilkimg.3.jpg",
            "images/thaisilkimg.1.jpg",
            "images/thaisilkimg.2.jpg"
        ]
    },
    {
        id: 5, name: 'Okiko platinum pellets',
        category: 'Fish Food', price: 350, stock: 5, badge: 'hot',
        desc: 'Okiko Platinum Pellets - Premium Flowerhorn Fish Food with Color Enhancing Formula -100 GMS- (Large). Specially formulated to enhance the vibrant colors and overall health of your Flowerhorn cichlids. Packed with high-quality proteins, vitamins, and minerals to promote brilliant coloration and robust growth. Regular feeding helps your Flowerhorn develop its stunning hues while maintaining optimal nutrition.',
        images: [
            "images/okiko_platinum.jpg",
        ]
    },
    {
        id: 6, name: 'Black Pearl Pellets',
        category: 'Fish Food', price: 350, stock: 5, badge: 'hot',
        desc: 'Black Pearl Pellets - Premium Flowerhorn Fish Food with Dark Color Enhancing Formula -100 GMS- (Large). Specially formulated to enhance the dark coloration and overall health of your Flowerhorn cichlids. Packed with high-quality proteins, vitamins, and minerals to promote deep black hues and robust growth. Regular feeding helps your Flowerhorn develop its striking dark appearance while maintaining optimal nutrition.',
        images: [
            "images/Black_Pearl.jpg",
        ]
    },
    {
        id: 7, name: ' red diamond color booster Pellets',
        category: 'Fish Food', price: 250, stock: 60, badge: 'new',
        desc: ' Okiko Red Diamond Color Booster Pellets - Premium Flowerhorn Fish Food with Intense Red Color Enhancing Formula -100 GMS- (Large). Specially formulated to enhance the intense red coloration and overall health of your Flowerhorn cichlids. Packed with high-quality proteins, vitamins, and minerals to promote vibrant red hues and robust growth. Regular feeding helps your Flowerhorn develop its stunning red colors while maintaining optimal nutrition.',
        images: [
            "images/reddiamond.jpg",

        ]
    },
    {
        id: 8, name: 'Head Power Pellets',
        category: 'Fish Food', price: 300, stock: 60, badge: 'new',
        desc: 'Okiko Head Power (Head up) flowerhorn Fish Food with Head Booster Formula -100 GMS- (Large). Specially formulated to enhance the nuchal hump (kok) growth in Flowerhorn cichlids. Packed with high-quality proteins, vitamins, and minerals to promote vibrant colors and overall health. Regular feeding helps your Flowerhorn develop a larger, more impressive head hump while maintaining optimal nutrition.',
        images: [
            "images/headpower_img1.jpg",
            "images/head power_img2.jpg"
        ]
    },
    {
        id: 9, name: 'Aqua Buddy Supreme Pro Fish food',
        category: 'Fish Food', price: 350, stock: 50, badge: 'hot',
        desc: 'Aqua Buddy Supreme Pro Fish Food - Premium Formula for Optimal Health and Vibrant Colors. Specially formulated to meet the nutritional needs of your fish while enhancing their natural beauty.',
        images: [
            "images/aqua_buddy_supreme.jpg",
            "images/Aqua_buddy.png"
        ]
    },
    {
        id: 10, name: 'Aqua buddy Combo pack Supreme Pro Fish food & 6 in 1 Advaced',
        category: 'Fish Food', price: 600, stock: 30, badge: 'hot',
        desc: 'Aqua Buddy Combo Pack - Supreme Pro Fish Food & 6 in 1 Advanced Water Conditioner. The ultimate combo for fish health and water quality. Nourish your fish with our premium Supreme Pro Fish Food while keeping their environment pristine with our 6 in 1 Advanced Water Conditioner.',
        images: [
            "images/Aqua_buddy_combo.png"
        ]
    },
    {
        id: 11, name: 'Ready made Aquarium tanks available in 2 Feet sizes',
        category: 'Tank', price: 600, stock: 1, badge: 'new',
        desc: 'Ready-made 2-foot aquarium tanks — perfect for beginners and small setups. Sturdy glass construction with a sleek black frame. Ideal for bettas, small cichlids, or nano aquariums.',
        images: [
            "images/2feet_tank.png"
        ]
    },
    {
        id: 12, name: 'Ready made Aquarium tanks available in 3 Feet sizes',
        category: 'Tank', price: 800, stock: 2, badge: 'new',
        desc: 'Ready-made 3-foot aquarium tanks — perfect for medium setups. Sturdy glass construction with a sleek black frame. Ideal for community tanks, medium cichlids, or planted aquariums.',
        images: [
            "images/3feet_tank.png",
        ]
    },
    {
        id: 13, name: 'Ready made Aquarium tanks available in 4 Feet sizes',
        category: 'Tank', price: 1200, stock: 2, badge: 'new',
        desc: 'Ready-made 4-foot aquarium tanks — perfect for larger setups. Sturdy glass construction with a sleek black frame. Ideal for larger cichlids, community tanks, or elaborate planted aquariums.',
        images: [
            "images/4feet_tank.png",
        ]
    },
    {
        id: 14, name: 'Grooming Mirror for Flowerhorn',
        category: 'Accessories', price: 200, stock: 12, badge: 'new',
        desc: 'High-quality grooming mirror designed specifically for Flowerhorn cichlids. Enhances the natural colors and features of your fish while providing a better viewing experience.',
        images: [
            "images/grooming_mirror.jpg"]
    }
];


// ─── CART STATE (in-memory) ────────────────
let cart = [];

// ─── BUBBLE CANVAS ────────────────────────
(function initBubbles() {
    const canvas = document.getElementById('bubble-canvas');
    const ctx = canvas.getContext('2d');
    let bubbles = [];
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < 45; i++) {
        bubbles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 10 + 2,
            vy: -(Math.random() * 0.35 + 0.08),
            vx: (Math.random() - 0.5) * 0.18,
            o: Math.random() * 0.3 + 0.04
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0,204,255,${b.o})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            b.y += b.vy; b.x += b.vx;
            if (b.y < -20) b.y = canvas.height + 20;
            if (b.x < -20) b.x = canvas.width + 20;
            if (b.x > canvas.width + 20) b.x = -20;
        });
        requestAnimationFrame(draw);
    }
    draw();
})();

// ─── LOADING SCREEN ───────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        initScrollReveal();
    }, 1800);
});

// ─── SCROLL REVEAL ────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── PAGE ROUTING ─────────────────────────
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    document.querySelectorAll('.nav-btn, .mob-btn').forEach(b => b.classList.remove('active'));
    const navBtn = document.getElementById('nav-' + pageId);
    if (navBtn) navBtn.classList.add('active');
    const mobBtn = document.getElementById('mob-' + pageId);
    if (mobBtn) mobBtn.classList.add('active');
    if (pageId === 'main') renderShop();
    if (pageId === 'cart') renderCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToProducts() {
    showPage('main');
    setTimeout(() => {
        const el = document.getElementById('products-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ─── HELPERS ──────────────────────────────
function catClass(cat) {
    const map = { 'Fish': 'cat-fish', 'Fish Food': 'cat-food', 'Tank': 'cat-tank', 'Accessories': 'cat-acc' };
    return map[cat] || 'cat-fish';
}
function badgeHtml(badge) {
    if (!badge) return '';
    const labels = { hot: '🔥 Hot', new: '✨ New', sale: '💰 Sale', rare: '💎 Rare' };
    return `<div class="card-badge badge-${badge}">${labels[badge] || badge}</div>`;
}
function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }
function openWhatsApp(text) {
    const url = `https://wa.me/${WA_NUMBER}${text ? '?text=' + encodeURIComponent(text) : ''}`;
    window.open(url, '_blank');
}

// ─── SHOP RENDER ──────────────────────────
let activeFilter = 'all';

function setFilter(cat) {
    activeFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderShop();
}

function renderShop() {
    const q = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
    const filtered = PRODUCTS.filter(p => {
        const matchCat = activeFilter === 'all' || p.category === activeFilter;
        const matchQ = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
        return matchCat && matchQ;
    });

    document.getElementById('results-info').textContent =
        `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}${q ? ` for "${q}"` : ''}`;

    const grid = document.getElementById('products-grid');
    if (!filtered.length) {
        grid.innerHTML = `
      <div class="no-results">
        <div class="big-icon">🔍</div>
        <h3>No products found</h3>
        <p style="color:var(--muted)">Try a different search term or category</p>
        <button class="btn btn-secondary" style="margin-top:14px" onclick="setFilter('all');document.getElementById('search-input').value='';renderShop()">Clear Filters</button>
      </div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openDetail(${p.id})">
      <div class="card-img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=60'">
        ${badgeHtml(p.badge)}
        <div class="cat-pill ${catClass(p.category)}">${p.category}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <div class="card-price">${formatPrice(p.price)}</div>
          <div class="card-actions" onclick="event.stopPropagation()">
            <button class="btn btn-wa btn-sm"
              onclick="openWhatsApp('Hi! I want to order ${encodeProductName(p.name)} priced at ${formatPrice(p.price)}. Is it available?')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order
            </button>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">+ Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function encodeProductName(name) {
    return name.replace(/'/g, "\\'");
}

// ─── PRODUCT DETAIL ───────────────────────
let detailProduct = null;
let galleryIdx = 0;

function openDetail(id) {
    detailProduct = PRODUCTS.find(p => p.id === id);
    if (!detailProduct) return;
    galleryIdx = 0;
    document.getElementById('detail-cat').textContent = detailProduct.category;
    document.getElementById('detail-name').textContent = detailProduct.name;
    document.getElementById('detail-desc').textContent = detailProduct.desc;
    document.getElementById('detail-price').textContent = formatPrice(detailProduct.price);
    document.getElementById('detail-qty').textContent = '1';

    const stockEl = document.getElementById('detail-stock');
    if (detailProduct.stock === 0) {
        stockEl.innerHTML = '<div class="stock-badge stock-out">❌ Out of Stock</div>';
    } else if (detailProduct.stock <= 5) {
        stockEl.innerHTML = `<div class="stock-badge stock-low">⚠ Only ${detailProduct.stock} left!</div>`;
    } else {
        stockEl.innerHTML = `<div class="stock-badge stock-ok">✔ In Stock</div>`;
    }

    const waMsg = `Hi! I'm interested in *${detailProduct.name}* priced at ${formatPrice(detailProduct.price)}. Is it available?`;
    document.getElementById('detail-wa-btn').onclick = () => openWhatsApp(waMsg);

    renderGallery();
    showPage('detail');
    document.getElementById('nav-main').classList.add('active');
}

function renderGallery() {
    const imgs = detailProduct.images;
    const mainImg = document.getElementById('gallery-img');
    mainImg.src = imgs[galleryIdx];
    document.getElementById('gallery-dots').innerHTML =
        imgs.map((_, i) => `<div class="gdot ${i === galleryIdx ? 'active' : ''}" onclick="setGallery(${i})"></div>`).join('');
    document.getElementById('gallery-thumbs').innerHTML =
        imgs.map((img, i) => `<div class="thumb ${i === galleryIdx ? 'active' : ''}" onclick="setGallery(${i})"><img src="${img}" alt=""></div>`).join('');
}

function setGallery(i) {
    const img = document.getElementById('gallery-img');
    img.classList.add('fade');
    setTimeout(() => {
        galleryIdx = i;
        img.src = detailProduct.images[i];
        img.classList.remove('fade');
        renderGallery();
    }, 200);
}
function galleryPrev() { setGallery((galleryIdx - 1 + detailProduct.images.length) % detailProduct.images.length); }
function galleryNext() { setGallery((galleryIdx + 1) % detailProduct.images.length); }

function changeDetailQty(d) {
    const el = document.getElementById('detail-qty');
    let q = parseInt(el.textContent) + d;
    if (q < 1) q = 1;
    if (q > detailProduct.stock) q = detailProduct.stock;
    el.textContent = q;
}
function addDetailToCart() {
    if (!detailProduct) return;
    if (detailProduct.stock === 0) { showToast('❌ Out of stock!', 'error'); return; }
    const qty = parseInt(document.getElementById('detail-qty').textContent);
    addToCartById(detailProduct.id, qty);
}

// ─── CART LOGIC ───────────────────────────
function addToCart(id) { addToCartById(id, 1); }

function addToCartById(id, qty) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    if (product.stock === 0) { showToast('❌ Out of stock!', 'error'); return; }
    const existing = cart.find(x => x.id === id);
    if (existing) {
        existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
        cart.push({ id, qty: Math.min(qty, product.stock) });
    }
    updateCartBadge();
    showToast(`✓ ${product.name} added to cart!`, 'success');
}

function changeCartQty(id, d) {
    const product = PRODUCTS.find(p => p.id === id);
    const item = cart.find(x => x.id === id);
    if (!item) return;
    item.qty = Math.max(1, Math.min(item.qty + d, product ? product.stock : item.qty));
    renderCart();
    updateCartBadge();
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    renderCart();
    updateCartBadge();
}

function updateCartBadge() {
    const total = cart.reduce((a, b) => a + b.qty, 0);
    const navBadge = document.getElementById('cart-badge-nav');
    const mobBadge = document.getElementById('cart-badge-mob');
    if (total > 0) {
        if (navBadge) { navBadge.style.display = 'flex'; navBadge.textContent = total; }
        if (mobBadge) { mobBadge.style.display = 'flex'; mobBadge.textContent = total; }
    } else {
        if (navBadge) navBadge.style.display = 'none';
        if (mobBadge) mobBadge.style.display = 'none';
    }
}

function renderCart() {
    const emptyEl = document.getElementById('cart-empty');
    const fullEl = document.getElementById('cart-full');
    if (!cart.length) {
        emptyEl.style.display = 'block';
        fullEl.style.display = 'none';
        return;
    }
    emptyEl.style.display = 'none';
    fullEl.style.display = 'grid';

    let subtotal = 0, totalItems = 0;
    const html = cart.map(item => {
        const p = PRODUCTS.find(x => x.id === item.id);
        if (!p) return '';
        const sub = p.price * item.qty;
        subtotal += sub; totalItems += item.qty;
        return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.images[0]}" alt="${p.name}"
             onerror="this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=100&q=60'">
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${formatPrice(p.price)} each</div>
          <div class="cart-item-controls">
            <div class="item-qty">
              <button onclick="changeCartQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeCartQty(${item.id}, 1)">+</button>
            </div>
            <span class="item-sub">${formatPrice(sub)}</span>
            <button class="btn btn-danger btn-sm" style="margin-left:auto" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      </div>`;
    }).join('');

    document.getElementById('cart-items-list').innerHTML = html;
    document.getElementById('sum-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('sum-items').textContent = totalItems;
    document.getElementById('sum-total').textContent = formatPrice(subtotal);
}

function placeOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const city = document.getElementById('customer-city').value.trim();
    let valid = true;

    document.getElementById('err-name').textContent = '';
    document.getElementById('err-phone').textContent = '';
    document.getElementById('customer-name').classList.remove('err');
    document.getElementById('customer-phone').classList.remove('err');

    if (!name) {
        document.getElementById('err-name').textContent = 'Please enter your name';
        document.getElementById('customer-name').classList.add('err');
        valid = false;
    }
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('err-phone').textContent = 'Enter a valid 10-digit number';
        document.getElementById('customer-phone').classList.add('err');
        valid = false;
    }
    if (!valid) return;

    let msg = `🐠 *New Order — AquaWorld*\n\n`;
    msg += `👤 *Name:* ${name}\n`;
    msg += `📞 *Phone:* ${phone}\n`;
    if (city) msg += `📍 *Location:* ${city}\n`;
    msg += `\n🛒 *Order Items:*\n`;

    let total = 0;
    cart.forEach(item => {
        const p = PRODUCTS.find(x => x.id === item.id);
        if (p) {
            const sub = p.price * item.qty;
            total += sub;
            msg += `• ${p.name} × ${item.qty} = ${formatPrice(sub)}\n`;
        }
    });

    msg += `\n💰 *Total: ${formatPrice(total)}*`;
    msg += `\n\n_Please confirm availability and delivery charges._\nThank you! 🌊`;

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ─── MODALS ───────────────────────────────
function openCareGuide() { openModal('care-guide-modal'); }
function openModal(id) { document.getElementById(id).classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('show'); document.body.style.overflow = ''; }

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function (e) {
        if (e.target === this) closeModal(this.id);
    });
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id));
    }
});

// ─── TOAST ────────────────────────────────
let toastTimer;
function showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = `toast show t-${type}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── INIT ─────────────────────────────────
document.getElementById('total-products-stat').textContent = PRODUCTS.length;
renderShop();