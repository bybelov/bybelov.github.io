import '../index.html'; // Импортируем html
import '../css/build.css'; // Импортируем базовые стили

/*------------------------------------*\
  #BUTTON
\*------------------------------------*/

import Button from './button/button.js'; // Импортируем кнопку со стилями
const button = new Button('Кнопка');
button.createIn('.container'); // Создаем кнопку внутри контейнера с классом .container
button.counter(1); // Запускаем скрипт подсчета кол-ва кликов по кнопке. Отсчет начинаем с 1.


/*------------------------------------*\
  #SELECT
\*------------------------------------*/

import Select from './select/select.js'; // Импортируем select со стилями
const arrSelectOptions = [
  {
    value: 'Опция 1',
    selected: false
  },
  {
    value: 'Опция 2',
    selected: false
  },
  {
    value: 'Опция 3',
    selected: true
  },
  {
    value: 'Опция 4',
    selected: false
  }
];
const select = new Select(arrSelectOptions);
select.createIn('.js-select'); // Создаем select внутри контейнера с классом .js-select
