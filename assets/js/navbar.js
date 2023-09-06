const sections = document.querySelectorAll("section[id]");
const navbarLinks = Array.from(document.querySelectorAll(".navbar a"));
const header = document.querySelector("header");
const logo = document.getElementById("logo");

function throttle(callback) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, 0);
  };
}

function scrollActive() {
  const yOffset = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navbarLink = navbarLinks.find((link) =>
      link.getAttribute("href").includes(sectionId)
    );

    if (yOffset > sectionTop && yOffset <= sectionTop + sectionHeight) {
      navbarLink.classList.add("active");
    } else {
      navbarLink.classList.remove("active");
    }
  });

  if (yOffset > 0) {
    document.querySelectorAll(".navbar a").forEach((el) => {
      el.style.color = "black";
    });
    header.style.backgroundColor = "white";

    logo.style.fill = "black";
    document.querySelectorAll(".hamburger-line").forEach((el) => {
      el.style.backgroundColor = "black";
    });
  } else {
    document.querySelectorAll(".navbar a").forEach((el) => {
      el.style.color = "white";
    });
    header.style.backgroundColor = "transparent";
    logo.style.fill = "white";
    document.querySelectorAll(".hamburger-line").forEach((el) => {
      el.style.backgroundColor = "white";
    });
  }
}

const throttledScrollActive = throttle(scrollActive); // Adjust the delay as needed
window.addEventListener("scroll", throttledScrollActive);
