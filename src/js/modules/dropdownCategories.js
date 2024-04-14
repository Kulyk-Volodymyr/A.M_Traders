export function dropdownCategories() {
  const title = document.querySelector(".products__categories-title-text");
  const titleArrow = document.querySelector(
    ".products__categories-title-arrow"
  );
  const categoriesList = document.querySelector(
    ".products__categories-wrapper"
  );

  if (title) {
    title.addEventListener("click", () => {
      categoriesList.classList.toggle(
        "products__categories-wrapper-display-none"
      );
      titleArrow.classList.toggle("products__categories-title-arrow-rotate");
    });
  }
}
