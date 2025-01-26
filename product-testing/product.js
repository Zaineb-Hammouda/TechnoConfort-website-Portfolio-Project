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
  document.getElementById("product-viewer").setAttribute("src", productData.modelUrl);
  document.getElementById("product-viewer").setAttribute("camera-orbit", productData.cameraOrbit);
  
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
