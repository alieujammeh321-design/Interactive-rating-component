const rateButton1 = document.querySelector(".rate-1");
const rateButton2 = document.querySelector(".rate-2");
const rateButton3 = document.querySelector(".rate-3");
const rateButton4 = document.querySelector(".rate-4");
const rateButton5 = document.querySelector(".rate-5");
const ratingEL = document.querySelector("#rating");
const submitButtonEL = document.querySelector(".submit");
const feedbackContainer = document.querySelector(".rating-feedback-container");
const ratingContainer = document.querySelector(".rating-container");
const rateAgainBtn = document.querySelector(".rate-again")

rateButton1.addEventListener("click", function () {
  ratingEL.textContent = 1;
  rateButton1.classList.toggle("active")
});

rateButton2.addEventListener("click", function () {
  ratingEL.textContent = 2;
  rateButton2.classList.toggle("active")
});

rateButton3.addEventListener("click", function () {
  ratingEL.textContent = 3;
  rateButton3.classList.toggle("active")
});

rateButton4.addEventListener("click", function () {
  ratingEL.textContent = 4;
  rateButton4.classList.toggle("active")
});

rateButton5.addEventListener("click", function () {
  ratingEL.textContent = 5;
  rateButton5.classList.toggle("active")
});

submitButtonEL.addEventListener("click", function () {
  if (ratingEL.textContent == 0) {
    alert("Please select a rating first")
    return
  }
  feedbackContainer.classList.remove("hide");
  ratingContainer.classList.add("hide");
});

rateAgainBtn.addEventListener("click", function ()  {
  window.location.reload()
})
