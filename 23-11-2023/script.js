setInterval(() => {
  console.log("connected JS");
}, 5000);
const nav_menu = document.querySelector(".nav-menu");
const acci = document.querySelector(".nav");

acci.addEventListener("click", () => {
  acci.classList.toggle("active");
  acci.className.includes("active")
    ? (nav_menu.style.display = "block")
    : (nav_menu.style.display = "none");
});
