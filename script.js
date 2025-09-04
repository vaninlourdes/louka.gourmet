document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");

  const indicator = document.createElement("div");
  indicator.classList.add("nav-indicator");
  nav.appendChild(indicator);

  function moveIndicator(element) {
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.left = `${element.offsetLeft}px`;
    indicator.style.opacity = "1";
  }

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      moveIndicator(e.target);
    });
  });

  nav.addEventListener("mouseleave", () => {
    indicator.style.opacity = "0";
  });
});
