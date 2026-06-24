// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  });
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const iconClose = document.getElementById("menu-icon-close");
const iconOpen = document.getElementById("menu-icon-open");

menuBtn.addEventListener("click", () => {
  // Toggle the visibility of the mobile dropdown menu
  mobileMenu.classList.toggle("hidden");

  // Swap the hamburger icon and the 'X' icon
  iconClose.classList.toggle("hidden");
  iconClose.classList.toggle("block");

  iconOpen.classList.toggle("hidden");
  iconOpen.classList.toggle("block");
  // Close mobile menu when clicking a link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      iconClose.classList.remove("hidden");
      iconClose.classList.add("block");
      iconOpen.classList.remove("block");
      iconOpen.classList.add("hidden");
    });
  });

  // 2. Download Form Handler Logic
  const downloadForm = document.getElementById("downloadForm");
  const successWrapper = document.getElementById("successWrapper");

  downloadForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop standard browser page reload

    // Hide the form smoothly, and show the true download element
    downloadForm.classList.add("hidden");
    successWrapper.classList.remove("hidden");
  });
});
