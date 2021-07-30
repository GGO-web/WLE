const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach((favoriteButton) => {
   favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle("is-active");
   })
})
