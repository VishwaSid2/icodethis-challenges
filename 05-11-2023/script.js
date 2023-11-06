const sections = document.querySelectorAll("section");
const btns = document.querySelectorAll(".button");
console.log(...sections, ...btns);
btns.forEach((x, id) => {
  console.log(x.textContent, id);
  x.addEventListener("click", () => {
    sections[id].classList.add("hide");
    id == 2
      ? sections.forEach((e) => {
          e.classList.remove("hide");
        })
      : console.log("e");
  });
});
// document.addEventListener("DOMContentLoaded", function() {
// const slider = document.querySelector(".slide-circle");
// const sliderHandle = slider.querySelector("::after");
// const sliderWidth = slider.offsetWidth;
// const sliderHandleWidth = sliderHandle.offsetWidth;
// let isDragging = false;

// sliderHandle.addEventListener("mousedown", (event) => {
//   isDragging = true;
//   document.addEventListener("mousemove", handleMouseMove);
//   document.addEventListener("mouseup", handleMouseUp);
// });

// function handleMouseMove(event) {
//   if (isDragging) {
//     const newPosition =
//       event.clientX - slider.offsetLeft - sliderHandleWidth / 2;
//     const maxPosition = sliderWidth - sliderHandleWidth;
//     const validPosition = Math.max(0, Math.min(maxPosition, newPosition));
//     sliderHandle.style.left = `${validPosition}px`;
//   }
// }

// function handleMouseUp() {
//   isDragging = false;
//   document.removeEventListener("mousemove", handleMouseMove);
//   document.removeEventListener("mouseup", handleMouseUp);
// }

// sliderHandle.addEventListener("touchstart", (event) => {
//   isDragging = true;
//   document.addEventListener("touchmove", handleTouchMove);
//   document.addEventListener("touchend", handleTouchEnd);
// });

// function handleTouchMove(event) {
//   if (isDragging) {
//     const touch = event.touches[0];
//     const newPosition =
//       touch.clientX - slider.offsetLeft - sliderHandleWidth / 2;
//     const maxPosition = sliderWidth - sliderHandleWidth;
//     const validPosition = Math.max(0, Math.min(maxPosition, newPosition));
//     sliderHandle.style.left = `${validPosition}px`;
//   }
// }

// function handleTouchEnd() {
//   isDragging = false;
//   document.removeEventListener("touchmove", handleTouchMove);
//   document.removeEventListener("touchend", handleTouchEnd);
// }
// });