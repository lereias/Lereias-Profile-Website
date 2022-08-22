//////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //scroll to other links
    //scroll to will not work cause we do not know
    //the exact pixels
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.querySelector("body").classList.remove("sticky");
      document.querySelector(".header").removeAttribute("style");
    }
  },
  {
    // In the viewport
    root: null,
    // If the observed element is threshold is in given
    // value, event occurs
    threshold: 0,
    // from the threshold
    // rem is not working, only px
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////
// Mobile Navigation
const btnMenuOpenEl = document.querySelector(".open");
const btnMenuCloseEl = document.querySelector(".close");
const headerEl = document.querySelector(".header");

btnMenuOpenEl.addEventListener("click", (event) => {
  headerEl.classList.add("nav-bar-open");
});

btnMenuCloseEl.addEventListener("click", (event) => {
  headerEl.classList.remove("nav-bar-open");
});

//////////////////////////////////////////////////////////
// Make header solid then have opaque again after menu enter / out
btnMenuOpenEl.addEventListener("click", (event) => {
  const menuEl = document.querySelector(".nav-bar");
  const header2El = document.querySelector(".sticky .header");

  menuEl.addEventListener("transitionend", (event) => {
    if (event.propertyName == "opacity") {
      console.log(event.propertyName);
      console.log(event.target);
      header2El.setAttribute(
        "style",
        "background-color: rgba(56, 56, 56, 0.9);"
      );
    }
  });
});

btnMenuCloseEl.addEventListener("click", (event) => {
  const menu2El = document.querySelector(".nav-bar");
  const header3El = document.querySelector(".sticky .header");

  menu2El.addEventListener("transitionstart", (event) => {
    if (event.propertyName == "opacity") {
      console.log("start ", event.propertyName);
      console.log("start ", event.target);
      header3El.setAttribute("style", "background-color: #383838;");
    }
  });
});
