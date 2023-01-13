//nav active
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".hover-nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
