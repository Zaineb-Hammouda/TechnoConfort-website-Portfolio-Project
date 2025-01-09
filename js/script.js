document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const adultFurniture = [
    { name: "JULIA Nightstand", modelUrl: "../content/products/nightstand_julia.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "JULIA Vanity", modelUrl: "../content/products/vanity_julia2.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "JULIA Wardrobe", modelUrl: "../content/products/closet_julia.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "JULIA Bed", modelUrl: "../content/products/julia_bed.glb", cameraOrbit: "30deg 85deg 4m" },
  ];

  const kidsFurniture = [
    { name: "DOMINO Nightstand", modelUrl: "../content/products/nightstand_domino.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "DOMINO Vanity", modelUrl: "../content/products/vanity_domino.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Desk", modelUrl: "../content/products/desk_domino.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Wardrobe", modelUrl: "../content/products/closet_domino.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "DOMINO Bed", modelUrl: "../content/products/bed_domino.glb", cameraOrbit: "30deg 85deg 4m" },
  ];

  const fullRooms = [
    { name: "DOMNIO Bedroom", modelUrl: "../content/products/room_domino.glb", cameraOrbit: "30deg 85deg 8m" },
    { name: "JULIA Bedroom", modelUrl: "../content/products/room_julia.glb", cameraOrbit: "30deg 85deg 9m" },
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

    if (!container) {
      console.error(`Carousel container with ID "${carousel.id}" not found.`);
      return;
    }

    console.log(`Setting up carousel with ID: ${carousel.id}`);

    const originalCameraOrbits = new Map();
    let autoScroll;
    let isManualScroll = false;

    // Generate product cards
    data.forEach((product, productIndex) => {
      console.log(`Adding product to ${carousel.id}:`, product);

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

      // Hover Effects for Product Viewer
      modelViewer.addEventListener("mouseenter", () => {
        console.log(`Hover started on ${product.name}`);
        modelViewer.setAttribute("auto-rotate", ""); // Start rotation
      });

      modelViewer.addEventListener("mouseleave", () => {
        console.log(`Hover ended on ${product.name}`);
        modelViewer.removeAttribute("auto-rotate"); // Stop rotation
        modelViewer.setAttribute("camera-orbit", originalCameraOrbits.get(modelViewer)); // Reset orbit
      });
    });

    // Duplicate content for infinite scrolling
    container.innerHTML += container.innerHTML;
    console.log(`Content duplicated for infinite scrolling in ${carousel.id}`);

    // Initialize scroll position to avoid erratic behavior
    container.scrollLeft = container.scrollWidth / 4;
    console.log(`Scroll position initialized for ${carousel.id}`);

    // Debounce logic for scroll handling
    let debounceTimeout;
    const handleScroll = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        const scrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft -= scrollWidth;
          console.log(`${carousel.id}: Reset scroll position to start.`);
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += scrollWidth;
          console.log(`${carousel.id}: Reset scroll position to end.`);
        }
        isManualScroll = false; // Allow auto-scroll to resume
      }, 100); // Debounce delay
    };

    const startAutoScroll = () => {
      if (isManualScroll) return; // Prevent auto-scroll during manual actions
      console.log(`Starting auto-scroll for ${carousel.id}`);
      autoScroll = setInterval(() => {
        container.scrollBy({ left: 1, behavior: "smooth" });
        handleScroll();
      }, 10); // Smooth auto-scroll
    };

    const stopAutoScroll = () => {
      console.log(`Stopping auto-scroll for ${carousel.id}`);
      clearInterval(autoScroll);
    };

    // Start auto-scroll after a brief delay to ensure content is ready
    setTimeout(startAutoScroll, 100);

    // Pause auto-scroll on hover
    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    const leftArrow = document.getElementById(arrowMappings[index].left);
    const rightArrow = document.getElementById(arrowMappings[index].right);

    [leftArrow, rightArrow].forEach((arrow, arrowIndex) => {
      if (!arrow) {
        console.error(`Arrow button not found for ${carousel.id}:`, arrowIndex === 0 ? "Left" : "Right");
        return;
      }

      console.log(`Arrow button initialized for ${carousel.id}: ${arrowIndex === 0 ? "Left" : "Right"}`);
      arrow.addEventListener("mouseenter", stopAutoScroll); // Pause on hover over arrows
      arrow.addEventListener("mouseleave", startAutoScroll); // Resume on leaving arrows
    });

    leftArrow.addEventListener("click", () => {
      isManualScroll = true; // Mark manual scroll
      stopAutoScroll(); // Pause auto-scroll
      container.scrollBy({ left: -300, behavior: "smooth" });
      console.log(`Left arrow clicked for ${carousel.id}`);
      handleScroll();
    });

    rightArrow.addEventListener("click", () => {
      isManualScroll = true; // Mark manual scroll
      stopAutoScroll(); // Pause auto-scroll
      container.scrollBy({ left: 300, behavior: "smooth" });
      console.log(`Right arrow clicked for ${carousel.id}`);
      handleScroll();
    });

    container.addEventListener("scroll", handleScroll);
  });
});
