(function (){

    var taskListWrapper = document.querySelector('.task-list__wrapper');
    var taskList = document.querySelector('.task-list');
    var taskListElement = document.querySelector('.task-list li');
    var button = document.querySelector('.btn');
    var inputText = document.querySelector('.task-list__input');

    // создаем пустой блок для сообщений с ошибками
    var error = document.createElement('div');
    // Задачаем класс для блока с ошибками
    error.className = 'error';

    // Слушаем клики по списку и снимаем или добавляем галочку
    taskList.addEventListener('click', function(e){
        e.target.classList.toggle('is-done');
    });

    function addNewTask(e){
        e.preventDefault();
        // Получаем список всех LI с задачами
        var taskListElements = document.querySelectorAll('.task-list li');
        // Если поле с новой задачей не заполнено, то выводить ошибку
        if(inputText.value === ''){
            error.textContent = 'Введите название задачи.';
            taskListWrapper.appendChild(error);
        }
        else{
            // Если при повторном добавлении новой задачи, поле с ошибкой уже было активно, то убираем его
            if(document.getElementsByClassName('error').length != 0){
                taskListWrapper.removeChild(error);
            }
            // Создаем регулярное выражение, Название новой задачи
            var reg = new RegExp(inputText.value);
            var validDublicates = false;
            // Пробегаем по имеющимся задачам в списке (по LI)
            for (var i = 0; i < taskListElements.length; i++){
                // Проверяем на совпадение Новой задачи с уже имеющимися
                if(reg.test(taskListElements[i].textContent)){
                    validDublicates = true;
                }
            }
            // Если совпадения найдены, то выводим ошибку
            if(validDublicates == true){
                error.textContent = 'Такая задача уже была.';
                taskListWrapper.appendChild(error);
            }
            // Если такой задачи не было, то добавляем её в список
            else{
                var li = document.createElement('li');
                li.textContent = inputText.value;
                taskList.appendChild(li);
            }
            // И очищаем поле ввода Новой задачи
            inputText.value = ''; // Очищаем поле input
        }
    }
    // Слушаем нажатие клавиши Enter по полю добавления Новой задачи
    inputText.addEventListener('keydown', function(e){
        if(e.keyCode == 13){
            addNewTask(e);
        }
    });

    // Слушаем клики по кнопки Добавить
    button.addEventListener('click', addNewTask);

})();
