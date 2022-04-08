/**
 * @prettier
 */

let lastScrollTop = window.pageYOffset || document.body.scrollTop;
let searchBox = document.querySelector(".search-form-wrapper");
let bottomNavbar = document.querySelector(".bottom-navbar");

if (document.documentElement.scrollTop > 150) {
  searchBox.style.transform = "none";
}

window.addEventListener("scroll", () => {
  let currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > 80 || lastScrollTop > 80) {
  }

  if (currentScrollTop > 150 || lastScrollTop > 150) {
    searchBox.style.transform = "translateY(calc(-5vh - 10rem))";
  } else {
    searchBox.style.transform = "none";
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

// let menuTabs = document.querySelectorAll(".menu-input-tab");
// menuTabs.forEach((element) => {
//   element.addEventListener("change", () => {
//     let content = document.querySelector(
//       `#menu-tab-content${element.id.slice(-1)}`
//     );

//     if (content.classList.contains("hidden")) {
//       content.classList.remove("hidden");
//     }

//     for (let i = 1; i <= menuTabs.length; ++i) {
//       if (i != element.id.slice(-1)) {
//         if (!content.classList.contains("hidden")) {
          
//         }
//       }
//     }
//   });
// });

// function setTabDisplay(element) {
//   if (element.getAttribute("checked")) {
//     console.log("checked");
//   }
// }
