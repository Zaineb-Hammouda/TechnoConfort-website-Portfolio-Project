document.addEventListener("DOMContentLoaded", () => {
  const adultFurniture = [
    { name: "JULIA nightstand", modelUrl: "./content/nightstand_julia.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "JULIA VANITY", modelUrl: "./content/vanity_julia2.glb", cameraOrbit: "30deg 85deg 6m" },
    { name: "JULIA WARDROBE", modelUrl: "./content/closet_julia.glb", cameraOrbit: "30deg 85deg 6m" },
    { name: "JULIA BED", modelUrl: "./content/julia_bed.glb", cameraOrbit: "30deg 85deg 6m" },
  ];

  const kidsFurniture = [
    { name: "DOMINO nightstand", modelUrl: "./content/nightstand_domino.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "DOMINO VANITY", modelUrl: "./content/vanity_domino.glb", cameraOrbit: "30deg 85deg 6m" },
    { name: "DOMINO desk", modelUrl: "./content/desk_domino.glb", cameraOrbit: "30deg 85deg 6m" },
    { name: "DOMINO WARDROBE", modelUrl: "./content/closet_domino.glb", cameraOrbit: "30deg 85deg 6m" },
    { name: "DOMINO BED", modelUrl: "./content/bed_domino.glb", cameraOrbit: "30deg 85deg 6m" },
  ];

  const fullRooms = [
    { name: "DOMNIO Bedroom", modelUrl: "./content/room_domino.glb", cameraOrbit: "30deg 85deg 13m" },
    { name: "JULIA Bedroom", modelUrl: "./content/room_julia.glb", cameraOrbit: "30deg 85deg 13m" },
  ];
  
  const carousels = [
    { id: "adult-carousel", data: adultFurniture },
    { id: "kids-carousel", data: kidsFurniture },
    { id: "rooms-carousel", data: fullRooms },
  ];

  const arrowMappings = [
    { left: "adult-scroll-left", right: "adult-scroll-right" },
    { left: "kids-scroll-left", right: "kids-scroll-right" },
    { left: "rooms-scroll-left", right: "rooms-scroll-right" },
  ];

  carousels.forEach((carousel, index) => {
    const container = document.getElementById(carousel.id);
    const data = carousel.data;

    // Map to store the original camera-orbit
    const originalCameraOrbits = new Map();

    // Generate product cards
    data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
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
        <div class="product-name">${product.name}</div>
      `;
      container.appendChild(productCard);

      // Initialize the original camera-orbit
      const modelViewer = productCard.querySelector(".product-viewer");
      const cameraOrbit = modelViewer.getAttribute("camera-orbit");
      originalCameraOrbits.set(modelViewer, cameraOrbit);

      // Hover Effects
      modelViewer.addEventListener("mouseenter", () => {
        modelViewer.setAttribute("auto-rotate", ""); // Start rotation
      });

      modelViewer.addEventListener("mouseleave", () => {
        modelViewer.removeAttribute("auto-rotate"); // Stop rotation
        modelViewer.setAttribute("camera-orbit", originalCameraOrbits.get(modelViewer)); // Reset orbit
      });
    });

    // Infinite Scrolling Logic
    const handleScroll = () => {
      const scrollWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft -= scrollWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += scrollWidth;
      }
    };

    const autoScroll = setInterval(() => {
      container.scrollBy({ left: 1, behavior: "smooth" });
      handleScroll();
    }, 30);

    container.addEventListener("mouseenter", () => clearInterval(autoScroll));
    container.addEventListener("mouseleave", () => setInterval(() => {
      container.scrollBy({ left: 1, behavior: "smooth" });
      handleScroll();
    }, 30));

    // Arrow Navigation
    document.getElementById(arrowMappings[index].left).addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });
    document.getElementById(arrowMappings[index].right).addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });

    container.addEventListener("scroll", handleScroll);
  });
});