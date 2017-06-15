var card = document.querySelector(".payment-card");
var form = card.querySelector("form");
var number1 = card.querySelector("[name=number-1]");
var number2 = card.querySelector("[name=number-2]");
var number3 = card.querySelector("[name=number-3]");
var number4 = card.querySelector("[name=number-4]");
var month = card.querySelector("[name=month]");
var year = card.querySelector("[name=year]");
var introduce = card.querySelector("[name=name]");
var cvv = card.querySelector("[name=cvv]");

// проверка отправки формы на пустые строки
form.addEventListener("submit", function(event) {
  if (!number1.value) {
    event.preventDefault();
    number1.classList.add("data-card--invalid");
  }

  if (!number2.value) {
    event.preventDefault();
    number2.classList.add("data-card--invalid");
  }

  if (!number3.value) {
    event.preventDefault();
    number3.classList.add("data-card--invalid");
  }

  if (!number4.value) {
    event.preventDefault();
    number4.classList.add("data-card--invalid");
  }

  if (!month.value) {
    event.preventDefault();
    month.classList.add("data-card--invalid");
  }

  if (!year.value) {
    event.preventDefault();
    year.classList.add("data-card--invalid");
  }

  if (!introduce.value) {
    event.preventDefault();
    introduce.classList.add("data-card--invalid");
  }

  if (!cvv.value) {
    event.preventDefault();
    cvv.classList.add("data-card--invalid");
  }

});
