setInterval(() => {
  console.log("connecting");
}, 5000);
const product = document.querySelectorAll(".product");
const cart = document.querySelectorAll(".cart");
product.forEach((pro) => {
  console.log(pro);
  pro.addEventListener("click", () => {
    pro.classList.toggle("active");
    cart.forEach((ct) => {
      pro.className.includes("active")
        ? (ct.textContent = "Added To Cart")
        : (ct.innerHTML = `<a href="#" class="cart link"
        >Add to cart <i class="fa-solid fa-shopping-bag"></i
      ></a>`);
    });
  });
});
