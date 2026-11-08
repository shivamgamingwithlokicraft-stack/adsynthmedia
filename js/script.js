// ============================================================
// 1. MASSIVE PRODUCT CATALOG (Curated Images)
// ============================================================
const products = [
  { 
    id: 1, title: "Fluid Wrap Dress", price: 1499, category: "ladies", badge: "New", badgeType: "new", 
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#2b2b2b", name: "Black"}, {hex: "#a32e2e", name: "Red"}, {hex: "#c9bca8", name: "Beige"}],
    desc: "A stunning, fluid wrap dress that drapes beautifully. Perfect for evening events or elevated daywear."
  },
  { 
    id: 2, title: "Structured Blazer", price: 1999, original: 2999, category: "ladies", badge: "Sale", badgeType: "sale", 
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548624149-f9b1859e1e69?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#1a1a1a", name: "Black"}, {hex: "#d4cfc7", name: "Cream"}],
    desc: "Sharp shoulders, clean lines. This tailored blazer adds instant structure to any outfit."
  },
  { 
    id: 11, title: "Knit Polo Shirt", price: 999, category: "men", 
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#ffffff", name: "White"}, {hex: "#000000", name: "Black"}, {hex: "#2e4a62", name: "Navy"}],
    desc: "A breathable knit polo crafted from premium cotton. Effortlessly smart-casual."
  },
  { 
    id: 12, title: "Cotton Overshirt", price: 899, original: 1499, category: "men", badge: "Sale", badgeType: "sale", 
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#a89c8c", name: "Khaki"}, {hex: "#2b2b2b", name: "Charcoal"}, {hex: "#3d5a43", name: "Olive"}],
    desc: "A versatile overshirt in thick cotton. Wear it open over a tee or buttoned up."
  },
  { 
    id: 21, title: "Wide-Leg Jeans", price: 1799, category: "divided", 
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#5a7a9a", name: "Blue Wash"}, {hex: "#111111", name: "Black Wash"}],
    desc: "Relaxed fit, wide leg. Made from durable denim that moves with you."
  },
  { 
    id: 51, title: "Minimalist Leather Watch", price: 3499, category: "watches", badge: "New", badgeType: "new", 
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [{hex: "#5c3a21", name: "Brown Leather"}, {hex: "#000000", name: "Black Leather"}],
    desc: "Slim profile watch with a genuine leather strap."
  }
];

// ============================================================
// 2. LEGAL & INFO CONTENT
// ============================================================
const infoContent = {
  story: { title: "Our Story", content: `<p>Founded in 2024, adsynthmedia was born from a simple idea: that digital fashion should feel as tangible and emotive as physical garments.</p><h3>The Vision</h3><p>We are not just an e-commerce store. We are a creative technology studio...</p>` },
  returns: { title: "Returns & Exchanges", content: `<p>We want you to love your purchase. If you're not completely satisfied, we offer free returns within 30 days of delivery.</p><h3>How to Return</h3><p>1. Ensure the item is unworn, unwashed, and in its original packaging with tags attached.</p><p>2. Log into your account and select "Return Item".</p>` },
  shipping: { title: "Shipping Info", content: `<p>We offer fast, reliable shipping across India.</p><h3>Standard Delivery</h3><p>Free on orders over ₹2,999. Otherwise, a flat fee of ₹149 applies. Delivery typically takes 3-5 business days.</p>` },
  faq: { title: "Frequently Asked Questions", content: `<h3>What is your return policy?</h3><p>We accept returns within 30 days of delivery for unworn items with tags attached.</p><h3>Do you ship internationally?</h3><p>Currently, we only ship within India.</p>` },
  privacy: { title: "Privacy Policy", content: `<p>Last updated: October 2026</p><h3>1. Information We Collect</h3><p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This may include your name, email address, phone number, and payment information.</p><h3>2. How We Use Your Information</h3><p>We use the information we collect to process transactions, send related information (including confirmations and invoices), and respond to your comments and questions.</p>` },
  terms: { title: "Terms & Conditions", content: `<p>Last updated: October 2026</p><h3>1. Acceptance of Terms</h3><p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p><h3>2. Intellectual Property</h3><p>All content included on this site, such as text, graphics, logos, images, and software, is the property of adsynthmedia or its content suppliers and protected by international copyright laws.</p>` },
  cookies: { title: "Cookie Settings", content: `<p>Last updated: October 2026</p><h3>What are cookies?</h3><p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and understand how you interact with our site.</p><h3>How we use cookies</h3><p>We use strictly necessary cookies to make our site work. We also use analytics cookies to help us improve it.</p>` }
};

// ============================================================
// 3. STATE MANAGEMENT
// ============================================================
let cart = JSON.parse(localStorage.getItem('adsynth_cart')) || [];
let favourites = JSON.parse(localStorage.getItem('adsynth_favs')) || [];
let selectedSize = null;
let selectedColor = null;
let authMode = 'signin'; // 'signin' or 'signup'

// ============================================================
// 4. RENDER FUNCTIONS
// ============================================================
function createProductCard(p) {
  const isFav = favourites.includes(p.id) ? 'active' : '';
  const colorDots = p.colors.map(c => `<div class="color-dot" style="background:${c.hex}"></div>`).join('');
  
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-image">
        ${p.badge ? `<div class="badge ${p.badgeType === 'new' ? 'new' : ''}">${p.badge}</div>` : ''}
        <button class="fav-btn ${isFav}" onclick="event.stopPropagation(); toggleFavourite(${p.id})">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-info">
        <span class="product-title">${p.title}</span>
        <span class="product-price">
          ${p.original ? `<del>₹ ${p.original}</del> <span class="sale">₹ ${p.price}</span>` : `₹ ${p.price}`}
        </span>
        <div class="product-colors">${colorDots}</div>
      </div>
    </div>
  `;
}

function renderGrids() {
  document.getElementById('home-the-edit').innerHTML = products.filter(p => p.category === 'ladies').slice(0, 4).map(createProductCard).join('');
  document.getElementById('home-autumn').innerHTML = products.filter(p => p.category === 'men').slice(0, 4).map(createProductCard).join('');
  document.getElementById('home-winter').innerHTML = products.filter(p => p.category === 'divided').slice(0, 4).map(createProductCard).join('');
  document.getElementById('main-grid').innerHTML = products.map(createProductCard).join('');
  
  document.getElementById('ladies-grid').innerHTML = products.filter(p => p.category === 'ladies').map(createProductCard).join('');
  document.getElementById('men-grid').innerHTML = products.filter(p => p.category === 'men').map(createProductCard).join('');
  document.getElementById('divided-grid').innerHTML = products.filter(p => p.category === 'divided').map(createProductCard).join('');
  document.getElementById('kids-grid').innerHTML = products.filter(p => p.category === 'kids').map(createProductCard).join(''); 
  document.getElementById('home-grid').innerHTML = products.filter(p => p.category === 'home').map(createProductCard).join('');
  document.getElementById('watches-grid').innerHTML = products.filter(p => p.category === 'watches').map(createProductCard).join('');
  
  renderFavourites();
}

function renderFavourites() {
  const favProducts = products.filter(p => favourites.includes(p.id));
  const grid = document.getElementById('fav-grid');
  if (favProducts.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted);">You have no items in your favourites.</p>`;
  } else {
    grid.innerHTML = favProducts.map(createProductCard).join('');
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const summary = document.getElementById('cart-summary');
  const countEl = document.getElementById('cart-count');
  
  countEl.innerText = cart.length;
  localStorage.setItem('adsynth_cart', JSON.stringify(cart));
  
  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted);">Your bag is empty.</p>`;
    summary.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, index) => {
    total += item.price;
    return `
      <div class="cart-item">
        <img src="${item.images[0]}" alt="${item.title}" />
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">Color: ${item.color} | Size: ${item.size}</div>
          <div style="font-weight:600;">₹ ${item.price}</div>
        </div>
        <button onclick="removeFromCart(${index})" style="color:var(--accent); font-size:12px; text-decoration:underline; align-self: flex-start;">Remove</button>
      </div>
    `;
  }).join('');

  document.getElementById('cart-total').innerText = `₹ ${total}`;
  summary.style.display = 'block';
}

// ============================================================
// 5. ACTIONS & LOGIC
// ============================================================
function toggleFavourite(id) {
  if (favourites.includes(id)) {
    favourites = favourites.filter(favId => favId !== id);
  } else {
    favourites.push(id);
  }
  localStorage.setItem('adsynth_favs', JSON.stringify(favourites));
  renderGrids();
  if (document.getElementById('view-favourites').classList.contains('active')) {
    renderFavourites();
  }
}

function openProduct(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;
  selectedColor = p.colors[0].name; // Reset color

  const thumbs = p.images.map((img, i) => 
    `<img src="${img}" class="${i === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')" />`
  ).join('');

  const colors = p.colors.map((c, i) => 
    `<div class="color-swatch ${i === 0 ? 'selected' : ''}" style="background:${c.hex}" onclick="changeColor(this, '${c.hex}', '${c.name}')" title="${c.name}"></div>`
  ).join('');

  const pdpContainer = document.getElementById('pdp-container');
  pdpContainer.innerHTML = `
    <div class="pdp-layout">
      <div class="pdp-gallery">
        <div class="pdp-thumbnails">${thumbs}</div>
        <div class="pdp-main-image"><img src="${p.images[0]}" id="main-product-image" alt="${p.title}" /></div>
      </div>
      <div class="pdp-details">
        <div class="pdp-breadcrumb">Home / ${p.category} / ${p.title}</div>
        <h1 class="pdp-title">${p.title}</h1>
        <div class="pdp-price">${p.original ? `<del>₹ ${p.original}</del> <span class="sale">₹ ${p.price}</span>` : `₹ ${p.price}`}</div>
        <p class="pdp-desc">${p.desc}</p>
        
        <div class="pdp-color-selector">
          <h4>Select Color: <span id="selected-color-name">${p.colors[0].name}</span></h4>
          <div class="color-options">${colors}</div>
        </div>

        <div class="size-header">
          <h4>Select Size</h4>
          <span class="size-chart-btn" onclick="toggleSizeChart()">Size Chart</span>
        </div>
        <div class="size-options" id="size-options">
          <button class="size-btn" onclick="selectSize(this, 'XS')">XS</button>
          <button class="size-btn" onclick="selectSize(this, 'S')">S</button>
          <button class="size-btn" onclick="selectSize(this, 'M')">M</button>
          <button class="size-btn" onclick="selectSize(this, 'L')">L</button>
          <button class="size-btn" onclick="selectSize(this, 'XL')">XL</button>
        </div>
        
        <div class="pdp-delivery">
          <h4>Check Delivery Availability</h4>
          <div class="delivery-input">
            <input type="text" id="pdp-pincode" placeholder="Enter Pincode" maxlength="6" />
            <button onclick="checkPdpPincode()">Check</button>
          </div>
          <p id="pdp-delivery-msg" class="delivery-msg"></p>
        </div>

        <button class="btn-add-to-bag" onclick="addToCart(${p.id})">Add to Bag</button>

        <div class="pdp-extras">
          <div class="pdp-extra-item">
            <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
            <div><h5>Free Delivery</h5><p>On orders over ₹2,999.</p></div>
          </div>
          <div class="pdp-extra-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <div><h5>30-Day Returns</h5><p>Not quite right? Return within 30 days.</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="pdp-reviews-section">
      <h2>Customer Reviews</h2>
      <div class="review-card">
        <div class="review-header">
          <span class="review-stars">★★★★★</span>
          <span class="review-author">Priya S.</span>
          <span class="review-date">2 days ago</span>
        </div>
        <p class="review-text">Absolutely love the fit and material. Feels very premium. Would highly recommend!</p>
      </div>
    </div>
  `;
  
  navigateTo('product');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function changeMainImage(thumb, src) {
  document.querySelectorAll('.pdp-thumbnails img').forEach(img => img.classList.remove('active'));
  thumb.classList.add('active');
  const mainImg = document.getElementById('main-product-image');
  mainImg.src = src;
  // Re-apply the selected color filter to the new image
  applyColorFilter(mainImg, selectedColor);
}

function changeColor(swatch, hex, name) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  swatch.classList.add('selected');
  selectedColor = name;
  document.getElementById('selected-color-name').innerText = name;
  
  const mainImg = document.getElementById('main-product-image');
  applyColorFilter(mainImg, name);
}

function applyColorFilter(imgElement, colorName) {
  // CSS filters to simulate color changes without needing multiple image files
  imgElement.style.filter = 'none'; // reset
  
  if (colorName === 'Black' || colorName === 'Black Wash' || colorName === 'Black Leather') {
    imgElement.style.filter = 'brightness(0.4) contrast(1.2)';
  } else if (colorName === 'Red') {
    imgElement.style.filter = 'sepia(1) hue-rotate(-50deg) saturate(3)';
  } else if (colorName === 'Navy' || colorName === 'Blue Wash') {
    imgElement.style.filter = 'sepia(1) hue-rotate(180deg) saturate(2)';
  } else if (colorName === 'Olive') {
    imgElement.style.filter = 'sepia(1) hue-rotate(60deg) saturate(1.5)';
  } else if (colorName === 'Cream' || colorName === 'Beige') {
    imgElement.style.filter = 'brightness(1.1) sepia(0.3)';
  }
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}

function addToCart(id) {
  if (!selectedSize) { alert("Please select a size first."); return; }
  if (!selectedColor) { alert("Please select a color first."); return; }
  
  const p = products.find(prod => prod.id === id);
  cart.push({ ...p, size: selectedSize, color: selectedColor });
  selectedSize = null; 
  renderCart();
  navigateTo('bag');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function toggleSizeChart() { document.getElementById('size-modal').classList.toggle('active'); }

function checkPdpPincode() {
  const input = document.getElementById('pdp-pincode').value;
  const msg = document.getElementById('pdp-delivery-msg');
  if (input.length !== 6 || isNaN(input)) {
    msg.style.color = "var(--accent)"; msg.innerText = "Please enter a valid 6-digit pincode."; return;
  }
  msg.style.color = "var(--text)"; msg.innerText = "Checking...";
  setTimeout(() => {
    const available = parseInt(input) % 2 === 0;
    if (available) { msg.style.color = "green"; msg.innerText = `✓ Delivery available to ${input} within 3-5 days.`; }
    else { msg.style.color = "var(--accent)"; msg.innerText = `✗ Sorry, we do not currently deliver to ${input}.`; }
  }, 800);
}

// ============================================================
// 6. AUTHENTICATION (Simulated Backend)
// ============================================================
function handleSignIn(e) {
  e.preventDefault();
  const name = document.getElementById('signin-name').value;
  const email = document.getElementById('signin-email').value;
  
  if (authMode === 'signup' && !name) {
    alert("Please enter your name.");
    return;
  }

  // Simulate API call
  const btn = document.getElementById('signin-submit-btn');
  btn.innerText = "Processing...";
  
  setTimeout(() => {
    // Save to local storage to simulate a session
    const user = { name: authMode === 'signup' ? name : email.split('@')[0], email: email };
    localStorage.setItem('adsynth_user', JSON.stringify(user));
    
    updateAuthUI();
    alert(`Welcome, ${user.name}!`);
    navigateTo('main');
    btn.innerText = "Continue";
  }, 1000);
}

function toggleAuthMode() {
  authMode = authMode === 'signin' ? 'signup' : 'signin';
  const title = document.getElementById('signin-title');
  const nameGroup = document.getElementById('name-group');
  const toggleText = document.getElementById('auth-toggle-text');
  
  if (authMode === 'signup') {
    title.innerText = "Create Account";
    nameGroup.style.display = 'block';
    toggleText.innerText = "Already have an account? Sign In";
  } else {
    title.innerText = "Sign In";
    nameGroup.style.display = 'none';
    toggleText.innerText = "Don't have an account? Sign Up";
  }
}

function updateAuthUI() {
  const user = JSON.parse(localStorage.getItem('adsynth_user'));
  const authText = document.getElementById('auth-text');
  
  if (user) {
    authText.innerText = `Hi, ${user.name}`;
    // Change button action to logout
    document.getElementById('auth-btn').onclick = () => {
      localStorage.removeItem('adsynth_user');
      updateAuthUI();
      alert('Logged out successfully');
      navigateTo('main');
    };
  } else {
    authText.innerText = "Sign In";
    document.getElementById('auth-btn').onclick = () => navigateTo('signin');
  }
}

// ============================================================
// 7. NAVIGATION & ANIMATIONS
// ============================================================
function openInfo(pageKey) {
  const data = infoContent[pageKey];
  if (!data) return;
  document.getElementById('info-title').innerText = data.title;
  document.getElementById('info-content').innerHTML = data.content;
  navigateTo('info');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
}

function navigateTo(pageId) {
  document.querySelectorAll('.page-view').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(`view-${pageId}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (pageId === 'main') setTimeout(initScrollAnimations, 100);
  }
  document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
  const navLink = document.getElementById(`nav-${pageId}`);
  if (navLink) navLink.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrids();
  renderCart();
  updateAuthUI();
  initScrollAnimations();
});