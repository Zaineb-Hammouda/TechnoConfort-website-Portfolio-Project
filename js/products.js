document.addEventListener("DOMContentLoaded", () => {
  console.log("Products Page Loaded");

  const productGallery = document.getElementById("product-gallery");

  const products = [
    { name: "Modern Nightstand", price: "$200.00", imageUrl: "../content/images_icons/nightstand.jpg" },
    { name: "Elegant Wardrobe", price: "$950.00", imageUrl: "../content/images_icons/wardrobe.jpg" },
    { name: "Stylish Vanity", price: "$500.00", imageUrl: "../content/images_icons/vanity.jpg" },
    { name: "Cozy Bed", price: "$800.00", imageUrl: "../content/images_icons/bed.jpg" },
    { name: "Luxury Room Set", price: "$4000.00", imageUrl: "../content/images_icons/room.jpg" },
  ];

  // Generate products dynamically
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price}</div>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;

    productGallery.appendChild(productCard);
  });

  // Placeholder "Add to Cart" functionality
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productName = e.target.parentElement.querySelector(".product-name").textContent;
      alert(`Added "${productName}" to cart!`);
    });
  });
});