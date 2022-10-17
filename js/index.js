let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");
let nav = document.querySelectorAll(".header .flex .navbar a");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
nav.forEach((item) => {
  item.onclick = () => {
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
  };
});
