import '../index.html';
import '../css/build.css';

import Button from './button/button.js';

const button = new Button('Кнопка');

button.createIn('.container');
button.counter(1);

// button.addEventListener('click', function(e){
//
// }
