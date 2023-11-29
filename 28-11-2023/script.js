setInterval(() => {
  console.log("connected on working!");
}, 5000);
const placeholder = document.querySelector(".news-holder .right");
const context = "Yes, I would like to receive communication by email.";
const toast = document.querySelector(".cookie-toast");
const btns = document.querySelectorAll(".right a");
btns.forEach((ele) => {
  ele.addEventListener("click", () => {
    toast.classList.add("active");
  });
});
const sp = document.createElement(`span`);
sp.classList.add("textspan");
sp.textContent = context;
placeholder.append(sp);
