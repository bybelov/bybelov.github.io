// Функция для получения текущего месяца из текущей даты
function getMonth(currentDate){
    // Создаем массив с названиями месяцев на кирилице
    var arrMonth = [
        'Декабря',
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября'
    ];
    return arrMonth[currentDate.getMonth()];
}
// Функция для получения текущего дня недели из текущей даты
function getWeekDay(currentDate){
    // Создаем массив с названиями дней недели на кирилице
    var arrWeekDay = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    return arrWeekDay[currentDate.getDay()];
}
// Функция для получения правильного окончания времени (час, мин, сек) из текущей даты
function getTime(currentDate, type){
    var ending = {
        hours: [
            "час",
            "часа",
            "часов"
        ],
        minutes: [
            "минута",
            "минуты",
            "минут"
        ],
        seconds: [
            "секунда",
            "секунды",
            "секунд"
        ]
    };
    // Производим проверку для определения правильного окончания слов
    switch (currentDate >= 20 ? currentDate % 10 : currentDate ){
        case 1 :
            result = ending[type][0];
            break;
        case 2 :
        case 3 :
        case 4 :
            result = ending[type][1];
            break;
        default :
            result = ending[type][2];
    }
    return result;
}
// Функция получения текущей полной даты и времени
function getDateTime(){
    // получаем значение текущей даты и времени
    var currentDate = new Date();
    var objDate = {
        day: currentDate.getDate(),
        month: getMonth(currentDate),
        year: currentDate.getFullYear() + ' года, ',
        weekDay: getWeekDay(currentDate),
        hours: currentDate.getHours() + ' ' + getTime(currentDate.getHours(), 'hours'),
        minutes: currentDate.getMinutes() + ' ' + getTime(currentDate.getMinutes(), 'minutes'),
        seconds: currentDate.getSeconds() + ' ' + getTime(currentDate.getSeconds(), 'seconds')
    };
    return 'Сегодня ' + objDate.day + ' ' + objDate.month + ' ' + objDate.year + objDate.weekDay + ', ' + objDate.hours + ' ' + objDate.minutes + ' ' + objDate.seconds;
}
// Создаем параграф
var paragraph = document.createElement('p');
setInterval( function(){
// Если var paragraph = document.createElement('p'); вставим внутри setInterval,
// То на странице будут плодится параграфы, отличающиеся на 1 секунду
  // Вставляем в параграф значение даты и времени
	paragraph.innerHTML = getDateTime();
  // Добавляем параграф на страницу внутрь тега body
	document.body.appendChild(paragraph);
}, 1000);
