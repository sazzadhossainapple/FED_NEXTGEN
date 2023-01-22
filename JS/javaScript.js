//nav active
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".hover-nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

// image upload
const display = document.querySelector(".employee-profile-img");
const input = document.querySelector("#imgUpload");
let img = document.querySelector("img");

input.addEventListener("change", () => {
  let reader = new FileReader();
  reader.readAsDataURL(input.files[0]);
  reader.addEventListener("load", () => {
    display.innerHTML = `<img src=${reader.result} alt=''/>`;
  });
});
