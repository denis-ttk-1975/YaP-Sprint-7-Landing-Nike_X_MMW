const menuBtn = document.querySelector(".header__menu-btn");
const closeNavBtn = document.querySelector(".nav__close-btn");
const navPopup = document.querySelector(".nav");

const navMenuItems = document.querySelectorAll(".nav__menu-item");

const leftScrollGoods = document.querySelector(".goods__scroll-left");
const rightScrollGoods = document.querySelector(".goods__scroll-right");

const goodsGallery = document.querySelector(".goods__cards-container");

menuBtn.addEventListener("click", function () {
  navPopup.classList.add("nav__opened");
});

closeNavBtn.addEventListener("click", function () {
  navPopup.classList.remove("nav__opened");
});

navMenuItems.forEach((item) =>
  item.addEventListener("click", function () {
    navPopup.classList.remove("nav__opened");
  })
);

leftScrollGoods.addEventListener("click", scrollLeft);
rightScrollGoods.addEventListener("click", scrollRight);

function scrollLeft() {
  const clientWidth = goodsGallery.clientWidth;
  const scrollWidth = goodsGallery.scrollWidth;
  const scrollLeft = goodsGallery.scrollLeft;

  if (scrollLeft <= 0) {
    return;
  } else if (scrollLeft < clientWidth) {
    goodsGallery.scrollLeft = 0;
    return;
  } else {
    goodsGallery.scrollLeft = scrollLeft - clientWidth;
    return;
  }
}
function scrollRight() {
  const clientWidth = goodsGallery.clientWidth;
  const scrollWidth = goodsGallery.scrollWidth;
  const scrollLeft = goodsGallery.scrollLeft;

  if (scrollLeft + clientWidth >= scrollWidth) {
    return;
  } else if (scrollWidth - scrollLeft - clientWidth < clientWidth) {
    goodsGallery.scrollLeft = scrollWidth - clientWidth;
    return;
  } else {
    goodsGallery.scrollLeft = scrollLeft + clientWidth;
    return;
  }
}
