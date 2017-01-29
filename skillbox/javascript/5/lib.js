'use strict';

(function (){

    function rand(min,max){
        return Math.floor(Math.random() * (max - 1)) + min;
    }

    var random = rand(1,1000);
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
                            random = rand(1,1000);
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
            counter++;
        }

    }

})()
