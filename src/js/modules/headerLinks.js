export function headerLinks() {
  const activePage = window.location.pathname;
  document.querySelectorAll(".header__list-link").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("header__list-link-active");
    }
  });
}
