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
showtabs(1);

tabcontainer.addEventListener("click", (e) => {
  let target = e.target;

  if (target && target.classList.contains("tabheader__item")) {
    tabs.forEach((item, index) => {
      if (target === item) {
        hidetabs();
        showtabs(index);
      }
    });
  }
});

// Timer

const deadline = "2025-10-01";

function getTimeRemaning(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    days,
    hours,
    minutes,
    seconds,
  };
}

// soni

function getZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaning(endtime);

    // soni
    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    // days.innerHTML = t.days;
    // hours.innerHTML = t.hours
    // minutes.innerHTML = t.minutes;
    // seconds.innerHTML = t.seconds;

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock(".timer", deadline);

// Slider

// const slides = document.querySelectorAll(".offer__slide"),
//   prev = document.querySelector(".offer__slider-prev"),
//   next = document.querySelector(".offer__slider-next"),
//   total = document.querySelector("#total"),
//   current = document.querySelector("#current"),
//   slidesWrapper = document.querySelector(".offer__slider-wrapper"),
//   slider = document.querySelector(".offer__slider"),
//   slidesField = document.querySelector(".offer__slider-inner"),
//   width = window.getComputedStyle(slidesWrapper).width;

// let slideIndex = 1;
// let offset = 0;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + "%";
// slidesField.style.display = "flex";
// slidesField.style.transition = "0.5s all linear";

// slidesWrapper.style.overflow = "hidden";

// slides.forEach((slide) => {
//   slide.style.width = width;
// });

// Slider

let slideIndex = 1;
const slides = document.querySelectorAll(".offer__slide"),
  prev = document.querySelector(".offer__slider-prev"),
  next = document.querySelector(".offer__slider-next"),
  total = document.querySelector("#total"),
  current = document.querySelector("#current");

showSlides(slideIndex);

if (slides.length < 10) {
  total.textContent = `0${slides.length}`;
} else {
  total.textContent = slides.length;
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => (item.style.display = "none"));

  slides[slideIndex - 1].style.display = "block"; // Как ваша самостоятельная работа - переписать на использование классов show/hide

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`;
  } else {
    current.textContent = slideIndex;
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

prev.addEventListener("click", function () {
  plusSlides(-1);
});

next.addEventListener("click", function () {
  plusSlides(1);
});
