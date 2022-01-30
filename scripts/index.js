const menuBtn = document.querySelector(".header__menu-btn");
const closeNavBtn = document.querySelector(".nav__close-btn");
const navPopup = document.querySelector(".nav");

const navMenuItems = document.querySelectorAll(".nav__menu-item");

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
