//////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

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
      console.log(sectionEl);
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

    if (!ent.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.querySelector("body").classList.remove("sticky");
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
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////
// Mobile Navigation
const btnMenuOpenEl = document.querySelector(".open");
const btnMenuCloseEl = document.querySelector(".close");
const headerEl = document.querySelector(".header");

btnMenuOpenEl.addEventListener("click", (event) => {
  console.log(event);
  headerEl.classList.add("nav-bar-open");
});

btnMenuCloseEl.addEventListener("click", (event) => {
  console.log(event);
  headerEl.classList.remove("nav-bar-open");
});
