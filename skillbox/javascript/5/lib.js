'use strict';

(function (){

    // функция для генерации случайного числа, в заданных интервалах
    function getRandomNumber(min,max){
        return Math.floor(Math.random() * (max - 1)) + min;
    }

    // Генерируем случайное число
    var random = getRandomNumber(1,1000);
    // Устанавливаем начальное значение для подсчета попыток угадывания числа
    var counter = 1;

    return window.start = function (){

        while(true){

            console.log('Попытка №' + counter);

            if(counter <= 10){

                console.log(random);

                var number = prompt('Угадай число, которое я загадал.');
                if(number === null){
                    console.log('Выход из программы');
                    break;
                }
                else if(isNaN(number)){
                    alert('Введите число!');
                }
                else{
                    number = parseInt(number);

                    if(number == random){

                        alert('Правильно!');
                        var  startAgain = confirm('Хотите поиграть ещё раз?');

                        if(!startAgain){
                            alert('Спасибо за игру!');
                            break;
                        }
                        else{
                            // Сбрасываем случаное число, и генерируем новое
                            random = getRandomNumber(1,1000);
                            // Сбрасываем счетчик попыток. Сбрасываем до 0, так как в конце цикла прибавляем 1 к счетчику.
                            counter = 0;
                        }
                    }
                    else if(number > random){
                        alert('Меньше!');
                    }
                    else if(number < random){
                        alert('Больше!');
                    }
                    else{
                        alert('Введите число!');
                    }
                }
            }
            else{
                return alert('Попытки закончились');
            }
            // Увеличиваем счетчик попыток на 1, если число не угадано
            counter++;
        }

    }

})()
