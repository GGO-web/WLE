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
      const links = sublistElement.querySelectorAll(".menu-sublist__link");
      sublistElement.classList.toggle("is-active");

      if (sublistElement.classList.contains("is-active")) {
         clickedElement.setAttribute("aria-expanded", "true");
         sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";

         links.forEach(link => link.removeAttribute("tabindex"));
      } else {
         clickedElement.setAttribute("aria-expanded", "false");
         sublistElement.style.maxHeight = null;

         links.forEach(link => link.setAttribute("tabindex", "-1"));
      }
   } else {
      menuItemArrows.forEach(itemArrow => {
         const sublistElement = itemArrow.nextElementSibling;
         const links = sublistElement.querySelectorAll(".menu-sublist__link");
         sublistElement.classList.remove("is-active");

         if (sublistElement.classList.contains("is-active")) {
            itemArrow.setAttribute("aria-expanded", "true");
            sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";

            links.forEach(link => link.removeAttribute("tabindex"));
         } else {
            itemArrow.setAttribute("aria-expanded", "false");
            sublistElement.style.maxHeight = null;

            links.forEach(link => link.setAttribute("tabindex", "-1"));
         }
      });
   }
});

const cartModal = document.querySelector(".cart__modal");
const cartButtonOpen = document.querySelector(".cart__button-open");
const cartButtonClose = document.querySelector(".cart__button-close");
const cart = document.querySelector(".cart");

if (cart) {
   cart.addEventListener("click", function(event) {
      event.stopPropagation();
   });
}

cartButtonOpen.addEventListener("click", () => {
   cartModal.classList.toggle("is-open");
})

cartButtonClose.addEventListener("click", () => {
   cartModal.classList.remove("is-open");
})

window.addEventListener("click", (event) => {
   const clickedElement = event.target;

   if (clickedElement && !clickedElement.classList.toString().match(/cart/g)) {
      cartModal.classList.remove("is-open");
   }
});

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
   autoplay: {
      delay: 5000,
   },
   disableOnInteraction: true,
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

const heroElement = document.querySelector(".hero");

if (heroElement) {
   heroElement.addEventListener("mousemove", function(event) {
      heroSlider.autoplay.stop();

      setTimeout(() => {
         heroSlider.autoplay.start();
      }, 2000);
   })
}

const productsSliders = document.querySelectorAll(".products__slider");

for (let productsSlider of productsSliders) {
   let productSlider;

   function initSwiper(slider) {
      const screenWidth = window.innerWidth;
      const breakpoint = 576;

      if (screenWidth < (1 + breakpoint) && !productSlider) {
         productSlider = new Swiper(slider, {
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
      } else if (screenWidth > breakpoint && slider.classList.contains("swiper-container-initialized")) {
         productSlider.destroy();
         productSlider = undefined;
      }
   }

   //Swiper plugin initialization
   initSwiper(productsSlider);

   //Swiper plugin initialization on window resize
   window.addEventListener("resize", function () {
      initSwiper(productsSlider);
   });
}

const steppers = document.querySelectorAll(".stepper");
if (steppers) {
   steppers.forEach((stepper) => {
      const minusButton = stepper.querySelector(".stepper__down");
      const plusButton = stepper.querySelector(".stepper__up");
      const stepperInput = stepper.querySelector(".stepper__counter");

      minusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper > +stepperInput.min)
            stepperInput.value = String(currStepper - 1);
      });

      plusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper < +stepperInput.max)
            stepperInput.value = String(currStepper + 1);
      });

      stepperInput.addEventListener("change", function () {
         const stepperInputValue = parseInt(stepperInput.value);
         const minValue = stepperInput.min;
         const maxValue = stepperInput.max;

         if (!stepperInputValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue < minValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue > maxValue) {
            stepperInput.value = maxValue;
         }
      });
   });
}

"use strict";

const parseVal = (value) => {
   if (value) {
      return parseInt(value);
   }

   return 0;
}

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight + parseVal(header.style.paddingTop) + parseVal(header.style.paddingBottom);

const vhCalculate = () => {
   const vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}

vhCalculate();
document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

window.addEventListener("resize", () => {
   vhCalculate();
   const headerHeight = header.offsetHeight + parseVal(header.style.paddingTop) + parseVal(header.style.paddingBottom);
   document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
});

const formattedPrice = (price) => {
   return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u00A0");
}

function parsePrices() {
   const prices = document.querySelectorAll(`*[class$="price"]`);

   Array.from(prices).forEach(price => {
      if (price)
         price.innerText = formattedPrice(price.innerText);
   });
}

parsePrices();

const lazyLoad = new LazyLoad();
lazyLoad.update();
