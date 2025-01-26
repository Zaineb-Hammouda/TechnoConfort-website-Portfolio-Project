document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!productData) {
    document.body.innerHTML = "<h1>Product not found</h1>";
    return;
  }

  // Populate product details
  document.getElementById("product-name").textContent = productData.name;
  document.getElementById("product-price").textContent = productData.price;
  document.getElementById("product-description").textContent = productData.description;

  const modelViewer = document.getElementById("product-viewer");
  modelViewer.setAttribute("src", productData.modelUrl);
  modelViewer.setAttribute("camera-orbit", productData.cameraOrbit);
  modelViewer.setAttribute("auto-rotate", "");

  // Enable rotation and reset
  modelViewer.addEventListener("mouseenter", () => {
    modelViewer.removeAttribute("auto-rotate");
  });
  modelViewer.addEventListener("mouseleave", () => {
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("camera-orbit", productData.cameraOrbit);
  });

  // QR Code functionality
  const qrPopup = document.getElementById("qr-popup");
  const qrCode = document.getElementById("qr-code");
  const closePopup = document.getElementById("close-popup");

  document.getElementById("ar-button").addEventListener("click", () => {
    qrCode.src = productData.qrCode || "../content/qrcodes/default-qr.png";
    qrPopup.classList.remove("hidden");
  });

  closePopup.addEventListener("click", () => {
    qrPopup.classList.add("hidden");
  });

  // Add to Cart functionality
  //document.getElementById("add-to-cart").addEventListener("click", () => {
    //const quantity = document.getElementById("quantity").value;
    //alert(`${quantity} ${productData.name}(s) added to your cart!`);
  //});

  // Add product to "Recently Viewed"
  let recentlyViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
  recentlyViewed = recentlyViewed.filter((product) => product.name !== productData.name); // Remove duplicates
  recentlyViewed.unshift(productData); // Add the current product to the beginning
  if (recentlyViewed.length > 3) recentlyViewed.pop(); // Limit to 3 items
  localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));

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

  //add to cart functionnality
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    if (quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Fetch cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.name === productData.name);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: productData.name,
            price: productData.price,
            quantity,
            modelUrl: productData.modelUrl, // Include modelUrl in the cart item
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count in the header
    updateCartCount();

    alert(`${quantity} ${productData.name}(s) added to your cart!`);
  });

  // Update cart count in the header
  function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById("cart-count").textContent = totalQuantity;
  }

  // Initialize cart count on page load
  updateCartCount(); 
});
