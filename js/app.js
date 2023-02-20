const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
const moreDetailsBtns = document.querySelectorAll(".btn-more-details");
const productsCountEl = document.querySelector("#products-count");
const modalBlock = document.querySelector(".modal-none");
const btnClose = document.querySelector(".btn-close");
const btnSend = document.querySelector(".btn-send");
const zooms = document.querySelectorAll(".zoom");
const likes = document.querySelectorAll(".like");
const inputs = document.querySelectorAll(".form-filed > input");
// console.log(inputs);

addToCartBtns.forEach((item) => {
  item.addEventListener("click", () => {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

//modal info
moreDetailsBtns.forEach((item) => item.addEventListener("click", modalOpen));
function modalOpen() {
  modalBlock.classList.remove("modal-none");
  modalBlock.classList.add("modal");
}
function modalClose() {
  modalBlock.classList.remove("modal");
  modalBlock.classList.add("modal-none");
}
btnClose.addEventListener("click", modalClose);
modalBlock.addEventListener("click", function (e) {
  if (e.target === modalBlock) {
    modalClose();
  }
});
function showModalByScroll() {
  if (pageYOffset > document.body.scrollHeight / 2) {
    modalOpen();
    this.window.removeEventListener("scroll", showModalByScroll);
  }
}
// setTimeout(modalOpen, 3000);
window.addEventListener("scroll", showModalByScroll);
btnSend.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputs[0].value !== "" && inputs[1].value !== "") {
    modalBlock.classList.remove("modal");
    modalBlock.classList.add("modal-none");
    inputs[0].style.cssText = `border: 2px solid black`;
    inputs[1].style.cssText = `border: 2px solid black`;
    alert(`${inputs[0].value}, thank you for filling out the form`);
    inputs[0].value = "";
    inputs[1].value = "";
  } else {
    inputs[0].style.cssText = `border: 3px solid red`;
    inputs[1].style.cssText = `border: 3px solid red`;
  }
});

//Zooms and Likes
zooms.forEach((item) => {
  item.addEventListener("click", function () {
    if (!item.classList.contains("zoom-active")) {
      item.classList.add("zoom-active");
    } else {
      item.classList.remove("zoom-active");
    }
  });
});
likes.forEach((item) => {
  item.addEventListener("click", function () {
    if (!item.classList.contains("like-active")) {
      item.classList.add("like-active");
    } else {
      item.classList.remove("like-active");
    }
  });
});

//slick

$(".slider-block").slick({
  dots: true,
});

const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const productsInput = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, index) {
  this.domRefs = {
    incrementBtn: incrementBtn[index],
    decrementBtn: decrementBtn[index],
    inputField: inputField[index],
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

const counter1 = new Counter(incrementBtns, decrementBtns, productsInput, 0);
const counter2 = new Counter(incrementBtns, decrementBtns, productsInput, 1);
const counter3 = new Counter(incrementBtns, decrementBtns, productsInput, 2);
const counter4 = new Counter(incrementBtns, decrementBtns, productsInput, 3);
const counter5 = new Counter(incrementBtns, decrementBtns, productsInput, 4);
const counter6 = new Counter(incrementBtns, decrementBtns, productsInput, 5);
const counter7 = new Counter(incrementBtns, decrementBtns, productsInput, 6);
const counter8 = new Counter(incrementBtns, decrementBtns, productsInput, 7);
const counter9 = new Counter(incrementBtns, decrementBtns, productsInput, 8);

console.log(counter1);
