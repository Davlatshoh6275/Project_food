let btns = document.querySelectorAll("[data-modal]");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector("[data-close]");

for (let item of btns) {
  item.addEventListener("click", () => {
    modal.classList.add("show", "fade");
    modal.classList.remove("hide");

    document.body.style.overflow = "hidden";
  });
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  modal.classList.remove("show");

  document.body.style.overflow = "";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hide");
    modal.classList.remove("show");

    document.body.style.overflow = "";
  }
});

// Tabs
let tabcontent = document.querySelectorAll(".tabcontent"),
  tabs = document.querySelectorAll(".tabheader__item"),
  tabcontainer = document.querySelector(".tabheader__items");

function hidetabs() {
  tabcontent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function showtabs(i) {
  tabcontent[i].classList.add("show", "fade");
  tabcontent[i].classList.remove("hide");
  tabs[i].classList.add("tabheader__item_active");
}
hidetabs();
showtabs(0);

tabcontainer.addEventListener("click", (e) => {
  let target = e.target;

  console.log(target);

  if (target && target.classList.contains("tabheader__item")) {
    tabs.forEach((item, index) => {
      if (item === target) {
        hidetabs();
        showtabs(index);
      }
    });
  }
});

const slides = document.querySelectorAll(".offer__slide");
const next = document.querySelector(".offer__slider-next");
const prev = document.querySelector(".offer__slider-prev");
const current = document.querySelector("#current");
const total = document.querySelector("#total");

let slideIndex = 1;

showSlide(1);

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let item of slides) {
    item.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  if (n < 9) {
    total.innerHTML = `0${slides.length}`;
    current.innerHTML = `0${slideIndex}`;
  } else {
    total.innerHTML = slides.length;
    current.innerHTML = slideIndex;
  }
}

function plusSlides(n) {
  showSlide((slideIndex += n));
}
next.addEventListener("click", () => {
  plusSlides(1);
});

prev.addEventListener("click", () => {
  plusSlides(-1);
});
