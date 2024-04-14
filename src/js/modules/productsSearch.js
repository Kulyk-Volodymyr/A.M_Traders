export function productsSearch() {
  const products = {
    "Angiography Drape": "angiography-drape",
    "Basic Orthopedic Pack": "basic-orthopedic-pack",
    "Cardiovascular Drape Pack": "cardiovascular-drape-pack",
    "Cesarean Section Surgical Pack": "cesarean-section-surgical-pack",
    "Disposable Bed Sheets": "disposable-bed-sheets",
    "Disposable Ophthalmic Drape Pack": "disposable-ophthalmic-drape-pack",
    "Gynae Kit | Delivery Kit": "gynae-kit-delivery-kit",
    "Isolation Surgical Gown": "isolation-surgical-gown",
    "Laparotomy Drape Pack": "laparotomy-drape-pack",
    "Ophthalmic Drape": "ophthalmic-drape",
    "Orthopedic Drape Pack": "orthopedic-drape-pack",
    "Reinforced Surgical Gown": "reinforced-surgical-gown",
    "SMS Surgical Gown": "sms-surgical-gown",
    "Surgical Adhesive Drape Sheet": "surgical-adhesive-drape-sheet",
    "Surgical Adhesive U-Drapes": "surgical-adhesive-u-drapes",
    "Surgical Disposable Towels": "surgical-disposable-towels",
    "TURP Drape": "turp-drape",
    "URS Drape": "urs-drape",
  };

  const productsList = document.getElementById("products-list");

  productsList.innerHTML = Object.keys(products)
    .map((i) => `<option value="${i}">${i}</option>`)
    .join("");

  let input = document.querySelector(".search-field__input");
  const button = document.querySelector(".search-field__button");

  input.oninput = (e) => {
    Object.keys(products).includes(e.target.value)
      ? (button.style.display = "block")
      : (button.style.display = "none");
  };

  button.onclick = () => {
    const selectors = document.getElementsByClassName(
      "products__categories-radio"
    );
    if (selectors.length > 0) {
      [...selectors].forEach((i) => (i.checked = false));
      [...selectors][0].checked = true;

      const products = document.querySelectorAll("li.product");
      products.forEach((i) => (i.style.display = "block"));
    }

    goToProduct();
  };

  function goToProduct() {
    window.location.href = `products.html#${products[input.value]}`;
  }
}
