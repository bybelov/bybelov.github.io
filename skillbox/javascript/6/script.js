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
            var div = document.getElementById('user_list');
            var ol = document.createElement('ol');
            div.appendChild(ol);

            for (var i = 0; i < users.length; i++){
                var li = document.createElement('li');
                li.innerHTML = users[i].firstName + ' ' + users[i].lastName + ' - ' + users[i].regDate  + '\n';
                ol.appendChild(li);
                //console.log( users[i].firstName + ' ' + users[i].lastName + ' ' + users[i].regDate  + '\n' );
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
            if(user === null){
                userList.getAllUsers();
                return;
            }
            var user = new User(user);
            userList.add(user);
        }
    }

})();
