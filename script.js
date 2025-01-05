document.addEventListener("DOMContentLoaded", () => {
  const modelViewer = document.getElementById("product-viewer");
  const originalCameraOrbit = modelViewer.getAttribute("camera-orbit");

  // Add hover event listeners
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