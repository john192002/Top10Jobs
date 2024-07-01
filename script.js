let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})


window.addEventListener("scroll", () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
})


// prev next btn js
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const slider = document.querySelectorAll(".slider-card");

const count = slider.length;
let sliderNumber = 0;


prevBtn.addEventListener("click", () => {
  sliderNumber--;
  slideCardContent(sliderNumber, count)
})
nextBtn.addEventListener("click", () => {
  sliderNumber++;
  slideCardContent(sliderNumber, count)
})

function slideCardContent(num, count) {
    let slide = num;

    if (slide < 0) {
      slide = 0;
      return
    } 
    if (slide >= count) {
      return
      slide = count;
    }

    slider.forEach((el) => {
      el.style.transform = `translateX(-${100 * slide}%)`;
    })
}

const categoryLidCtrl = document.querySelector(".category-lid-controller");
const categoryLid = document.querySelector(".category-lid");
const category = document.querySelector(".category");

categoryLidCtrl.addEventListener("click", () => {
  const categoryHeight = category.offsetHeight + "px";

  if (categoryLid.offsetHeight === 0) {
    categoryLid.style.height = categoryHeight;
    categoryLidCtrl.style.transform = "rotate(180deg)";
  } else {
    categoryLid.style.height = 0;
    categoryLidCtrl.style.transform = "rotate(0deg)";
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const categoryHeight = category.offsetHeight + "px";
    categoryLid.style.height = categoryHeight;
  } else {
    categoryLid.style.height = 0;
  }
})