<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Allen City Pharmacy — Shop</title>

  <!--
    Single-file Shopee-inspired storefront (plain HTML + CSS)
    Colors derived from your logo:
      --pharm-green: #006d53
      --accent-orange: #e56b1f
    Replace images or texts as needed. No JavaScript required.
  -->

  <style>
    :root{
      --pharm-green: #006d53;
      --accent-orange: #e56b1f;
      --muted: #f6f7f8;
      --card-bg: #ffffff;
      --text: #223;
      --radius: 10px;
      --max-width: 1200px;
      --shadow: 0 6px 18px rgba(16,24,32,0.06);
      --soft-shadow: 0 4px 12px rgba(16,24,32,0.04);
    }

    /* Reset & base */
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color:var(--text);
      background:linear-gradient(180deg,#fbfdfc 0%, #ffffff 100%);
      -webkit-font-smoothing:antialiased;
    }

    /* Page container */
    .site {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 16px 64px;
    }

    /* Header */
    header.topbar{
      position: sticky;
      top:0;
      background: white;
      z-index: 50;
      border-bottom: 1px solid #e9eef0;
    }
    .topbar .site {
      display:flex;
      align-items:center;
      gap:16px;
      padding:12px 0;
    }
    .logo {
      display:flex;
      align-items:center;
      gap:12px;
    }
    .logo img{
      height:56px;
      width:auto;
      display:block;
    }

    /* Search / actions */
    .search {
      flex:1;
      display:flex;
      align-items:center;
      gap:12px;
      margin-left:4px;
    }
    .search input{
      flex:1;
      height:44px;
      padding:10px 14px;
      border-radius:8px;
      border:1px solid #e4ece9;
      background: #fff;
      font-size:15px;
      outline:none;
    }
    .search button{
      background:var(--accent-orange);
      border:none;
      color:white;
      font-weight:600;
      padding:10px 14px;
      border-radius:8px;
      cursor:pointer;
      box-shadow:var(--soft-shadow);
    }

    .actions {
      display:flex;
      gap:12px;
      align-items:center;
    }
    .action-btn {
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:10px 12px;
      border-radius:10px;
      border:1px solid transparent;
      cursor:pointer;
      font-weight:600;
      color:var(--pharm-green);
      background:transparent;
    }
    .cart-badge {
      background:var(--accent-orange);
      color:white;
      min-width:22px;
      height:22px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      border-radius:11px;
      font-size:12px;
      padding:0 6px;
      margin-left:6px;
    }

    /* Hero (pharmacist photo with overlay) */
    .hero {
      position:relative;
      margin:20px 0;
      border-radius: var(--radius);
      overflow:hidden;
      min-height: 380px;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      background: url('https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1600') center/cover no-repeat;
      box-shadow: var(--shadow);
    }
    /* soft moving gradient overlay (calm natural animation) */
    .hero::after{
      content:'';
      position:absolute;
      inset:0;
      background: linear-gradient(120deg, rgba(224,247,244,0.28), rgba(255,255,255,0.12) 40%, rgba(210,242,230,0.18));
      z-index:1;
      animation: calmSky 30s ease infinite;
      background-size:400% 400%;
    }
    @keyframes calmSky {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    }
    .hero-inner{
      position:relative;
      z-index:2;
      padding:40px;
      max-width: 720px;
    }
    .hero h1{
      color:white;
      font-size:34px;
      margin:0 0 8px;
      text-shadow: 0 6px 20px rgba(0,0,0,0.35);
    }
    .hero p{
      color: #f6fff8;
      margin:0 0 16px;
      font-size:16px;
      opacity:0.95;
    }
    .hero .cta{
      display:inline-block;
      background:var(--accent-orange);
      color:white;
      padding:12px 18px;
      border-radius:10px;
      font-weight:700;
      text-decoration:none;
      box-shadow: 0 8px 26px rgba(229,107,31,0.18);
    }

    /* Category strip (Shopee-like) */
    .categories {
      display:flex;
      gap:12px;
      margin:20px 0;
      overflow:auto;
      padding-bottom:8px;
    }
    .cat {
      min-width:88px;
      background:linear-gradient(180deg,#ffffff,#fbfffc);
      border-radius:12px;
      padding:14px 10px;
      text-align:center;
      box-shadow: var(--soft-shadow);
      border:1px solid #eef6f1;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:8px;
      flex-shrink:0;
    }
    .cat .icon {
      font-size:22px;
      width:46px;
      height:46px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:10px;
      background: rgba(0,109,83,0.06);
      color:var(--pharm-green);
    }
    .cat span{font-size:13px; font-weight:600; color:#123;}

    /* Main section */
    main {
      margin-top:10px;
    }

    /* Grid of products */
    .products {
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      gap:18px;
      margin-top:14px;
    }
    .card {
      background:var(--card-bg);
      border-radius:12px;
      overflow:hidden;
      border:1px solid #eef6f1;
      transition: transform .15s ease, box-shadow .15s ease;
      box-shadow: var(--soft-shadow);
      display:flex;
      flex-direction:column;
    }
    .card:hover{ transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.08); }
    .card .media{
      width:100%;
      aspect-ratio: 4/3;
      background: #f4f6f4;
    }
    .card .media img{ width:100%; height:100%; object-fit:cover; display:block; }

    .card .body {
      padding:12px 14px;
      display:flex;
      flex-direction:column;
      gap:8px;
      flex:1;
    }
    .card h3{
      font-size:15px;
      margin:0;
      color:var(--pharm-green);
      line-height:1.2;
      font-weight:700;
    }
    .meta{ display:flex; align-items:center; justify-content:space-between; gap:8px; }
    .price {
      color: var(--accent-orange);
      font-weight:800;
      font-size:16px;
    }
    .old-price{
      color:#98a0a0;
      font-size:13px;
      text-decoration:line-through;
    }
    .rating {
      font-size:13px;
      color:#ffb703;
      display:flex;
      align-items:center;
      gap:6px;
    }
    .add {
      margin-top:8px;
      display:flex;
      gap:8px;
      align-items:center;
    }
    .qty {
      background:#f0f6f3;
      color:var(--pharm-green);
      border-radius:8px;
      padding:8px 10px;
      font-weight:700;
      border:1px solid #eaf6f0;
    }
    .add .btn {
      margin-left:auto;
      background:var(--pharm-green);
      color:white;
      padding:8px 12px;
      border-radius:8px;
      text-decoration:none;
      font-weight:700;
    }

    /* Footer */
    footer.site-footer{
      margin-top:34px;
      padding:18px 0;
      text-align:center;
      color:#7b8a84;
      font-size:14px;
    }

    /* Responsive */
    @media (max-width: 1000px){
      .products{ grid-template-columns: repeat(3, 1fr); }
      .hero-inner{ padding:28px; }
    }
    @media (max-width: 760px){
      .site{ padding: 0 14px 64px;}
      .topbar .site{ flex-wrap:wrap; gap:10px;}
      .search{ order:3; width:100%;}
      .actions{ order:2; margin-left:auto;}
      .products{ grid-template-columns: repeat(2, 1fr); gap:12px;}
      .hero{ min-height:280px; border-radius:12px;}
      .hero h1{ font-size:22px;}
      .categories{ gap:10px; }
      .cat{ min-width:76px; padding:10px 8px;}
    }
    @media (max-width:420px){
      .products{ grid-template-columns: 1fr; }
      .logo img{ height:48px; }
    }

    /* Small accessibility helpers */
    a { color:inherit }
    a:focus { outline:3px solid rgba(0,109,83,0.12); border-radius:8px }
  </style>
</head>
<body>
  <header class="topbar" role="banner">
    <div class="site">
      <div class="logo" aria-hidden="false">
        <img src="Allen City Pharmacy Logo.png" alt="Allen City Pharmacy logo (green and orange shield)" />
      </div>

      <!-- Search bar -->
      <div class="search" role="search" aria-label="Site search">
        <input type="search" placeholder="Search for medicines, vitamins, baby care..." aria-label="Search" />
        <button aria-label="Search">Search</button>
      </div>

      <!-- Actions -->
      <div class="actions" aria-hidden="false">
        <button class="action-btn" title="Orders">📦 Orders</button>
        <button class="action-btn" title="Account">👤 Account</button>
        <button class="action-btn" title="Cart">🛒 Cart <span class="cart-badge">2</span></button>
      </div>
    </div>
  </header>

  <div class="site" role="main">
    <!-- Hero -->
    <section class="hero" aria-label="Hero: Allen City Pharmacy">
      <div class="hero-inner">
        <h1>Your Health, Our Priority</h1>
        <p>Fast local delivery • Trusted pharmacists • Quality healthcare essentials</p>
        <a class="cta" href="shop.html" aria-label="Shop now">Shop Now</a>
      </div>
    </section>

    <!-- Category strip (clickable emoji icons) -->
<section class="categories" aria-label="Product categories">
  <a class="cat" href="shop.html#vitamins">
    <div class="icon">💊</div>
    <span>Vitamins</span>
  </a>
  <a class="cat" href="shop.html#pain-relief">
    <div class="icon">🤕</div>
    <span>Pain Relief</span>
  </a>
  <a class="cat" href="shop.html#skincare">
    <div class="icon">🧴</div>
    <span>Skincare</span>
  </a>
  <a class="cat" href="shop.html#first-aid">
    <div class="icon">🧷</div>
    <span>First Aid</span>
  </a>
  <a class="cat" href="shop.html#baby-care">
    <div class="icon">👶</div>
    <span>Baby Care</span>
  </a>
  <a class="cat" href="shop.html#medical-supplies">
    <div class="icon">🩹</div>
    <span>Medical Supplies</span>
  </a>
  <a class="cat" href="shop.html#hygiene">
    <div class="icon">🧼</div>
    <span>Hygiene</span>
  </a>
  <a class="cat" href="shop.html#health-devices">
    <div class="icon">🩺</div>
    <span>Health Devices</span>
  </a>
</section>


    <!-- Products grid -->
    <main>
      <div style="display:flex;align-items:center;justify-content:space-between; gap:12px;">
        <h2 style="margin:0; color:var(--pharm-green);">Featured for you</h2>
        <p style="margin:0; color:#6f8a82; font-weight:600;">Best sellers • Fast delivery</p>
      </div>
<!-- Product 1 -->
     <article class="card" data-name="Pain Relief Tablets - 20 pack" data-price="$8.99" data-rating="⭐ 4.8 (1.2k)" data-image="https://www.deepheat.com.au/cdn/shop/files/27933NAPROXENPAINRELIEF30PK3DHIRES_1200x1200.png?v=1731997526" data-description="Fast-acting pain relief tablets ideal for headaches, muscle pain, and body aches. 20 tablets per pack.">
    <div class="media"><img src="https://www.deepheat.com.au/cdn/shop/files/27933NAPROXENPAINRELIEF30PK3DHIRES_1200x1200.png?v=1731997526" alt="Pain relief tablets"></div>
    <div class="body">
      <h3 id="p1">Pain Relief Tablets - 20 pack</h3>
      <div class="meta">
        <div class="rating">⭐ 4.8 <span style="color:#9aa6a1;font-weight:600;">(1.2k)</span></div>
        <div>
          <div class="price">$8.99</div>
          <div class="old-price">$11.99</div>
        </div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="shop.html" class="btn">Add</a>
      </div>
    </div>
  </article>

  <!-- Product 2 -->
  <article class="card" data-name="Vitamin D3 - 60 softgels" data-price="$10.50" data-rating="⭐ 4.7 (860)" data-image="https://medlineplus.gov/images/Vitamins_share.jpg" data-description="Vitamin D3 supports bone and immune health. 60 softgels per bottle.">
    <div class="media"><img src="https://medlineplus.gov/images/Vitamins_share.jpg" alt="Vitamin D bottles"></div>
    <div class="body">
      <h3 id="p2">Vitamin D3 - 60 softgels</h3>
      <div class="meta">
        <div class="rating">⭐ 4.7 <span style="color:#9aa6a1;font-weight:600;">(860)</span></div>
        <div>
          <div class="price">$10.50</div>
          <div class="old-price">$13.00</div>
        </div>
      </div>
      <div class="add">
        <div class="qty">Low stock</div>
        <a href="shop.html" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 3 -->
       <article class="card" 
    data-name="Cough Syrup - 150ml" 
    data-price="$6.75" 
    data-oldprice="$8.00"
    data-rating="⭐ 4.6 (430)"
    data-description="This cough syrup provides fast relief from dry and chesty coughs. Non-drowsy formula suitable for daytime use."
    data-image="https://pics.walgreens.com/prodimg/671386/900.jpg">
    <div class="media">
      <img src="https://pics.walgreens.com/prodimg/671386/900.jpg" alt="Cough syrup bottle">
    </div>
    <div class="body">
      <h3 id="p3">Cough Syrup - 150ml</h3>
      <div class="meta">
        <div class="rating">⭐ 4.6 <span style="color:#9aa6a1;font-weight:600;">(430)</span></div>
        <div>
          <div class="price">$6.75</div>
          <div class="old-price">$8.00</div>
        </div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 4 -->
        <article class="card" 
    data-name="Hand Sanitizer 500 ml" 
    data-price="$5.99" 
    data-rating="⭐ 4.9 (2.1k)" 
    data-description="This hand sanitizer kills 99.9% of germs and bacteria. Fast-drying formula with moisturizing ingredients to keep hands soft and clean."
    data-image="https://i.ebayimg.com/images/g/rAIAAOSwobtlWS4Q/s-l1200.jpg">
    <div class="media">
      <img src="https://i.ebayimg.com/images/g/rAIAAOSwobtlWS4Q/s-l1200.jpg" alt="Hand sanitizer">
    </div>
    <div class="body">
      <h3 id="p4">Hand Sanitizer 500 ml</h3>
      <div class="meta">
        <div class="rating">⭐ 4.9 <span style="color:#9aa6a1;font-weight:600;">(2.1k)</span></div>
        <div class="price">$5.99</div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 5 -->
        <article class="card"
    data-name="First Aid Kit - Compact"
    data-price="$24.99"
    data-oldprice="$29.99"
    data-rating="⭐ 4.5 (320)"
    data-description="This compact first aid kit contains essential medical supplies for emergencies, travel, or home use. Lightweight and portable."
    data-image="https://target.scene7.com/is/image/Target/GUEST_e7f46325-c1a2-4baa-936d-d37de56b3ad7">
    <div class="media">
      <img src="https://target.scene7.com/is/image/Target/GUEST_e7f46325-c1a2-4baa-936d-d37de56b3ad7" alt="First aid kit">
    </div>
    <div class="body">
      <h3>First Aid Kit - Compact</h3>
      <div class="meta">
        <div class="rating">⭐ 4.5 <span style="color:#9aa6a1;font-weight:600;">(320)</span></div>
        <div>
          <div class="price">$24.99</div>
          <div class="old-price">$29.99</div>
        </div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 6 -->
        <article class="card"
    data-name="Cough Syrup - 150ml"
    data-price="$6.75"
    data-oldprice="$8.00"
    data-rating="⭐ 4.6 (430)"
    data-description="This cough syrup provides fast relief from dry and chesty coughs. Non-drowsy formula suitable for daytime use."
    data-image="https://pics.walgreens.com/prodimg/671386/900.jpg">
    <div class="media">
      <img src="https://pics.walgreens.com/prodimg/671386/900.jpg" alt="Cough syrup bottle">
    </div>
    <div class="body">
      <h3>Cough Syrup - 150ml</h3>
      <div class="meta">
        <div class="rating">⭐ 4.6 <span style="color:#9aa6a1;font-weight:600;">(430)</span></div>
        <div>
          <div class="price">$6.75</div>
          <div class="old-price">$8.00</div>
        </div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 7 -->
        <article class="card"
    data-name="Baby Formula - 400g"
    data-price="$18.20"
    data-rating="⭐ 4.6 (540)"
    data-description="This premium baby formula provides essential nutrients for healthy growth and development. Suitable from birth. Easy to digest."
    data-image="https://www.forthepeople.com/sites/default/files/styles/mm-image/545x306/shutterstock_2387752027cabbd356dfd7c23de3f64833fdbdc651.webp">
    <div class="media">
      <img src="https://www.forthepeople.com/sites/default/files/styles/mm-image/545x306/shutterstock_2387752027cabbd356dfd7c23de3f64833fdbdc651.webp" alt="Baby formula">
    </div>
    <div class="body">
      <h3>Baby Formula - 400g</h3>
      <div class="meta">
        <div class="rating">⭐ 4.6 <span style="color:#9aa6a1;font-weight:600;">(540)</span></div>
        <div class="price">$18.20</div>
      </div>
      <div class="add">
        <div class="qty" style="color:#e67e22;">Low stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

        <!-- Product 8 -->
        <article class="card"
    data-name="Digital Thermometer"
    data-price="$9.99"
    data-rating="⭐ 4.7 (760)"
    data-description="Accurate and fast-reading digital thermometer suitable for oral, rectal, and underarm use. Safe and easy to clean."
    data-image="https://m.media-amazon.com/images/I/61OrvhuAJhL._UF1000,1000_QL80_.jpg">
    <div class="media">
      <img src="https://m.media-amazon.com/images/I/61OrvhuAJhL._UF1000,1000_QL80_.jpg" alt="Digital thermometer">
    </div>
    <div class="body">
      <h3>Digital Thermometer</h3>
      <div class="meta">
        <div class="rating">⭐ 4.7 <span style="color:#9aa6a1;font-weight:600;">(760)</span></div>
        <div class="price">$9.99</div>
      </div>
      <div class="add">
        <div class="qty">In stock</div>
        <a href="#" class="btn">Add</a>
      </div>
    </div>
  </article>

      </section>
      <div class="product-modal" id="productModal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modalImage" src="" alt="">
    <h2 id="modalName"></h2>
    <p id="modalRating"></p>
    <p id="modalPrice"></p>
    <p id="modalDescription"></p>
  </div>
</div>
    </main>

    <footer class="site-footer" role="contentinfo">
      <div>© 2025 Allen City Pharmacy • Local delivery • Pharmacist advice</div>
      <div style="margin-top:6px;color:#9aa6a1;font-size:13px;">Placeholders use free stock images. Replace with your product photos for production.</div>
    </footer>
  </div>
  <style>
    .products {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;
  background: white;
}
.card:hover {
  transform: scale(1.03);
}

.media img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.body {
  padding: 0.8rem;
}

.product-modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  position: relative;
}

.modal-content img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

    /* Animated background gradient (based on logo colors) */
body {
  background: linear-gradient(-45deg, #006d53, #e56b1f, #f8f8f8, #006d53);
  background-size: 400% 400%;
  animation: smoothFlow 25s ease infinite;
  color: var(--text);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

@keyframes smoothFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
/* Popup background */
.popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.popup.show {
  display: flex;
}

/* Popup box */
.popup-content {
  background: #fff;
  max-width: 500px;
  width: 90%;
  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: popupIn 0.3s ease;
}

.popup-media img {
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

.popup-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.popup-price .current-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e53935;
}

.popup-price .old-price {
  text-decoration: line-through;
  color: #999;
}

.btn {
  background: #e53935;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background: #c62828;
}

/* Product card basic styling */
.card {
  cursor: pointer;
  max-width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.03);
}

@keyframes popupIn {
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

  </style>
  <script>
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('productModal');
  const modalImg = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalRating = document.getElementById('modalRating');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalImg.src = card.dataset.image;
      modalName.textContent = card.dataset.name;
      modalRating.textContent = card.dataset.rating;
      modalPrice.textContent = `Price: ${card.dataset.price}`;
      modalDescription.textContent = card.dataset.description;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
</script>

</body>
</html>
