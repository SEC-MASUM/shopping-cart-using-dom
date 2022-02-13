// Phone
const phoneMinus = document.getElementById("phone-minus");
const phonePlus = document.getElementById("phone-plus");
const phoneQuantity = document.getElementById("phone-quantity");
const phonePrice = document.getElementById("phone-price");

// Phone Case
const caseMinus = document.getElementById("case-minus");
const casePlus = document.getElementById("case-plus");
const caseQuantity = document.getElementById("case-quantity");
const casePrice = document.getElementById("case-price");

// Cost
const subTotal = document.getElementById("sub-total");
const tax = document.getElementById("tax");
const total = document.getElementById("total");

// Total price of each product
function productPrice(productQuantity, perProductPrice) {
  return Number.parseInt(productQuantity) * Number.parseInt(perProductPrice);
}
// Increase Qunatity Function
function increaseQuantity(quantity) {
  return Number.parseInt(quantity.value) + 1;
}
// Decrease Qunatity Function
function decreaseQuantity(quantity) {
  return Number.parseInt(quantity.value) - 1;
}

function totalAmount() {
  subTotal.innerHTML =
    Number.parseFloat(phonePrice.innerText) +
    Number.parseFloat(casePrice.innerText);
  tax.innerText = Number.parseInt(subTotal.innerHTML) / 20;
  total.innerText = Math.round(
    Number.parseFloat(subTotal.innerHTML) + Number.parseFloat(tax.innerText)
  );
}
// Phone
phonePlus.addEventListener("click", function () {
  phoneQuantity.value = increaseQuantity(phoneQuantity);
  phonePrice.innerText = productPrice(phoneQuantity.value, 1219);
  totalAmount();
});
phoneMinus.addEventListener("click", function () {
  if (Number.parseInt(phoneQuantity.value) > 0) {
    phoneQuantity.value = decreaseQuantity(phoneQuantity);
    phonePrice.innerText = productPrice(phoneQuantity.value, 1219);
    totalAmount();
  }
});
// Case
casePlus.addEventListener("click", function () {
  caseQuantity.value = increaseQuantity(caseQuantity);
  casePrice.innerText = productPrice(caseQuantity.value, 59);
  totalAmount();
});

caseMinus.addEventListener("click", function () {
  if (Number.parseInt(caseQuantity.value) > 0) {
    caseQuantity.value = decreaseQuantity(caseQuantity);
    casePrice.innerText = productPrice(caseQuantity.value, 59);
    totalAmount();
  }
});
