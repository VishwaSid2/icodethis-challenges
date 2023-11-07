const numbers = document.querySelectorAll(".two-bottom ul li");
const stars = document.querySelectorAll(".three-bottom ul li i");
numbers.forEach((element, id) => {
  element.addEventListener("click", () => {
    element.classList.add("active");
    numbers.forEach((el, index) => {
      index <= id ? el.classList.add("active") : el.classList.remove("active"),
        console.log(el, id, index);
    });
  });
});

stars.forEach((element, id) => {
  //   console.log(element, id);
  element.addEventListener("click", () => {
    element.className = "fa-solid fa-star";
    console.log(element, id);
    stars.forEach((elt, index) => {
      id >= index
        ? (elt.className = "fa-solid fa-star")
        : (elt.className = "fa-regular fa-star");
    });
  });
});
