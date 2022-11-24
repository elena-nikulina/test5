const menuOpen = document.querySelector(".mobile-nav");
const menuClose = document.querySelector(".mobile-menu_close");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector("#overlay");

menuOpen.addEventListener("click", function (event) {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  event.stopImmediatePropagation();
});

menuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

window.addEventListener("click", function (event) {
  let menu = event.target.closest(".mobile-menu");

  if (!menu && mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

if (overlay.classList.contains("active")) {
  overlay.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
}

const nav = document.querySelector(".nav");
let offset;
let isSticky = false;
let isHidden = false;
window.addEventListener("scroll", function () {
  let rect = nav.getBoundingClientRect();

  if (rect.y <= 0) {
    if (!isSticky) {
      offset = window.scrollY;
    }

    isSticky = true;
    if (!isHidden && window.scrollY - offset > 200) {
      nav.dataset.state = "up";
      isHidden = true;
    }

    if (isHidden && window.scrollY - offset < 200) {
      nav.dataset.state = "bt";
      isHidden = false;
    }
  } else {
    isSticky = false;
  }
});
