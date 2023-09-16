// для слежки
import "./index.html";
import "./index.scss";

const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".header__burger");
burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
  body.classList.toggle("overflowHidden");
});
