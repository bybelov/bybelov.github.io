import './button.css';

export default class Button{
  constructor(btnText){
    this.btnText = btnText;
  }
  counter(count){
    let startCounter = count;
    let button = document.querySelector('.btn');
    let buttonText = button.textContent;
    button.addEventListener('click', function(e){
      e.preventDefault();
      button.innerHTML = `${buttonText} <span>${startCounter}</span>`;
      startCounter++;
    });
  }
  createIn(wrapper){
    let container = document.querySelector(wrapper); // Контейнер для вставки кнопки
    let button = document.createElement('button'); // Создаем кнопку ввиде ссылки
    let buttonText = document.createTextNode(this.btnText); // Создаем текстовую ноду для вставки в кнопку
    button.appendChild(buttonText); // Вставляем название кнопки
    button.className = "btn"; // Задаем класс для кнопки
    button.type = "button"; // Задаем атрибут type для кнопки
    container.appendChild(button); // Вставляем созданную кнопку в указанный контейнер 'wrapper'
  }
}
