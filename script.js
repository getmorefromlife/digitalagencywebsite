const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "a") {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
