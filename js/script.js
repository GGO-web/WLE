const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuItemArrows = document.querySelectorAll(".menu__item-arrow");

function openBurgerMenu() {
   burger.classList.add("active");
   menu.classList.add("is-active");
   document.body.classList.add("hide-scroll");
}

function closeBurgerMenu() {
   burger.classList.remove("active");
   menu.classList.remove("is-active");
   document.body.classList.remove("hide-scroll");
}

burger.addEventListener("click", function () {
   if (menu.classList.contains("is-active")) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }
});

window.addEventListener("orientationchange", () => {
   closeBurgerMenu();
});

window.addEventListener("click", (event) => {
   const clickedElement = event.target;

   if (clickedElement && clickedElement.classList.contains("menu__item-arrow")) {
      const sublistElement = clickedElement.nextElementSibling;
      sublistElement.classList.toggle("is-active");

      if (sublistElement.classList.contains("is-active")) {
         clickedElement.setAttribute("aria-expanded", "true");
         sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";
      } else {
         clickedElement.setAttribute("aria-expanded", "false");
         sublistElement.style.maxHeight = null;
      }
   } else {
      menuItemArrows.forEach(itemArrow => {
         const sublistElement = itemArrow.nextElementSibling;
         sublistElement.classList.remove("is-active");

         if (sublistElement.classList.contains("is-active")) {
            itemArrow.setAttribute("aria-expanded", "true");
            sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";
         } else {
            itemArrow.setAttribute("aria-expanded", "false");
            sublistElement.style.maxHeight = null;
         }
      });
   }
});

menuItemArrows.forEach(itemArrow => {
   itemArrow.addEventListener("click", (event) => {

   });
})


const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach((favoriteButton) => {
   favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle("is-active");
   })
})

const heroSlider = new Swiper(".hero__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   slidesPerView: 1,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   loop: true,
   allowTouchMove: false,
   noSwiping: true,
   wrapperClass: "hero__slider-wrapper",
   slideClass: "hero__slide",
   slideActiveClass: "hero__slide--active",
   slideNextClass: "hero__slide-next",
   slidePrevClass: "hero__slide-prev",
   slideVisibleClass: "hero__slide--visible",

   pagination: {
      el: ".hero__slider-pagination",
      type: "bullets",
      bulletClass: "hero__slider-bullet",
      bulletActiveClass: "hero__slider-bullet--active",
      clickable: true,
      renderBullet: function (index, className) {
         return (
            '<button aria-label="Go to slide ' +
            (index + 1) +
            '" class="' +
            className +
            ' btn-reset"></button>'
         );
      },
   },
});

const productsSliders = document.querySelectorAll(".products__slider");

for (let productsSlider of productsSliders) {
   function initSwiper(slider) {
      let productsSlider;

      let screenWidth = window.innerWidth;
      const breakpoint = 576;

      if (screenWidth < (1 + breakpoint) && !productsSlider) {
         productsSlider = new Swiper(slider, {
            // Optional parameters
            loop: false,
            speed: 500,
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            wrapperClass: "products__slider-wrapper",
            slideClass: "products__slide",
            slideActiveClass: "products__slide--active",
            slideNextClass: "products__slide-next",
            slidePrevClass: "products__slide-prev",
         });
      } else if (screenWidth > breakpoint && productsSlider) {
         productsSlider.destroy();
         productsSlider = undefined;
      }
   }

   //Swiper plugin initialization
   initSwiper(productsSlider);

   //Swiper plugin initialization on window resize
   window.addEventListener("resize", function (productsSlider) {
      initSwiper(productsSlider);
   });
}

"use strict";

const vhCalculate = () => {
   const vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}

vhCalculate();

window.addEventListener("resize", vhCalculate);

const formattedPrice = (price) => {
   return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0");
}

function parsePrices() {
   const prices = document.querySelectorAll(`*[class*="price"]:not([class*="prices"])`);

   prices.forEach(price => {
      price.innerText = formattedPrice(price.innerText);
   });
}
parsePrices();

const lazyLoad = new LazyLoad();
lazyLoad.update();
