const hamburger=document.getElementById("hamburger"),hamburgerLines=document.querySelectorAll(".hamburger-line"),navItems=document.querySelectorAll(".nav-items li a");let isMobileMenuOpen=!1;function updateHamburgerAndLogoStyles(e){hamburgerLines.forEach(n=>{n.style.backgroundColor=e})}function closeMobileMenu(){hamburger.classList.remove("hamburger-active"),isMobileMenuOpen=!1}function openMobileMenu(){hamburger.classList.add("hamburger-active"),isMobileMenuOpen=!0}hamburger.addEventListener("click",()=>{isMobileMenuOpen?closeMobileMenu():openMobileMenu(),console.log(isMobileMenuOpen)}),navItems.forEach(e=>{e.addEventListener("click",closeMobileMenu)});