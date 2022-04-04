/**
 * @prettier
 */

let lastScrollTop = window.pageYOffset || document.body.scrollTop;
let searchBox = document.querySelector(".search-form-wrapper");

window.addEventListener("scroll", () => {
  let currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > 90) {
    searchBox.style.marginTop = `max(calc(50vh - 15rem), calc(50vh - 5rem - ${currentScrollTop}px + 90px))`;
  } else {
    searchBox.style.marginTop = "calc(50vh - 5rem)";
  }
});
