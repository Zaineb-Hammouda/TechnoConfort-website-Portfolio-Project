document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartCountElement = document.getElementById("cart-count");

  // Fetch cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Function to render cart
  const renderCart = () => {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartCountElement.textContent = "0";
      cartTotalElement.textContent = "$0.00";
      return;
    }

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <div>
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <p>Quantity: <input type="number" value="${item.quantity}" data-index="${index}" class="quantity-input"></p>
        </div>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
      total += parseFloat(item.price.replace("$", "")) * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
    cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Event Listener for Quantity Change
  cartItemsContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("quantity-input")) {
      const index = e.target.getAttribute("data-index");
      const newQuantity = parseInt(e.target.value, 10);
      cart[index].quantity = newQuantity > 0 ? newQuantity : 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Event Listener for Removing Items
  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Render Cart on Page Load
  renderCart();

   // Populate "Recently Viewed"
   const recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
   const recentlyViewedContainer = document.getElementById("recently-viewed");
 
   recentlyViewedContainer.innerHTML = ""; // Clear previous content
 
   if (recentlyViewed.length) {
     recentlyViewed.forEach((product) => {
       const productDiv = document.createElement("div");
       productDiv.className = "recent-product";
 
       const productLink = document.createElement("a");
       productLink.textContent = product.name;
       productLink.href = "product.html";
 
       // Add the correct product data to localStorage on click
       productLink.addEventListener("click", () => {
         localStorage.setItem("selectedProduct", JSON.stringify(product));
       });
 
       productDiv.appendChild(productLink);
       recentlyViewedContainer.appendChild(productDiv);
     });
   } else {
     recentlyViewedContainer.innerHTML = "<p>No products viewed recently.</p>";
   }
});