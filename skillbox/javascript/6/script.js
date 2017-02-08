'use strict';

(function (){

    function User(user){
        var arr = user.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
        this.regDate = new Date();
    }

    function UserList(){
        var users = [];
        this.add = function(user){
            users.push(user);
        }
        this.getAllUsers = function(){
            // Проверяем, не пустой ли массив users пришел
            if(users.length > 0){
                var div = document.getElementById('user_list');
                var ol = document.createElement('ol');
                div.appendChild(ol);
                // в цикле перебираю все объекты в массиве users
                for (var i = 0; i < users.length; i++){

                    var li = document.createElement('li');
                    li.innerHTML = users[i].firstName + ' ' + users[i].lastName + ' - ' + users[i].regDate;
                    ol.appendChild(li);
                    //console.log( users[i].firstName + ' ' + users[i].lastName + ' ' + users[i].regDate);
                }
            }
        }
    }

    var button = document.getElementById('button');
    button.onclick = function(){
        registration();
    };

    return window.registration = function(){
        var userList = new UserList();
        while(true){
            var user = prompt('Введите Имя и Фамилию');
            // Если нажали ESQ
            if(user === null){
                // Выводим список пользователей
                userList.getAllUsers();
                return;
            }
            // Если поле не пустое, то заводим нового пользователя
            else if (user != ''){
                var user = new User(user);
                userList.add(user);
            }
        }
    }

})();
