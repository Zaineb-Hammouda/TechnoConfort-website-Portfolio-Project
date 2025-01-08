document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");

  const productGallery = document.querySelector(".product-gallery");

  // Product data
  const products = [
    {
      name: "Nightstand DOMINO",
      price: "$200.00",
      modelUrl: "./content/nightstand_domino.glb",
      cameraOrbit: "30deg 85deg 2m",
    },
    {
      name: "Desk DOMINO",
      price: "$519.99",
      modelUrl: "./content/desk_domino.glb",
      cameraOrbit: "30deg 85deg 4m",
    },
    {
      name: "Bed DOMINO",
      price: "$699.99",
      modelUrl: "./content/bed_domino.glb",
      cameraOrbit: "30deg 85deg 5m",
    },
    {
      name: "Closet DOMINO",
      price: "$950.00",
      modelUrl: "./content/closet_domino.glb",
      cameraOrbit: "30deg 85deg 5m",
    },
    {
      name: "Vanity DOMINO",
      price: "$549.99",
      modelUrl: "./content/vanity_domino.glb",
      cameraOrbit: "30deg 85deg 4m",
    },
    {
      name: "Vanity JULIA",
      price: "$860.00",
      modelUrl: "./content/vanity_julia2.glb",
      cameraOrbit: "30deg 85deg 4m",
    },
    {
      name: "JULIA wardrobe",
      price: "$1449.99",
      modelUrl: "./content/closet_julia.glb",
      cameraOrbit: "30deg 85deg 5m",
    },
    {
      name: "JULIA nightstand",
      price: "$349.99",
      modelUrl: "./content/nightstand_julia.glb",
      cameraOrbit: "30deg 85deg 2m",
    },
    {
      name: "JULIA bed",
      price: "$1030.00",
      modelUrl: "./content/julia_bed.glb",
      cameraOrbit: "30deg 85deg 6m",
    },
    {
      name: "JULIA room",
      price: "$4079.99",
      modelUrl: "./content/room_julia.glb",
      cameraOrbit: "30deg 85deg 12m",
    },
    {
      name: "DOMINO room",
      price: "$4079.99",
      modelUrl: "./content/room_domino.glb",
      cameraOrbit: "30deg 85deg 12m",
    },
  ];

  // Generate product cards dynamically
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <h2 class="product-name">${product.name}</h2>
      <model-viewer
        class="product-viewer"
        src="${product.modelUrl}"
        alt="${product.name}"
        camera-orbit="${product.cameraOrbit}"
        camera-controls
        rotation-per-second="1"
        auto-rotate-delay="0"
        environment-image="neutral"
        shadow-intensity="1"
      ></model-viewer>
      <p class="product-price">${product.price}</p>
      <div class="buttons">
        <button class="action-button">Add to Cart</button>
        <button class="action-button">
          <span class="heart">❤️</span> Add to Wishlist
        </button>
      </div>
    `;

    productGallery.appendChild(productCard);
  });

  // Apply effects to dynamically added elements
  const productViewers = document.querySelectorAll(".product-viewer");
  const cartButtons = document.querySelectorAll(".action-button");
  const originalCameraOrbits = new Map();

  // Initialize original camera-orbit for each model
  productViewers.forEach((modelViewer, index) => {
    const cameraOrbit = modelViewer.getAttribute("camera-orbit");
    console.log(`Model ${index + 1} original camera orbit: ${cameraOrbit}`); // Debugging
    originalCameraOrbits.set(modelViewer, cameraOrbit); // Store the original orbit
  });

  // Loop through each model and apply effects
  productViewers.forEach((modelViewer) => {
    modelViewer.addEventListener("mouseenter", () => {
      console.log("Hover started");
      modelViewer.setAttribute("auto-rotate", ""); // Start rotating on hover
      console.log(modelViewer.hasAttribute("auto-rotate")); // Should log true when hovering
    });

    modelViewer.addEventListener("mouseleave", () => {
      console.log("Hover stopped");
      modelViewer.removeAttribute("auto-rotate"); // Stop rotating when hover ends

      // Reset the camera orbit to its original value
      const originalOrbit = originalCameraOrbits.get(modelViewer);
      modelViewer.setAttribute("camera-orbit", originalOrbit);
    });
  });

  cartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonText = e.target.innerText;
      if (buttonText.includes("Add to Cart")) {
        alert("The product has been added to your cart!");
      } else if (buttonText.includes("Add to Wishlist")) {
        alert("The product has been added to your wishlist!");
      }
    });
  });
});