(function (){
    'use strict';

    function filterByType(){
        var result;
        // Создаем новый массив, который будет копией массиво образного объекта arguments
        var args = Array.prototype.slice.call(arguments);

        // Определяем тип данных по которым будет производиться фильтрация параметров
        var dataType = args[0];

        // Удаляем из массива args тип данных, оставим только параметры
        args.splice(0, 1);

        // Функция которая выдает отфильтрованный массив по указанному типу (string, boolean или number)
        function filterArray(dataType){
            var result = [];
            // Перебираем массив с параметрами, определяя у каждого его тип
            args.forEach(function(item, index , arr){
                if(typeof item == dataType){
                    // Записываем параметры соответствующего типа в массив
                    result.push(item);
                }
            });
            // Выводим в консоль
            console.log(dataType + ': ' + result);
        }

        filterArray(dataType);

    }

    filterByType('number', 10, 20, 'a', 'b', true, -2.34, false, 0, true);

})();
