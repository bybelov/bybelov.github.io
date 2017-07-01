import '../index.html'; // Импортируем html
import '../css/build.css'; // Импортируем базовые стили

import Button from './button/button.js'; // Импортируем кнопку со стилями

const button = new Button('Кнопка');

button.createIn('.container'); // Создаем кнопку внутри контейнера с классом .container
button.counter(1); // Запускаем скрипт подсчета кол-ва кликов по кнопке. Отсчет начинаем с 1.
