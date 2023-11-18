const inputs = document.querySelectorAll(`input[type="text"]`);
const addbtn = document.querySelectorAll(".inc");
const subbtn = document.querySelectorAll(".dec");
const stockstatus = document.querySelectorAll(".stock-status");
const bill = document.querySelectorAll(".prices");

// add and dec functionality
inputs.forEach((int, id) => {
  addbtn[id].addEventListener("click", () => {
    inputs[id].value++;
    pricechange(inputs[id].value);
    Number(inputs[id].value) >= 50
      ? (inputs[id].value = 50)(
          (stockstatus[id].textContent = "OUT OF STOCK")(
            (stockstatus[id].style.background = "red")
          )
        )
      : console.log("adding");
  });
  subbtn[id].addEventListener("click", () => {
    pricechange(inputs[id].value);
    inputs[id].value--;
    inputs[id].value <= 0
      ? (inputs[id].value = 0)
      : (stockstatus[id].textContent = "In stock"),
      (stockstatus[id].style.background = `var(--stock)`);
  });
  function pricechange(arg) {
    console.log(arg, bill);
    const bills = (bill[0].textContent = arg * 800);
    bill[1].textContent = bills;
  }
});
