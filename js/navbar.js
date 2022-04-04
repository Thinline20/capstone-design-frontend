/**
 * @prettier
 */

document.querySelectorAll(".top-navbar-main-item").forEach((element) => {
  let dropdownItem = element.children[1];

  element.addEventListener("mouseover", () => {
    if (dropdownItem.classList.contains("hidden")) {
      dropdownItem.classList.remove("hidden");
    }
  });

  element.addEventListener("mouseout", () => {
    if (!dropdownItem.classList.contains("hidden")) {
      dropdownItem.classList.add("hidden");
    }
  });
});
