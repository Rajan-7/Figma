document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const mobileNav = document.querySelector("nav.mobile-nav");
  const mobileIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(
    ".mobile-menu-container .close-icon"
  );
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  if (mobileNav) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
      }
    });
  } else {
    console.error("Element with selector 'nav.mobile-nav' not found.");
  }
  mobileIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
  });
  closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
});
