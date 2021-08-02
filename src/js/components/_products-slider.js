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
