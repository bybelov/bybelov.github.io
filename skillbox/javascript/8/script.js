(function (){
    return window.start = function(){
        'use strict';
        try{
            var userCode = document.getElementById('textarea').value;
            eval(userCode);
        }
        catch(err){
            alert('Возникла ошибка: ' + err);
        }
    }
})();
