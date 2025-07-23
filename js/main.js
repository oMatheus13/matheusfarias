// Menu Hamburger
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav__menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("is-active");
    toggle.classList.toggle("is-active");
  });
}