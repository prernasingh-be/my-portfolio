// ===== Cart state =====
const CART_KEY = "nova_cart_v1";
let cart = loadCart();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function findProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  updateCartCount();
  showToast(`${findProduct(id).name} added to cart`);
  bumpCartIcon();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
  renderCart();
  updateCartCount();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = findProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function cartItemCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ===== Rendering =====
function formatPrice(n) {
  return "₹" + Math.round(n).toLocaleString('en-IN');
}

function productCardHTML(p) {
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  const emi = Math.max(1, Math.round(p.price / 12));
  const badge = p.badge ? `<span class="product-badge">${p.badge}</span>` : "";
  const discountBadge = discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : "";
  const oldPrice = p.originalPrice ? `<span class="old-price">${formatPrice(p.originalPrice)}</span>` : "";
  const discountText = discount > 0 ? `<span class="discount-text">${discount}% OFF</span>` : "";
  const fallback = `https://picsum.photos/seed/prerna-${p.id}/600/600`;
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}';" />
        ${badge}
        ${discountBadge}
      </div>
      <div class="product-info">
        <span class="product-cat">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${p.rating.toFixed(1)} ★</span>
          <span class="reviews">(${p.reviews.toLocaleString('en-IN')} reviews)</span>
        </div>
        <div class="price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          ${oldPrice}
          ${discountText}
        </div>
        <div class="emi">EMI from ${formatPrice(emi)}/month</div>
        <div class="sold-by">Sold by: <strong>Prerna Store</strong></div>
        <div class="cod-badge">✓ Cash on Delivery Available</div>
        <button class="btn btn-primary small full add-btn" data-id="${p.id}">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured);
  grid.innerHTML = featured.map(productCardHTML).join("");
}

let currentFilter = "all";
let currentSort = "featured";

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  let list = PRODUCTS.slice();
  if (currentFilter !== "all") {
    list = list.filter(p => p.category === currentFilter);
  }
  switch (currentSort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name": list.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty">No products match this filter.</div>`;
    return;
  }
  grid.innerHTML = list.map(productCardHTML).join("");
}

function renderCart() {
  const body = document.getElementById("cartBody");
  const totalEl = document.getElementById("cartTotal");
  if (!body || !totalEl) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-ico">🛍️</div>
        <p>Your cart is empty</p>
        <a href="shop.html" class="btn btn-ghost small">Start Shopping</a>
      </div>
    `;
    totalEl.textContent = formatPrice(0);
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = findProduct(item.id);
    if (!p) return "";
    const fallback = `https://picsum.photos/seed/prerna-${p.id}/200/200`;
    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="ci-img">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}';" />
        </div>
        <div class="ci-info">
          <div class="ci-top">
            <strong>${p.name}</strong>
            <button class="ci-remove" data-remove="${p.id}" aria-label="Remove">×</button>
          </div>
          <span class="ci-cat">Sold by: Prerna Store</span>
          <div class="ci-bot">
            <div class="qty">
              <button data-dec="${p.id}">−</button>
              <span>${item.qty}</span>
              <button data-inc="${p.id}">+</button>
            </div>
            <strong>${formatPrice(p.price * item.qty)}</strong>
          </div>
        </div>
      </div>
    `;
  }).join("");

  totalEl.textContent = formatPrice(cartTotal());
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const count = cartItemCount();
  el.textContent = count;
  el.classList.toggle("visible", count > 0);
}

// ===== Cart drawer =====
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

function bumpCartIcon() {
  const btn = document.getElementById("cartToggle");
  if (!btn) return;
  btn.classList.remove("bump");
  void btn.offsetWidth;
  btn.classList.add("bump");
}

// ===== Toast =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ===== Events =====
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".add-btn");
  if (addBtn) {
    addToCart(parseInt(addBtn.dataset.id, 10));
    return;
  }
  if (e.target.dataset.inc) {
    changeQty(parseInt(e.target.dataset.inc, 10), 1);
  } else if (e.target.dataset.dec) {
    changeQty(parseInt(e.target.dataset.dec, 10), -1);
  } else if (e.target.dataset.remove) {
    removeFromCart(parseInt(e.target.dataset.remove, 10));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderProducts();
  renderCart();
  updateCartCount();

  const cartToggle = document.getElementById("cartToggle");
  const cartClose = document.getElementById("cartClose");
  const backdrop = document.getElementById("cartBackdrop");
  cartToggle && cartToggle.addEventListener("click", openCart);
  cartClose && cartClose.addEventListener("click", closeCart);
  backdrop && backdrop.addEventListener("click", closeCart);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCart();
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  menuBtn && menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Filters
  const filters = document.getElementById("filters");
  if (filters) {
    filters.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      filters.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.cat;
      renderProducts();
    });
  }

  // Sort
  const sort = document.getElementById("sort");
  if (sort) {
    sort.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Checkout
  const checkout = document.getElementById("checkoutBtn");
  checkout && checkout.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Your cart is empty");
      return;
    }
    showToast(`Order placed! Total: ${formatPrice(cartTotal())}`);
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
    setTimeout(closeCart, 800);
  });
});
