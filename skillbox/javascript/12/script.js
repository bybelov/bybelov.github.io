(function() {

    'use strict';

        $('.ball').on('click', function () {

            if($('.alert').length > 0){
                $('.alert').remove();
            }

            var gatesLength = 90; // Длина футбольный ворот
            var ballSize = 50; // Размер мяча
            var max = 644; // Высота поля
            var min = 0; //
            var position = $(this).position(); // Текущее положение мяча
            var random = Math.floor(Math.random() * ( (max - ballSize) - min)) + min; // Случайное значение TOP для мяча

            $(this).animate({
                left: (position.left == 0 ? '100%' : 0),
                top: random,
                'margin-left': (position.left == 0 ? -ballSize : 0)
            }, 300);

            if(random > ((max - gatesLength)/2) && random < ((max + gatesLength)/2 - ballSize)){
                $('.football').append('<div class="alert">Гооол!</div>');
            }

        });
})();
