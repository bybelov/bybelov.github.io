'use strict';

(function (){

    function User(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
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
                    li.innerHTML = users[i].firstName + '1 ' + users[i].lastName + '2 - ' + users[i].regDate;
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
            // Если нажали ESC
            if(user === null){
                // Выводим список пользователей
                userList.getAllUsers();
                return;
            }
            // Если поле не пустое
            else if (user != ''){

				// Разбиваем полученную строку на массив
				var arr = user.split(' ');
				
				// Если в массиве больше трех элементов (трех слов)
				if(arr.length > 3){
					alert('Введите только Имя и Фамилию, через пробел')
				}
				else{
					// Проверяем на принадлежность к числу Имени и Фамилии
					if(isNaN(arr[0]) && isNaN(arr[1])){
						var user = new User(arr[0],arr[1]);
						userList.add(user);
					}
					else{
						alert('Не корректное Имя или Фамилия. Повторите ввод.');
					}
				}
            }
			else{
				alert('Введите корректные данные.')
			}
        }
    }

})();
