const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
const moreDetailsBtns = document.querySelectorAll(".btn-more-details");
const productsCountEl = document.querySelector("#products-count");
const modelBlock = document.querySelector(".modal-none");
const btnClose = document.querySelector(".btn-close");
const btnSend = document.querySelector(".btn-send");
const zooms = document.querySelectorAll(".zoom");
const likes = document.querySelectorAll(".like");
const inputs = document.querySelectorAll(".form-filed > input");
console.log(inputs);

addToCartBtns.forEach((item) => {
  item.addEventListener("click", () => {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
});

//modal info
moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    modelBlock.classList.remove("modal-none");
    modelBlock.classList.add("modal");
  });
});

btnClose.addEventListener("click", function () {
  modelBlock.classList.remove("modal");
  modelBlock.classList.add("modal-none");
});
btnSend.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputs[0].value !== "" && inputs[1].value !== "") {
    modelBlock.classList.remove("modal");
    modelBlock.classList.add("modal-none");
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
    let zoomClassList = item.classList;
    if (!zoomClassList.contains("zoom-active")) {
      item.classList.add("zoom-active");
    } else {
      item.classList.remove("zoom-active");
    }
  });
});
likes.forEach((item) => {
  item.addEventListener("click", function () {
    let likesClassList = item.classList;
    if (!likesClassList.contains("like-active")) {
      item.classList.add("like-active");
    } else {
      item.classList.remove("like-active");
    }
  });
});
