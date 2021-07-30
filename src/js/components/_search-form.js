const searchFormButton = document.querySelector(".search-form__button");
const searchFormClose = document.querySelector(".search-form__close");
const searchFormLabel = document.querySelector(".search-form__label");

searchFormButton.addEventListener("click", () => {
   if (window.innerWidth <= 768) {
      searchFormButton.type = "button";
   } else {
      searchFormButton.type = null;
   }

   searchFormLabel.classList.toggle("is-showed");
});

searchFormClose.addEventListener("click", () => {
   searchFormLabel.classList.remove("is-showed");
});
