document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (!menuOpen || !menu) return;
  menuOpen.addEventListener("click", function () {
    menu.classList.add("is-active");
  });
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.closest('.menu-toggle')) {
      menu.classList.remove("is-active");
    }
  });
});