const shopEl = document.querySelector(".shop-el");

shopEl.addEventListener("click", () => {
  onclick = open("practice.html", "_self");
});

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("show");
});
