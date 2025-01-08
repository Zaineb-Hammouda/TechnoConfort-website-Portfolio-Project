document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed!");
  const productViewers = document.querySelectorAll(".product-viewer");
  const cartButtons = document.querySelectorAll(".action-button");
  // Create a map to store the original camera-orbit for each model
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