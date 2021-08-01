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
