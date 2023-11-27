setInterval(() => {
  console.log("Connecting to server...");
}, 5000);

const grid = document.querySelector(".fa-grip-vertical");
const flex = document.querySelector(".fa-bars");
const icons = [grid, flex];
const cardHolder = document.querySelector(".card-holder");

// grid.addEventListener("click", () => toggleLayout("grid"));
// flex.addEventListener("click", () => toggleLayout("flex"));

// function toggleLayout(layout) {
//   const oppositeLayout = layout === "grid" ? "flex" : "grid";

//   if (!cardHolder.className.includes(layout)) {
//     cardHolder.classList.remove(oppositeLayout);
//     cardHolder.classList.add(layout);

//     grid.classList.toggle("active", layout === "grid");
//     flex.classList.toggle("active", layout === "flex");
//   }
// }
