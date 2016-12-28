//'use strict';

// 1. Присваимваем переменной случайное число в заданных интервалах.



//console.log(random);

// 2. Запрашиваем у пользователя число.
//var userNumber = prompt('Угадай число, которое я загадал.');

// 3. Вызываем функцию в параметр которой передаем значение числа,
// которое ввел пользователь

findNumber();

// 4. Определяем функцию
function findNumber(random, number){
    var random = function(){
        var max = 1000;
        var min = 0;
        var randomNumber = Math.floor(Math.random() * (max - min)) + min;
        return randomNumber;
    }
    console.log(random());
    var number = prompt('Угадай число, которое я загадал.') || number;
    number = parseInt(number);
    // 5. Обрабатываем получаемое от пользователя число
    if(!number){
        return;
    }
    else if(isNaN(number)){
        alert('Введите число!');
        findNumber(number);
    }
    else if(number == random){
        alert('Правильно!');
        var result = confirm('Хотите начать заново?');
        if(result){

            findNumber(random, number);
        }
        else{
            return;
        }
    }
    else if(number > random){
        alert('Меньше!');
        findNumber(number);
    }
    else if(number < random){
        alert('Больше!');
        findNumber(number);
    }

}
