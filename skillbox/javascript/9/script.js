(function (){

    var taskListWrapper = document.querySelector('.task-list__wrapper');
    var taskList = document.querySelector('.task-list');
    var taskListElement = document.querySelector('.task-list li');
    var button = document.querySelector('.btn');
    var inputText = document.querySelector('.task-list__input');

    // создаем блок с ошибкой
    var error = document.createElement('div');
    error.className = 'error';
    error.textContent = 'Введите название задачи.'

    taskList.addEventListener('click', function(e){
        e.target.classList.toggle('is-done');
    });

    function addNewTask(e){
        e.preventDefault();
        if(inputText.value === ''){
            taskListWrapper.appendChild(error);
        }
        else{
            if(document.getElementsByClassName('error').length != 0){
                taskListWrapper.removeChild(error);
            }
            var li = document.createElement('li');
            li.textContent = inputText.value;
            taskList.appendChild(li);
            inputText.value = ''; // Очищаем поле input
        }
    }

    inputText.addEventListener('keydown', function(e){
        if(e.keyCode == 13){
            addNewTask(e);
        }
    });

    button.addEventListener('click', addNewTask);

})();
