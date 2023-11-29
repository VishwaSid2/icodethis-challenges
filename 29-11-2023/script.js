setInterval(() => {
  console.log("connected");
}, 5000);
const toggle = document.querySelector(`input[type="checkbox"`);
const textarea = document.querySelector(".mon-anu");
toggle.addEventListener("change", () => {
  toggle.checked
    ? (textarea.textContent = "/annualy")
    : (textarea.textContent = "/monthly");
});
