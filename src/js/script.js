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
