// переменные
let body = document.querySelector('body');
let sliderBrown = document.querySelector('.slider-brown');
let sliderGray = document.querySelector('.slider-gray');
let sliderGreen = document.querySelector('.slider-green');
let bestPairs = document.querySelector('.best-pairs-header');
let feedbackButton = document.querySelector('.feedback-button');
let modalCloseButton = document.querySelector('.modal-close');
let modalWindow = document.querySelector('.modal-feedback');
let feedbackForm = modalWindow.querySelector('.feedback-form');
let feedbackName = modalWindow.querySelector('.feedback-name');
let feedbackEmail = modalWindow.querySelector('.feedback-email');
let feedbackMessage = modalWindow.querySelector('.feedback-message');


// модальное окно
feedbackButton.onclick = function() {
  modalWindow.classList.add('modal-feedback-active');
  body.classList.add('modal-bg');
}
modalCloseButton.onclick = function() {
  modalWindow.classList.remove('modal-feedback-active');
  body.classList.remove('modal-bg');
  modalWindow.classList.remove('modal-error');
}

// работа слайдера
sliderBrown.onclick = function() {
  body.classList.remove('body-gray');
  body.classList.remove('body-green');
  body.classList.add('body-brown');
  sliderGray.classList.remove('slider-active');
  sliderGreen.classList.remove('slider-active');
  sliderBrown.classList.add('slider-active');
  bestPairs.textContent = 'Пломбир с помадкой и клубничный щербет';
};

sliderGray.onclick = function() {
  body.classList.remove('body-brown');
  body.classList.remove('body-green');
  body.classList.add('body-gray');
  sliderGreen.classList.remove('slider-active');
  sliderBrown.classList.remove('slider-active');
  sliderGray.classList.add('slider-active');
  bestPairs.textContent = 'Шоколадный пломбир и лимонный сорбет';
};

sliderGreen.onclick = function() {
  body.classList.remove('body-brown');
  body.classList.remove('body-gray');
  body.classList.add('body-green');
  sliderBrown.classList.remove('slider-active');
  sliderGray.classList.remove('slider-active');
  sliderGreen.classList.add('slider-active');
  bestPairs.textContent = 'Крем-брюле и пломбир с малиновым джемом';
};

// валидация формы
feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackEmail.value || !feedbackMessage.value) {
    modalWindow.classList.remove('modal-error');
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add('modal-error');
    evt.preventDefault();
  }
});
