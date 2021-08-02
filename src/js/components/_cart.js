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
