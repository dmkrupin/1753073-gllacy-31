// переменные  слайдера
let body = document.querySelector('body');
let sliderBrown = document.querySelector('.slider-brown');
let sliderGray = document.querySelector('.slider-gray');
let sliderGreen = document.querySelector('.slider-green');
let bestPairs = document.querySelector('.best-pairs-header');
let feedbackButton = document.querySelector('.feedback-button');
let modalCloseButton = document.querySelector('.modal-close');
let modalWindow = document.querySelector('.modal-feedback');


// работа слайдера
sliderBrown.onclick = function() {
  body.classList.remove('body-gray');
  body.classList.remove('body-green');
  body.classList.add('body-brown');
  bestPairs.textContent = 'Пломбир с помадкой и клубничный щербет';
};

sliderGray.onclick = function() {
  body.classList.remove('body-brown');
  body.classList.remove('body-green');
  body.classList.add('body-gray');
  bestPairs.textContent = 'Шоколадный пломбир и лимонный сорбет';
};

sliderGreen.onclick = function() {
  body.classList.remove('body-brown');
  body.classList.remove('body-gray');
  body.classList.add('body-green');
  bestPairs.textContent = 'Крем-брюле и пломбир с малиновым джемом';
};

feedbackButton.onclick = function() {
  modalWindow.classList.add('modal-feedback-active');
}
modalCloseButton.onclick = function() {
  modalWindow.classList.remove('modal-feedback-active');
}
