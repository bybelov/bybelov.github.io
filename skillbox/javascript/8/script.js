(function (){

    function getUserCode(){

        'use strict';

        var userCode = prompt('Введите JS код, например: alert("Привет")');

        eval(userCode);

    }

    try{

        getUserCode();

    }
    catch(err){

        alert('Возникла ошибка: ' + err);

    }

})();
