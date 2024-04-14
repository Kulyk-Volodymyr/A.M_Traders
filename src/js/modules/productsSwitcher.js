export function productsSwitcher() {
  const categories = {
    all: "ALL",
    gowns: "SURGICAL GOWNS",
    drapes: "SURGICAL DRAPES & TOWELS",
    kits: "SURGICAL KITS",
  };

  const selectors = document.getElementsByClassName(
    "products__categories-radio"
  );
  const productsListTitle = document.querySelector(".products__list-title");

  const products = document.querySelectorAll("li.product");

  [...selectors].forEach(
    (i) =>
      (i.onclick = function () {
        const selected = document.querySelector(
          "input[type=radio][name=products]:checked"
        );
        switchCategory(selected.value);
      })
  );

  function switchCategory(value) {
    productsListTitle.innerHTML = categories[value];
    if (value === "all") {
      products.forEach((i) => (i.style.display = "block"));
    } else {
      products.forEach((i) =>
        i.dataset.category === value
          ? (i.style.display = "block")
          : (i.style.display = "none")
      );
    }
  }
}
