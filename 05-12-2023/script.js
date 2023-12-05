setInterval(() => {
  console.log("connecting");
}, 5000);
const area = document.querySelector(".notification");
console.log(area);
const btn = document.querySelector(".spans");
btn.addEventListener("click", () => {
  area.classList.toggle("hide");
});
