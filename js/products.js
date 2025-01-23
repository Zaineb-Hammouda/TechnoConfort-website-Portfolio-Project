document.addEventListener("DOMContentLoaded", () => {
  console.log("Products page loaded.");

  const products = [
    { name: "LARA Pink Desk", price: "$450.00", modelUrl: "./content/products/desk_lara_pink.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LARA Blue Desk", price: "$450.00", modelUrl: "./content/products/desk_lara_blue.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Desk", price: "$529.99", modelUrl: "./content/products/desk_domino.glb", cameraOrbit: "30deg 85deg 4m" },
  ];

  const productGallery = document.getElementById("product-gallery");
  const productCount = document.getElementById("product-count");

  productCount.textContent = `${products.length} Products Available`;

  // Render product gallery
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <model-viewer
        src="${product.modelUrl}"
        alt="${product.name}"
        camera-orbit="${product.cameraOrbit}"
        camera-controls
        shadow-intensity="1"
        rotation-per-second="1"
        auto-rotate-delay="0"
        environment-image="neutral"
      ></model-viewer>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}</p>
      <button class="action-button">Add to Cart</button>
    `;
    productGallery.appendChild(productCard);

    const modelViewer = productCard.querySelector("model-viewer");
    const originalOrbit = product.cameraOrbit;

    // Add hover effect to start rotation
    modelViewer.addEventListener("mouseenter", () => {
      modelViewer.setAttribute("auto-rotate", ""); // Start auto-rotate
      console.log(`Started rotating ${product.name}`);
    });

    // Reset rotation and orbit when hover ends
    modelViewer.addEventListener("mouseleave", () => {
      modelViewer.removeAttribute("auto-rotate"); // Stop auto-rotate
      modelViewer.setAttribute("camera-orbit", originalOrbit); // Reset to original orbit
      console.log(`Stopped rotating ${product.name}`);
    });

    // Add click event for "Add to Cart" button
    const button = productCard.querySelector(".action-button");
    button.addEventListener("click", () => {
      alert(`${product.name} has been added to your cart!`);
    });
  });
});