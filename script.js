const menu = document.querySelector(".menu-nav");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const toTop = document.querySelector(".scrolltoTop");
const navLink = document.querySelector(".navlink");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
  overlay.classList.add("overlay-open");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  overlay.classList.remove("overlay-open");
});

navLink.addEventListener("click", () => {
  nav.classList.remove("open-nav");
  overlay.classList.remove("overlay-open");
});

function scrollTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "flex";
    toTop.classList.add(".scrolltoTop");
  } else {
    toTop.style.display = "none";
  }
}

window.onscroll = () => {
  scrollTop();
};

toTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
