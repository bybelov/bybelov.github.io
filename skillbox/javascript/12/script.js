(function() {

    'use strict';

        var shot = 0; // Начальный счетчик ударов по воротам
        var goals = 0; // Счетчик голов

        $('.ball').on('click', function () {

            var gatesLength = 96; // Длина футбольный ворот
            var ballSize = 50; // Размер мяча
            var max = 644; // Высота поля
            var min = 0;
            var position = $(this).position(); // Текущее положение мяча
            var random = Math.floor(Math.random() * ( (max - ballSize) - min)) + min; // Случайное значение TOP для мяча

            // Если было показно сообщение "Гооол!", то удаляем его
            if($('.alert').length > 0){
                $('.alert').remove();
            }

            // Возвращает true если забит гол
            var isGoal = function(){
                if(random > (max - gatesLength)/2 && random < ((max + gatesLength)/2 - ballSize)){
                    return true;
                }
                else{
                    return false;
                }
            }

            $(this).animate({
                left: (position.left == 0 ? '100%' : 0),
                top: random,
                'margin-left': (position.left == 0 ? -ballSize : 0) // корректируем положение мяча, чтобы он не вылетал за границы поля
            }, 1500, (isGoal() ? 'easeOutQuart' : 'easeOutBounce') ); // Если гол, то используем easing = easeOutQuart, иначе easeOutBounce

            // Если забит гол, то
            if(isGoal()){
                $('.football').append('<div class="alert">Гооол!</div>');
                goals++; // Увеличиваем счетчик голов
                $('.goals').html('Голов: '+ goals); // Выводим голы на табло
            }

            shot++; // Увеличиваем счетчик ударов по воротам на 1
            $('.shots').html('Ударов: '+ shot); // Выводим кол-во всех ударов на табло

            // Изначально табло скрыто, но после клика удаляем класс .hide и отображаем табло
            if( $('.scoreboard').is('.hide') == true){
                $('.scoreboard').removeClass('hide');
            }

        });
})();
