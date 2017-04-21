(function (){

    var contentArea = document.querySelector('.js-content');
    var buttonBlock = document.querySelector('.js-btn-block');
    var buttonEdit = document.querySelector('.js-btn-edit');
    var buttonSave = document.querySelector('.js-btn-save');
    var buttonCancel = document.querySelector('.js-btn-cancel');
    var story = [];

    // Если в локальном хранилище есть запись, то загружаем текст из неё на страницу
    if(localStorage.getItem('textStorage') != null){
        var getLastTextFromHistory = JSON.parse(localStorage.getItem("textStorage"));
        contentArea.innerHTML = getLastTextFromHistory;


         var optionArray = [];
         for(i = 0; i <= getLastTextFromHistory.length; i++){
             optionArray[i] = getLastTextFromHistory
         }



         var select = document.createElement('select');
         var option = document.createElement('option')
         buttonBlock.appendChild(select);
         select.appendChild(option);
    }

    // Слушаем события клик на кнопку Редактировать
    buttonEdit.addEventListener('click', function(e){
        e.preventDefault();
        if(!contentArea.hasAttribute('contenteditable')){

            this.setAttribute('disabled','disabled');
            contentArea.setAttribute('contenteditable','');
            buttonCancel.removeAttribute('disabled');
            buttonSave.removeAttribute('disabled');

        }
    });

    // Слушаем события клик на кнопку Сохранить
    buttonSave.addEventListener('click', function(e){
        e.preventDefault();
        if(contentArea.hasAttribute('contenteditable')){

            contentArea.removeAttribute('contenteditable');
            this.setAttribute('disabled','disabled');
            buttonCancel.setAttribute('disabled','disabled');
            buttonEdit.removeAttribute('disabled');

            //contentAreaText = contentArea.innerHTML;
            //localStorage.setItem('textStorage', contentAreaText);


            story.push({
                date : getDate(),
                content :  contentArea.innerHTML
            });

            localStorage.setItem("textStorage", JSON.stringify(story));

            console.log(story);

        }
    });
    // Слушаем события клик на кнопку Отмена
    buttonCancel.addEventListener('click', function(e){
        e.preventDefault();
        if(contentArea.hasAttribute('contenteditable')){
            this.setAttribute('disabled','disabled');
            buttonSave.setAttribute('disabled','disabled');
            buttonEdit.removeAttribute('disabled');
            contentArea.removeAttribute('contenteditable');

            var getLastTextFromHistory = JSON.parse(localStorage.getItem("textStorage"));

            contentArea.innerHTML = localStorage.getItem('getLastTextFromHistory');
        }
    });


    function getDate(){
        return Date.now();
    }


})();
