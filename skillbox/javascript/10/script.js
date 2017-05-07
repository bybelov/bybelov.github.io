(function (){

    var contentArea = document.querySelector('.js-content');
    var buttonBlock = document.querySelector('.js-btn-block');
    var buttonEdit = document.querySelector('.js-btn-edit');
    var buttonSave = document.querySelector('.js-btn-save');
    var buttonCancel = document.querySelector('.js-btn-cancel');
    var selectColor = document.querySelector('.js-color');
    var getHistory = [];

    // Если в локальном хранилище есть запись
    if(localStorage.getItem('textStorage') != null){
        // то создаем селект с историей изменений
        createSelect();
        // слушаем селект
        listenerSelect();
        // Вставляем контент с последними изменения
        getLastChange();
    }

    var changeSelectedText = function(colorValue) {
        // Выполняем, только если передано значение цвета
        if (colorValue){
            var selection = window.getSelection();
            if (selection.rangeCount) {
                // Получаем объект выделенного диапазона
                var range = selection.getRangeAt(0);
                // Создаем новый элемент
                var newTextNode = document.createElement('span');
                // Применям цвет для него
                newTextNode.style.color = colorValue;
                // И вставляем в созданный элемент текст, который был выделен
                newTextNode.appendChild(document.createTextNode(range));
                // удаляем текст выделения
                range.deleteContents();
                // Вставляем на его место тот же текст, но в теге SPAN с выбранным цветом из select
                range.insertNode(newTextNode);
            }
        }
    }

    // Начинаем слушать изменения селекта
    selectColor.addEventListener('change', function(e){
        // Получаем value с HEX кодом цвета
        var colorValue = e.target.value;
        // Если есть выделенный текст
        if(window.getSelection().rangeCount){
            // Вызываем функцию изменения цвета у выделенного текста
            changeSelectedText(colorValue);
        }
        else{
            alert('Текст не выделен. Сначала выделите текст, у которого нужно изменить цвет');
        }
        // Возвращаем select на дефолтное значение
        this.selectedIndex = 0;

    });

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

            // Добавляем в массив getHistory объект со свойствами даты и контента
            getHistory.push({
                date : getDate(),
                content :  contentArea.innerHTML
            });
            // Сохраняем данный массив в локальное хранилище
            localStorage.setItem("textStorage", JSON.stringify(getHistory));
            // Создаем select с историей изменений, с учетом только что отредактированной информацией
            createSelect();
            listenerSelect();
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
            getLastChange();

        }
    });

    // Функция создания select с историей изменений
    function createSelect(){
        // Получаем историю сохранений из локального хранилища
        // Преобразуем строку в массив с объектами
        getHistory = JSON.parse(localStorage.getItem("textStorage"));

        // Если select уже есть на странице, то удаляем его
        if(document.querySelector('.js-select')){
            buttonBlock.removeChild(document.querySelector('.js-select'));
        }
        // Создаем select с датами редактирования текста
        var select = document.createElement('select');
        select.className = 'js-select';
        // Обходим в цикле массив с историей изменений
        // Добавляем в select options со значениеми дат
        for(i = 0; i < getHistory.length; i++){

            var selected;
            // Последнему option добавляем selected
            if(i == (getHistory.length - 1)){
                selected = true;
            }
            // Для отображения даты в привычном формате преобразуем Дату
            var optionDate = new Date( getHistory[i]['date'] );
            // Создаем option
            var option = new Option( optionDate.toLocaleString(), i, selected, selected);
            // Добавляем каждый option в select
            select.appendChild(option);
        }
        // Добавляем select с options в блок .js-btn-block
        buttonBlock.appendChild(select);
    }

    // Функция для слушания за изменениями селекта
    function listenerSelect(){
        var getSelect = document.querySelector('.js-select');
        // начинаем слушать изменения селекта
        getSelect.addEventListener('change', function(e){
            // Получаем и парсим из локального хранилиша историю изменений
            var getHistory = JSON.parse(localStorage.getItem("textStorage"));
            contentArea.innerHTML = getHistory[e.target.value]['content'];

        });
    }

    // Получение контента последнего изменения
    function getLastChange(){
        // Получаем и парсим из локального хранилиша историю изменений
        var getHistory = JSON.parse(localStorage.getItem("textStorage"));
        // Последний элемент в массиве и будет последним сохраненным вариантом изменения контента
        var getLastDateContent = getHistory[ getHistory.length - 1 ]['content'];
        // При нажатии на кнопку Отмена вставляем в контентную область последнюю измененную версию
        contentArea.innerHTML = getLastDateContent;
    }

    // Получить время
    function getDate(){
        return Date.now();
    }

})();
