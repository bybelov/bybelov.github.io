'strict mode';

(function (){

    function User(user){
        var arr = user.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
        this.regDate = new Date();
    }

    function UserList(User){
        var users = [];
        this.add = function(){
            this.users = users.push(User);
        }
        this.getAllUsers = function(){
            return this.users;
        }
    }

    var button = document.getElementById('button');
    button.onclick = function(){
        registration();
    };

    return window.registration = function(){
        while(true){
            var user = prompt('Введите Имя и Фамилию');
            if(user === null){
                console.log('Выход из программы');

                console.log( addUser.getAllUsers() );
                break;
            }
            var createUser = new User(user);
            console.log(createUser);
            var userList = new UserList(createUser);
            userList.add();
            console.log(userList);

        }
    }

})();
