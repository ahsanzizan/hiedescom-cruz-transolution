const hamburger = document.getElementById("hamburger");
const hamburgerLines = document.querySelectorAll(".hamburger-line");
const navItems = document.querySelectorAll(".nav-items li a");
let isMobileMenuOpen = false;

function updateHamburgerAndLogoStyles(backgroundColor) {
  hamburgerLines.forEach((line) => {
    line.style.backgroundColor = backgroundColor;
  });
}

function closeMobileMenu() {
  hamburger.classList.remove("hamburger-active");
  isMobileMenuOpen = false;
}

function openMobileMenu() {
  hamburger.classList.add("hamburger-active");
  isMobileMenuOpen = true;
}

hamburger.addEventListener("click", () => {
  if (isMobileMenuOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }

  console.log(isMobileMenuOpen);
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", closeMobileMenu);
});
