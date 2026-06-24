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
});
