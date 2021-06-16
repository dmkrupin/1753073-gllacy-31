// переменные  слайдера
let body = document.querySelector('body');
let slider__brown = document.getElementById('slider__brown');
let slider__gray = document.getElementById('slider__gray');
let slider__green = document.getElementById('slider__green');
let best_pairs = document.querySelector('.best-pairs-header');

// работа слайдера
slider__brown.onclick = function() {
  body.classList.remove('body__gray');
  body.classList.remove('body__green');
  body.classList.add('body__brown');
  best_pairs.textContent = 'Пломбир с помадкой и клубничный щербет';
};

slider__gray.onclick = function() {
  body.classList.remove('body__brown');
  body.classList.remove('body__green');
  body.classList.add('body__gray');
  best_pairs.textContent = 'Шоколадный пломбир и лимонный сорбет';
};

slider__green.onclick = function() {
  body.classList.remove('body__brown');
  body.classList.remove('body__gray');
  body.classList.add('body__green');
  best_pairs.textContent = 'Крем-брюле и пломбир с малиновым джемом';
};


