/**
 * @prettier
 */

let lastScrollTop = window.pageYOffset || document.body.scrollTop;
let searchBox = document.querySelector(".search-form-wrapper");

window.addEventListener("scroll", () => {
  let currentScrollTop = document.documentElement.scrollTop;
  console.log(currentScrollTop)

  if (currentScrollTop > 100) {
    searchBox.style.marginTop = `max(calc(45vh - 15rem), calc(50vh - 5rem - ${currentScrollTop}px + 90px))`;
  }

  lastScrollTop = currentScrollTop;
});
