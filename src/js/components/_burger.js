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

