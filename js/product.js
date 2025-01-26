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
  //modelViewer.setAttribute("rotation-per-second", "1"); // Controls the speed of constant rotation
  //modelViewer.setAttribute("auto-rotate", ""); // Enables auto-rotation
  //modelViewer.setAttribute("auto-rotate-delay", "0");

  // Hover effect for rotation
  //modelViewer.addEventListener("mouseenter", () => {
    //modelViewer.setAttribute("auto-rotate", ""); // Keep auto-rotation on hover
    //console.log("Hover started: auto-rotation active.");
    //console.log(modelViewer.hasAttribute("auto-rotate")); // Should log true when hovering
  //});

  modelViewer.addEventListener("mouseleave", () => {
    //modelViewer.removeAttribute("auto-rotate"); // Stop rotation on mouse leave
    modelViewer.setAttribute("camera-orbit", productData.cameraOrbit); // Reset camera orbit
    console.log("Hover ended: reset to original orbit.");
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
  document.getElementById("add-to-cart").addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    alert(`${quantity} ${productData.name}(s) added to your cart!`);
  });
});
