document.addEventListener("DOMContentLoaded", () => {
  const categoryData = {
    "adult-bedrooms-full-rooms": {
      title: "Adult Bedrooms - Full Rooms",
      description: "Explore our elegant full room setups for adult bedrooms.",
      heroImage: "./content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Adult Room", price: "$4200", modelUrl: "./content/products/room_julia.glb", cameraOrbit: "30deg 85deg 9m" },
        { name: "LORINE Adult Room", price: "$4800", modelUrl: "./content/products/room_lorine_adult.glb", cameraOrbit: "30deg 85deg 9m" },
      ],
    },
    "adult-bedrooms-nightstands": {
      title: "Adult Bedrooms - Nightstands",
      description: "Explore our elegant Nightstands for adult bedrooms.",
      heroImage: "./content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Nightstand", price: "$320.00", modelUrl: "./content/products/nightstand_julia.glb", cameraOrbit: "30deg 85deg 2m" },
        { name: "LORINE Nightstand", price: "$240.00", modelUrl: "./content/products/nightstand_lorine_adult.glb", cameraOrbit: "30deg 85deg 2m" },
      ],
    },
    "adult-bedrooms-vanities": {
      title: "Adult Bedrooms - Vanities",
      description: "Explore our elegant Vanities for adult bedrooms.",
      heroImage: "./content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Vanity", price: "$750.00", modelUrl: "./content/products/vanity_julia2.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "LORINE Vanity", price: "$699.99", modelUrl: "./content/products/vanity_lorine_adult.glb", cameraOrbit: "30deg 85deg 4m" },
      ],
    },
    "adult-bedrooms-closets": {
      title: "Adult Bedrooms - Closets",
      description: "Explore our sophisticated closets and wardrobes for adult bedrooms.",
      heroImage: "./content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Closet", price: "$2400", modelUrl: "./content/products/closet_julia.glb", cameraOrbit: "30deg 85deg 5m" },
        { name: "LORINE Wardrobe", price: "$2850", modelUrl: "./content/products/closet_lorine_adult.glb", cameraOrbit: "30deg 85deg 5m" },
      ],
    },
    "adult-bedrooms-beds": {
      title: "Adult Bedrooms - Beds",
      description: "Explore our elegant Beds for adult bedrooms.",
      heroImage: "./content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Bed", price: "$1900", modelUrl: "./content/products/julia_bed.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "LORINE Bed", price: "$2275", modelUrl: "./content/products/bed_lorine_adult.glb", cameraOrbit: "30deg 85deg 4m" },
      ],
    },
    "kids-bedrooms-full-rooms": {
      title: "Kids Bedrooms - Full Rooms",
      description: "Explore our colorful kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Room", price: "$2200", modelUrl: "./content/products/room_lara_pink.glb", cameraOrbit: "30deg 85deg 8m" },
        { name: "LARA Blue Room", price: "$2200", modelUrl: "./content/products/room_lara_blue.glb", cameraOrbit: "30deg 85deg 8m" },
        { name: "DOMINO Room", price: "$2850", modelUrl: "./content/products/room_domino.glb", cameraOrbit: "30deg 85deg 8m" },
      ],
    },
    "kids-bedrooms-nightstands": {
      title: "Kids Bedrooms - Nightstands",
      description: "Functional and colorful nightstands for kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Nightstand", price: "$250", modelUrl: "./content/products/nightstand_lara_pink.glb", cameraOrbit: "30deg 85deg 2m" },
        { name: "LARA Blue Nightstand", price: "$250", modelUrl: "./content/products/nightstand_lara_blue.glb", cameraOrbit: "30deg 85deg 2m" },
        { name: "DOMINO Nightstand", price: "$350", modelUrl: "./content/products/nightstand_domino.glb", cameraOrbit: "30deg 85deg 2m" },
        { name: "LORINE Nightstand", price: "$270", modelUrl: "./content/products/nightstand_lorine_adult.glb", cameraOrbit: "30deg 85deg 2m" },
      ],
    },
    "kids-bedrooms-desks": {
      title: "Kids Bedrooms - Desks",
      description: "Functional and colorful desks for kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Desk", price: "$549.99", modelUrl: "./content/products/desk_lara_pink.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "LARA Blue Desk", price: "$549.99", modelUrl: "./content/products/desk_lara_blue.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "DOMINO Desk", price: "$650.00", modelUrl: "./content/products/desk_domino.glb", cameraOrbit: "30deg 85deg 4m" },
      ],
    },
    "kids-bedrooms-vanities": {
      title: "Kids Bedrooms - Vanities",
      description: "Functional and colorful vanities for kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "DOMINO Vanity", price: "$580.00", modelUrl: "./content/products/vanity_domino.glb", cameraOrbit: "30deg 85deg 4m" },
      ],
    },
    "kids-bedrooms-closets": {
      title: "Kids Bedrooms - Closets",
      description: "Functional and colorful closets and wardrobes for kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Wardrobe", price: "$1299.99", modelUrl: "./content/products/wardrobe_lara_pink.glb", cameraOrbit: "30deg 85deg 5m" },
        { name: "LARA Blue Wardrobe", price: "$1299.99", modelUrl: "./content/products/wardrobe_lara_blue.glb", cameraOrbit: "30deg 85deg 5m" },
        { name: "DOMINO Closet", price: "$1450", modelUrl: "./content/products/closet_domino.glb", cameraOrbit: "30deg 85deg 5m" },
      ],
    },
    "kids-bedrooms-beds": {
      title: "Kids Bedrooms - Beds",
      description: "Functional and colorful beds for kids' bedrooms.",
      heroImage: "./content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Bed", price: "$1050", modelUrl: "./content/products/bed_lara_pink.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "LARA Blue Bed", price: "$1050", modelUrl: "./content/products/bed_lara_blue.glb", cameraOrbit: "30deg 85deg 4m" },
        { name: "DOMINO Bed", price: "$1200", modelUrl: "./content/products/bed_domino.glb", cameraOrbit: "30deg 85deg 4m" },
      ],
    },
  };

  // Parse URL to get the category
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("category");
  const category = categoryData[categoryKey];

  if (category) {
    // Update Hero Section
    document.getElementById("hero-image").src = category.heroImage;
    document.getElementById("category-title").textContent = category.title;
    document.getElementById("category-description").textContent = category.description;

    // Update Product Gallery
    const productGallery = document.getElementById("product-gallery");
    document.getElementById("product-count").textContent = `${category.products.length} Products Available`;

    category.products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <model-viewer
          src="${product.modelUrl}"
          alt="${product.name}"
          camera-orbit="${product.cameraOrbit}"
          camera-controls
          shadow-intensity="1"
        ></model-viewer>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <button class="action-button">Add to Cart</button>
      `;

      // Add hover effects for rotation
      const modelViewer = productCard.querySelector("model-viewer");
      modelViewer.addEventListener("mouseenter", () => modelViewer.setAttribute("auto-rotate", ""));
      modelViewer.addEventListener("mouseleave", () => {
        modelViewer.removeAttribute("auto-rotate");
        modelViewer.setAttribute("camera-orbit", product.cameraOrbit);
      });

      // Add "Add to Cart" functionality
      productCard.querySelector(".action-button").addEventListener("click", () => {
        alert(`${product.name} has been added to your cart!`);
      });

      productGallery.appendChild(productCard);
    });
  } else {
    console.error("Invalid category. Please check the URL.");
  }
});