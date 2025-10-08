<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Thank You | Allen City Pharmacy</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="icon" href="img/logo1.png" />
</head>

<body class="text-gray-800 font-sans bg-[linear-gradient(135deg,#22c55e_0%,#f97316_100%)] bg-fixed">

  <!-- Header -->
  <header class="bg-white/80 backdrop-blur-md border-b border-green-100">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img src="AllenCity Pharmacy Logo.png" alt="Allen City Pharmacy" class="h-11 w-11 object-contain">
        <div>
          <div class="text-lg font-bold text-green-800">Allen City Pharmacy</div>
          <div class="text-xs text-gray-500 -mt-1">Trusted Health Partner</div>
        </div>
      </div>
      <nav class="flex items-center gap-6 text-sm">
        <a href="index.html" class="text-gray-600 hover:text-green-700 transition">Home</a>
        <a href="about.html" class="text-gray-600 hover:text-green-700 transition">About</a>
        <a href="shop.html" class="text-gray-600 hover:text-green-700 transition">Shop</a>
        <a href="contact.html" class="text-gray-600 hover:text-green-700 transition">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-6 py-16">
    <div class="bg-white rounded-2xl shadow-lg border border-green-100 p-10 text-center">

      <div class="flex flex-col items-center">
        <div class="bg-green-700 text-white rounded-full h-20 w-20 flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 class="text-3xl font-bold text-green-800 mb-2">Thank You for Your Order!</h1>
        <p class="text-gray-600 mb-8">Your order has been successfully placed. A confirmation email has been sent to you.</p>

        <!-- Order Summary -->
        <div class="bg-gray-50 border rounded-xl p-6 text-left w-full md:w-3/4 mx-auto">
          <h2 class="text-lg font-semibold text-green-700 mb-3">Order Summary</h2>
          <div id="orderItems" class="space-y-2 max-h-48 overflow-auto mb-3"></div>

          <div class="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span id="subtotalText">₱0.00</span>
          </div>
          <div class="flex justify-between text-sm text-gray-600 mt-1">
            <span>Shipping</span>
            <span id="shippingText">₱0.00</span>
          </div>
          <div class="flex justify-between text-sm text-gray-600 mt-1">
            <span>Estimated Tax</span>
            <span id="taxText">₱0.00</span>
          </div>

          <div class="border-t my-4"></div>

          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total</span>
            <span id="totalText" class="text-2xl font-bold text-green-800">₱0.00</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 mt-10">
          <a href="index.html" class="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 w-full sm:w-auto text-center">Return Home</a>
          <a href="shop.html" class="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 w-full sm:w-auto text-center">Continue Shopping</a>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="py-8 text-center text-sm text-gray-100 bg-green-800/90 mt-10 rounded-t-2xl">
    &copy; 2025 Allen City Pharmacy. All Rights Reserved.
  </footer>

  <!-- Script to load order summary -->
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const cartData = JSON.parse(localStorage.getItem("checkoutData")) || null;
      const itemsContainer = document.getElementById("orderItems");

      if (cartData && cartData.items.length > 0) {
        cartData.items.forEach(item => {
          const div = document.createElement("div");
          div.className = "flex justify-between items-center text-sm border-b pb-1";
          div.innerHTML = `
            <span>${item.name} × ${item.qty}</span>
            <span>₱${(item.price * item.qty).toFixed(2)}</span>
          `;
          itemsContainer.appendChild(div);
        });

        document.getElementById("subtotalText").textContent = `₱${cartData.subtotal.toFixed(2)}`;
        document.getElementById("taxText").textContent = `₱${cartData.tax.toFixed(2)}`;
        document.getElementById("shippingText").textContent = `₱${cartData.shipping.toFixed(2)}`;
        document.getElementById("totalText").textContent = `₱${cartData.total.toFixed(2)}`;
      } else {
        itemsContainer.innerHTML = "<p class='text-gray-500 text-sm'>No order data available.</p>";
      }

      localStorage.removeItem("checkoutData");
    });
  </script>

</body>
</html>
