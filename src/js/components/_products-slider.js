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
