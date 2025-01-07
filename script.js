document.addEventListener("DOMContentLoaded", () => {
  const productViewers = document.querySelectorAll(".product-viewer");
  const modelExample = document.getElementById("model-example");
  const originalCameraOrbit = modelExample.getAttribute("camera-orbit");
  const cartButtons = document.querySelectorAll(".action-button");

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
      modelViewer.setAttribute("camera-orbit", originalCameraOrbit);
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