document.addEventListener("DOMContentLoaded", () => {
  // Simulate product data
  const productData = {
    name: "LARA Blue Desk",
    price: "$450.00",
    description: "This delightful blue and white kids' desk is the perfect blend of style and functionality for any child's room. It features a spacious work surface, ideal for homework, crafts, or playtime, along with a convenient drawer for storing stationery and small essentials. A compact cabinet with a door keeps books and larger items neatly organized, while an open niche provides easy access to frequently used belongings. The desk also includes a hanging element with two doors, offering additional overhead storage to keep the space tidy. Designed with both practicality and charm, this desk adds a cheerful touch to any decor.",
    modelUrl: "./content/products/desk_lara_blue.glb",
    cameraOrbit: "30deg 85deg 4m",
    qrCode: "./content/qrcodes/qr-lara-blue-desk.png",
    reviews: { stars: 0, count: 0 },
  }

  // Populate product details
  document.getElementById("product-name").textContent = productData.name;
  document.getElementById("product-price").textContent = productData.price;
  document.getElementById("product-description").textContent = productData.description;
  document.getElementById("review-count").textContent = `(${productData.reviews.count} Reviews)`;

  // Configure model viewer
  const modelViewer = document.getElementById("product-viewer");
  modelViewer.src = productData.modelUrl;
  modelViewer.setAttribute("camera-orbit", productData.cameraOrbit);

  // Hover effect for model rotation
  modelViewer.addEventListener("mouseenter", () => {
    modelViewer.setAttribute("auto-rotate", "");
    console.log("entered");
  });
  modelViewer.addEventListener("mouseleave", () => {
    modelViewer.removeAttribute("auto-rotate");
    modelViewer.setAttribute("camera-orbit", productData.cameraOrbit);
  });

  // AR Button functionality
  const qrPopup = document.getElementById("qr-popup");
  const qrCode = document.getElementById("qr-code");
  const closePopup = document.getElementById("close-popup");

  document.getElementById("ar-button").addEventListener("click", () => {
    qrCode.src = productData.qrCode;
    qrPopup.classList.remove("hidden");
  });

  closePopup.addEventListener("click", () => {
    qrPopup.classList.add("hidden");
  });

  // Add to Cart functionality
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    alert(`${quantity} ${productData.name}(s) added to your cart!`);
  });
});