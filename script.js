// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Simple contact form alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});