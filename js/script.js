var swiper = new Swiper(".stake-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var minusBtn = document.getElementById("minus"),
  plusBtn = document.getElementById("plus"),
  numberPlace = document.getElementById("numberPlace"),
  number = 0, /// number value
  min = 1, /// min number
  max = 10; /// max number

minusBtn.onclick = function () {
  if (number > min) {
    number = number - 1; /// Minus 1 of the number
    numberPlace.innerText = number; /// Display the value in place of the number
  }
};
plusBtn.onclick = function () {
  if (number < max) {
    number = number + 1;
    numberPlace.innerText = number; /// Display the value in place of the number
  }
};
