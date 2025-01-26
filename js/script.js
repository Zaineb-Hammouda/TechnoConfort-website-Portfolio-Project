document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const adultFurniture = [
    { name: "JULIA Nightstand", modelUrl: "../content/products/nightstand_julia.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "LORINE Chest", modelUrl: "../content/products/commode_lorine_adult.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "JULIA Vanity", modelUrl: "../content/products/vanity_julia2.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LORINE Nightstand", modelUrl: "../content/products/nightstand_lorine_adult.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "LORINE Vanity", modelUrl: "../content/products/vanity_lorine_adult.glb", cameraOrbit: "30deg 85deg 3.5m" },
    { name: "JULIA Wardrobe", modelUrl: "../content/products/closet_julia.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "LORINE Bed", modelUrl: "../content/products/bed_lorine_adult.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "JULIA Bed", modelUrl: "../content/products/julia_bed.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LORINE Wardrobe", modelUrl: "../content/products/wardrobe_lorine_adult.glb", cameraOrbit: "30deg 85deg 6m" },
  ];

  const kidsFurniture = [
    { name: "LARA BLUE wardrobe", modelUrl: "../content/products/wardrobe_lara_blue.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "DOMINO Nightstand", modelUrl: "../content/products/nightstand_domino.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "LARA Pink Nightstand", modelUrl: "../content/products/nightstand_lara_pink.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "LARA BLUE desk", modelUrl: "../content/products/desk_lara_blue.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Vanity", modelUrl: "../content/products/vanity_domino.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LARA Blue Nightstand", modelUrl: "../content/products/nightstand_lara_blue.glb", cameraOrbit: "30deg 85deg 2m" },
    { name: "LARA PINK Bed", modelUrl: "../content/products/bed_lara_pink.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Desk", modelUrl: "../content/products/desk_domino.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LARA PINK Desk", modelUrl: "../content/products/desk_lara_pink.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "LARA BLUE Bed", modelUrl: "../content/products/bed_lara_blue.glb", cameraOrbit: "30deg 85deg 4m" },
    { name: "DOMINO Wardrobe", modelUrl: "../content/products/closet_domino.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "LARA PINK wardrobe", modelUrl: "../content/products/wardrobe_lara_pink.glb", cameraOrbit: "30deg 85deg 5m" },
    { name: "DOMINO Bed", modelUrl: "../content/products/bed_domino.glb", cameraOrbit: "30deg 85deg 4m" },
  ];

  const fullRooms = [
    { name: "DOMNIO Bedroom", modelUrl: "../content/products/room_domino.glb", cameraOrbit: "30deg 85deg 8m" },
    { name: "LARA PINK Bedroom", modelUrl: "../content/products/room_lara_pink.glb", cameraOrbit: "30deg 85deg 8m" },
    { name: "JULIA Bedroom", modelUrl: "../content/products/room_julia.glb", cameraOrbit: "30deg 85deg 9m" },
    { name: "LORINE Bedroom", modelUrl: "../content/products/room_lorine_adult.glb", cameraOrbit: "30deg 85deg 9m" },
    { name: "LARA BLUE Bedroom", modelUrl: "../content/products/room_lara_blue.glb", cameraOrbit: "30deg 85deg 8m" },
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
          disable-zoom
        ></model-viewer>
        <div class="product-name">${product.name}</div>
      `;
      container.appendChild(productCard);

      // Initialize the original camera-orbit
      const modelViewer = productCard.querySelector(".product-viewer");
      const cameraOrbit = modelViewer.getAttribute("camera-orbit");
      originalCameraOrbits.set(modelViewer, cameraOrbit);

      // Hover Effects for Product Viewer
      //modelViewer.addEventListener("mouseenter", () => {
        //console.log(`Hover started on ${product.name}`);
        //modelViewer.setAttribute("auto-rotate", ""); // Start rotation
      //});

      modelViewer.addEventListener("mouseleave", () => {
        console.log(`Hover ended on ${product.name}`);
        //modelViewer.removeAttribute("auto-rotate"); // Stop rotation
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


  //add to cart functionnality
  /*document.getElementById("add-to-cart").addEventListener("click", () => {
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
  updateCartCount();*/

  //add to cart functionnality
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("action-button")) {
      const productName = e.target.closest(".product-card").querySelector(".product-name").textContent;
      const productPrice = e.target.closest(".product-card").querySelector(".product-price").textContent;
      const modelUrl = e.target.closest(".product-card").querySelector("model-viewer").getAttribute("src");

      // Fetch cart from localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if the product already exists in the cart
      const existingProduct = cart.find((item) => item.name === productName);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ name: productName, price: productPrice, modelUrl, quantity: 1 });
      }
  
      // Save cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Update cart count in the header
      updateCartCount();

      alert(`${quantity} ${productData.name}(s) added to your cart!`);
    }
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
