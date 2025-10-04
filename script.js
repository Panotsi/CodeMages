// Simple script for future features like animations, alerts, or analytics
document.addEventListener("DOMContentLoaded", () => {
  console.log("CodeMages landing page loaded successfully!");

  // Example: Click alert for download button
  const downloadBtn = document.querySelector(".download a");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      alert("Your download will begin shortly!");
    });
  }
});
