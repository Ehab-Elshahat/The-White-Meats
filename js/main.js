// NavBar
let navBar = document.querySelector(".navbar");
// Scroll Btn 
let ScrollBtn = document.querySelector(".scrooll-top");

//Add class on navbar and scroll btn if Scrolly > 50
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add("default-primary-color");
    ScrollBtn.classList.add("show")
  } else {
    navBar.classList.remove("default-primary-color");
    ScrollBtn.classList.remove("show")
  }
});

// Handel NavBar Links 
let navBarLinks = document.querySelectorAll(".navbar-nav .nav-link");

navBarLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    for (let i = 0; i < navBarLinks.length; i++) {
      const element = navBarLinks[i];
      element.classList.remove("active")
    }
    e.target.classList.add("active")
    let dataScroll = e.target.getAttribute("data-scroll")
    let sectionId =  dataScroll;
    let sectionPosition = document.getElementById(sectionId).offsetTop
    window.scrollTo(0, sectionPosition - 70 )
  })
});

// Tesimonials Section
let indicator = document.querySelectorAll(".indicator span");
let slide = document.querySelector(".slide-row");

indicator.forEach((item, index) => {
  item.addEventListener("click", () => {
    slide.style.transform = `translatex(${index * -800 + "px"})`;
    indicator.forEach((span) => {
      span.classList.remove("active");
      indicator[index].classList.add("active");
    });
  });
});

// Latest News Section
let heading = document.querySelectorAll(".latest-head h3");
let latestContent = document.querySelectorAll(".latest-content");

heading.forEach((element, index) => {
  element.addEventListener("click", () => {
    heading.forEach((head) => {
      head.classList.remove("active");
    });
    heading[index].classList.add("active");

    latestContent.forEach((box) => {
      box.classList.remove("active");
      latestContent[index].classList.add("active");
    });
  });
});

// Contact Us Section
let inputs = document.querySelectorAll(".input-box .input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    let span = input.nextElementSibling;
    span.style.transform = "translate(-5px, -20px)";
    span.style.fontSize = "12px";
  });
});

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    let span = input.nextElementSibling;

    if (input.value !== "") {
    } else {
      span.style.transform = "translate(5px, -5px)";
      span.style.fontSize = "16px";
    }
  });
});

// Scroll To Top Btn 
ScrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0)
})
