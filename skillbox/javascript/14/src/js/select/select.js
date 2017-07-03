import './select.css'; // Импортируем стили select

export default class Select{ // Разрешаем экспорт класса select
  constructor(array){
    this.array = array;
  }
  createIn(wrapper){
    let container = document.querySelector(wrapper); // Контейнер для вставки select
    let arr = this.array;
    // Создаем select
    let select = document.createElement('select');
    // Обходим в цикле массив
    for(let i = 0; i < arr.length; i++){
        // Создаем option
        let option = new Option( arr[i].value, arr[i].value, arr[i].selected, arr[i].selected);
        // Добавляем каждый option в select
        select.appendChild(option);
    }
    // Добавляем select с options в контейнер
    container.appendChild(select);
  }
}
