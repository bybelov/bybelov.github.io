
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


var currentDate = new Date();

var objDate = {
    day: currentDate.getDate(),
    month: getMonth(currentDate),
    year: currentDate.getFullYear(),
    weekDay: getWeekDay(currentDate),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
};


// var curDate =
//
//
// Сегодня 6 декабря 2016 года, вторник, 20 часов 6 минут 54 секунды

console.log( objDate );
